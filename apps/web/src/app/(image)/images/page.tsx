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
    src: 'https://picsum.photos/id/237/800/600',
    alt: 'Random image from Picsum',
  },
  {
    id: 5,
    src: 'https://picsum.photos/id/1025/800/600',
    alt: 'Dog from Picsum',
  },
  {
    id: 6,
    src: 'https://via.placeholder.com/800x600.png?text=Placeholder',
    alt: 'Placeholder image',
  },
] as const;

export default function ImagePage() {
  return (
    <div className='w-full h-min-screen'>
      <h1>Image Page</h1>
      <div className='grid grid-cols-2 gap-4'>
        {images.map((img) => (
          <Image
            key={img.id}
            src={img.src}
            alt={img.alt}
            width={800}
            height={600}
            className='rounded-lg object-cover'
          />
        ))}
      </div>
    </div>
  );
}
