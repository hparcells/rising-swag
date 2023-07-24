import { IItem } from '@/types/item';

const data: IItem[] = [
  {
    date: '2023-03-15',
    image: 'https://i.etsystatic.com/21279369/r/il/7a7bcb/2641562147/il_794xN.2641562147_mbwc.jpg',
    name: 'Pegasus Legion Sweatshirt',
    tags: ['sweatshirt'],
    shop: {
      name: 'TheMightyPenBookTees',
      url: 'https://www.etsy.com/shop/TheMightyPenBookTees'
    },
    description:
      'Join the Pegasus Legion Howler and stay warm soldier! Large Pegasus Legion logo on the back.',
    link: 'https://www.etsy.com/listing/887865221/pegasus-legion-red-rising-unisex'
  },
  {
    date: '2023-03-14',
    image: 'https://i.etsystatic.com/16046340/r/il/b515c2/4675385987/il_794xN.4675385987_o161.jpg',
    name: 'Howler Life Sweatshirt',
    tags: ['sweatshirt'],
    shop: {
      name: 'CreativeLeighCrafts',
      url: 'https://www.etsy.com/shop/CreativeLeighCrafts'
    },
    description: '"I didn\'t choose the howler life, the howler life chose me."',
    link: 'https://www.etsy.com/listing/1417408857/howler-life-unisex-heavy-blend-crewneck'
  },
  {
    date: '2023-03-15',
    image: 'https://i.etsystatic.com/21279369/r/il/31cd85/2641557739/il_1588xN.2641557739_cc80.jpg',
    name: 'HWLR Embroidered Sweatshirt',
    tags: ['sweatshirt'],
    shop: {
      name: 'TheMightyPenBookTees',
      url: 'https://www.etsy.com/shop/TheMightyPenBookTees'
    },
    description: 'For the elegant Howler is this embroidered HWLR sweatshirt.',
    link: 'https://www.etsy.com/listing/887871983/hwlr-embroidered-red-rising-unisex'
  },
  {
    date: '2023-03-16',
    image: 'https://i.etsystatic.com/10165646/r/il/50bd85/4642724583/il_794xN.4642724583_qjzx.jpg',
    name: 'Let Fall the Rain Sweatshirt',
    tags: ['sweatshirt', 'roque'],
    shop: {
      name: 'LiveForMore',
      url: 'https://www.etsy.com/shop/LiveForMore'
    },
    description: "LiveForMore's Let Fall the Rain design on a sweatshirt. ",
    link: 'https://www.etsy.com/listing/1410341595/iron-rain-red-rising-ares-darrow-let'
  },
  {
    date: '2023-03-17',
    image: 'https://i.etsystatic.com/10165646/r/il/725ac7/4584618119/il_794xN.4584618119_4yeb.jpg',
    name: 'Omnis vir Lupus Sweatshirt',
    tags: ['sweatshirt'],
    shop: {
      name: 'LiveForMore',
      url: 'https://www.etsy.com/shop/LiveForMore'
    },
    description: "LiveForMore's Omnis vir Lupus design on a sweatshirt.",
    link: 'https://www.etsy.com/listing/1396938765/omnis-vir-lupus-red-rising-unisex-heavy'
  },
  {
    date: '2023-03-17',
    image: 'https://i.etsystatic.com/10165646/r/il/d3b910/4540275430/il_794xN.4540275430_klky.jpg',
    name: "You're Making Me Emotional Sweatshirt",
    tags: ['sweatshirt', 'victra'],
    shop: {
      name: 'LiveForMore',
      url: 'https://www.etsy.com/shop/LiveForMore'
    },
    description: '"You\'re making me emotional and I hate it." -Victra au Julii',
    link: 'https://www.etsy.com/listing/1383629692/red-rising-victra-au-barca-unisex-heavy',
    expired: true
  },
  {
    date: '2023-03-31',
    image: 'https://i.etsystatic.com/19915917/r/il/ae5744/4636102867/il_794xN.4636102867_d5l1.jpg',
    name: 'SlingBlade Sweatshirt',
    tags: ['sweatshirt'],
    shop: {
      name: 'CheyDoesArt',
      url: 'https://www.etsy.com/shop/CheyDoesArt'
    },
    description: 'Sweatshirt featuring a slingBlade.',
    link: 'https://www.etsy.com/listing/1394768328/the-reapers-sling-blade-red-rising',
    expired: true
  },
  {
    date: '2023-04-02',
    image: 'https://i.etsystatic.com/19780495/r/il/891305/3272743408/il_794xN.3272743408_7r02.jpg',
    name: 'Hail Reaper Sweatshirt',
    tags: ['sweatshirt'],
    shop: {
      name: 'InkandStoriesShop',
      url: 'https://www.etsy.com/shop/InkandStoriesShop'
    },
    description: 'Hail Reaper!',
    link: 'https://www.etsy.com/listing/1055925156/red-rising-sweatshirt-hail-reaper-the'
  },
  {
    date: '2023-04-03',
    image: 'https://i.etsystatic.com/19780495/r/il/78462e/3320377971/il_794xN.3320377971_k7yz.jpg',
    name: 'The Reaper of Mars Sweatshirt',
    tags: ['sweatshirt'],
    shop: {
      name: 'InkandStoriesShop',
      url: 'https://www.etsy.com/shop/InkandStoriesShop'
    },
    description: 'Darrow - The Reaper of Mars.',
    link: 'https://www.etsy.com/listing/1055915612/red-rising-sweatshirt-darrow-the-reaper'
  },
  {
    date: '2023-04-25',
    image: 'https://assets.printerval.com/2022/07/25/62df2785edfed-1658791813.jpg',
    name: 'Red Rising Color Sweatshirt',
    tags: ['sweatshirt', 'red', 'gold'],
    shop: {
      name: 'Croter Hung',
      url: 'https://printerval.com/croter-hung'
    },
    description:
      'The Gold sigil stacked upon the Red sigil, the wolf of Mars, and a haemanthus blossom.',
    link: 'https://printerval.com/red-rising-color-pierce-brown-pierce-sweatshirts-p12463090'
  },
  {
    date: '2023-05-06',
    image:
      'https://i.etsystatic.com/19365370/r/il/e75b05/2319786507/il_680x540.2319786507_7pvy.jpg',
    name: 'Omnis Vir Lupus Full Zip Hooded Sweatshirt',
    tags: ['sweatshirt'],
    shop: {
      name: 'HowlerPod',
      url: 'https://www.etsy.com/shop/HowlerPod'
    },
    description: 'A full zip hoodie with the text "Omnis Vir Lupus".',
    link: 'https://www.etsy.com/listing/736577243/unisex-heavy-blend-full-zip-hooded',
    expired: true
  },
  {
    date: '2023-05-06',
    image:
      'https://i.etsystatic.com/19365370/r/il/2cd3b5/2865952663/il_680x540.2865952663_4zoz.jpg',
    name: 'Gold Sigil Sweatshirt',
    tags: ['sweatshirt', 'gold'],
    shop: {
      name: 'HowlerPod',
      url: 'https://www.etsy.com/shop/HowlerPod'
    },
    description: 'A sweatshirt with the Gold sigil.',
    link: 'https://www.etsy.com/listing/736579403/unisex-heavy-blend-crewneck-gold-sigil',
    expired: true
  },
  {
    date: '2023-05-06',
    image:
      'https://i.etsystatic.com/19365370/r/il/e7efdd/2008451678/il_340x270.2008451678_lbro.jpg',
    name: "Women's HowlerPod Hoodie",
    tags: ['sweatshirt'],
    shop: {
      name: 'HowlerPod',
      url: 'https://www.etsy.com/shop/HowlerPod'
    },
    description: "A women's hoodie with the HowlerPod logo.",
    link: 'https://www.etsy.com/listing/736578167/',
    expired: true
  },
  {
    date: '2023-05-30',
    image: 'https://i.etsystatic.com/16046340/r/il/a7c62d/4875593318/il_794xN.4875593318_1uf4.jpg',
    name: 'House Mars Crew Neck Sweatshirt',
    tags: ['sweatshirt'],
    shop: {
      name: 'CreativeLeighCrafts',
      url: 'https://www.etsy.com/shop/CreativeLeighCrafts'
    },
    description: 'Problem is, we of House Mars always burn out. Better to do it in style!',
    link: 'https://www.etsy.com/listing/1460779082/house-mars-crew-neck-sweatshirt'
  },
  {
    date: '2023-06-29',
    image: 'https://www.howlerholo.net/wp-content/uploads/2023/06/25459.jpg',
    name: 'Den Logo Unisex Heavy Blend Crewneck Sweatshirt',
    tags: ['sweatshirt'],
    shop: {
      name: "The Howler's Den",
      url: 'https://www.howlerholo.net'
    },
    description: "A sweatshirt with the Howler's Den logo.",
    link: 'https://www.howlerholo.net/product/howlersdencrewneck/'
  },
  {
    date: '2023-07-20',
    image: 'https://i.etsystatic.com/34186803/r/il/588f10/5001560132/il_794xN.5001560132_8owu.jpg',
    name: 'The Howlers Sweatshirt',
    tags: ['sweatshirt'],
    shop: {
      name: 'NiceAndNerdy',
      url: 'https://www.etsy.com/shop/NiceAndNerdy'
    },
    description: 'Show your love for the Howlers with this Red Rising sweatshirt!',
    link: 'https://www.etsy.com/listing/1489521142/'
  },
  {
    date: '2023-07-23',
    image: 'https://i.etsystatic.com/43349528/r/il/d7041d/5046168383/il_794xN.5046168383_6bxl.jpg',
    name: 'Golden Son Distressed Concert Collection Crewneck Sweatshirt',
    tags: ['sweatshirt', 'golden-son'],
    shop: {
      name: 'jesslostinbooks',
      url: 'https://www.etsy.com/shop/jesslostinbooks'
    },
    description:
      'A graphic inspired by the Gold houses the Gala brought together and a night we will never forget.',
    link: 'https://www.etsy.com/listing/1485611747/'
  }
];

export default data;
