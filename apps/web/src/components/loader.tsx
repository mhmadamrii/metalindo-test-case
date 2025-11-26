import { Loader2 } from 'lucide-react';

export default function Loader() {
  return (
    <div className='flex h-full items-center w-full justify-center pt-8'>
      <Loader2 className='animate-spin' />
    </div>
  );
}
