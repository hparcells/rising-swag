'use client';

import { useState } from 'react';
import { Button, Input, PasswordInput } from '@mantine/core';

import { auth } from '@/actions/auth';

function LogInForm({ redirect }: { redirect: string }) {
  const [password, setPassword] = useState('');

  return (
    <form
      action={() => {
        auth(password, redirect);
      }}
    >
      <Input placeholder='Username' value='hunterparcells' disabled />
      <PasswordInput
        placeholder='Password'
        mt='xs'
        value={password}
        onChange={(event) => {
          return setPassword(event.currentTarget.value);
        }}
      />

      <Button color='red' fullWidth mt='md' type='submit'>
        Log In
      </Button>
    </form>
  );
}

export default LogInForm;
