import Image from "next/image";

const photos = [
  {
    src: "/images/works/sheet-stringers-1/IMG_9466.jpg",
    alt: "Внутренняя лестница на листовых косоурах — общий вид",
  },
  {
    src: "/images/works/sheet-stringers-1/IMG_9472.jpg",
    alt: "Деревянные ступени лестницы на листовых косоурах",
  },
  {
    src: "/images/works/sheet-stringers-1/IMG_9474.jpg",
    alt: "Лестница на листовых косоурах со стеклянным ограждением",
  },
  {
    src: "/images/works/sheet-stringers-1/IMG_9476.jpg",
    alt: "Верхняя площадка лестницы со стеклянным ограждением",
  },
];

export default function SheetStringersProject() {
  return (
    <section id="sheet-stringers-1" className="mt-12">
      <h2 className="text-2xl font-semibold">
        Внутренняя лестница на листовых косоурах
      </h2>

      <p className="mt-3 text-zinc-600">
        Внутренняя металлическая лестница на косоурах из листового металла
        с деревянными ступенями и стеклянным ограждением.
      </p>

      <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2">
        {photos.map((photo) => (
          <div
            key={photo.src}
            className="relative aspect-[4/3] overflow-hidden rounded-2xl"
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        ))}
      </div>
    </section>
  );
}