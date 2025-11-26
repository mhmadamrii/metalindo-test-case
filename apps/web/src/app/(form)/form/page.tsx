import { FormInput } from '../_components/form-input';
import { UserList } from '../_components/user-lists';

export default function FormPage() {
  return (
    <div className='p-4 w-full h-min-screen flex flex-col gap-4 mt-5 items-center'>
      <h1 className='text-center font-bold text-3xl mb-8'>
        Form Handling with React useState
      </h1>
      <FormInput />
      <UserList />
    </div>
  );
}
