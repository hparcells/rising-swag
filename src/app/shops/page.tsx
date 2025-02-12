import { Anchor } from '@mantine/core';
import Link from 'next/link';

import Layout from '@/components/Layout';

import { ALL_DATA } from '@/data/data';

import classes from '@/components/Content/Content.module.scss';

function Stores() {
  const shops = ALL_DATA.map((item) => {
    return item.shop;
  })
    .filter((shop, index, self) => {
      return (
        self.findIndex((s) => {
          return s.name === shop.name;
        }) === index
      );
    })
    .sort((a, b) => {
      return a.name.localeCompare(b.name);
    });

  return (
    <Layout title='All Stores'>
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
                  (
                  {
                    ALL_DATA.filter((item) => {
                      return item.shop.name === shop.name;
                    }).length
                  }
                  )
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
                  (
                  {
                    ALL_DATA.filter((item) => {
                      return item.shop.name === shop.name;
                    }).length
                  }
                  )
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
                  (
                  {
                    ALL_DATA.filter((item) => {
                      return item.shop.name === shop.name;
                    }).length
                  }
                  )
                </li>
              );
            })}
        </ul>
      </div>
    </Layout>
  );
}

export default Stores;
