import Link from 'next/link';
import { Anchor } from '@mantine/core';

import { getShops } from '@/actions/shop';

import classes from '../../components/Content/Content.module.scss';

async function Stores() {
  const shops = await getShops();

  return (
    <div
      className={classes.squeeze}
      style={{
        margin: 'auto',
        padding: '1em'
      }}
    >
      <Anchor href='/' component={Link} passHref>
        Back
      </Anchor>
      <h1>Etsy Shops</h1>
      <ul>
        {shops
          .filter((shop) => {
            return shop.url.includes('etsy.com');
          })
          .map((shop) => {
            return (
              <li key={shop.name}>
                <a href={shop.url} target='_blank'>
                  {shop.name}
                </a>{' '}
              </li>
            );
          })}
      </ul>
      <h1>Redbubble Shops</h1>
      <ul>
        {shops
          .filter((shop) => {
            return shop.url.includes('redbubble.com');
          })
          .map((shop) => {
            return (
              <li key={shop.name}>
                <a href={shop.url} target='_blank'>
                  {shop.name}
                </a>{' '}
              </li>
            );
          })}
      </ul>

      <h1>Other Shops</h1>
      <ul>
        {shops
          .filter((shop) => {
            return !(shop.url.includes('etsy.com') || shop.url.includes('redbubble.com'));
          })
          .map((shop) => {
            return (
              <li key={shop.name}>
                <a href={shop.url} target='_blank'>
                  {shop.name}
                </a>{' '}
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default Stores;
