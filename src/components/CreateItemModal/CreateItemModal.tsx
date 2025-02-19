'use client';

import { useEffect } from 'react';
import { Button, Checkbox, Modal, Textarea, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import isUrl from 'is-url';

import { createItem, deleteItem, updateItem } from '@/actions/item';
import { deleteItemReports } from '@/actions/report';

import { FullItem, ItemFormData } from '@/types/item';

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
    },
    validate: {
      name: (value) => {
        if (!value.trim()) {
          return 'Name is required';
        }
        return null;
      },
      image: (value) => {
        if (!value.trim()) {
          return 'Image is required';
        }
        return null;
      },
      tags: (value) => {
        if (!value.trim()) {
          return 'Tags are required';
        }
        return null;
      },
      shopName: (value) => {
        if (!value.trim()) {
          return 'Shop name is required';
        }
        return null;
      },
      shopUrl: (value) => {
        if (!value.trim()) {
          return 'Shop URL is required';
        }
        if (!isUrl(value.trim())) {
          return 'Shop URL is not valid';
        }
        return null;
      },
      description: (value) => {
        if (!value.trim()) {
          return 'Description is required';
        }
        return null;
      },
      link: (value) => {
        if (!value.trim()) {
          return 'Link is required';
        }
        if (!isUrl(value.trim())) {
          return 'Link is not valid';
        }
        return null;
      }
    }
  });

  function handleSubmit(closeReports: boolean) {
    (async () => {
      const validate = form.validate();
      if (validate.hasErrors) {
        return;
      }

      const itemFormData: ItemFormData = {
        name: form.getValues().name.trim(),
        image: form.getValues().image.trim(),
        tags: form.getValues().tags.trim(),
        shopName: form.getValues().shopName.trim(),
        shopUrl: form.getValues().shopUrl.trim(),
        description: form.getValues().description.trim(),
        link: form.getValues().link.trim(),
        expired: form.getValues().expired,
        spoiler: form.getValues().spoiler,
        nsfw: form.getValues().nsfw
      };

      if (mode === 'create') {
        await createItem(itemFormData);
      } else if (mode === 'edit') {
        await updateItem(itemFormData, item?.id || '');

        if (closeReports && item?.id) {
          await deleteItemReports(item.id);
        }
      }
      close();
    })();
  }

  async function handleDelete() {
    await deleteItem(item?.id || '');
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
            <>
              <Button
                onClick={() => {
                  handleSubmit(true);
                }}
                mt='md'
              >
                Submit and Close Reports
              </Button>
              <Button onClick={handleDelete} mt='md' color='red'>
                Delete
              </Button>
            </>
          )}
        </div>
      </form>
    </Modal>
  );
}

export default CreateItemModal;
