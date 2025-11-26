'use client';

import Link from 'next/link';
import { ModeToggle } from './mode-toggle';

const links = [
  { to: '/articles', label: 'Soal 1. Membuat halaman statis ' },
  {
    to: '/',
    label: 'Soal 2. Routing Dinamis',
  },
  {
    to: '/api-products',
    label: 'Soal 3. API Routes',
  },
  {
    to: '/form',
    label: 'Soal 4. Formulir dan Pengelolaan State',
  },
  {
    to: '/images',
    label: 'Soal 5. Image Optimization',
  },
] as const;

export default function Header() {
  return (
    <div className='flex flex-row items-center justify-between px-2 py-1'>
      <nav className='flex flex-col gap-4 text-lg'>
        {links.map((link, idx) => {
          return (
            <Link className='hover:underline' key={idx} href={link.to}>
              {idx + 1}. {link.label}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
