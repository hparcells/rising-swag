'use client';

import { useState } from 'react';
import { ActionIcon, Anchor, Badge, Button, Card, Image, Menu, Text, Tooltip } from '@mantine/core';
import { notifications } from '@mantine/notifications';
import { ReportType } from '@prisma/client';
import {
  IconAlertTriangle,
  IconExclamationCircle,
  IconExternalLink,
  IconFlag,
  IconLinkOff,
  IconPhotoOff,
  IconQuestionMark
} from '@tabler/icons-react';
import clsx from 'clsx';

import { createReport } from '@/actions/report';

import { useFilter } from '@/hooks/filter';

import { FullItem, ITag, MERCH_TYPE } from '@/types/item';

import classes from './ItemCard.module.scss';

function ItemCard({ item, fadeExpired = true }: { item: FullItem; fadeExpired?: boolean }) {
  const { filter, updateFilter } = useFilter();

  const [confirmedSpoilers, setConfirmedSpoilers] = useState<boolean>(false);

  function showReportNotification() {
    notifications.show({
      title: 'Report Submitted',
      message: 'Thank you for helping keep the site up to date!',
      color: 'green'
    });
  }

  async function handleReport(type: ReportType) {
    if (type === ReportType.EXPIRED && item.expired) {
      await createReport(item.id, ReportType.NOT_EXPIRED);
      showReportNotification();
      return;
    }
    await createReport(item.id, type);
    showReportNotification();
  }

  return (
    <>
      <Card
        className={clsx(classes.card, item.expired && fadeExpired && classes.expiredRoot)}
        withBorder
      >
        <Card.Section>
          <Image src={item.image} height={200} alt={item.name} />
        </Card.Section>

        <div className={classes.cardBody}>
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

          <div className={classes.descriptionWrapper}>
            <Text size='sm' mt='sm' lineClamp={4}>
              {item.description}
            </Text>
          </div>

          <div className={classes.buttonRow}>
            <Button
              variant='outline'
              color='red'
              fullWidth
              radius='md'
              leftSection={<IconExternalLink size='1rem' />}
              component='a'
              href={item.link}
              target='_blank'
              size='sm'
            >
              Check it out
            </Button>
            <Menu shadow='md' width={200}>
              <Menu.Target>
                <Tooltip label='Report Issue' openDelay={500}>
                  <ActionIcon variant='outline' color='red' radius='md' size='input-sm'>
                    <IconAlertTriangle size='1rem' />
                  </ActionIcon>
                </Tooltip>
              </Menu.Target>
              <Menu.Dropdown>
                <Menu.Label>Report Issue</Menu.Label>
                <Menu.Item
                  leftSection={<IconFlag size={14} />}
                  onClick={() => {
                    handleReport(ReportType.EXPIRED);
                  }}
                >
                  Expired/Not Expired
                </Menu.Item>
                <Menu.Item
                  leftSection={<IconPhotoOff size={14} />}
                  onClick={() => {
                    handleReport(ReportType.MISSING_IMAGE);
                  }}
                >
                  Missing Image
                </Menu.Item>
                <Menu.Item
                  leftSection={<IconLinkOff size={14} />}
                  onClick={() => {
                    handleReport(ReportType.BROKEN_LINK);
                  }}
                >
                  Broken Link
                </Menu.Item>
                <Menu.Item
                  leftSection={<IconQuestionMark size={14} />}
                  onClick={() => {
                    handleReport(ReportType.OTHER);
                  }}
                >
                  Other
                </Menu.Item>
              </Menu.Dropdown>
            </Menu>
          </div>
        </div>

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
