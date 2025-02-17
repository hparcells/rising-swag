'use client';

import { useState } from 'react';
import { Button, Input, Text } from '@mantine/core';
import { notifications } from '@mantine/notifications';
import isUrl from 'is-url';

import { createRequest } from '@/actions/request';

import classes from './RequestSection.module.scss';

function RequestSection() {
  const [url, setUrl] = useState('');

  async function handleSubmit() {
    if (!isUrl(url)) {
      return;
    }

    await createRequest(url);

    setUrl('');

    notifications.show({
      title: 'Request Submitted',
      message: 'Thank you for helping keep the site up to date!',
      color: 'green'
    });
  }

  return (
    <div className={classes.root}>
      <Text className={classes.big} mb='sm'>
        Request an Item
      </Text>
      <Text mb='md'>
        Request an item to be added. Entries will be looked at on a case-by-case basis.
      </Text>
      <Input
        placeholder='https://www.etsy.com/listing/1234567890'
        maw={400}
        w='100%'
        mb='sm'
        value={url}
        onChange={(event) => {
          return setUrl(event.currentTarget.value);
        }}
      />
      <Button color='red' onClick={handleSubmit}>
        Submit
      </Button>
    </div>
  );
}

export default RequestSection;
