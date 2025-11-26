import Image from 'next/image';
import { images } from '@/constants';

export default function ImagePage() {
  return (
    <div className='w-full h-min-screen'>
      <h1 className='text-3xl font-bold text-center mb-8'>
        Image Optimized using next/image
      </h1>
      <div className='grid grid-cols-2 gap-4 px-4 py-4'>
        {images.map((img) => (
          <div key={img.id} className='relative aspect-[4/3] w-full'>
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className='rounded-sm object-cover'
              sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            />
          </div>
        ))}
      </div>
    </div>
  );
}
