import Image from "next/image";

const photographs = [
  {
    "file": "general-view.jpg",
    "caption": "Общий вид",
    "alt": "Внутренняя техническая лестница — общий вид",
    "width": 1600,
    "height": 718,
    "position": "50% 50%"
  },
  {
    "file": "side-view.jpg",
    "caption": "Боковой ракурс",
    "alt": "Внутренняя техническая лестница — боковой ракурс",
    "width": 718,
    "height": 1600,
    "position": "50% 50%"
  },
  {
    "file": "detail-view.jpg",
    "caption": "Детали конструкции",
    "alt": "Внутренняя техническая лестница — детали конструкции",
    "width": 721,
    "height": 1600,
    "position": "50% 50%"
  }
];

export default function TechnicalStaircase5Project() {
  return (
    <section id="technical-staircase-5" aria-labelledby="technical-staircase-5-title" className="mt-12">
      <h2 id="technical-staircase-5-title" className="text-2xl font-semibold md:text-3xl">Внутренняя техническая лестница</h2>
      <p className="mt-3 max-w-2xl leading-7 text-zinc-600">Металлическая техническая лестница с площадками и ограждениями.</p>
      <div className="mt-6 grid items-start gap-6 md:grid-cols-2">
        {photographs.map(({ file, caption, alt, width, height, position }) => (
          <figure key={file} className="overflow-hidden rounded-2xl border border-black/10 bg-white">
            <a href={`/images/works/technical-staircase-5/${file}`} target="_blank" rel="noopener noreferrer" className="block aspect-[4/3] overflow-hidden transition hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-black" aria-label={`${alt} — открыть фотографию в новой вкладке`}>
              <Image src={`/images/works/technical-staircase-5/${file}`} alt={alt} width={width} height={height} sizes="(max-width: 767px) calc(100vw - 48px), (max-width: 1280px) calc((100vw - 72px) / 2), 604px" className="h-full w-full object-cover" style={{ objectPosition: position }} />
            </a>
            <figcaption className="p-6 font-semibold">{caption}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
