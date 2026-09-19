"use client";

import { useRef, useState, type FormEvent } from "react";

import { frames, configurations, consultation } from "../data/products";

type Errors = Partial<Record<"name" | "phone" | "frameType", string>>;

export default function EstimateForm({ callback = false, initialFrame = "consultation", context = "", finishingOptions = false }: { callback?: boolean; initialFrame?: string; context?: string; finishingOptions?: boolean }) {
  const [selectedFrame, setSelectedFrame] = useState(initialFrame);
  const [errors, setErrors] = useState<Errors>({});
  const [message, setMessage] = useState("");
  const [pending, setPending] = useState(false);
  const submitting = useRef(false);
  const nameRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const typeRef = useRef<HTMLSelectElement>(null);
  const fieldClass = "mt-2 block min-h-12 min-w-0 w-full max-w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-base text-black outline-none transition focus:border-black focus:ring-2 focus:ring-black/20 aria-[invalid=true]:border-red-700";

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submitting.current) return;
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const digits = phone.replace(/\D/g, "");
    const nextErrors: Errors = {};
    if (!name) nextErrors.name = "Укажите ваше имя.";
    if (!/^[+\d\s()\-]+$/.test(phone) || digits.length < 10 || digits.length > 15) {
      nextErrors.phone = "Укажите телефон с кодом страны, например +7 911 123-45-67.";
    }
    if (!data.get("frameType")) nextErrors.frameType = "Выберите тип каркаса или консультацию.";
    setErrors(nextErrors);
    setMessage("");
    if (nextErrors.name) nameRef.current?.focus();
    else if (nextErrors.phone) phoneRef.current?.focus();
    else if (nextErrors.frameType) typeRef.current?.focus();
    if (Object.keys(nextErrors).length) return;
    submitting.current = true;
    setPending(true);
    try {
      const response = await fetch("/api/estimate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, frameType: data.get("frameType"), configuration: selectedFrame === "vintovye-lestnicy" ? "consultation" : data.get("configuration") || "consultation", comment: [context, finishingOptions && data.get("completion") ? `Комплектация: ${data.get("completion")}` : "", data.get("comment")].filter(Boolean).join("\n") }),
      });
      const result = await response.json();
      if (!response.ok || result.ok !== true) {
        setMessage(result.error || "Не удалось отправить заявку. Попробуйте позже.");
        return;
      }
      form.reset();
      setSelectedFrame(initialFrame);
      setMessage("Заявка отправлена. Мы свяжемся с вами для уточнения деталей.");
    } catch {
      setMessage("Не удалось подтвердить отправку. Проверьте соединение или позвоните нам.");
    } finally {
      submitting.current = false;
      setPending(false);
    }
  }

  return (
    <form noValidate onSubmit={handleSubmit} onChange={() => setMessage("")} aria-busy={pending} aria-label={callback ? "Заказать обратный звонок" : "Заявка на расчёт стоимости"} className="mt-8 max-w-3xl">
      <p className="text-sm leading-6 text-zinc-600">{callback ? "Оставьте имя и телефон — мы вам перезвоним." : "Имя и телефон обязательны. Если не знаете тип каркаса, выберите консультацию."}</p>
      <fieldset disabled={pending} className="min-w-0 mt-5 grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="estimate-name" className="font-semibold">Ваше имя</label>
          <input ref={nameRef} id="estimate-name" name="name" autoComplete="name" required maxLength={80} placeholder="Как к вам обращаться" className={fieldClass} aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? "estimate-name-error" : undefined} />
          {errors.name && <p id="estimate-name-error" className="mt-2 text-sm text-red-700">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="estimate-phone" className="font-semibold">Телефон</label>
          <input ref={phoneRef} id="estimate-phone" name="phone" type="tel" inputMode="tel" autoComplete="tel" required maxLength={30} placeholder="+7 911 123-45-67" className={fieldClass} aria-invalid={Boolean(errors.phone)} aria-describedby={errors.phone ? "estimate-phone-error" : undefined} />
          {errors.phone && <p id="estimate-phone-error" className="mt-2 text-sm text-red-700">{errors.phone}</p>}
        </div>
        {callback ? <><input type="hidden" name="frameType" value="consultation" /><input type="hidden" name="comment" value="Прошу перезвонить. Заявка на обратный звонок." /></> : <>
        <div className="min-w-0 sm:col-span-2">
          <label htmlFor="estimate-type" className="font-semibold">Тип каркаса <span className="font-normal text-gray-500">(необязательно)</span></label>
          <select ref={typeRef} id="estimate-type" name="frameType" required value={selectedFrame} onChange={event => setSelectedFrame(event.target.value)} className={fieldClass} aria-invalid={Boolean(errors.frameType)} aria-describedby={errors.frameType ? "estimate-type-error" : undefined}>
            {frames.map(frame => <option key={frame.id} value={frame.id}>{frame.title}</option>)}
            <option value="consultation">{consultation}</option>
          </select>
          {errors.frameType && <p id="estimate-type-error" className="mt-2 text-sm text-red-700">{errors.frameType}</p>}
        </div>
        {selectedFrame !== "vintovye-lestnicy" && <>
        <div className="min-w-0 sm:col-span-2">
          <label htmlFor="estimate-configuration" className="font-semibold">Конфигурация <span className="font-normal text-zinc-500">(необязательно)</span></label>
          <select id="estimate-configuration" name="configuration" defaultValue="consultation" className={fieldClass} aria-describedby="configuration-help">
            {configurations.map(item => <option key={item.id} value={item.id}>{item.title}</option>)}
            <option value="consultation">{consultation}</option>
          </select>
          <p id="configuration-help" className="mt-2 text-sm text-zinc-600">Выберите геометрию лестницы или оставьте вариант «{consultation}».</p>
        </div>
        </>}
        {finishingOptions && <div className="min-w-0 sm:col-span-2"><label htmlFor="estimate-completion" className="font-semibold">Комплектация (необязательно)</label><select id="estimate-completion" name="completion" defaultValue="Не знаю / нужна консультация" className={fieldClass}>{["Не знаю / нужна консультация", "Только металлический каркас", "Каркас + деревянные ступени", "Лестница с полной отделкой"].map(option=><option key={option}>{option}</option>)}</select></div>}
        <div className="min-w-0 sm:col-span-2">
          <label htmlFor="estimate-comment" className="font-semibold">Комментарий <span className="font-normal text-zinc-500">(необязательно)</span></label>
          <textarea id="estimate-comment" name="comment" rows={4} maxLength={1800} placeholder="Где находится объект, примерные размеры и ваши пожелания" className={`${fieldClass} resize-y`} />
        </div>
        </>}
      </fieldset>
      <p className="mt-5 text-sm leading-6 text-zinc-600">{callback ? "Нажмите кнопку ниже, чтобы отправить запрос на обратный звонок." : "Оставьте заявку — мы свяжемся с вами, чтобы уточнить размеры и пожелания."}</p>
      <button type="submit" disabled={pending} className="mt-5 min-h-12 w-full rounded-xl bg-black px-7 py-4 font-bold text-white transition hover:bg-zinc-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black sm:w-auto disabled:cursor-wait disabled:opacity-60">{pending ? "Отправляем…" : callback ? "Заказать звонок" : "Отправить заявку"}</button>
      <p role="status" aria-live="polite" className="mt-4 text-sm leading-6 text-zinc-700">
        {message || (Object.keys(errors).length ? "Проверьте отмеченные поля." : "")}
      </p>
    </form>
  );
}
