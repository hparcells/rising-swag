import { IItem } from '@/types/item';

const data: IItem[] = [
  {
    date: '2023-03-17',
    image: 'https://i.etsystatic.com/10165646/r/il/958081/3246117368/il_794xN.3246117368_lwrs.jpg',
    name: 'Never Bow Patch',
    tags: ['patch'],
    shop: {
      name: 'LiveForMore',
      url: 'https://www.etsy.com/shop/LiveForMore'
    },
    description:
      'This iron on patch is the perfect add on for your jean jacket, hat, backpack, or canvas bag. Fellow Howlers will instantly recognize you as a fellow pack member as soon as they see this patch!',
    link: 'https://www.etsy.com/listing/1062688835/patch-red-rising-patch-howler-patch-iron'
  },
  {
    date: '2023-04-04',
    image: 'https://i.etsystatic.com/24022818/r/il/984736/4590089549/il_794xN.4590089549_pmbg.jpg',
    name: 'Sigil and Wolf Patch',
    tags: ['patch', 'red', 'gold'],
    shop: {
      name: 'ThePurpuraProject',
      url: 'https://www.etsy.com/shop/ThePurpuraProject'
    },
    description:
      'Patch with the gold sigil, red sigil, and the wolf of mars onto one design. Comes in white and black.',
    link: 'https://www.etsy.com/listing/1398182739/red-rising-embroidered-patches-gold-and'
  },
  {
    date: '2023-05-04',
    image: 'https://cdn.shopify.com/s/files/1/0374/1499/4053/products/Patch2_1024x1024@2x.jpg',
    name: 'Howler Legion Patch',
    tags: ['patch'],
    shop: {
      name: 'Lit Escalates',
      url: 'https://www.lit-escalates.com/'
    },
    description:
      'Trimmed in red, our Howler Legion patch shows the House Mars Wolf in red surrounded by metallic gold embroidered laurel leaves under a gold Star of the Republic.',
    link: 'https://www.lit-escalates.com/products/howler-legion-patch',
    expired: true
  }
];

export default data;
