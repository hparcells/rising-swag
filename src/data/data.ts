import bookmarks from './bookmarks';
import books from './books';
import candles from './candles';
import decals from './decals';
import digital from './digital';
import discs from './discs';
import jewelry from './jewelry';
import magnets from './magnets';
import notebooks from './notebooks';
import other from './other';
import patches from './patches';
import phoneCases from './phone-cases';
import pins from './pins';
import prints from './prints';
import redbubble from './redbubble';
import stickers from './stickers';

import clothing from './clothing/clothing';
import hats from './clothing/hats';
import hoodies from './clothing/hoodies';
import jackets from './clothing/jackets';
import kids from './clothing/kids';
import masks from './clothing/masks';
import sweatshirts from './clothing/sweatshirts';
import tanks from './clothing/tanks';

import drinkware from './drinkware/drinkware';
import mugs from './drinkware/mugs';
import waterBottles from './drinkware/water-bottles';

export const ALL_DATA = [
  [...drinkware, ...waterBottles],
  [...clothing, ...jackets, ...kids, ...tanks],
  ...bookmarks,
  ...books,
  ...candles,
  ...decals,
  ...digital,
  ...discs,
  ...hats,
  ...hoodies,
  ...jewelry,
  ...magnets,
  ...masks,
  ...mugs,
  ...notebooks,
  ...other,
  ...patches,
  ...phoneCases,
  ...pins,
  ...prints,
  ...redbubble,
  ...stickers,
  ...sweatshirts
].flat();
