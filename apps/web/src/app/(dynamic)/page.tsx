import Link from 'next/link';

import { Suspense } from 'react';

interface User {
  id: number;
  name: string;
  email: string;
  company: {
    name: string;
  };
}

async function UsersWithData() {
  const users: User[] = await fetch(
    'https://jsonplaceholder.typicode.com/users',
  ).then((res) => res.json());

  return users.map((user) => (
    <Link
      key={user.id}
      href={`/users/${user.id}`}
      className='group block overflow-hidden rounded-lg bg-white p-6 shadow-sm transition-all hover:shadow-md dark:bg-[#1e1e1e]'
    >
      <h2 className='mb-2 text-xl font-semibold text-gray-900 group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400'>
        {user.name}
      </h2>
      <p className='mb-1 text-sm text-gray-600 dark:text-gray-300'>
        {user.email}
      </p>
      <p className='text-sm text-gray-500 dark:text-gray-400'>
        {user.company.name}
      </p>
    </Link>
  ));
}

export default async function Home() {
  return (
    <div className='w-full px-4 py-8'>
      <h1 className='mb-8 text-4xl font-bold text-gray-900 dark:text-white text-center'>
        Users
      </h1>
      <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
        <Suspense fallback={<div>Loading...</div>}>
          <UsersWithData />
        </Suspense>
      </div>
    </div>
  );
}
