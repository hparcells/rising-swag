import { Anchor, Badge, Button, Card, Chip, Group, Image, Text } from '@mantine/core';

import { IItem } from '@/types/item';
import { IconExternalLink } from '@tabler/icons-react';

import { useFilter } from '@/hooks/filter';

import classes from './ItemCard.module.scss';

function ItemCard({ item }: { item: IItem }) {
  const { filter, updateFilter } = useFilter();

  return (
    <Card className={classes.root} withBorder>
      <Card.Section>
        <Image src={item.image} height={200} alt={item.name} />
      </Card.Section>

      <Text weight={500} mt='xs'>
        {item.name}
      </Text>

      <Text size='sm' color='dimmed'>
        <Anchor href={item.shop.url} target='_blank' color='dimmed'>
          {item.shop.name}
        </Anchor>
      </Text>

      <div>
        {item.tags
          .sort((tag) => {
            // Tags that are in the filter are show first in the list.
            if (filter.tags.includes(tag)) {
              return -1;
            }
            return 1;
          })
          .map((clickedTag) => {
            return (
              <Badge
                color='red'
                radius='sm'
                variant={filter.tags.includes(clickedTag) ? 'outline' : 'filled'}
                mr={3}
                onClick={() => {
                  // Add the tag to the filter if it is clicked.
                  updateFilter({
                    tags: filter.tags.includes(clickedTag)
                      ? filter.tags.filter((tag) => {
                          return tag !== clickedTag;
                        })
                      : [...filter.tags, clickedTag]
                  });
                }}
                className={classes.badge}
              >
                {clickedTag}
              </Badge>
            );
          })}
      </div>

      <Text size='sm' mt='sm'>
        {item.description}
      </Text>

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
