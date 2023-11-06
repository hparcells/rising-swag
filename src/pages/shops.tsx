import { Anchor } from '@mantine/core';
import Link from 'next/link';

import Layout from '@/components/Layout';

import { ALL_DATA } from '@/data/data';

import classes from '../components/Content/Content.module.scss';

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
          marginTop: '1em'
        }}
      >
        <Anchor href='/' component={Link} passHref>
          Back
        </Anchor>
        <ul>
          {shops.map((shop) => {
            return (
              <li key={shop.name}>
                <a href={shop.url} target='_blank'>
                  {shop.name}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </Layout>
  );
}

export default Stores;
