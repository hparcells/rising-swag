import { Anchor, Button, Text } from '@mantine/core';
import { IconBrandGithub } from '@tabler/icons-react';
import Link from 'next/link';

import classes from './SectionAdditional.module.scss';

function SectionAdditional() {
  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
        <Text>
          Made with ❤︎ by{' '}
          <Anchor href='https://hunterparcells.com' target='_blank'>
            Hunter Parcells
          </Anchor>
        </Text>
        <Button
          component='a'
          href='https://github.com/hparcells/rising-swag'
          target='_blank'
          leftIcon={<IconBrandGithub size='0.9rem' />}
          color='red'
        >
          View on GitHub
        </Button>
        <div className={classes.links}>
          <Text size='sm'>
            <Anchor href='https://docs.risingswag.com/docs/api' target='_blank'>
              API Docs
            </Anchor>
          </Text>
          <Text size='sm'>
            <Anchor href='/expired' component={Link} passHref>
              All Expired
            </Anchor>
          </Text>
        </div>
      </div>
    </div>
  );
}

export default SectionAdditional;
