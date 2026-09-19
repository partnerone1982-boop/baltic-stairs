import Image from "next/image";
import { woodPhotos } from "../data/woodPhotos";

export default function WoodPhotos() {
  return <div className="mt-6 grid gap-4 sm:grid-cols-2">
    {woodPhotos.map(photo => <figure key={photo.src} className="overflow-hidden rounded-2xl border border-black/10 bg-white">
      <a href={photo.src} target="_blank" rel="noopener noreferrer" aria-label={`${photo.alt} — открыть фотографию в новой вкладке`} className="block overflow-hidden transition hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-black">
        <Image src={photo.src} alt={photo.alt} width={photo.width} height={photo.height} sizes="(max-width: 639px) calc(100vw - 48px), (max-width: 1280px) 50vw, 608px" className="h-72 w-full object-contain" />
      </a>
      <figcaption className="p-6 font-semibold">{photo.alt}</figcaption>
    </figure>)}
  </div>;
}
