const links = [
  { name: "MAX", href: "https://max.ru/u/f9LHodD0cOLRTJzzIDEAzgH27g6GGLuBoMqDuprZIUqGCI_HCQ_e4kUKXUw", color: "bg-[linear-gradient(135deg,#1269ff,#8048ed_55%,#10cde3)]", icon: "max" },
  { name: "Telegram", href: "https://t.me/mylestnica", color: "bg-[#229ed9]", icon: "telegram" },
  { name: "WhatsApp", href: "https://wa.me/79119206840", color: "bg-[#25d366]", icon: "whatsapp" },
];

export default function SocialLinks() {
  return (
    <div aria-label="Напишите нам в мессенджере" className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {links.map((link) => (
        <a key={link.name} href={link.href} target="_blank" rel="noopener noreferrer" className="group flex min-w-0 items-center gap-4 rounded-2xl p-3 transition hover:bg-[#f4f0e7] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black">
          <span aria-hidden="true" className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-full shadow-sm ring-2 ring-white transition group-hover:scale-105 ${link.color}`}>
            <svg viewBox="0 0 32 32" className="h-11 w-11" fill="none">
              {link.icon === "telegram" ? (
                <path fill="white" d="M26.8 6.3 22.7 26c-.3 1.4-1.1 1.7-2.2.9l-6.2-4.6-3 2.9c-.3.3-.6.6-1.2.6l.4-6.4L22.2 8.8c.5-.4-.1-.7-.7-.3L7 17.6l-6.2-2c-1.3-.4-1.3-1.3.3-1.9L25.3 4.4c1.1-.4 2.1.3 1.5 1.9Z" />
              ) : link.icon === "whatsapp" ? (
                <>
                  <path stroke="white" strokeWidth="2" d="M27 15.5a11.5 11.5 0 0 1-17.2 10L3 28l2.3-6.8A11.5 11.5 0 1 1 27 15.5Z" />
                  <path fill="white" d="M11 8.8c-.5-.7-1.1-.6-1.6-.4-1.3.6-1.8 2-1.5 3.5.8 4.8 5.3 9.3 10.1 10.2 1.5.3 3-.2 3.7-1.5.3-.5.3-1.1-.3-1.5l-3-1.5c-.5-.2-.8-.1-1.1.3l-1 1.2c-2.3-1-4.1-2.7-5.1-5l1.1-1.1c.4-.4.5-.7.2-1.2L11 8.8Z" />
                </>
              ) : (
                <path fill="white" fillRule="evenodd" d="M16 3C8.5 3 3.5 8.4 3.5 15.5c0 4 .5 8 1.4 12.3l6.1-1.5c1.5.8 3.2 1.2 5 1.2 7.2 0 12.5-5.2 12.5-12S23.2 3 16 3Zm0 6c-3.8 0-6.5 2.8-6.5 6.5 0 2 .3 3.8.7 5.3l2.7-.7c.9.6 1.9.9 3.1.9 3.7 0 6.5-2.8 6.5-6S19.7 9 16 9Z" clipRule="evenodd" />
              )}
            </svg>
          </span>
          <span className="text-lg leading-7 text-[#1f1f1f]"><span className="block text-zinc-600">Пишите нам</span><span className="block font-semibold">в {link.name}</span></span>
        </a>
      ))}
    </div>
  );
}
