import Link from "next/link";
import Image from "next/image";

const photographs = [
  {
    "file": "general-view.jpg",
    "caption": "Общий вид",
    "alt": "Лестница на ломаных косоурах — проект 4, общий вид",
    "width": 1086,
    "height": 1448,
    "position": "50% 50%"
  },
  {
    "file": "a2298628-f6c6-44fe-83ef-fb97ff81c19e.png",
    "caption": "Ракурс 2",
    "alt": "Лестница на ломаных косоурах — проект 4, ракурс 2",
    "width": 1086,
    "height": 1448,
    "position": "50% 50%"
  },
  {
    "file": "bd1f566a-1d6f-4f33-85a2-731d6212e274.png",
    "caption": "Ракурс 3",
    "alt": "Лестница на ломаных косоурах — проект 4, ракурс 3",
    "width": 1086,
    "height": 1448,
    "position": "50% 50%"
  }
];

export default function BrokenStringers4Project() {
  return (
    <section id="broken-stringers-4" aria-labelledby="broken-stringers-4-title" className="mt-12">
      <h2 id="broken-stringers-4-title" className="text-2xl font-semibold md:text-3xl">Лестница на ломаных косоурах — проект 4</h2>
      <p className="mt-3 max-w-2xl leading-7 text-zinc-600">Внутренняя металлическая лестница на ломаных косоурах из профильной трубы.</p>
      <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm text-[#967020]"><Link href="/indoor" className="underline underline-offset-4">Внутренние лестницы</Link></div>
      <div className="mt-6 grid items-start gap-6 md:grid-cols-2">
        {photographs.map(({ file, caption, alt, width, height, position }) => (
          <figure key={file} className="overflow-hidden rounded-2xl border border-black/10 bg-white">
            <a href={`/images/works/broken-stringers-4/${file}`} target="_blank" rel="noopener noreferrer" className="block aspect-[3/4] overflow-hidden transition hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-black" aria-label={`${alt} — открыть фотографию в новой вкладке`}>
              <Image src={`/images/works/broken-stringers-4/${file}`} alt={alt} width={width} height={height} sizes="(max-width: 767px) calc(100vw - 48px), (max-width: 1280px) calc((100vw - 72px) / 2), 604px" className="h-full w-full object-cover" style={{ objectPosition: position }} />
            </a>
            <figcaption className="p-6 font-semibold">{caption}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
