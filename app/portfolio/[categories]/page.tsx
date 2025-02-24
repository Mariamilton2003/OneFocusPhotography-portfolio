'use client';
import { EventsPhotos, PortraitsPhotos, PreWeddingPhotos, WeddingsPhotos } from "@/constants";
import Image from "next/image";
import { usePathname } from "next/navigation"

export default function Page() {
  const pathName = usePathname()?.split('portfolio/')[1];
  const photosAlbum = pathName === 'Weddings' 
    ? WeddingsPhotos 
    : pathName === 'Portraits' 
    ? PortraitsPhotos 
    : pathName === 'Pre-Weddings' 
    ? PreWeddingPhotos 
    : pathName === 'Events' 
    ? EventsPhotos
    : pathName === 'All'
    ? [...WeddingsPhotos, ...PortraitsPhotos, ...PreWeddingPhotos, ...EventsPhotos]
    : [];
  console.log(pathName);
  console.log(photosAlbum);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 bg-secondary">
      {photosAlbum && photosAlbum.map((image,i) => (
        <div key={i} className="relative aspect-square overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <Image 
            src={image} 
            alt="portfolio image" 
            fill
            className="object-cover hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      ))}
    </div>
  )
}