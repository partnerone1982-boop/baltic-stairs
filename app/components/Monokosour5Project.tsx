import Link from "next/link";
import Image from "next/image";

const photographs = [
  {
    "file": "general-view.jpg",
    "caption": "Общий вид",
    "alt": "Лестница на монокосоуре — проект 5, общий вид",
    "position": "50% 50%",
    "width": 1600,
    "height": 1201
  },
  {
    "file": "0508ace3-5e9f-4ec4-9534-81d05bbc4663.JPG",
    "caption": "Ракурс 2",
    "alt": "Лестница на монокосоуре — проект 5, ракурс 2",
    "position": "50% 50%",
    "width": 1201,
    "height": 1600
  },
  {
    "file": "d54cb402-00b7-492d-903b-eb8890cd3196.JPG",
    "caption": "Ракурс 3",
    "alt": "Лестница на монокосоуре — проект 5, ракурс 3",
    "position": "50% 50%",
    "width": 1201,
    "height": 1600
  },
  {
    "file": "f13c5e60-127b-4c11-b9df-79cec002d1b2.JPG",
    "caption": "Ракурс 4",
    "alt": "Лестница на монокосоуре — проект 5, ракурс 4",
    "position": "50% 50%",
    "width": 1201,
    "height": 1600
  }
];

export default function Monokosour5Project() {
  return (
    <section id="monokosour-5" aria-labelledby="monokosour-5-title" className="mt-12">
      <h2 id="monokosour-5-title" className="text-2xl font-semibold md:text-3xl">Лестница на монокосоуре — проект 5</h2>
      <p className="mt-3 max-w-2xl leading-7 text-zinc-600">Внутренняя металлическая лестница на монокосоуре, изготовленная по индивидуальным размерам объекта.</p>
      <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm text-[#967020]"><Link href="/indoor" className="underline underline-offset-4">Внутренние лестницы</Link><Link href="/monokosour" className="underline underline-offset-4">Монокосоур</Link></div>
      <div className="mt-6 grid items-start gap-6 md:grid-cols-2">
        {photographs.map(({ file, caption, alt, width, height, position }) => (
          <figure key={file} className="overflow-hidden rounded-2xl border border-black/10 bg-white">
            <a href={`/images/works/monokosour-5/${file}`} target="_blank" rel="noopener noreferrer" className="block aspect-[3/4] overflow-hidden transition hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-black" aria-label={`${alt} — открыть фотографию в новой вкладке`}>
              <Image src={`/images/works/monokosour-5/${file}`} alt={alt} width={width} height={height} sizes="(max-width: 767px) calc(100vw - 48px), (max-width: 1280px) calc((100vw - 72px) / 2), 604px" className="h-full w-full object-cover" style={{ objectPosition: position }} />
            </a>
            <figcaption className="p-6 font-semibold">{caption}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
