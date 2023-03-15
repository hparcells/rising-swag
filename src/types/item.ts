import { IBook, ICharacter, IColor } from './red-rising';

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
  'other'
] as const;

/**
 * Types of merch.
 */
type IMerchType = (typeof MERCH_TYPE)[number];

/**
 * Tags associated with an {@link IItem}.
 */
export type ITag = IBook | ICharacter | IColor | IMerchType | 'official';

/**
 * A link to an author/shop.
 * @param name The name of the author/shop.
 * @param url The URL of the author/shop.
 */
interface IShop {
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
 */
export interface IItem {
  date: string;
  image: string;
  name: string;
  tags: ITag[];
  shop: IShop;
  description: string;
  link: string;

  expired?: boolean;
}
