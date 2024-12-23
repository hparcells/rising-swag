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
    link: 'https://www.etsy.com/listing/1460779082/house-mars-crew-neck-sweatshirt',
    expired: true
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
  },
  {
    date: '2023-08-31',
    image: 'https://i.etsystatic.com/43349528/r/il/990740/4997998050/il_794xN.4997998050_m0v5.jpg',
    name: 'Red Rising Distressed Concert Collection Sweatshirt',
    tags: ['sweatshirt', 'red-rising'],
    shop: {
      name: 'jesslostinbooks',
      url: 'https://www.etsy.com/shop/jesslostinbooks'
    },
    description:
      'The first graphic of the concert collection pays homage to the book that started it all.',
    link: 'https://www.etsy.com/listing/1471415168/'
  },
  {
    date: '2023-09-02',
    image: 'https://i.etsystatic.com/16046340/r/il/1eb76e/5273613499/il_794xN.5273613499_kkbh.jpg',
    name: 'War on Heaven Sweatshirt',
    tags: ['sweatshirt'],
    shop: {
      name: 'CreativeLeighCrafts',
      url: 'https://www.etsy.com/shop/CreativeLeighCrafts'
    },
    description: "The Howlers' War on Heaven Tour sweatshirt.",
    link: 'https://www.etsy.com/listing/1552756665/'
  },
  {
    date: '2023-10-05',
    image: 'https://i0.wp.com/howlerholo.net/wp-content/uploads/2023/09/25456-7.jpg',
    name: 'Bellona Ski Resort Crewneck',
    tags: ['sweatshirt', 'cassius'],
    shop: {
      name: "The Howler's Den",
      url: 'https://www.howlerholo.net'
    },
    description: "Cassius's Ski Resort, a few clicks from Attica.",
    link: 'https://howlerholo.net/product/bellona-ski-resort-crewneck/'
  },
  {
    date: '2023-10-05',
    image: 'https://i0.wp.com/howlerholo.net/wp-content/uploads/2023/09/25450.jpg',
    name: 'My Honor Remains Unisex Crewneck',
    tags: ['sweatshirt', 'cassius'],
    shop: {
      name: "The Howler's Den",
      url: 'https://www.howlerholo.net'
    },
    description: 'I am Cassius au Bellona and my honor remains.',
    link: 'https://howlerholo.net/product/my-honor-remains-unisex-crewneck/'
  },
  {
    date: '2023-10-05',
    image: 'https://i0.wp.com/howlerholo.net/wp-content/uploads/2023/09/25462-7.jpg',
    name: 'Snap. Mustang Crewneck Sweatshirt (Golden Son)',
    tags: ['sweatshirt', 'mustang', 'golden-son'],
    shop: {
      name: "The Howler's Den",
      url: 'https://www.howlerholo.net'
    },
    description: '"Snap." Virginia au Augustus, Golden Son',
    link: 'https://howlerholo.net/product/snap-mustang-crewneck-sweatshirt-golden-son/'
  },
  {
    date: '2023-10-05',
    image: 'https://i0.wp.com/howlerholo.net/wp-content/uploads/2023/09/25456-14.jpg',
    name: 'Sophocles Crewneck Sweatshirt',
    tags: ['sweatshirt', 'sophocles'],
    shop: {
      name: "The Howler's Den",
      url: 'https://www.howlerholo.net'
    },
    description:
      'The bravest member of the Telemanus family, only because Kavax hold the title of craziest.',
    link: 'https://howlerholo.net/product/sophocles-crewneck-sweatshirt/'
  },
  {
    date: '2023-10-23',
    image: 'https://i.etsystatic.com/43349528/r/il/09b6f4/4922109286/il_794xN.4922109286_65d4.jpg',
    name: 'Iron Gold Distressed Concert Collection Crewneck Sweatshirt',
    tags: ['sweatshirt', 'iron-gold'],
    shop: {
      name: 'jesslostinbooks',
      url: 'https://www.etsy.com/shop/jesslostinbooks'
    },
    description:
      'A map from Mercury to Io is surrounded by the celestial coordinates of the moon and planets at the release of Iron Gold.',
    link: 'https://www.etsy.com/listing/1485614665/'
  },
  {
    date: '2023-10-23',
    image: 'https://i.etsystatic.com/43349528/r/il/fbd095/5253471810/il_794xN.5253471810_nmo7.jpg',
    name: 'Red Rising Unisex Crewneck Sweatshirt',
    tags: ['sweatshirt', 'red-rising'],
    shop: {
      name: 'jesslostinbooks',
      url: 'https://www.etsy.com/shop/jesslostinbooks'
    },
    description: 'A graphic representing the Red Rising series.',
    link: 'https://www.etsy.com/listing/1544596160/'
  },
  {
    date: '2023-10-23',
    image: 'https://i.etsystatic.com/38022526/r/il/a761a2/5187780962/il_794xN.5187780962_qs9g.jpg',
    name: 'Omnis Vir Lupus Sweatshirt',
    tags: ['sweatshirt'],
    shop: {
      name: 'MbrdryByDani',
      url: 'https://www.etsy.com/shop/MbrdryByDani'
    },
    description: 'Howler emblem with the text "Omnis Vir Lupus" and "Hail Reaper".',
    link: 'https://www.etsy.com/listing/1532921207/',
    expired: true
  },
  {
    date: '2023-10-23',
    image: 'https://i.etsystatic.com/36464113/r/il/ae0aff/5176636363/il_794xN.5176636363_9lgx.jpg',
    name: 'Howlers Sweatshirt',
    tags: ['sweatshirt', 'red', 'gold'],
    shop: {
      name: 'NicoleLewisGift',
      url: 'https://www.etsy.com/shop/NicoleLewisGift'
    },
    description: 'The sigil of Mars, Gold, and Red.',
    link: 'https://www.etsy.com/listing/1531857709/',
    expired: true
  },
  {
    date: '2023-11-08',
    image: 'https://i.etsystatic.com/30214316/r/il/c6541e/5426718174/il_794xN.5426718174_5hup.jpg',
    name: 'Per Aspera Ad Astra Unisex Sweatshirt',
    tags: ['shirt'],
    shop: {
      name: 'PurpleWoodlands',
      url: 'https://www.etsy.com/shop/PurpleWoodlands'
    },
    description:
      'This Latin phrase can be applied to so many difficult times in our lives. It gives us the inspiration to reach for the stars, no matter the adversity we may have encountered. Let the road of stars on the back of the sweatshirt lead you along your path to greatness.',
    link: 'https://www.etsy.com/listing/1593646175/'
  },
  {
    date: '2023-11-10',
    image: 'https://howlerholo.net/wp-content/uploads/2023/11/25459-7.jpg',
    name: "The Howler's Den 1st Anniversary Sweatshirt",
    tags: ['sweatshirt'],
    shop: {
      name: "The Howler's Den",
      url: 'https://www.howlerholo.net'
    },
    description: "A sweatshirt celebrating the Howler's Den 1st anniversary.",
    link: 'https://howlerholo.net/product/the-howlers-den-1st-anniversary-unisex-sweatshirt/'
  },
  {
    date: '2023-11-24',
    image: 'https://howlerholo.net/wp-content/uploads/2023/11/25443-600x600.jpg',
    name: 'The Path Unisex Sweatshirt',
    tags: ['sweatshirt', 'light-bringer'],
    shop: {
      name: "The Howler's Den",
      url: 'https://howlerholo.net/'
    },
    description: 'Join Darrow as he reads the understandings of the Path.',
    link: 'https://howlerholo.net/product/the-path-unisex-sweatshirt/'
  },
  {
    date: '2023-11-15',
    image: 'https://i.etsystatic.com/45048743/r/il/b3f9ec/5194707646/il_794xN.5194707646_43c8.jpg',
    name: 'Hail Reaper Wolf Sweatshirt',
    tags: ['sweatshirt'],
    shop: {
      name: 'SweatshirtHugUS',
      url: 'https://www.etsy.com/shop/SweatshirtHugUS'
    },
    description:
      'Red Rising-inspired sweatshirt honoring the Howlers and the Reaper himself. Wear this cool sweatshirt - Howlers will recognize you at once, and everyone else will just think its a cool shirt.',
    link: 'https://www.etsy.com/listing/1546049607/',
    expired: true
  },
  {
    date: '2024-02-21',
    image: 'https://i.etsystatic.com/47259379/r/il/e3f50a/5573283849/il_794xN.5573283849_hz0q.jpg',
    name: 'Shit Escalates Sweatshirt',
    tags: ['sweatshirt', 'sevro'],
    shop: {
      name: 'CozyQTees',
      url: 'https://www.etsy.com/shop/CozyQTees'
    },
    description: 'Shit Escalates quote with wolf.',
    link: 'https://www.etsy.com/listing/1615888129/'
  },
  {
    date: '2024-02-21',
    image: 'https://i.etsystatic.com/47259379/r/il/fdc840/5573209755/il_794xN.5573209755_50cc.jpg',
    name: 'Shit Escalates Sweatshirt',
    tags: ['sweatshirt', 'sevro'],
    shop: {
      name: 'CozyQTees',
      url: 'https://www.etsy.com/shop/CozyQTees'
    },
    description: 'Shit Escalates quote with wolf.',
    link: 'https://www.etsy.com/listing/1615795455/',
    expired: true
  }
];

export default data;
