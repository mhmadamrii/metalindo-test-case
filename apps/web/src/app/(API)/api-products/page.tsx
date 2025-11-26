import { Suspense } from 'react';

async function APIWithData() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SITE_URL}/api/products`,
  ).then((res) => res.json());

  return (
    <div className='px-4 py-2'>
      <pre>{JSON.stringify(res, null, 2)}</pre>
    </div>
  );
}

export default async function ApiDummyPage() {
  return (
    <div className='w-full px-4 py-8'>
      <h1 className='text-center font-bold text-3xl'>
        Api Products (static json)
      </h1>
      <Suspense fallback={<div>Loading...</div>}>
        <APIWithData />
      </Suspense>
    </div>
  );
}
