import Loader from '@/components/loader';
import Link from 'next/link';

import { ArrowLeft } from 'lucide-react';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
  };
}

async function UserPageWithData({ id }: { id: string }) {
  const user: User | undefined = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`,
  ).then((res) => res.json());

  if (!user) {
    notFound();
  }

  return (
    <div className='w-full mx-auto p-6 rounded-lg shadow-md bg-[#1e1e1e]'>
      <h1 className='text-2xl font-semibold mb-4'>{user.name}</h1>
      <div className='space-y-3 rounded-md p-2'>
        <p>
          <span className='font-medium '>Username:</span> {user.username}
        </p>
        <p>
          <span className='font-medium '>Email:</span> {user.email}
        </p>
        <p>
          <span className='font-medium '>Phone:</span> {user.phone}
        </p>
        <p>
          <span className='font-medium '>Website:</span>{' '}
          <a
            href={`https://${user.website}`}
            target='_blank'
            className='text-blue-600 underline'
          >
            {user.website}
          </a>
        </p>

        <div>
          <h2 className='text-lg font-semibold mt-4 mb-1'>Address</h2>
          <div className='text-sm '>
            {user.address.street}, {user.address.suite}
            <br />
            {user.address.city}, {user.address.zipcode}
          </div>
        </div>

        <div>
          <h2 className='text-lg font-semibold mt-4 mb-1'>Company</h2>
          <div className='text-sm '>
            <p className='font-medium'>{user.company.name}</p>
            <p>{user.company.catchPhrase}</p>
            <p className='italic'>{user.company.bs}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default async function UserPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <div className='w-full px-4 py-8 flex items-center flex-col gap-2'>
      <Link className='flex gap-2 cursor-pointer hover:underline' href='/'>
        <ArrowLeft /> Back to Users
      </Link>
      <Suspense fallback={<Loader />}>
        <UserPageWithData id={id} />
      </Suspense>
    </div>
  );
}
