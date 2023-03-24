import { IItem } from '@/types/item';

const data: IItem[] = [
  {
    date: '2023-03-10',
    image:
      'https://cdn.shopify.com/s/files/1/0374/1499/4053/products/mockup-23bccb64_1024x1024.jpg',
    name: 'Howler Enamel Mug',
    tags: ['mug', 'official'],
    shop: {
      name: 'Lit Escalates',
      url: 'https://www.lit-escalates.com/'
    },
    description:
      "For the tears of your enemies or a hot cup of cocoa. This enamel mug comes straight from Quicksilver's workshops and is emblazoned with the House Mars Wolf Sigil in blood red.",
    link: 'https://www.lit-escalates.com/collections/home-goods/products/howler-enamel-mug'
  },
  {
    date: '2023-03-10',
    image:
      'https://cdn.shopify.com/s/files/1/0374/1499/4053/products/white-ceramic-mug-with-color-inside-black-11oz-right-600efa962e9bd_1024x1024.jpg',
    name: 'Shit Escalates Ceramic Mug',
    tags: ['mug', 'official'],
    shop: {
      name: 'Lit Escalates',
      url: 'https://www.lit-escalates.com/'
    },
    description:
      'Add a splash of Sevro\'s charm to your morning coffee or tea ritual. This double sided ceramic mug is sublimation printed with the Howler Wolf on one side and "Shit Escalates" on the other. Available in both Red and Black accent colors.',
    link: 'https://www.lit-escalates.com/collections/home-goods/products/shit-escalates-mug'
  },
  {
    date: '2023-03-10',
    image:
      'https://cdn.shopify.com/s/files/1/0374/1499/4053/products/white-ceramic-mug-with-color-inside-black-11oz-left-60ce11c875a1f_1024x1024.jpg',
    name: 'Apex Asshole Mug',
    tags: ['mug', 'darrow', 'sevro', 'official'],
    shop: {
      name: 'Lit Escalates',
      url: 'https://www.lit-escalates.com/'
    },
    description:
      'Sorry but not sorry, this belligerent mug commemorates the deep and abiding love between Darrow and Sevro with one of the best moments from Dark Age.',
    link: 'https://www.lit-escalates.com/collections/home-goods/products/apex-asshole-mug'
  },
  {
    date: '2023-03-10',
    image:
      'https://cdn.shopify.com/s/files/1/0374/1499/4053/products/throw-blanket-50x60-lifestyle-6200866546718_1024x1024.jpg',
    name: 'Iron Gold Map Throw Blanket',
    tags: ['other', 'official'],
    shop: {
      name: 'Lit Escalates',
      url: 'https://www.lit-escalates.com/'
    },
    description:
      'Printed with the official Solar System map Joel designed for Iron Gold, our soft silk touch throw blanket is ideal for lounging on the couch during chilly evenings.',
    link: 'https://www.lit-escalates.com/collections/home-goods/products/iron-gold-map-throw-blanket'
  },
  {
    date: '2023-03-10',
    image:
      'https://cdn.shopify.com/s/files/1/0374/1499/4053/products/throw-blanket-50x60-lifestyle-6200878cc96be_1024x1024.jpg',
    name: 'Institute House Sigils Throw Blanket',
    tags: ['other', 'official'],
    shop: {
      name: 'Lit Escalates',
      url: 'https://www.lit-escalates.com/'
    },
    description:
      "Printed with the House Sigils Joel created for Pierce Brown's debut novel Red Rising, this blanket is both cozy AF and delightfully decadent in all the right ways.",
    link: 'https://www.lit-escalates.com/collections/home-goods/products/house-sigils-throw-blanket'
  },
  {
    date: '2023-03-10',
    image:
      'https://cdn.shopify.com/s/files/1/0374/1499/4053/products/all-over-print-flag-white-front-627e9415c2fbc_720x.jpg',
    name: 'Gold Propaganda Flag',
    tags: ['other', 'gold', 'official'],
    shop: {
      name: 'Lit Escalates',
      url: 'https://www.lit-escalates.com/'
    },
    description:
      "This long-awaited item features the original Gold Propaganda Poster artwork Joel created for the release of the first book in Pierce Brown's Red Rising series.",
    link: 'https://www.lit-escalates.com/collections/home-goods/products/gold-propaganda-flag'
  },
  {
    date: '2023-03-10',
    image:
      'https://cdn.shopify.com/s/files/1/0374/1499/4053/products/all-over-print-flag-white-front-62830fcba70e2_1024x1024.jpg',
    name: 'Howler Legion Flag',
    tags: ['other', 'official'],
    shop: {
      name: 'Lit Escalates',
      url: 'https://www.lit-escalates.com/'
    },
    description:
      'This long-awaited item features an all new design with the Official Howler Legion Sigil.',
    link: 'https://www.lit-escalates.com/collections/home-goods/products/howler-legion-flag'
  },
  {
    date: '2023-03-14',
    image: 'https://i.etsystatic.com/16046340/r/il/45b61d/4550104660/il_794xN.4550104660_3mnz.jpg',
    name: 'Shit Escalates Mug',
    tags: ['mug'],
    shop: {
      name: 'CreativeLeighCrafts',
      url: 'https://www.etsy.com/shop/CreativeLeighCrafts'
    },
    description: 'Handmade mug with "Shit Escalates" on it.',
    link: 'https://www.etsy.com/listing/1386001470/it-escalates-mug'
  },
  {
    date: '2023-03-14',
    image: 'https://i.etsystatic.com/16046340/r/il/eff21f/3749396947/il_794xN.3749396947_86w6.jpg',
    name: 'Straight Outta Lykos Mug (Red)',
    tags: ['mug'],
    shop: {
      name: 'CreativeLeighCrafts',
      url: 'https://www.etsy.com/shop/CreativeLeighCrafts'
    },
    description: 'Mug with "Straight Outta Lykos" on it.',
    link: 'https://www.etsy.com/listing/1187556759/straight-outta-lykos-mug'
  },
  {
    date: '2023-03-14',
    image: 'https://i.etsystatic.com/16046340/r/il/1f8166/1926883405/il_794xN.1926883405_oz87.jpg',
    name: 'Straight Outta Lykos Mug (White)',
    tags: ['mug'],
    shop: {
      name: 'CreativeLeighCrafts',
      url: 'https://www.etsy.com/shop/CreativeLeighCrafts'
    },
    description: 'Mug with "Straight Outta Lykos" on it.',
    link: 'https://www.etsy.com/listing/706752423/straight-outta-lykos-mug'
  },
  {
    date: '2023-03-14',
    image: 'https://i.etsystatic.com/16046340/r/il/d43467/3380208688/il_794xN.3380208688_i4fg.jpg',
    name: 'Gorydamn Good Coffee Mug',
    tags: ['mug'],
    shop: {
      name: 'CreativeLeighCrafts',
      url: 'https://www.etsy.com/shop/CreativeLeighCrafts'
    },
    description:
      'Show that you got the best coffee in the office with this mug with "Gorydamn Good Coffee" on it.',
    link: 'https://www.etsy.com/listing/1187556759/straight-outta-lykos-mug'
  },
  {
    date: '2023-03-14',
    image: 'https://i.etsystatic.com/16046340/r/il/b15746/2206694372/il_794xN.2206694372_luls.jpg',
    name: 'Iron Rain Mug',
    tags: ['mug', 'golden-son'],
    shop: {
      name: 'CreativeLeighCrafts',
      url: 'https://www.etsy.com/shop/CreativeLeighCrafts'
    },
    description: 'Mug with "When falls the Iron Rain, be brave. Be brave." on it.',
    link: 'https://www.etsy.com/listing/782524815/iron-rain-mug'
  },
  {
    date: '2023-03-14',
    image: 'https://i.etsystatic.com/16046340/r/il/fcca0a/1531117547/il_794xN.1531117547_1n03.jpg',
    name: 'Stronger than the Shield of Tinos Mug',
    tags: ['mug'],
    shop: {
      name: 'CreativeLeighCrafts',
      url: 'https://www.etsy.com/shop/CreativeLeighCrafts'
    },
    description:
      'A mug for when you need your coffee stronger than your favorite Obsidian, Ragnar Volarus.',
    link: 'https://www.etsy.com/listing/609110111/stronger-than-the-shield-of-tinos'
  },
  {
    date: '2023-03-14',
    image: 'https://i.etsystatic.com/16046340/r/il/bc735b/1831155897/il_794xN.1831155897_n258.jpg',
    name: 'Howler 4 Life Mug',
    tags: ['mug'],
    shop: {
      name: 'CreativeLeighCrafts',
      url: 'https://www.etsy.com/shop/CreativeLeighCrafts'
    },
    description: 'A old favorite updated with a new colors.',
    link: 'https://www.etsy.com/listing/670110412/howler-4-life'
  },
  {
    date: '2023-03-16',
    image: 'https://i.etsystatic.com/10165646/r/il/724bc8/4594592888/il_794xN.4594592888_6pdj.jpg',
    name: 'Custom Howler Name Mug',
    tags: ['mug'],
    shop: {
      name: 'LiveForMore',
      url: 'https://www.etsy.com/shop/LiveForMore'
    },
    description: 'Get your Howler name on a mug.',
    link: 'https://www.etsy.com/listing/1396149142/red-rising-custom-howler-name-white'
  },
  {
    date: '2023-03-16',
    image: 'https://i.etsystatic.com/10165646/r/il/d26b0f/4594480510/il_794xN.4594480510_esbb.jpg',
    name: 'Hail Reaper Hail Libertas Mug',
    tags: ['mug'],
    shop: {
      name: 'LiveForMore',
      url: 'https://www.etsy.com/shop/LiveForMore'
    },
    description: "LiveForMore's classic Hail Reaper Hail Libertas design on a mug.",
    link: 'https://www.etsy.com/listing/1396123176/red-rising-hail-libertas-hail-reaper'
  },
  {
    date: '2023-03-17',
    image: 'https://i.etsystatic.com/10165646/r/il/49fca8/4642725417/il_794xN.4642725417_pery.jpg',
    name: 'Howler Mug',
    tags: ['mug'],
    shop: {
      name: 'LiveForMore',
      url: 'https://www.etsy.com/shop/LiveForMore'
    },
    description: "A mug with LiveForMore's wolf design and stars.",
    link: 'https://www.etsy.com/listing/1410341807/howler-red-rising-white-ceramic-mug'
  },
  {
    date: '2023-03-24',
    image: 'https://i.etsystatic.com/25476777/r/il/c47786/3669093522/il_794xN.3669093522_jand.jpg',
    name: 'Red Rising Enamel Mug',
    tags: ['mug', 'darrow'],
    shop: {
      name: 'RavenPostCo',
      url: 'https://www.etsy.com/shop/RavenPostCo'
    },
    description: 'Enamel mug with the quote "I am the reaper and death is my shadow." on it.',
    link: 'https://www.etsy.com/listing/1179073715/red-rising-enamel-mug'
  }
];

export default data;
