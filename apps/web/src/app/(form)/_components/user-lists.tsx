'use client';

import { Button } from '@/components/ui/button';
import { Trash } from 'lucide-react';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';

interface User {
  name: string;
  email: string;
}

export function UserList() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const loadUsers = () => {
      const saved = localStorage.getItem('formData');
      if (saved) {
        try {
          const parsed = JSON.parse(saved);
          if (Array.isArray(parsed)) {
            setUsers(parsed);
          }
        } catch (e) {
          console.error('Failed to parse user data', e);
        }
      }
    };

    loadUsers();

    window.addEventListener('user-updated', loadUsers);
    return () => window.removeEventListener('user-updated', loadUsers);
  }, []);

  const handleDelete = () => {
    localStorage.removeItem('formData');
    setUsers([]);
    window.dispatchEvent(new Event('user-updated'));
    toast.success('Data deleted successfully');
  };

  if (users.length === 0) {
    return null;
  }

  return (
    <div className='mt-8 space-y-4 w-full'>
      <div className='w-full flex justify-between items-center'>
        <h2 className='text-2xl font-bold'>Registered Users</h2>
        <Button
          className='cursor-pointer'
          variant='destructive'
          size='icon'
          onClick={handleDelete}
        >
          <Trash />
        </Button>
      </div>
      <div className='rounded-lg border'>
        <div className='overflow-x-auto'>
          <table className='w-full text-left text-sm'>
            <thead className='bg-gray-50 text-gray-500 dark:bg-gray-900 dark:text-gray-400'>
              <tr>
                <th className='px-6 py-3 font-medium'>Name</th>
                <th className='px-6 py-3 font-medium'>Email</th>
              </tr>
            </thead>
            <tbody className='divide-y divide-gray-200 dark:divide-gray-700'>
              {users.map((user, index) => (
                <tr key={index}>
                  <td className='px-6 py-4 font-medium text-gray-900 dark:text-white'>
                    {user.name}
                  </td>
                  <td className='px-6 py-4 text-gray-500 dark:text-gray-400'>
                    {user.email}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
