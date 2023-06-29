'use client'

import InputWithLabel from '~/components/molecules/inputWithLabel';
import Form from '~/components/organisms/forms';
import Link from 'next/link';
import { useState } from 'react';

const CreateUser = () => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validateForm = (event: React.FormEvent) => {
    event.preventDefault();

    const errors: { [key: string]: string } = {};


    if (!/^[a-zA-Z]+$/.test(userName)) {
      errors.userName = 'El nombre solo debe contener letras';
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Ingrese un email válido';
    }


    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      errors.password = 'La contraseña debe contener al menos un caracter especial';
    }

    setErrors(errors);

    if (Object.keys(errors).length === 0) {
      // Enviar el formulario
      
    }
  };

  return (
    <section className='p-3 mt-16'>
      <Form onSubmit={validateForm}>
        <InputWithLabel
          id='Usr'
          label='Name'
          placeholder='Write your name here...'
          name='userName'
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          error={errors.userName}
        />
        <InputWithLabel
          id='emal'
          label='Email'
          placeholder='Write your email here...'
          name='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={errors.email}
        />
        <InputWithLabel
          id='password'
          label='Password'
          placeholder='Create your password'
          name='password'
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          error={errors.password}
        />

        <button type='submit'>Create User</button>
      </Form>

      {Object.keys(errors).length > 0 && (
        <ul className='text-red-500'>
          {Object.values(errors).map((error, index) => (
            <li key={index}>{error}</li>
          ))}
        </ul>
      )}


    </section>
  );
};

export default CreateUser;