'use client';

import * as z from 'zod';

import { Input } from '@/components/ui/input';
import { useState } from 'react';

const FormInputSchema = z.object({
  name: z.string().min(2),
  email: z.email(),
  password: z.string().min(8),
});

export function FormInput() {
  const [form, setForm] = useState<z.infer<typeof FormInputSchema>>({
    name: '',
    email: '',
    password: '',
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // await submitForm(form); // call server action
  }

  return (
    <div>
      <form>
        <Input name='name' placeholder='Enter your name' />
      </form>
    </div>
  );
}
