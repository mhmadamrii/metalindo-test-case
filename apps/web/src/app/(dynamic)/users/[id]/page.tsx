import { Suspense } from 'react';

async function UserPageWithData({ id }: { id: string }) {
  await new Promise((res) => setTimeout(res, 5000));
  const data = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`,
  ).then((res) => res.json());

  console.log('data', data);
  return (
    <div>
      <h1>User Page With Data</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
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
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <UserPageWithData id={id} />
      </Suspense>
    </div>
  );
}
