import { Anchor, Button, Text } from '@mantine/core';
import { IconBrandGithub } from '@tabler/icons-react';

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
        <Text size='sm'>
          {/* <Anchor href='' target='_blank'> */}
          <Anchor>
            API Docs (<em>Coming Soon!</em>)
          </Anchor>
        </Text>
      </div>
    </div>
  );
}

export default SectionAdditional;
