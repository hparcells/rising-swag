import { Prisma } from '@prisma/client';

import { IBook, ICharacter, IColor, IEvent } from './red-rising';

export const MERCH_TYPE = [
  'pin',
  'patch',
  'jewelry',
  'shirt',
  'phone-case',
  'mug',
  'sticker',
  'jacket',
  'hoodie',
  'hat',
  'print',
  'disc',
  'sweatshirt',
  'patch',
  'magnet',
  'water-bottle',
  'bookmark',
  'digital',
  'book',
  'drinkware',
  'notebook',
  'mask',
  'candle',
  'decal',
  'multiproduct',
  'shorts',
  'tank',
  'displate',
  'other'
] as const;

/**
 * Types of merch.
 */
type IMerchType = (typeof MERCH_TYPE)[number];

/**
 * Tags associated with an {@link FullItem}.
 */
export type ITag = IBook | ICharacter | IColor | IMerchType | IEvent | 'official' | 'featured';

/**
 * A link to an author/shop.
 * @param name The name of the author/shop.
 * @param url The URL of the author/shop.
 */
interface OldShop {
  name: string;
  url: string;
}

/**
 * A shop item.
 * @param date The date the item is published to the site.
 * @param image The image of the item.
 * @param name The name of the item.
 * @param tags Tags associated with the item.
 * @param shop The author of the item.
 * @param description The description of the item.
 * @param link A collection of different links to the item.
 * @param expired Whether the item is expired/attainable.
 * @param spoiler Whether the item is a spoiler of any content.
 */
export interface OldItem {
  date: string;
  image: string;
  name: string;
  tags: ITag[];
  shop: OldShop;
  description: string;
  link: string;

  expired?: boolean;
  spoiler?: boolean;
  nsfw?: boolean;
}

export type FullItem = Prisma.ItemGetPayload<{
  include: {
    shop: true;
    tags: true;
  };
}>;

export interface SearchReturn {
  items: FullItem[];
  total: number;
}

export interface ItemFormData {
  name: string;
  image: string;
  tags: string;
  shopName: string;
  shopUrl: string;
  description: string;
  link: string;
  expired: boolean;
  spoiler: boolean;
  nsfw: boolean;
}
