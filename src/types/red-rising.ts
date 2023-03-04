export const BOOKS = [
  'prequels',
  'red-rising',
  'golden-son',
  'morning-star',
  'iron-gold',
  'dark-age',
  'light-bringer',
  'red-god'
] as const;

/**
 * Books of the Red Rising series.
 */
export type IBook = (typeof BOOKS)[number];

export const CHARACTERS = ['darrow', 'sevro', 'mustang'] as const;

/**
 * Characters of the Red Rising series.
 */
export type ICharacter = (typeof CHARACTERS)[number];

export const COLORS = [
  'red',
  'brown',
  'obsidian',
  'pink',
  'gray',
  'blue',
  'yellow',
  'green',
  'violet',
  'orange',
  'silver',
  'white',
  'copper',
  'gold'
] as const;

/**
 * Colors of the Red Rising series.
 */
export type IColor = (typeof COLORS)[number];
