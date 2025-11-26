import Image from 'next/image';

export const images = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
    alt: 'Mountain landscape',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1495567720989-cebdbdd97913',
    alt: 'Forest road',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1482192596544-9eb780fc7f66',
    alt: 'City skyline',
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e',
    alt: 'Nature landscape',
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05',
    alt: 'Foggy mountains',
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c',
    alt: 'Tech workspace',
  },
] as const;

export default function ImagePage() {
  return (
    <div className='w-full h-min-screen'>
      <h1 className='text-3xl font-bold text-center mb-8'>Image Page</h1>
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
