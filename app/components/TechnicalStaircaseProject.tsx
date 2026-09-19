import Image from "next/image";

const photographs = [
  { file: "front-view.webp", caption: "Вид спереди", alt: "Техническая металлическая лестница — вид спереди" },
  { file: "general-view.webp", caption: "Общий вид", alt: "Техническая металлическая лестница — общий вид" },
  { file: "side-view.webp", caption: "Вид сбоку", alt: "Техническая лестница — вид сбоку, каркас и ограждение" },
  { file: "top-view.webp", caption: "Вид сверху", alt: "Техническая металлическая лестница — ступени и ограждение, вид сверху" },
];

export default function TechnicalStaircaseProject() {
  return (
    <section id="technical-staircase" aria-labelledby="technical-staircase-title" className="mt-12">
      <h2 id="technical-staircase-title" className="text-2xl font-semibold md:text-3xl">Техническая лестница</h2>
      <p className="mt-3 max-w-2xl leading-7 text-zinc-600">Металлическая техническая лестница, изготовленная по индивидуальным размерам объекта.</p>
      <div className="mt-6 grid items-start gap-6 md:grid-cols-3">
        {photographs.map(({ file, caption, alt }) => (
          <figure key={file} className="overflow-hidden rounded-2xl border border-black/10 bg-white">
            <a href={`/images/works/technical-staircase/${file}`} target="_blank" rel="noopener noreferrer" className="block transition hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-black" aria-label={`${alt} — открыть фотографию в новой вкладке`}>
              <Image src={`/images/works/technical-staircase/${file}`} alt={alt} width={1200} height={1600} sizes="(max-width: 767px) calc(100vw - 48px), (max-width: 1280px) calc((100vw - 96px) / 3), 395px" className="h-auto w-full" />
            </a>
            <figcaption className="p-6 font-semibold">{caption}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
