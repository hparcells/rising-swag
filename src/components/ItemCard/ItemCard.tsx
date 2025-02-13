'use client';

import { useState } from 'react';
import { Anchor, Badge, Button, Card, Image, Text } from '@mantine/core';
import { IconExclamationCircle, IconExternalLink } from '@tabler/icons-react';
import clsx from 'clsx';

import { useFilter } from '@/hooks/filter';

import { FullItem, ITag, MERCH_TYPE } from '@/types/item';

import classes from './ItemCard.module.scss';

function ItemCard({ item, fadeExpired = true }: { item: FullItem; fadeExpired?: boolean }) {
  const { filter, updateFilter } = useFilter();

  const [confirmedSpoilers, setConfirmedSpoilers] = useState<boolean>(false);

  return (
    <>
      <Card
        className={clsx(classes.card, item.expired && fadeExpired && classes.expiredRoot)}
        withBorder
      >
        <Card.Section>
          <Image src={item.image} height={200} alt={item.name} />
        </Card.Section>

        <Text fw={500} mt='xs'>
          {item.expired && fadeExpired && <strong>(EXPIRED) </strong>}
          {item.name}
        </Text>

        <Text size='sm' c='dimmed'>
          <Anchor href={item.shop.url} target='_blank' c='dimmed'>
            {item.shop.name}
          </Anchor>
        </Text>

        <div>
          {item.tags
            .map((tag) => {
              return tag.name;
            })
            .sort((tag) => {
              // Merch type tags are displayed first.
              if ((MERCH_TYPE as any).includes(tag)) {
                return -1;
              }
              return 1;
            })
            .sort((tag) => {
              // Tags that are in the filter are show first in the list.
              if (filter.tags.includes(tag as ITag)) {
                return -1;
              }
              return 1;
            })
            .map((tag) => {
              return (
                <Badge
                  color='red'
                  radius='sm'
                  variant={filter.tags.includes(tag as ITag) ? 'outline' : 'filled'}
                  mr={3}
                  onClick={() => {
                    // Add the tag to the filter if it is clicked.
                    updateFilter({
                      tags: filter.tags.includes(tag as ITag)
                        ? filter.tags.filter((filterTag) => {
                            return filterTag !== tag;
                          })
                        : [...filter.tags, tag as ITag]
                    });
                  }}
                  className={classes.badge}
                  key={tag}
                >
                  {tag}
                </Badge>
              );
            })}
        </div>

        <Text size='sm' mt='sm' lineClamp={4}>
          {item.description}
        </Text>

        <Button
          variant='outline'
          color='red'
          fullWidth
          mt='md'
          radius='md'
          leftSection={<IconExternalLink size='1rem' />}
          component='a'
          href={item.link}
          target='_blank'
        >
          Check it out
        </Button>

        {(item.spoiler || item.nsfw) && !confirmedSpoilers && (
          <div className={classes.spoilerOverlay}>
            <Button
              color='red'
              onClick={() => {
                setConfirmedSpoilers(true);
              }}
              leftSection={<IconExclamationCircle size='1rem' />}
            >
              VIEW {item.spoiler ? 'SPOILERS' : item.nsfw ? 'NSFW' : 'ITEM'}
            </Button>
          </div>
        )}
      </Card>
    </>
  );
}

export default ItemCard;
