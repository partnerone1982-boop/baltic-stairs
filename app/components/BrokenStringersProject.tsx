import Image from "next/image";

const photos = [
  {
    src: "/images/works/broken-stringers-1/2025-07-03 12.39.26.jpg",
    alt: "Ломаные косоуры из профильной трубы — общий вид",
  },
  {
    src: "/images/works/broken-stringers-1/2025-07-03 12.40.31 (1).JPG",
    alt: "Лестница на ломаных косоурах — боковой ракурс",
  },
  {
    src: "/images/works/broken-stringers-1/third-cropped.jpg",
    alt: "Лестница на ломаных косоурах — вид снизу",
  },
];

export default function BrokenStringersProject() {
  return (
    <section id="broken-stringers-1" className="mt-12">
      <h2 className="text-2xl font-semibold">
        Лестница на ломаных косоурах
      </h2>

      <p className="mt-3 text-zinc-600">
        Металлическая лестница на ломаных косоурах из профильной трубы,
        изготовленная по индивидуальным размерам объекта.
      </p>

      <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2">
        {photos.map((photo) => (
          <div
            key={photo.src}
            className={`relative overflow-hidden rounded-2xl ${
  photo.src.includes("12.39.26") ||
  photo.src.includes("12.40.31 (1)") ||
  photo.src.includes("third-cropped")
    ? "aspect-[3/4]"
    : "aspect-[4/3]"
}`}


          
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              className={
  photo.src.includes("third-cropped")
    ? "object-contain"
    : "object-cover"
}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        ))}
      </div>
    </section>
  );
}