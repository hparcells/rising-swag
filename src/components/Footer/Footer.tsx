import Link from 'next/link';
import { Anchor, Button, Text } from '@mantine/core';
import { IconBrandGithub } from '@tabler/icons-react';

import classes from './Footer.module.scss';

function Footer() {
  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
        <Text>
          Made with{' '}
          <span
            style={{
              color: '#be1931'
            }}
          >
            ❤︎
          </span>{' '}
          by{' '}
          <Anchor href='https://hunterparcells.com' target='_blank'>
            Hunter Parcells
          </Anchor>
        </Text>
        <Button
          component='a'
          href='https://github.com/hparcells/rising-swag'
          target='_blank'
          leftSection={<IconBrandGithub size='0.9rem' />}
          color='red'
        >
          View on GitHub
        </Button>
        <div className={classes.links}>
          <Text size='sm'>
            <Anchor href='/shops' component={Link} passHref>
              All Shops
            </Anchor>
          </Text>
          <Text size='sm'>
            <Anchor href='https://www.lit-escalates.com/' component={Link} passHref target='_blank'>
              Official Merch
            </Anchor>
          </Text>
          <Text size='sm'>
            <Anchor href='https://www.piercebrown.com/' component={Link} passHref target='_blank'>
              Pierce Brown
            </Anchor>
          </Text>
        </div>
      </div>
    </div>
  );
}

export default Footer;
