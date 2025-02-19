'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

import CreateItemModal from '@/components/CreateItemModal/CreateItemModal';

function QuickAdd() {
  const searchParams = useSearchParams();

  const name = searchParams.get('name');
  const image = searchParams.get('image');
  const shopName = searchParams.get('shopName');
  const shopUrl = searchParams.get('shopUrl');
  const description = searchParams.get('description');
  const link = searchParams.get('link');

  return (
    <CreateItemModal
      isOpen={true}
      mode='create'
      item={{
        id: '',
        date: new Date(),
        name: name || '',
        image: image || '',
        tags: [],
        tagIds: [],
        shop: {
          id: '',
          name: shopName || '',
          url: shopUrl || ''
        },
        shopId: '',
        description: description || '',
        link: link || '',
        expired: false,
        spoiler: false,
        nsfw: false
      }}
      close={() => {
        window.close();
      }}
    />
  );
}

function QuickAddWrapper() {
  return (
    <div
      style={{
        padding: '1em 0.5em'
      }}
    >
      <Suspense>
        <QuickAdd />
      </Suspense>
    </div>
  );
}

export default QuickAddWrapper;
