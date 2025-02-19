'use client';

import { useSearchParams } from 'next/navigation';

function QuickAdd() {
  const searchParams = useSearchParams();

  const name = searchParams.get('name');
  const image = searchParams.get('image');
  const shopName = searchParams.get('shopName');
  const shopUrl = searchParams.get('shopUrl');
  const link = searchParams.get('link');

  return (
    <>
      <p>Name: {name}</p>
      <p>Image: {image}</p>
      <p>Shop Name: {shopName}</p>
      <p>Shop URL: {shopUrl}</p>
      <p>Link: {link}</p>
    </>
  );
}

export default QuickAdd;
