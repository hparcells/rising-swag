import { Anchor, Button, Card, Image, Text } from '@mantine/core';

import { IItem } from '@/types/item';
import { IconExternalLink } from '@tabler/icons-react';

import classes from './ItemCard.module.scss';

function ItemCard({ item }: { item: IItem }) {
  return (
    <Card className={classes.root} withBorder>
      <Card.Section>
        <Image src={item.image} height={200} alt={item.name} />
      </Card.Section>

      <Text weight={500} mt='md'>
        {item.name}
      </Text>

      <Text size='sm' color='dimmed'>
        <Anchor href={item.shop.url} target='_blank' color='dimmed'>
          {item.shop.name}
        </Anchor>
      </Text>

      <Text size='sm'>{item.description}</Text>

      <Button
        variant='outline'
        color='red'
        fullWidth
        mt='md'
        radius='md'
        leftIcon={<IconExternalLink size='1rem' />}
        component='a'
        href={item.link}
        target='_blank'
      >
        Check it out
      </Button>
    </Card>
  );
}

export default ItemCard;
