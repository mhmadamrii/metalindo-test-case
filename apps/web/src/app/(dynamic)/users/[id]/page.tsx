import Link from 'next/link';
import { notFound } from 'next/navigation';

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

async function getUser(id: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  if (!res.ok) {
    if (res.status === 404) return undefined;
    throw new Error('Failed to fetch user');
  }
  return res.json();
}

export default async function UserPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const user: User | undefined = await getUser(id);

  if (!user) {
    notFound();
  }

  return (
    <div className='container mx-auto max-w-3xl px-4 py-8'>
      <Link
        href='/'
        className='mb-6 inline-flex items-center text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white'
      >
        ← Back to Users
      </Link>

      <div className='overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800'>
        <div className='border-b border-gray-100 bg-gray-50 px-6 py-4 dark:border-gray-700 dark:bg-gray-800/50'>
          <h1 className='text-2xl font-bold text-gray-900 dark:text-white'>
            {user.name}
          </h1>
          <p className='text-sm text-gray-500 dark:text-gray-400'>
            @{user.username}
          </p>
        </div>

        <div className='grid gap-6 p-6 md:grid-cols-2'>
          <div>
            <h2 className='mb-3 text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400'>
              Contact Info
            </h2>
            <dl className='space-y-2'>
              <div>
                <dt className='text-xs text-gray-500 dark:text-gray-400'>
                  Email
                </dt>
                <dd className='text-sm font-medium text-gray-900 dark:text-white'>
                  {user.email}
                </dd>
              </div>
              <div>
                <dt className='text-xs text-gray-500 dark:text-gray-400'>
                  Phone
                </dt>
                <dd className='text-sm font-medium text-gray-900 dark:text-white'>
                  {user.phone}
                </dd>
              </div>
              <div>
                <dt className='text-xs text-gray-500 dark:text-gray-400'>
                  Website
                </dt>
                <dd className='text-sm font-medium text-blue-600 dark:text-blue-400'>
                  <a
                    href={`https://${user.website}`}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='hover:underline'
                  >
                    {user.website}
                  </a>
                </dd>
              </div>
            </dl>
          </div>

          <div>
            <h2 className='mb-3 text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400'>
              Company
            </h2>
            <dl className='space-y-2'>
              <div>
                <dt className='text-xs text-gray-500 dark:text-gray-400'>
                  Name
                </dt>
                <dd className='text-sm font-medium text-gray-900 dark:text-white'>
                  {user.company.name}
                </dd>
              </div>
              <div>
                <dt className='text-xs text-gray-500 dark:text-gray-400'>
                  Catch Phrase
                </dt>
                <dd className='text-sm italic text-gray-600 dark:text-gray-300'>
                  "{user.company.catchPhrase}"
                </dd>
              </div>
            </dl>
          </div>

          <div className='md:col-span-2'>
            <h2 className='mb-3 text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400'>
              Address
            </h2>
            <div className='rounded-lg bg-gray-50 p-4 text-sm text-gray-700 dark:bg-gray-900/50 dark:text-gray-300'>
              {user.address.street}, {user.address.suite}
              <br />
              {user.address.city}, {user.address.zipcode}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
