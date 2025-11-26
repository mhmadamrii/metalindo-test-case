import { FormInput } from '../_components/form-input';
import { UserList } from '../_components/user-lists';

export default function FormPage() {
  return (
    <div className='p-4'>
      <FormInput />
      <UserList />
    </div>
  );
}
