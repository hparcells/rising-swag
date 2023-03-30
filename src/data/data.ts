import bookmarks from './bookmarks';
import books from './books';
import candles from './candles';
import clothing from './clothing';
import digital from './digital';
import discs from './discs';
import hats from './hats';
import hoodies from './hoodies';
import jewelry from './jewelry';
import magnets from './magnets';
import mugs from './mugs';
import notebooks from './notebooks';
import other from './other';
import patches from './patches';
import phoneCases from './phone-cases';
import pins from './pins';
import prints from './prints';
import stickers from './stickers';
import sweatshirts from './sweatshirts';

import drinkware from './drinkware/drinkware';
import waterBottles from './drinkware/water-bottles';

export const ALL_DATA = [
  ...bookmarks,
  ...books,
  ...candles,
  ...clothing,
  ...digital,
  ...discs,
  ...hats,
  ...hoodies,
  ...jewelry,
  ...magnets,
  ...notebooks,
  ...mugs,
  ...other,
  ...patches,
  ...phoneCases,
  ...pins,
  ...prints,
  ...stickers,
  ...sweatshirts,
  [...drinkware, ...waterBottles]
].flat();
