import { frameLabels, configurationLabels } from "../../data/products";

export const runtime = "nodejs";
// Basic per-process ceiling; a shared limit is needed when scaling to multiple servers.
let windowStart = 0;
let attempts = 0;
const error = (message: string, status: number) => Response.json({ error: message }, { status });

export async function POST(request: Request) {
  const origin = request.headers.get("origin");
  const allowedOrigins = ["https://mylestnica.ru", "https://www.mylestnica.ru"];
  if (!origin || !allowedOrigins.includes(origin)) return error("Недопустимый источник запроса.", 403);
  if (!request.headers.get("content-type")?.includes("application/json")) return error("Неверный формат заявки.", 415);
  let data: Record<string, unknown>;
  try {
    // Read at most 16 KB, including requests without Content-Length.
    const reader = request.body?.getReader();
    if (!reader) return error("Пустая заявка.", 400);
    const chunks: Uint8Array[] = [];
    let size = 0;
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      size += value.byteLength;
      if (size > 16384) { await reader.cancel(); return error("Заявка слишком большая.", 413); }
      chunks.push(value);
    }
    data = JSON.parse(Buffer.concat(chunks).toString("utf8"));
    if (!data || typeof data !== "object" || Array.isArray(data)) return error("Неверный формат заявки.", 400);
  } catch { return error("Неверный формат заявки.", 400); }
  const { name, phone, frameType, configuration = "consultation", comment = "" } = data;
  if (typeof name !== "string" || !name.trim() || name.length > 80 || typeof phone !== "string" || phone.length > 30 || !/^[+\d\s()\-]+$/.test(phone) || !/^\d{10,15}$/.test(phone.replace(/\D/g, "")) || typeof frameType !== "string" || !Object.hasOwn(frameLabels, frameType) || typeof configuration !== "string" || !Object.hasOwn(configurationLabels, configuration) || typeof comment !== "string" || comment.length > 2000) {
    return error("Проверьте имя, телефон, тип каркаса, конфигурацию и длину комментария.", 400);
  }
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) return error("Отправка временно недоступна. Позвоните или напишите нам в мессенджере ниже.", 503);
  const now = Date.now();
  if (now - windowStart > 60000) { windowStart = now; attempts = 0; }
  if (attempts >= 5) return error("Слишком много заявок. Попробуйте через минуту.", 429);
  attempts++;
  try {
    const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      cache: "no-store",
      redirect: "error",
      signal: AbortSignal.timeout(15000),
      body: JSON.stringify({
        chat_id: chatId,
        // Plain text: user input must never be interpreted as HTML or Markdown.
        text: `Новая заявка с сайта\n\nИмя: ${name.trim()}\nТелефон: ${phone.trim()}\nТип каркаса: ${frameLabels[frameType]}\nКонфигурация: ${configurationLabels[configuration]}\n\nКомментарий:\n${comment.trim() || "Не указан"}`,
      }),
    });
    if (!response.ok) {
      console.error("Telegram sendMessage failed:", response.status);
      throw new Error("Delivery failed");
    }
    const result = await response.json();
    if (result?.ok !== true) throw new Error("Delivery not confirmed");
    return Response.json({ ok: true });
  } catch {
    return error("Не удалось подтвердить отправку. Попробуйте позже или свяжитесь с нами по телефону.", 502);
  }
}
