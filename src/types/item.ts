import { IBook, ICharacter, IColor } from './red-rising';

const MERCH_TYPE = ['pin', 'patch', 'shirt', 'other'] as const;

/**
 * Types of merch.
 */
type IMerchType = (typeof MERCH_TYPE)[number];

/**
 * Tags associated with an {@link IItem}.
 */
type ITag = IBook | ICharacter | IColor | IMerchType | 'official';

/**
 * A link to an author/shop.
 * @param name The name of the author/shop.
 * @param url The URL of the author/shop.
 */
interface IAuthor {
  name: string;
  url: string;
}

/**
 * Link of an {@link IItem}. Provide more than once in case there are region specific shops or items.
 * @param url The URL of the shop.
 * @param text The text to display the link as.
 * @param note A note to display near the link.
 */
interface ILink {
  name: string;
  url: string;
  note?: string;
}

/**
 * A shop item.
 * @param name The name of the item.
 * @param tags Tags associated with the item.
 * @param author The author of the item.
 * @param description The description of the item.
 * @param image The image of the item.
 * @param link A collection of different links to the item.
 */
export interface IItem {
  image: string;
  name: string;
  tags: ITag[];
  author: IAuthor;
  description: string;
  links: ILink[];
}
