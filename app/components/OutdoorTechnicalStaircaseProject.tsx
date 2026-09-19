import Image from "next/image";

const photographs = [
  {
    "file": "general-view.webp",
    "position": "50% 50%",
    "caption": "Общий вид",
    "alt": "Наружная техническая лестница — общий вид",
    "width": 1599,
    "height": 1200
  },
  {
    "file": "side-view.webp",
    "position": "50% 58%",
    "caption": "Боковой ракурс",
    "alt": "Наружная техническая лестница — боковой ракурс",
    "width": 960,
    "height": 1280
  },
  {
    "file": "steps-view.webp",
    "position": "50% 55%",
    "caption": "Вид ступеней",
    "alt": "Ступени наружной технической лестницы",
    "width": 960,
    "height": 1280
  },
  {
    "file": "front-view.webp",
    "position": "50% 43%",
    "caption": "Фронтальный общий вид",
    "alt": "Наружная техническая лестница с площадкой и ограждениями",
    "width": 1200,
    "height": 1599
  }
];

export default function OutdoorTechnicalStaircaseProject() {
  return (
    <section id="technical-staircase-3" aria-labelledby="technical-staircase-3-title" className="mt-12">
      <h2 id="technical-staircase-3-title" className="text-2xl font-semibold md:text-3xl">Наружная техническая лестница</h2>
      <p className="mt-3 max-w-2xl leading-7 text-zinc-600">Металлическая наружная лестница с площадкой, ограждениями и навесом над входом. Изготовлена по индивидуальным размерам объекта.</p>
      <div className="mt-6 grid items-start gap-6 md:grid-cols-2">
        {photographs.map(({ file, caption, alt, width, height, position }) => (
          <figure key={file} className="overflow-hidden rounded-2xl border border-black/10 bg-white">
            <a href={`/images/works/technical-staircase-3/${file}`} target="_blank" rel="noopener noreferrer" className="block aspect-[4/3] overflow-hidden transition hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-black" aria-label={`${alt} — открыть фотографию в новой вкладке`}>
              <Image src={`/images/works/technical-staircase-3/${file}`} alt={alt} width={width} height={height} sizes="(max-width: 767px) calc(100vw - 48px), (max-width: 1280px) calc((100vw - 72px) / 2), 604px" className="h-full w-full object-cover" style={{ objectPosition: position }} />
            </a>
            <figcaption className="p-6 font-semibold">{caption}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
