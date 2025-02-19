'use client';

import { useEffect } from 'react';
import { Button, Checkbox, Modal, Textarea, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';

import { deleteItemReports } from '@/actions/report';

import { FullItem } from '@/types/item';

function CreateItemModal({
  isOpen,
  mode,
  item,
  close
}: {
  isOpen: boolean;
  mode: 'create' | 'edit';
  item: FullItem | null;
  close: () => void;
}) {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      name: '',
      image: '',
      tags: '',
      shopName: '',
      shopUrl: '',
      description: '',
      link: '',
      expired: false,
      spoiler: false,
      nsfw: false
    }
  });

  async function handleSubmit(closeReports: boolean) {
    form.onSubmit((values) => {
      console.log(values);
    });

    if (closeReports && mode === 'edit' && item?.id) {
      await deleteItemReports(item.id);
    }

    close();
  }

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    form.setValues({
      name: item?.name || '',
      image: item?.image || '',
      tags:
        item?.tags
          .map((tag) => {
            return tag.name;
          })
          .join(',') || '',
      shopName: item?.shop.name || '',
      shopUrl: item?.shop.url || '',
      description: item?.description || '',
      link: item?.link || '',
      expired: item?.expired || false,
      spoiler: item?.spoiler || false,
      nsfw: item?.nsfw || false
    });
  }, [isOpen]);

  return (
    <Modal
      opened={isOpen}
      onClose={close}
      title={`${mode === 'create' ? 'Create' : 'Edit'} Item`}
      transitionProps={{ transition: 'fade', duration: 200 }}
    >
      <form
        onSubmit={() => {
          handleSubmit(false);
        }}
      >
        <TextInput
          withAsterisk
          label='Name'
          placeholder='T-Shirt'
          key={form.key('name')}
          {...form.getInputProps('name')}
        />
        <TextInput
          withAsterisk
          label='Image'
          placeholder='https://...'
          key={form.key('image')}
          {...form.getInputProps('image')}
        />
        <TextInput
          withAsterisk
          label='Tags'
          placeholder='t-shirt,official'
          key={form.key('tags')}
          {...form.getInputProps('tags')}
        />
        <TextInput
          withAsterisk
          label='Shop Name'
          placeholder='Shop Name'
          key={form.key('shopName')}
          {...form.getInputProps('shopName')}
        />
        <TextInput
          withAsterisk
          label='Shop URL'
          placeholder='https://...'
          key={form.key('shopUrl')}
          {...form.getInputProps('shopUrl')}
        />
        <Textarea
          withAsterisk
          label='Description'
          placeholder='Lorem ipsum...'
          key={form.key('description')}
          rows={5}
          {...form.getInputProps('description')}
        />
        <TextInput
          withAsterisk
          label='Link'
          placeholder='https://...'
          key={form.key('link')}
          {...form.getInputProps('link')}
        />

        <Checkbox
          mt='md'
          label='Expired?'
          key={form.key('expired')}
          {...form.getInputProps('expired', { type: 'checkbox' })}
        />
        <Checkbox
          mt='md'
          label='Spoiler?'
          key={form.key('spoiler')}
          {...form.getInputProps('spoiler', { type: 'checkbox' })}
        />
        <Checkbox
          mt='md'
          label='NSFW?'
          key={form.key('nsfw')}
          {...form.getInputProps('nsfw', { type: 'checkbox' })}
        />
        <div
          style={{
            display: 'flex',
            gap: '4px'
          }}
        >
          <Button
            onClick={() => {
              handleSubmit(false);
            }}
            mt='md'
          >
            Submit
          </Button>
          {mode === 'edit' && (
            <Button
              onClick={() => {
                handleSubmit(true);
              }}
              mt='md'
            >
              Submit and Close Reports
            </Button>
          )}
        </div>
      </form>
    </Modal>
  );
}

export default CreateItemModal;
