'use client';

import * as z from 'zod';
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';

const FormInputSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  password: z.string().min(8),
});

type FormData = z.infer<typeof FormInputSchema>;

export function FormInput() {
  const [form, setForm] = useState<FormData>({
    name: '',
    email: '',
    password: '',
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const existingData = localStorage.getItem('formData');
    const users = existingData ? JSON.parse(existingData) : [];
    const newUsers = [...users, form];

    localStorage.setItem('formData', JSON.stringify(newUsers));

    // Dispatch custom event to notify UserList
    window.dispatchEvent(new Event('user-updated'));

    toast.success('Form submitted successfully');
    setForm({ name: '', email: '', password: '' });
  }

  return (
    <div className='space-y-8 w-full max-w-xl'>
      <div className='space-y-4'>
        <form onSubmit={handleSubmit} className='space-y-4'>
          <div className='space-y-2'>
            <label htmlFor='name' className='text-sm font-medium'>
              Name
            </label>
            <Input
              id='name'
              name='name'
              placeholder='Enter your name'
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className='space-y-2'>
            <label htmlFor='email' className='text-sm font-medium'>
              Email
            </label>
            <Input
              id='email'
              name='email'
              type='email'
              placeholder='Enter your email'
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className='space-y-2'>
            <label htmlFor='password' className='text-sm font-medium'>
              Password
            </label>
            <Input
              id='password'
              name='password'
              type='password'
              placeholder='Enter your password'
              value={form.password}
              onChange={handleChange}
              required
              minLength={8}
            />
          </div>
          <Button type='submit' className='cursor-pointer w-full'>
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
}
