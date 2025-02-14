import { redirect } from 'next/navigation';
import { Paper } from '@mantine/core';

import LogInForm from '@/components/LogInForm/LogInForm';

import { getSession } from '@/util/auth';

import classes from './sign-in.module.scss';

interface Props {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

async function SignInPage(props: Props) {
  const searchParams = await props.searchParams;
  const session = await getSession();

  if (session.isAuthenticated) {
    redirect('/');
  }

  return (
    <div className={classes.root}>
      <Paper shadow='sm' p='md' w={300}>
        <LogInForm redirect={searchParams['redirect'] as string} />
      </Paper>
    </div>
  );
}

export default SignInPage;
