import { IItem } from '@/types/item';
import { link } from 'fs';

const data: IItem[] = [
  {
    date: '2023-03-10',
    image:
      'https://cdn.shopify.com/s/files/1/0374/1499/4053/products/kiss-cut-stickers-3x3-default-6256f4db0c556_1024x1024@2x.jpg',
    name: 'Howler Famdom Sticker',
    tags: ['sticker', 'official'],
    shop: {
      name: 'Lit Escalates',
      url: 'https://www.lit-escalates.com/'
    },
    description: '#HowlerFamdom for life.',
    link: 'https://www.lit-escalates.com/collections/home-goods/products/howler-famdom-sticker'
  },
  {
    date: '2023-03-10',
    image:
      'https://cdn.shopify.com/s/files/1/0374/1499/4053/products/kiss-cut-stickers-3x3-5fd68c4374480_1024x1024.jpg',
    name: 'Howler Vinyl Sticker',
    tags: ['sticker', 'official'],
    shop: {
      name: 'Lit Escalates',
      url: 'https://www.lit-escalates.com/'
    },
    description: 'Fly your Howler flag for all to see.',
    link: 'https://www.lit-escalates.com/collections/stickers/products/house-mars-wolf-sticker'
  },
  {
    date: '2023-03-10',
    image:
      'https://cdn.shopify.com/s/files/1/0374/1499/4053/products/kiss-cut-stickers-3x3-5fd69b33babcb_1024x1024.jpg',
    name: 'Gold Sigil Vinyl Sticker',
    tags: ['sticker', 'gold', 'official'],
    shop: {
      name: 'Lit Escalates',
      url: 'https://www.lit-escalates.com/'
    },
    description: 'If you got it, flaunt it?',
    link: 'https://www.lit-escalates.com/collections/stickers/products/gold-sigil-die-cut-sticker-1'
  },
  {
    date: '2023-03-10',
    image:
      'https://cdn.shopify.com/s/files/1/0374/1499/4053/products/kiss-cut-stickers-3x3-5fd6a583885d9_1024x1024@2x.jpg',
    name: 'Red Sigil Vinyl Sticker',
    tags: ['sticker', 'red', 'official'],
    shop: {
      name: 'Lit Escalates',
      url: 'https://www.lit-escalates.com/'
    },
    description: 'Slap it on your clawdrill or frysuit!',
    link: 'https://www.lit-escalates.com/collections/stickers/products/red-sigil-vinyl-sticker'
  },
  {
    date: '2023-03-10',
    image:
      'https://cdn.shopify.com/s/files/1/0374/1499/4053/products/kiss-cut-stickers-3x3-default-60e5f997a5f69_1024x1024.jpg',
    name: 'Mangy Angel Sticker',
    tags: ['sticker', 'morning-star', 'official'],
    shop: {
      name: 'Lit Escalates',
      url: 'https://www.lit-escalates.com/'
    },
    description: '"Damn the world, so long as I have my mangy little guardian angel."',
    link: 'https://www.lit-escalates.com/collections/stickers/products/mangy-angel-sticker'
  },
  {
    date: '2023-03-10',
    image:
      'https://cdn.shopify.com/s/files/1/0374/1499/4053/products/kiss-cut-stickers-3x3-default-60e5f96e335c1_1024x1024.jpg',
    name: 'Mangy Angel Sticker (No Text)',
    tags: ['sticker', 'morning-star', 'official'],
    shop: {
      name: 'Lit Escalates',
      url: 'https://www.lit-escalates.com/'
    },
    description: '"Damn the world, so long as I have my mangy little guardian angel."',
    link: 'https://www.lit-escalates.com/collections/stickers/products/mangy-angel-sticker-no-text'
  },
  {
    date: '2023-03-10',
    image:
      'https://cdn.shopify.com/s/files/1/0374/1499/4053/products/kiss-cut-stickers-3x3-default-62007c665306b_1024x1024.jpg',
    name: 'Helldivers Union Sticker',
    tags: ['sticker', 'red', 'official'],
    shop: {
      name: 'Lit Escalates',
      url: 'https://www.lit-escalates.com/'
    },
    description:
      'While Quicksilver would probably fight unionization with every ounce of his murky being, we wanted to imaging what would happen if the Helldivers unionized during Dark Age.',
    link: 'https://www.lit-escalates.com/collections/stickers/products/helldivers-union-sticker'
  },
  {
    date: '2023-03-16',
    image: 'https://i.etsystatic.com/10165646/r/il/416c57/4674871087/il_794xN.4674871087_flcg.jpg',
    name: 'Let Fall the Rain Metallic Sticker',
    tags: ['sticker', 'roque'],
    shop: {
      name: 'LiveForMore',
      url: 'https://www.etsy.com/shop/LiveForMore'
    },
    description:
      'The moments before our favorite characters joined the Reaper of Mars in an Iron Rain have always given me chills! This sticker was made on a metallic background.',
    link: 'https://www.etsy.com/listing/1403074520/sticker-let-fall-the-rain-metallic'
  },
  {
    date: '2023-03-17',
    image: 'https://i.etsystatic.com/10165646/r/il/0befe9/3453764335/il_794xN.3453764335_ge98.jpg',
    name: 'Holographic Hail Reaper Hail Libertas Sticker',
    tags: ['sticker'],
    shop: {
      name: 'LiveForMore',
      url: 'https://www.etsy.com/shop/LiveForMore'
    },
    description:
      'Hail Libertas! Hail Reaper! This is an awesome sticker which shows off your rank as a Howler and dedication in breaking the chains',
    link: 'https://www.etsy.com/listing/1090675364/sticker-holographic-red-rising-sticker'
  },
  {
    date: '2023-03-17',
    image: 'https://i.etsystatic.com/10165646/r/il/fdeb61/3247575832/il_794xN.3247575832_sw7n.jpg',
    name: 'Hail Reaper Sticker',
    tags: ['sticker'],
    shop: {
      name: 'LiveForMore',
      url: 'https://www.etsy.com/shop/LiveForMore'
    },
    description:
      'Howlers and low colors alike look to The Reaper of Mars and use "Hail Reaper" as a greeting as well as a battle cry. Show your support for the uprising by displaying this sticker!',
    link: 'https://www.etsy.com/listing/935870580/sticker-hail-reaper-howler-stickers'
  },
  {
    date: '2023-03-17',
    image: 'https://i.etsystatic.com/10165646/r/il/33013c/3526099618/il_794xN.3526099618_ja19.jpg',
    name: 'Ragnar Sticker',
    tags: ['sticker', 'ragnar'],
    shop: {
      name: 'LiveForMore',
      url: 'https://www.etsy.com/shop/LiveForMore'
    },
    description: 'Metallic sticker of Ragnar.',
    link: 'https://www.etsy.com/listing/1123845398/sticker-ragnar-red-rising-sticker-red',
    expired: true
  },
  {
    date: '2023-03-17',
    image: 'https://i.etsystatic.com/10165646/r/il/0b8743/3788671150/il_794xN.3788671150_1gh5.jpg',
    name: 'Let Fall the Rain Holographic Sticker',
    tags: ['sticker', 'roque'],
    shop: {
      name: 'LiveForMore',
      url: 'https://www.etsy.com/shop/LiveForMore'
    },
    description:
      'Let Fall the Rain. Squeeze that Pixie rump into your StarShell, load up into the spitTube and get ready for your legion to rain down on your enemies. An Iron Rain must be a sight to behold!',
    link: 'https://www.etsy.com/listing/1196116560/sticker-holographic-red-rising-sticker'
  },
  {
    date: '2023-03-17',
    image: 'https://i.etsystatic.com/10165646/r/il/50e16a/3339435177/il_794xN.3339435177_dyqj.jpg',
    name: 'Haemanthus Sticker',
    tags: ['sticker'],
    shop: {
      name: 'LiveForMore',
      url: 'https://www.etsy.com/shop/LiveForMore'
    },
    description:
      'Red Rising has loads of meaningful symbolism. Throughout the saga, the Haemanthus has popped up. With roots stretching back to Lykos, this flower has an intense meaning.',
    link: 'https://www.etsy.com/listing/1074954241/sticker-red-rising-haemanthus-live-for'
  },
  {
    date: '2023-03-17',
    image: 'https://i.etsystatic.com/10165646/r/il/355df9/4287691939/il_794xN.4287691939_pw7j.jpg',
    name: 'Omnis Vir Lupus Sticker',
    tags: ['sticker'],
    shop: {
      name: 'LiveForMore',
      url: 'https://www.etsy.com/shop/LiveForMore'
    },
    description:
      "Everyone a wolf. Not many quotes from Red Rising are as iconic as “Omnis vir Lupus”. This clear glitter sticker is perfect for your laptop or tablet. Signal to all the Pixies that you're a Howler.",
    link: 'https://www.etsy.com/listing/1308651450/sticker-glitter-omnis-vir-lupus-red'
  },
  {
    date: '2023-03-17',
    image: 'https://i.etsystatic.com/10165646/r/il/abb1fb/3061188538/il_794xN.3061188538_bla6.jpg',
    name: 'Never Bow Sticker',
    tags: ['sticker'],
    shop: {
      name: 'LiveForMore',
      url: 'https://www.etsy.com/shop/LiveForMore'
    },
    description:
      "The first rule of being a Howler is that Howlers Never Bow. Sport this sticker with pride. The simulated distressed texture red below gold gives the impression you've gained the ranks of a Howler.",
    link: 'https://www.etsy.com/listing/937864053/sticker-red-rising-sticker-howler'
  },
  {
    date: '2023-03-20',
    image: 'https://i.etsystatic.com/10165646/r/il/cce0b8/4300748851/il_794xN.4300748851_lbvv.jpg',
    name: 'Hail Libertas Hail Reaper Sticker',
    tags: ['sticker'],
    shop: {
      name: 'LiveForMore',
      url: 'https://www.etsy.com/shop/LiveForMore'
    },
    description: 'Graffiti style sticker of Hail Libertas Hail Reaper.',
    link: 'https://www.etsy.com/listing/1311542692/sticker-hail-libertas-hail-reaper'
  },
  {
    date: '2023-03-20',
    image: 'https://i.etsystatic.com/10165646/r/il/ca9da3/3034205314/il_794xN.3034205314_ngm1.jpg',
    name: 'Mars Institute Alumni Sticker',
    tags: ['sticker'],
    shop: {
      name: 'LiveForMore',
      url: 'https://www.etsy.com/shop/LiveForMore'
    },
    description:
      'The Mars Institute class of PCE 738 was W I L D. Our beloved Howlers were born by blood during their time at the Mars Institute. Slap this sticker on a water bottle or laptop. This metallic gold sticker is something of a conversation starter.',
    link: 'https://www.etsy.com/listing/992402340/sticker-red-rising-metallic-gold-sticker'
  },
  {
    date: '2023-03-20',
    image: 'https://i.etsystatic.com/10165646/r/il/66affc/2909095725/il_794xN.2909095725_lgll.jpg',
    name: 'Boyo Bubble Gum Sticker',
    tags: ['sticker'],
    shop: {
      name: 'LiveForMore',

      url: 'https://www.etsy.com/shop/LiveForMore'
    },
    description:
      "Everyone's favorite Bronzie and House Mars proctor is known for his bubblegum popping. But what gum does Fitchner chew? He chews Boyo Bubble of course!! We shouldn't expect any less from The Rage Knight himself.",
    link: 'https://www.etsy.com/listing/960142401/sticker-boyo-bubble-red-rising-howler'
  },
  {
    date: '2023-03-20',
    image: 'https://i.etsystatic.com/10165646/r/il/a6351d/3720697367/il_794xN.3720697367_l12v.jpg',
    name: 'Pitviper Swill Sticker',
    tags: ['sticker'],
    shop: {
      name: 'LiveForMore',
      url: 'https://www.etsy.com/shop/LiveForMore'
    },
    description:
      'Top off your mug with Pitviper swill and toast the Laureltide. This sticker has a mirror effect to highlight the sweet brown of the sweet swill.',
    link: 'https://www.etsy.com/listing/1180137043/sticker-pitviper-swill-red-rising'
  },
  {
    date: '2023-03-20',
    image: 'https://i.etsystatic.com/10165646/r/il/41482f/2842957139/il_794xN.2842957139_ljzg.jpg',
    name: 'Pixie Tears Sticker',
    tags: ['sticker'],
    shop: {
      name: 'LiveForMore',
      url: 'https://www.etsy.com/shop/LiveForMore'
    },
    description:
      'To gear up for a fight, what quenches ones thirst better than Pixie Tears!! 🥤 Iron Golds and Howlers alike can enjoy this hydrating fuel!!',
    link: 'https://www.etsy.com/listing/928794458/sticker-red-rising-howler-stickers-never'
  },
  {
    date: '2023-03-20',
    image: 'https://i.etsystatic.com/10165646/r/il/e1687d/2822185806/il_794xN.2822185806_g2mo.jpg',
    name: 'Meat Carpet Cleaner Sticker',
    tags: ['sticker', 'dark-age'],
    shop: {
      name: 'LiveForMore',
      url: 'https://www.etsy.com/shop/LiveForMore'
    },
    description: 'Meat Carpet? Yes, I went there.',
    link: 'https://www.etsy.com/listing/949764905/sticker-red-rising-howler-stickers-never'
  },
  {
    date: '2023-03-20',
    image: 'https://i.etsystatic.com/10165646/r/il/c2d067/3081934247/il_794xN.3081934247_8g4d.jpg',
    name: 'Omnis vir Lupus Glitter Sticker',
    tags: ['sticker'],
    shop: {
      name: 'LiveForMore',
      url: 'https://www.etsy.com/shop/LiveForMore'
    },
    description:
      'Everyone a wolf. Slap this sticker on a water bottle or laptop. This red glitter sticker is something of a conversation starter.',
    link: 'https://www.etsy.com/listing/992408352/sticker-red-rising-howler-red-glitter'
  },
  {
    date: '2023-03-20',
    image: 'https://i.etsystatic.com/10165646/r/il/5c74c0/2822345752/il_794xN.2822345752_nojk.jpg',
    name: 'Per Aspera Ad Astra Sticker',
    tags: ['sticker'],
    shop: {
      name: 'LiveForMore',
      url: 'https://www.etsy.com/shop/LiveForMore'
    },
    description: '"Through hardships to the stars." A beloved Latin quote.',
    link: 'https://www.etsy.com/listing/935882258/sticker-red-rising-per-aspera-ad-astra'
  },
  {
    date: '2023-03-20',
    image: 'https://i.etsystatic.com/10165646/r/il/99d689/3154102381/il_794xN.3154102381_hhrf.jpg',
    name: 'Cacatne Ursus in Silvis Sticker',
    tags: ['sticker'],
    shop: {
      name: 'LiveForMore',
      url: 'https://www.etsy.com/shop/LiveForMore'
    },
    description:
      "Does a bear shit in the woods? Everyone's favorite Goblin uttered these words just as he and Reaper were positioned in their launch tubes.",
    link: 'https://www.etsy.com/listing/1011712838/sticker-red-rising-sevro-au-barca-does-a'
  },
  {
    date: '2023-03-20',
    image: 'https://i.etsystatic.com/10165646/r/il/ba4005/3476697335/il_794xN.3476697335_3w6w.jpg',
    name: 'Pegasus Legion Sticker',
    tags: ['sticker'],

    shop: {
      name: 'LiveForMore',
      url: 'https://www.etsy.com/shop/LiveForMore'
    },
    description:
      'This is an awesome sticker which shows off your rank as a Howler and dedication in breaking the chains ⛓ Join us in the Pegasus Legion!',
    link: 'https://www.etsy.com/listing/1096646068/sticker-red-rising-pegasus-legion-hail'
  },
  {
    date: '2023-03-21',
    image: 'https://i.etsystatic.com/10165646/r/il/dd2670/3836294397/il_794xN.3836294397_m5w1.jpg',
    name: 'Hail Reaper Holographic Sticker',
    tags: ['sticker'],
    shop: {
      name: 'LiveForMore',
      url: 'https://www.etsy.com/shop/LiveForMore'
    },
    description:
      'Hail Reaper! This sticker the perfect way to signal your allegiance to the rising.',
    link: 'https://www.etsy.com/listing/1196124016/sticker-holographic-hail-reaper-red',
    expired: true
  },
  {
    date: '2023-03-21',
    image: 'https://i.etsystatic.com/10165646/r/il/0fa471/3453757043/il_794xN.3453757043_8t6i.jpg',
    name: 'Omnis Vir Lupus Holographic Sticker',
    tags: ['sticker'],
    shop: {
      name: 'LiveForMore',
      url: 'https://www.etsy.com/shop/LiveForMore'
    },
    description:
      'Omnis vir Lupus! Everyone a wolf! This is an awesome sticker which shows off your rank as a Howler.',
    link: 'https://www.etsy.com/listing/1090670070/sticker-holographic-red-rising-omnis-vir'
  },
  {
    date: '2023-03-21',
    image: 'https://i.etsystatic.com/10165646/r/il/b78292/3297712350/il_794xN.3297712350_sjts.jpg',
    name: 'Never Bow Holographic Sticker',
    tags: ['sticker'],
    shop: {
      name: 'LiveForMore',
      url: 'https://www.etsy.com/shop/LiveForMore'
    },
    description: 'Never bow! The first rule of being a Howler is that Howlers Never Bow!',
    link: 'https://www.etsy.com/listing/1078350983/sticker-holographic-red-rising-sticker'
  },
  {
    date: '2023-03-21',
    image: 'https://i.etsystatic.com/10165646/r/il/905480/3125117928/il_794xN.3125117928_jrmc.jpg',
    name: 'Wolves Sticker',
    tags: ['sticker'],
    shop: {
      name: 'LiveForMore',
      url: 'https://www.etsy.com/shop/LiveForMore'
    },
    description:
      "From Gold to Red, Howlers in Pierce Brown's Red Rising saga are called to arms to break the chains.",
    link: 'https://www.etsy.com/listing/1030611575/sticker-red-rising-howler-stickers-never'
  },
  {
    date: '2023-03-21',
    image: 'https://i.etsystatic.com/10165646/r/il/0ed969/3108975357/il_794xN.3108975357_jhwd.jpg',
    name: 'Howler Sticker',
    tags: ['sticker'],
    shop: {
      name: 'LiveForMore',

      url: 'https://www.etsy.com/shop/LiveForMore'
    },
    description: 'A unique wolf sticker.',
    link: 'https://www.etsy.com/listing/1013562619/sticker-red-rising-sticker-howler',
    expired: true
  },
  {
    date: '2023-03-21',
    image: 'https://i.etsystatic.com/10165646/r/il/f79e63/3299282148/il_794xN.3299282148_moux.jpg',
    name: 'Sevro is my Spirit Animal Sticker',
    tags: ['sticker', 'sevro'],
    shop: {
      name: 'LiveForMore',
      url: 'https://www.etsy.com/shop/LiveForMore'
    },
    description:
      'Sevro is our most beloved goblin! Some might even say that Sevro is their spirit animal.',
    link: 'https://www.etsy.com/listing/1076949461/red-rising-bumper-sticker-sevro-is-my',
    expired: true
  },
  {
    date: '2023-03-21',
    image: 'https://i.etsystatic.com/10165646/r/il/f6d928/2795249950/il_794xN.2795249950_lxk3.jpg',
    name: "You're Making Me Emotional Sticker",
    tags: ['sticker', 'victra'],
    shop: {
      name: 'LiveForMore',
      url: 'https://www.etsy.com/shop/LiveForMore'
    },
    description:
      'Prior to becoming Victra au Barca, Victra au Julii uttered these famous and endearing words.',
    link: 'https://www.etsy.com/listing/919326330/sticker-red-rising-sticker-victra-au'
  },
  {
    date: '2023-03-24',
    image: 'https://i.etsystatic.com/25064526/r/il/7dbb7f/3982858715/il_794xN.3982858715_bx3s.jpg',
    name: 'Howler Vinyl Sticker',
    tags: ['sticker'],
    shop: {
      name: 'SkyBlueStudiosCo',
      url: 'https://www.etsy.com/shop/SkyBlueStudiosCo'
    },
    description: 'High quality vinyl stickers of the wolf of House Mars.',
    link: 'https://www.etsy.com/listing/1235336532/omnis-vir-lupus-red-rising-howlers-book',
    expired: true
  },
  {
    date: '2023-03-26',
    image: 'https://i.etsystatic.com/28288409/r/il/268512/3064902715/il_794xN.3064902715_2ems.jpg',
    name: 'Per Aspera Ad Astra Sticker',
    tags: ['sticker'],
    shop: {
      name: 'HCBookishDesigns',
      url: 'https://www.etsy.com/shop/HCBookishDesigns'
    },
    description:
      'Through hardships to the stars. A gorgeous matte vinyl die-cut sticker with the latin phrase: Per Aspera Ad Astra.',
    link: 'https://www.etsy.com/listing/1001800857/ad-astra-75cm-round-diecut-vinyl-sci-fi',
    expired: true
  },
  {
    date: '2023-03-26',
    image: 'https://i.etsystatic.com/12557146/r/il/1c29d1/4587203451/il_794xN.4587203451_egzj.jpg',
    name: 'Break the Chains Sticker',
    tags: ['sticker', 'eo'],
    shop: {
      name: 'thebookishbeeco',
      url: 'https://www.etsy.com/shop/thebookishbeeco'
    },
    description: 'A sticker depicting Eo with the text: "Break the Chains My Love"',
    link: 'https://www.etsy.com/listing/1383526266/break-the-chains-my-love-vinyl',
    expired: true
  },
  {
    date: '2023-04-03',
    image: 'https://i.etsystatic.com/24022818/r/il/bf8caf/4827111575/il_794xN.4827111575_ro0c.jpg',
    name: 'Sigil and Wolf Sticker',
    tags: ['sticker', 'red', 'gold'],
    shop: {
      name: 'ThePurpuraProject',
      url: 'https://www.etsy.com/shop/ThePurpuraProject'
    },
    description: 'Shirt with the gold sigil, red sigil, and the wolf of mars onto one design.',
    link: 'https://www.etsy.com/listing/1452191391/red-rising-sticker-gold-and-red-sigil'
  },
  {
    date: '2023-04-04',
    image: 'https://i.etsystatic.com/39768594/r/il/ee20d2/4612190493/il_794xN.4612190493_epbf.jpg',
    name: 'Omnis Vir Lupus Sticker',
    tags: ['sticker'],
    shop: {
      name: 'ADHDAbby',
      url: 'https://www.etsy.com/shop/ADHDAbby'
    },
    description: 'Sticker with a wolf and skull design.',
    link: 'https://www.etsy.com/listing/1403377047/howler-omnis-vir-lupus-bubble-free',
    expired: true
  },
  {
    date: '2023-04-04',
    image: 'https://i.etsystatic.com/39768594/r/il/792c97/4612130488/il_794xN.4612130488_meh9.jpg',
    name: 'Hic Sunt Leones Sticker',
    tags: ['sticker'],
    shop: {
      name: 'ADHDAbby',
      url: 'https://www.etsy.com/shop/ADHDAbby'
    },
    description: 'Sticker with a lion and pillar design.',
    link: 'https://www.etsy.com/listing/1414058335/lion-hic-sunt-leones-bubble-free-sticker',
    expired: true
  },
  {
    date: '2023-02-05',
    image: 'https://cdn.shopify.com/s/files/1/0374/1499/4053/products/Gamepiece1_1024x1024.jpg',
    name: 'Hazard Bedlam 2.0 Gamepiece',
    tags: ['sticker', 'official'],
    shop: {
      name: 'Lit Escalates',
      url: 'https://www.lit-escalates.com/'
    },
    description:
      'Stickers for Operation Hazard Bedlam 2.0, a official photo competition, but this time with instant winners.',
    link: 'https://www.lit-escalates.com/collections/limited-edition/products/hazard-bedlam-2-0-gamepiece-pre-order',
    expired: true
  },
  {
    date: '2023-04-25',
    image:
      'https://rlv.zcache.com/red_rising_reaper_goblin_2020_bumper_sticker-r39fa60c299674b4c92e7d8fff799af27_v9wht_8byvr_644.webp',
    name: 'Reaper/Goblin Bumper Sticker (Ares)',
    tags: ['sticker', 'darrow', 'sevro'],
    shop: {
      name: "Magic Merk's Geeky Designs",
      url: 'https://www.zazzle.com/store/magicmerk/products'
    },
    description: 'Reaper and Goblin Election-Style Bumper Sticker',
    link: 'https://www.zazzle.com/red_rising_reaper_goblin_2020_bumper_sticker-128010375200074787'
  },
  {
    date: '2023-04-25',
    image:
      'https://rlv.zcache.com/reaper_goblin_2020_red_rising_bumper_sticker-r4a3343a5354f45f7bea885c1c9fa3f7f_v9wht_8byvr_644.webp',
    name: 'Reaper/Goblin Bumper Sticker (SlingBlade)',
    tags: ['sticker', 'darrow', 'sevro'],
    shop: {
      name: "Magic Merk's Geeky Designs",
      url: 'https://www.zazzle.com/store/magicmerk/products'
    },
    description: 'Reaper and Goblin Election-Style Bumper Sticker',
    link: 'https://www.zazzle.com/reaper_goblin_2020_red_rising_bumper_sticker-128332733640008423'
  },
  {
    date: '2023-05-01',
    image: 'https://i.etsystatic.com/38424619/r/il/90ba1d/4858205732/il_794xN.4858205732_eh24.jpg',
    name: 'Wolf/Red/Gold Sigil Sticker',
    tags: ['sticker', 'red', 'gold'],
    shop: {
      name: 'FunnyBoxLogo',
      url: 'https://www.etsy.com/shop/FunnyBoxLogo'
    },
    description: 'Sticker with the wolf of Mars, Red sigil, and Gold sigil.',
    link: 'https://www.etsy.com/listing/1470875699/red-rising-wolfredgold-sigil-sticker',
    expired: true
  },
  {
    date: '2023-05-03',
    image: 'https://i.etsystatic.com/38424619/r/il/5090d9/4858254370/il_794xN.4858254370_70fz.jpg',
    name: 'Red/Gold Sigil Sticker',
    tags: ['sticker', 'red', 'gold'],
    shop: {
      name: 'FunnyBoxLogo',
      url: 'https://www.etsy.com/shop/FunnyBoxLogo'
    },
    description: 'Sticker with the Red sigil and Gold sigil together.',
    link: 'https://www.etsy.com/listing/1470875123/red-rising-redgold-sigil-sticker',
    expired: true
  },
  {
    date: '2023-05-03',
    image: 'https://i.etsystatic.com/38424619/r/il/b6958b/4906511435/il_794xN.4906511435_snyn.jpg',
    name: 'Mars/Gold/Red Sigil Sticker',
    tags: ['sticker', 'red', 'gold'],
    shop: {
      name: 'FunnyBoxLogo',
      url: 'https://www.etsy.com/shop/FunnyBoxLogo'
    },
    description: 'Sticker with the sigil of House Mars, Gold, and Red sigil.',
    link: 'https://www.etsy.com/listing/1470874783/red-rising-house-marsgoldred-sigil',
    expired: true
  },
  {
    date: '2023-05-03',
    image: 'https://i.etsystatic.com/38424619/r/il/03d2bf/4858254248/il_794xN.4858254248_cctz.jpg',
    name: 'Red Sigil Sticker',
    tags: ['sticker', 'red'],
    shop: {
      name: 'FunnyBoxLogo',
      url: 'https://www.etsy.com/shop/FunnyBoxLogo'
    },
    description: 'A white colored Red sigil sticker.',
    link: 'https://www.etsy.com/listing/1456667270/red-rising-red-sigil-sticker',
    expired: true
  },
  {
    date: '2023-05-03',
    image: 'https://i.etsystatic.com/38424619/r/il/3ed354/4906465985/il_794xN.4906465985_4xi8.jpg',
    name: 'Howler Box Logo Sticker',
    tags: ['sticker'],
    shop: {
      name: 'FunnyBoxLogo',
      url: 'https://www.etsy.com/shop/FunnyBoxLogo'
    },
    description: 'Supreme-style "Howler" box logo on a sticker.',
    link: 'https://www.etsy.com/listing/1456665092/red-rising-howler-sticker',
    expired: true
  },
  {
    date: '2023-05-03',
    image: 'https://i.etsystatic.com/38424619/r/il/1622db/4858208444/il_794xN.4858208444_42kf.jpg',
    name: 'Gold Sigil Sticker (Gold)',
    tags: ['sticker', 'gold'],
    shop: {
      name: 'FunnyBoxLogo',
      url: 'https://www.etsy.com/shop/FunnyBoxLogo'
    },
    description: 'A gold colored Gold sigil sticker.',
    link: 'https://www.etsy.com/listing/1470863613/red-rising-gold-sigil-gold-sticker',
    expired: true
  },
  {
    date: '2023-05-03',
    image: 'https://i.etsystatic.com/38424619/r/il/1eb0b1/4906465599/il_794xN.4906465599_9pqe.jpg',
    name: 'Gold Sigil Sticker (White)',
    tags: ['sticker', 'gold'],
    shop: {
      name: 'FunnyBoxLogo',
      url: 'https://www.etsy.com/shop/FunnyBoxLogo'
    },
    description: 'A white colored Gold sigil sticker.',
    link: 'https://www.etsy.com/listing/1456664306/red-rising-gold-sigil-white-sticker',
    expired: true
  },
  {
    date: '2023-05-03',
    image: 'https://i.etsystatic.com/38424619/r/il/5e592e/4906465079/il_794xN.4906465079_hxe9.jpg',
    name: 'House Mars Wolf Sticker (White)',
    tags: ['sticker'],
    shop: {
      name: 'FunnyBoxLogo',
      url: 'https://www.etsy.com/shop/FunnyBoxLogo'
    },
    description: 'A white colored wolf sticker.',
    link: 'https://www.etsy.com/listing/1470861855/red-rising-house-mars-wolf-sticker',
    expired: true
  },
  {
    date: '2023-05-03',
    image: 'https://i.etsystatic.com/38424619/r/il/57abc1/4858207554/il_794xN.4858207554_ggp7.jpg',
    name: 'House Mars Sigil Sticker (Black)',
    tags: ['sticker'],
    shop: {
      name: 'FunnyBoxLogo',
      url: 'https://www.etsy.com/shop/FunnyBoxLogo'
    },
    description: 'A black colored House Mars sigil sticker.',
    link: 'https://www.etsy.com/listing/1470861123/red-rising-house-mars-sticker',
    expired: true
  },
  {
    date: '2023-05-03',
    image: 'https://i.etsystatic.com/38424619/r/il/87215f/4858208088/il_794xN.4858208088_9bo6.jpg',
    name: 'House Mars Sigil Sticker (Red)',
    tags: ['sticker'],
    shop: {
      name: 'FunnyBoxLogo',
      url: 'https://www.etsy.com/shop/FunnyBoxLogo'
    },
    description: 'A red colored House Mars sigil sticker.',
    link: 'https://www.etsy.com/listing/1456663300/red-rising-house-mars-red-sticker',
    expired: true
  },
  {
    date: '2023-05-03',
    image: 'https://i.etsystatic.com/38424619/r/il/aef3fd/4906463931/il_794xN.4906463931_c963.jpg',
    name: 'Subterranean Press Golden Son Peerless Sticker',
    tags: ['sticker', 'golden-son', 'darrow'],
    shop: {
      name: 'FunnyBoxLogo',
      url: 'https://www.etsy.com/shop/FunnyBoxLogo'
    },
    description:
      'Supreme-style "Peerless" sticker with the cover art from the Subterranean Press edition of Golden Son.',
    link: 'https://www.etsy.com/listing/1470860319/kiss-cut-stickers',
    expired: true
  },
  {
    date: '2023-05-04',
    image: 'https://cdn.shopify.com/s/files/1/0374/1499/4053/products/StickerMock_1024x1024@2x.jpg',
    name: 'Helldivers Union Silver Foil Sticker',
    tags: ['sticker'],
    shop: {
      name: 'Lit Escalates',
      url: 'https://www.lit-escalates.com/'
    },
    description:
      "Commemorate your participation in this Summer's chaos with this bit of Red Rising Flair.",
    link: 'https://www.lit-escalates.com/products/helldivers-union-silver-foil-sticker',
    expired: true
  },
  {
    date: '2023-05-06',
    image:
      'https://i.etsystatic.com/19365370/r/il/ef7be3/1824645059/il_680x540.1824645059_93oy.jpg',
    name: 'Geo Wolf Sticker',
    tags: ['sticker'],
    shop: {
      name: 'HowlerPod',
      url: 'https://www.etsy.com/shop/HowlerPod'
    },
    description: 'A sticker of a simplistic wolf.',
    link: 'https://www.etsy.com/listing/682387427/geo-wolf-kiss-cut-sticker',
    expired: true
  },
  {
    date: '2023-05-10',
    image: 'https://i.etsystatic.com/38424619/r/il/9de02a/4938450021/il_794xN.4938450021_6xw4.jpg',
    name: 'I Would Have Lived in Peace Quote Sticker',
    tags: ['sticker', 'darrow'],
    shop: {
      name: 'FunnyBoxLogo',
      url: 'https://www.etsy.com/shop/FunnyBoxLogo'
    },
    description: "Darrow's infamous quote from Red Rising on a sticker.",
    link: 'https://www.etsy.com/listing/1477438133/red-rising-quote-sticker-1',
    expired: true
  },
  {
    date: '2023-05-10',
    image: 'https://i.etsystatic.com/38424619/r/il/72ae97/4890180948/il_794xN.4890180948_69n5.jpg',
    name: 'Hic Sunt Leones Quote Sticker',
    tags: ['sticker'],
    shop: {
      name: 'FunnyBoxLogo',
      url: 'https://www.etsy.com/shop/FunnyBoxLogo'
    },
    description: 'Hic sunt leones, here be lions.',
    link: 'https://www.etsy.com/listing/1477452785/red-rising-quote-sticker-3',
    expired: true
  },
  {
    date: '2023-05-10',
    image: 'https://i.etsystatic.com/38424619/r/il/838549/4938447695/il_794xN.4938447695_inpx.jpg',
    name: 'Men Cannot Be Freed Quote Sticker',
    tags: ['sticker', 'darrow'],
    shop: {
      name: 'FunnyBoxLogo',
      url: 'https://www.etsy.com/shop/FunnyBoxLogo'
    },
    description: '"Man cannot be freed by the same injustice that enslaved it."',
    link: 'https://www.etsy.com/listing/1477511481/red-rising-quote-sticker-2',
    expired: true
  },
  {
    date: '2023-05-10',
    image: 'https://i.etsystatic.com/38424619/r/il/ec2fce/4938448471/il_794xN.4938448471_5bo2.jpg',
    name: 'Shout into the Wind Quote Sticker',
    tags: ['sticker', 'golden-son'],
    shop: {
      name: 'FunnyBoxLogo',
      url: 'https://www.etsy.com/shop/FunnyBoxLogo'
    },
    description: "Karnus's quote about death.",
    link: 'https://www.etsy.com/listing/1477526889/red-rising-quote-sticker-4',
    expired: true
  },
  {
    date: '2023-05-10',
    image: 'https://i.etsystatic.com/38424619/r/il/ee5ae1/4890180300/il_794xN.4890180300_pa5l.jpg',
    name: 'You Made Me Drop My Candy Quote Sticker',
    tags: ['sticker', 'sevro', 'iron-gold'],
    shop: {
      name: 'FunnyBoxLogo',
      url: 'https://www.etsy.com/shop/FunnyBoxLogo'
    },
    description: "Sevro's quote from Iron Gold.",
    link: 'https://www.etsy.com/listing/1477527465/red-rising-quote-sticker-5',
    expired: true
  },
  {
    date: '2023-05-10',
    image: 'https://i.etsystatic.com/38424619/r/il/0ac880/4890181604/il_794xN.4890181604_njox.jpg',
    name: 'Rise So High In Mud You Lie Quote Sticker',
    tags: ['sticker', 'golden-son'],
    shop: {
      name: 'FunnyBoxLogo',
      url: 'https://www.etsy.com/shop/FunnyBoxLogo'
    },
    description: "Karnus's famous quote from Golden Son.",
    link: 'https://www.etsy.com/listing/1463426586/red-rising-quote-sticker-6',
    expired: true
  },
  {
    date: '2023-06-29',
    image: 'https://www.howlerholo.net/wp-content/uploads/2023/06/70877-4.jpg',
    name: "The Howler's Den Vinyl Sticker",
    tags: ['sticker'],
    shop: {
      name: "The Howler's Den",
      url: 'https://www.howlerholo.net'
    },
    description: "A sticker of the Howler's Den logo.",
    link: 'https://www.howlerholo.net/product/the-howlers-den-vinyl-sticker/'
  },
  {
    date: '2023-06-29',
    image: 'https://www.howlerholo.net/wp-content/uploads/2023/06/70876-12.jpg',
    name: 'The Rose Garden Vinyl Stickers',
    tags: ['sticker'],
    shop: {
      name: "The Howler's Den",
      url: 'https://www.howlerholo.net'
    },
    description: 'To the Rose Garden with you!',
    link: 'https://www.howlerholo.net/product/round-vinyl-stickers/'
  },
  {
    date: '2023-07-05',
    image: 'https://i.etsystatic.com/26674192/r/il/15b3a1/5052274316/il_794xN.5052274316_k97h.jpg',
    name: 'Hail Reaper Sticker',
    tags: ['sticker', 'darrow'],
    shop: {
      name: 'HailReaperPod',
      url: 'https://www.etsy.com/shop/HailReaperPod'
    },
    description:
      'A sticker of the famous quote "Hail Reaper" with a scythe and "Per aspera, ad astra."',
    link: 'https://www.etsy.com/listing/1493655682/'
  },
  {
    date: '2023-07-10',
    image: 'https://i.etsystatic.com/5925761/r/il/6a7950/4726576352/il_794xN.4726576352_icqj.jpg',
    name: 'A Good Friend Jumps With Sticker',
    tags: ['sticker', 'morning-star'],
    shop: {
      name: 'yakitori',
      url: 'https://www.etsy.com/shop/yakitori'
    },
    description: "A sticker of Ragnar's quote from Morning Star.",
    link: 'https://www.etsy.com/listing/1439884315/'
  },
  {
    date: '2023-07-11',
    image: 'https://www.howlerholo.net/wp-content/uploads/2023/07/70876-8.jpg',
    name: 'Goose Bucket Vinyl Sticker',
    tags: ['sticker'],
    shop: {
      name: "The Howler's Den",
      url: 'https://www.howlerholo.net'
    },
    description: 'Hail Goose Bucket, Hail Harpy!',
    link: 'https://www.howlerholo.net/product/goose-bucket-vinyl-sticker/'
  },
  {
    date: '2023-07-11',
    image: 'https://www.howlerholo.net/wp-content/uploads/2023/07/70876-12.jpg',
    name: 'Hail Steve Vinyl Sticker',
    tags: ['sticker'],
    shop: {
      name: "The Howler's Den",
      url: 'https://www.howlerholo.net'
    },
    description: 'Hail Steve! IYKYK',
    link: 'https://www.howlerholo.net/product/hail-steve-vinyl-sticker/'
  },
  {
    date: '2023-07-11',
    image: 'https://www.howlerholo.net/wp-content/uploads/2023/07/70877.jpg',
    name: 'WORTHY Vinyl Sticker',
    tags: ['sticker'],
    shop: {
      name: "The Howler's Den",
      url: 'https://www.howlerholo.net'
    },
    description: 'Show the worlds who is WORTHY!',
    link: 'https://www.howlerholo.net/product/worthy-vinyl-stickers/'
  },
  {
    date: '2023-08-29',
    image: 'https://i0.wp.com/howlerholo.net/wp-content/uploads/2023/08/76267-4.jpg',
    name: 'Legio Oreate Holographic Sticker',
    tags: ['sticker'],
    shop: {
      name: "The Howler's Den",
      url: 'https://www.howlerholo.net'
    },
    description: 'Did you do the Den Dunk? Show off your Den feat with some sick swag!',
    link: 'https://howlerholo.net/product/legio-oreate-holographic-sticker/'
  },
  {
    date: '2023-08-31',
    image: 'https://i.etsystatic.com/43349528/r/il/63f124/5069951604/il_794xN.5069951604_c37p.jpg',
    name: 'Rat Legion Kiss-Cut Sticker',
    tags: ['sticker'],
    shop: {
      name: 'jesslostinbooks',
      url: 'https://www.etsy.com/shop/jesslostinbooks'
    },
    description: 'Stickers of the Rat Legion emblem. Comes in different sizes.',
    link: 'https://www.etsy.com/listing/1504768328/'
  },
  {
    date: '2023-09-07',
    image: 'https://i0.wp.com/howlerholo.net/wp-content/uploads/2023/09/70875-4.jpg',
    name: 'Xoxo, Cassius Sticker',
    tags: ['sticker', 'cassius'],
    shop: {
      name: "The Howler's Den",
      url: 'https://www.howlerholo.net'
    },
    description: 'A little love from the Chin!',
    link: 'https://howlerholo.net/product/product-14/'
  },
  {
    date: '2023-09-07',
    image: 'https://i0.wp.com/howlerholo.net/wp-content/uploads/2023/09/95743-36.jpg',
    name: 'Xoxo Truffle Pig Vinyl Sticker',
    tags: ['sticker', 'cassius', 'light-bringer'],
    shop: {
      name: "The Howler's Den",
      url: 'https://www.howlerholo.net'
    },
    description: "You can't choose your call sign!",
    link: 'https://howlerholo.net/product/xoxo-truffle-pig-vinyl-sticker/'
  },
  {
    date: '2023-09-07',
    image: 'https://i0.wp.com/howlerholo.net/wp-content/uploads/2023/09/95743-30.jpg',
    name: 'The Ladon NPS Vinyl Sticker',
    tags: ['sticker'],
    shop: {
      name: "The Howler's Den",
      url: 'https://www.howlerholo.net'
    },
    description: 'Sticker of the Ladon on Mercury.',
    link: 'https://howlerholo.net/product/product-6/'
  },
  {
    date: '2023-09-07',
    image: 'https://i0.wp.com/howlerholo.net/wp-content/uploads/2023/09/95743-18.jpg',
    name: 'Pacific Rim NPS Vinyl Sticker',
    tags: ['sticker'],
    shop: {
      name: "The Howler's Den",
      url: 'https://www.howlerholo.net'
    },
    description: 'Sticker of the Pacific Rim on Earth.',
    link: 'https://howlerholo.net/product/product-4/'
  },
  {
    date: '2023-09-07',
    image: 'https://i0.wp.com/howlerholo.net/wp-content/uploads/2023/09/45748-6.jpg',
    name: 'My Honor Remains Sticker',
    tags: ['sticker', 'cassius'],
    shop: {
      name: "The Howler's Den",
      url: 'https://www.howlerholo.net'
    },
    description: 'I am Cassius au Bellona and my Honor Remains.',
    link: 'https://howlerholo.net/product/product-11/'
  },
  {
    date: '2023-09-07',
    image: 'https://i0.wp.com/howlerholo.net/wp-content/uploads/2023/09/95743-24.jpg',
    name: 'The Institute NPS Vinyl Sticker',
    tags: ['sticker'],
    shop: {
      name: "The Howler's Den",
      url: 'https://www.howlerholo.net'
    },
    description: 'Sticker of the Institute.',
    link: 'https://howlerholo.net/product/product-5/'
  },
  {
    date: '2023-10-06',
    image: 'https://i.etsystatic.com/34144082/r/il/856c16/3786211054/il_794xN.3786211054_16rr.jpg',
    name: 'Red Rising Trilogy Sticker',
    tags: ['sticker', 'red-rising', 'golden-son', 'morning-star'],
    shop: {
      name: 'FreezeFrameCreative',
      url: 'https://www.etsy.com/shop/FreezeFrameCreative'
    },
    description: 'This hand-drawn sticker is perfect for fans of the epic Red Rising series!',
    link: 'https://www.etsy.com/listing/1195467072/'
  },
  {
    date: '2023-10-05',
    image: 'https://i0.wp.com/howlerholo.net/wp-content/uploads/2023/09/95743-46.jpg',
    name: 'Bellona Mountain Ski Resort Vinyl Sticker',
    tags: ['sticker', 'cassius'],
    shop: {
      name: "The Howler's Den",
      url: 'https://www.howlerholo.net'
    },
    description: "Cassius's Ski Resort, a few clicks from Attica.",
    link: 'https://howlerholo.net/product/bellona-mountain-ski-resort-vinyl-sticker/'
  },
  {
    date: '2023-10-05',
    image: 'https://i0.wp.com/howlerholo.net/wp-content/uploads/2023/09/70876-16.jpg',
    name: 'Bellona Ski Resort Vinyl Sticker',
    tags: ['sticker', 'cassius'],
    shop: {
      name: "The Howler's Den",
      url: 'https://www.howlerholo.net'
    },
    description: "Cassius's Ski Resort, a few clicks from Attica.",
    link: 'https://howlerholo.net/product/bellona-ski-resort-vinyl-sticker/'
  },
  {
    date: '2023-10-05',
    image: 'https://i0.wp.com/howlerholo.net/wp-content/uploads/2023/09/95743-42.jpg',
    name: 'Lionheart Vinyl Sticker',
    tags: ['sticker', 'mustang'],
    shop: {
      name: "The Howler's Den",
      url: 'https://www.howlerholo.net'
    },
    description: '"Sometimes it is fun to let the lion out." Virginia au Augustus, Dark Age',
    link: 'https://howlerholo.net/product/lionheart-vinyl-sticker/'
  },
  {
    date: '2023-10-09',
    image: 'https://i0.wp.com/howlerholo.net/wp-content/uploads/2023/10/95743-8.jpg',
    name: 'Howler-ween Bash 2023 Vinyl Sticker',
    tags: ['sticker'],
    shop: {
      name: "The Howler's Den",
      url: 'https://www.howlerholo.net'
    },
    description: 'Happy Howler-ween! Awwwoooo!',
    link: 'https://howlerholo.net/product/kiss-cut-vinyl-decals/'
  },
  {
    date: '2023-10-09',
    image: 'https://i0.wp.com/howlerholo.net/wp-content/uploads/2023/10/95743-12.jpg',
    name: 'Howler-ween the Crux Vinyl Sticker',
    tags: ['sticker'],
    shop: {
      name: "The Howler's Den",
      url: 'https://www.howlerholo.net'
    },
    description: "Happy Howler-ween! Give everyone the Crux that doesn't agree. Awwwoooo!",
    link: 'https://howlerholo.net/product/howler-ween-the-crux-vinyl-sticker/'
  },
  {
    date: '2023-10-09',
    image: 'https://i0.wp.com/howlerholo.net/wp-content/uploads/2023/10/95743-16.jpg',
    name: 'The Crux Vinyl Sticker',
    tags: ['sticker'],
    shop: {
      name: "The Howler's Den",
      url: 'https://www.howlerholo.net'
    },
    description: "Happy Howler-ween! Give everyone the Crux that doesn't agree. Awwwoooo!",
    link: 'https://howlerholo.net/product/the-crux-vinyl-sticker/'
  },
  {
    date: '2023-10-09',
    image: 'https://i.etsystatic.com/9032134/r/il/2ff956/5411298595/il_794xN.5411298595_lqwx.jpg',
    name: 'Red Rising Series Quotes Stickers',
    tags: ['sticker'],
    shop: {
      name: 'ByAndreaRenee',
      url: 'https://www.etsy.com/shop/ByAndreaRenee'
    },
    description: 'Stickers of quotes from the Red Rising series.',
    link: 'https://www.etsy.com/listing/1581267747/',
    expired: true
  },
  {
    date: '2023-10-09',
    image: 'https://i.etsystatic.com/9032134/r/il/c1dba8/5411245007/il_794xN.5411245007_i8wr.jpg',
    name: 'I Would Have Lived in Peace Sticker',
    tags: ['sticker', 'darrow'],
    shop: {
      name: 'ByAndreaRenee',
      url: 'https://www.etsy.com/shop/ByAndreaRenee'
    },
    description: '"I would have lived in peace, but my enemies brought me war."',
    link: 'https://www.etsy.com/listing/1581261051/',
    expired: true
  },
  {
    date: '2023-10-09',
    image: 'https://i.etsystatic.com/9032134/r/il/49f128/5411221175/il_794xN.5411221175_icf5.jpg',
    name: "We're the Light and We're Spreading Sticker",
    tags: ['sticker', 'darrow', 'sevro'],
    shop: {
      name: 'ByAndreaRenee',
      url: 'https://www.etsy.com/shop/ByAndreaRenee'
    },
    description:
      "Vote Darrow and Sevro! We're the Light, and We're Spreading. Break the Chains and support the Howlers!",
    link: 'https://www.etsy.com/listing/1581254139/',
    expired: true
  },
  {
    date: '2023-10-23',
    image: 'https://i.etsystatic.com/24204637/r/il/586d3d/5188021082/il_794xN.5188021082_dv8v.jpg',
    name: 'Omnis Vir Lupus Sticker',
    tags: ['sticker'],
    shop: {
      name: 'MagicCityMemoriesCo',
      url: 'https://www.etsy.com/shop/MagicCityMemoriesCo'
    },
    description: 'Show your Howler pride with this cool Red Rising Howler Sticker.',
    link: 'https://www.etsy.com/listing/1158112596/',
    expired: true
  },
  {
    date: '2023-10-23',
    image: 'https://i.etsystatic.com/24204637/r/il/bbfac9/5188012822/il_794xN.5188012822_odxo.jpg',
    name: 'The Crux Sticker',
    tags: ['sticker'],
    shop: {
      name: 'MagicCityMemoriesCo',
      url: 'https://www.etsy.com/shop/MagicCityMemoriesCo'
    },
    description:
      '"What are you doing?" Sevro whispers in my ear, eying Varga. He flips the woman the crux with his middle finger wrapped around the index.',
    link: 'https://www.etsy.com/listing/1525665150/'
  },
  {
    date: '2023-11-06',
    image:
      'https://www.lit-escalates.com/cdn/shop/files/Stickers_64c4c3a0-0454-4349-a63b-1323c6787f66_1024x1024@2x.jpg',
    name: 'Sigil Sticker Pack',
    tags: ['sticker', 'official'],
    shop: {
      name: 'Lit Escalates',
      url: 'https://www.lit-escalates.com/'
    },
    description: "Can't decide which color to snag? How about all 14.",
    link: 'https://www.lit-escalates.com/collections/new-arrivals/products/sigil-sticker-pack'
  },
  {
    date: '2023-11-03',
    image: 'https://i.etsystatic.com/16046340/r/il/1d90ce/5396573687/il_794xN.5396573687_54a5.jpg',
    name: 'Red Rising Stickers',
    tags: ['sticker'],
    shop: {
      name: 'CreativeLeighCrafts',
      url: 'https://www.etsy.com/shop/CreativeLeighCrafts'
    },
    description:
      'A collection of Red Rising sticker designs including: The Reaper of Mars, Shit Escalates, and Dominus Portobello.',
    link: 'https://www.etsy.com/listing/1578270173/'
  },
  {
    date: '2023-11-08',
    image: 'https://i.etsystatic.com/25064526/r/il/b4a871/5144318472/il_794xN.5144318472_kdng.jpg',
    name: 'The Reaper Sticker',
    tags: ['sticker', 'darrow'],
    shop: {
      name: 'SkyBlueStudiosCo',
      url: 'https://www.etsy.com/shop/SkyBlueStudiosCo'
    },
    description: 'I am the Reaper and death is my shadow.',
    link: 'https://www.etsy.com/listing/1535347953/',
    expired: true
  },
  {
    date: '2023-11-08',
    image: 'https://i.etsystatic.com/22469851/r/il/9c7fef/5431049910/il_794xN.5431049910_igku.jpg',
    name: 'Summon The Howlers Sticker',
    tags: ['sticker'],
    shop: {
      name: 'LiteraryLeoCo',
      url: 'https://www.etsy.com/shop/LiteraryLeoCo'
    },
    description:
      'Break the chains, my love! A handmade vinyl style sticker inspired by the Red Rising Series!',
    link: 'https://www.etsy.com/listing/1594696749/'
  },
  {
    date: '2023-11-08',
    image: 'https://i.etsystatic.com/43921165/r/il/eb4746/5453887556/il_794xN.5453887556_3pzq.jpg',
    name: 'Lo, Reaper Sticker',
    tags: ['sticker', 'darrow', 'mustang'],
    shop: {
      name: 'BookWears',
      url: 'https://www.etsy.com/shop/BookWears'
    },
    description: 'Mustang greeting her husband.',
    link: 'https://www.etsy.com/listing/1599745825/'
  },
  {
    date: '2023-11-08',
    image: 'https://i.etsystatic.com/43921165/r/il/a24042/5502011619/il_794xN.5502011619_qt26.jpg',
    name: 'Lo, Mustang Sticker',
    tags: ['sticker', 'darrow', 'mustang'],
    shop: {
      name: 'BookWears',
      url: 'https://www.etsy.com/shop/BookWears'
    },
    description: 'Darrow to his wife.',
    link: 'https://www.etsy.com/listing/1599744339/'
  },
  {
    date: '2023-11-10',
    image: 'https://howlerholo.net/wp-content/uploads/2023/11/70876.jpg',
    name: "1st Anniversary Howler's Den Sticker",
    tags: ['sticker'],
    shop: {
      name: "The Howler's Den",
      url: 'https://www.howlerholo.net'
    },
    description: 'Join the Den in Celebrating their 1st birthday with some new anniversary logos!',
    link: 'https://howlerholo.net/product/1st-anniversary-the-howlers-den-yellow/'
  },
  {
    date: '2023-11-10',
    image: 'https://howlerholo.net/wp-content/uploads/2023/11/95743.jpg',
    name: '1st Anniversary Howler Sticker',
    tags: ['sticker'],
    shop: {
      name: "The Howler's Den",
      url: 'https://www.howlerholo.net'
    },
    description: "Celebrate the Den's First Birthday with an anniversary logo!",
    link: 'https://howlerholo.net/product/1st-anniversary-the-howlers-den-vinyl-sticker/'
  },
  {
    date: '2023-11-24',
    image: 'https://howlerholo.net/wp-content/uploads/2023/11/70876-8-600x600.jpg',
    name: 'Boneriders Vinyl Sticker',
    tags: ['sticker'],
    shop: {
      name: "The Howler's Den",
      url: 'https://howlerholo.net/'
    },
    description: 'Sometimes the villains need a little rep too.',
    link: 'https://howlerholo.net/product/boneriders-vinyl-sticker/'
  },
  {
    date: '2023-11-24',
    image: 'https://howlerholo.net/wp-content/uploads/2023/11/70876-16-600x600.jpg',
    name: 'Daddy-medes Round Vinyl Stickers',
    tags: ['sticker'],
    shop: {
      name: "The Howler's Den",
      url: 'https://howlerholo.net/'
    },
    description: "Daddy-medes does roll off the tongue, doesn't it?",
    link: 'https://howlerholo.net/product/daddy-medes-round-vinyl-stickers/'
  },
  {
    date: '2023-11-24',
    image: 'https://howlerholo.net/wp-content/uploads/2023/11/70876-20-600x600.jpg',
    name: 'Daddy-omedes Round Vinyl Stickers',
    tags: ['sticker'],
    shop: {
      name: "The Howler's Den",
      url: 'https://howlerholo.net/'
    },
    description: 'Diomedes always brings the O – you chose correctly.',
    link: 'https://howlerholo.net/product/daddy-omedes-round-vinyl-stickers/'
  },
  {
    date: '2023-11-24',
    image: 'https://howlerholo.net/wp-content/uploads/2023/11/70876-4-600x600.jpg',
    name: 'Dark Star Conservatory Vinyl Sticker',
    tags: ['sticker', 'light-bringer'],
    shop: {
      name: "The Howler's Den",
      url: 'https://howlerholo.net/'
    },
    description: 'Join the Conservatory, founded by Orion xe Aquarii.',
    link: 'https://howlerholo.net/product/dark-star-conservatory-vinyl-sticker/'
  },
  {
    date: '2023-11-24',
    image: 'https://howlerholo.net/wp-content/uploads/2023/11/95743-6-600x600.jpg',
    name: "Sevro's Sun Butter Vinyl Sticker",
    tags: ['sticker', 'sevro'],
    shop: {
      name: "The Howler's Den",
      url: 'https://howlerholo.net/'
    },
    description: "Hands off Sevro's Sun Butter.",
    link: 'https://howlerholo.net/product/sevros-sun-butter-vinyl-sticker/'
  },
  {
    date: '2023-11-24',
    image: 'https://howlerholo.net/wp-content/uploads/2023/11/70876-28-600x600.jpg',
    name: 'The Path Vinyl Sticker',
    tags: ['sticker', 'light-bringer'],
    shop: {
      name: "The Howler's Den",
      url: 'https://howlerholo.net/'
    },
    description: 'Join Darrow as he reads the understandings of the Path.',
    link: 'https://howlerholo.net/product/the-path-vinyl-sticker/'
  },
  {
    date: '2023-11-24',
    image: 'https://howlerholo.net/wp-content/uploads/2023/11/70876-24-600x600.jpg',
    name: 'Thunder & Lightning Vinyl Sticker',
    tags: ['sticker', 'darrow', 'cassius', 'red-rising'],
    shop: {
      name: "The Howler's Den",
      url: 'https://howlerholo.net/'
    },
    description: 'Darrow and Cassius, the true Dynamic Duo!',
    link: 'https://howlerholo.net/product/thunder-lightning-vinyl-sticker/'
  },
  {
    date: '2023-11-15',
    image: 'https://i.etsystatic.com/47705427/r/il/38d3d0/5463079194/il_794xN.5463079194_enxr.jpg',
    name: "Cassius's Razor Master Course Sticker",
    tags: ['sticker', 'cassius'],
    shop: {
      name: 'WitchyTeesCo',
      url: 'https://www.etsy.com/shop/WitchyTeesCo'
    },
    description:
      "Lo' future Razor Masters. Rather than the scars from a duel with Apollonius, get yourself a sticker to show you trained with the greatest Razor Master this side of the Rim!",
    link: 'https://www.etsy.com/listing/1587584386/'
  },
  {
    date: '2024-01-23',
    image: 'https://i.etsystatic.com/47602254/r/il/f70ac8/5817386006/il_794xN.5817386006_5zla.jpg',
    name: 'Wakey Wakey Goblin Sticker',
    tags: ['sticker', 'sevro'],
    shop: {
      name: 'RedRisingMugs',
      url: 'https://www.etsy.com/shop/RedRisingMugs'
    },
    description:
      'And with this sticker, leave your silent proclamation, a lingering echo of rebellion, etched in the conquered spaces of your aftermath, a testament to your indomitable spirit across the cosmic canvas.',
    link: 'https://www.etsy.com/listing/1639422382/'
  },
  {
    date: '2024-02-04',
    image: 'https://i.etsystatic.com/25978430/r/il/ba7919/5667479358/il_794xN.5667479358_kykp.jpg',
    name: 'Diomedes Sticker',
    tags: ['sticker'],
    shop: {
      name: 'WildBrewed',
      url: 'https://www.etsy.com/shop/WildBrewed'
    },
    description: 'Sticker of Diomedes.',
    link: 'https://www.etsy.com/listing/1642149764/',
    expired: true
  },
  {
    date: '2024-02-04',
    image: 'https://i.etsystatic.com/25978430/r/il/aabe5c/5667447284/il_794xN.5667447284_g66s.jpg',
    name: 'Victra Sticker',
    tags: ['sticker', 'victra'],
    shop: {
      name: 'WildBrewed',
      url: 'https://www.etsy.com/shop/WildBrewed'
    },
    description: 'Sticker of Victra.',
    link: 'https://www.etsy.com/listing/1642150770/',
    expired: true
  },
  {
    date: '2024-02-04',
    image: 'https://i.etsystatic.com/25978430/r/il/17ebe1/5715479693/il_794xN.5715479693_is3k.jpg',
    name: 'Virginia Sticker',
    tags: ['sticker', 'mustang'],
    shop: {
      name: 'WildBrewed',
      url: 'https://www.etsy.com/shop/WildBrewed'
    },
    description: 'Stick of Virginia/Mustang.',
    link: 'https://www.etsy.com/listing/1642157030/',
    expired: true
  },
  {
    date: '2024-02-04',
    image: 'https://i.etsystatic.com/25978430/r/il/b92455/5715491287/il_794xN.5715491287_pqiv.jpg',
    name: 'Lysander Sticker',
    tags: ['sticker'],
    shop: {
      name: 'WildBrewed',
      url: 'https://www.etsy.com/shop/WildBrewed'
    },
    description: 'Sticker of Lysander.',
    link: 'https://www.etsy.com/listing/1642152816/',
    expired: true
  },
  {
    date: '2024-02-04',
    image: 'https://i.etsystatic.com/25978430/r/il/873b46/5667434460/il_794xN.5667434460_quh1.jpg',
    name: 'Ragnar Sticker',
    tags: ['sticker'],
    shop: {
      name: 'WildBrewed',
      url: 'https://www.etsy.com/shop/WildBrewed'
    },
    description: 'Sticker of Ragnar.',
    link: 'https://www.etsy.com/listing/1642156002/',
    expired: true
  },
  {
    date: '2024-02-04',
    image: 'https://i.etsystatic.com/25978430/r/il/7bc2e7/5715486455/il_794xN.5715486455_97c0.jpg',
    name: 'Lorn Sticker',
    tags: ['sticker'],
    shop: {
      name: 'WildBrewed',
      url: 'https://www.etsy.com/shop/WildBrewed'
    },
    description: 'Sticker of Lorn',
    link: 'https://www.etsy.com/listing/1642155006/',
    expired: true
  },
  {
    date: '2024-02-21',
    image: 'https://i.etsystatic.com/13093296/r/il/4c2829/5352956387/il_794xN.5352956387_ok4m.jpg',
    name: 'Ad Astra Per Aspera Sticker',
    tags: ['sticker'],
    shop: {
      name: 'SolemNox',
      url: 'https://www.etsy.com/shop/SolemNox'
    },
    description:
      'This phrase represents tenacity and persistence; it reminds us that greatness is not a destination reached easily or comfortably.',
    link: 'https://www.etsy.com/listing/1429905894/'
  },
  {
    date: '2024-02-29',
    image: 'https://i.etsystatic.com/24204637/r/il/a9e6c5/5515179040/il_794xN.5515179040_a5s1.jpg',
    name: 'Red Rising Mini Book Sticker',
    tags: ['sticker', 'red-rising'],
    shop: {
      name: 'MagicCityMemoriesCo',
      url: 'https://www.etsy.com/shop/MagicCityMemoriesCo'
    },
    description: "A refined emblem of your love for Pierce Brown's epic series.",
    link: 'https://www.etsy.com/listing/1613527083/'
  },
  {
    date: '2024-02-29',
    image: 'https://i.etsystatic.com/24204637/r/il/6011ca/5718848117/il_794xN.5718848117_qzl7.jpg',
    name: "The Reaper's Poem Sticker",
    tags: ['sticker', 'sevro'],
    shop: {
      name: 'MagicCityMemoriesCo',
      url: 'https://www.etsy.com/shop/MagicCityMemoriesCo'
    },
    description: 'If your heart beats like a drum...',
    link: 'https://www.etsy.com/listing/1657238195/'
  },
  {
    date: '2024-02-29',
    image: 'https://i.etsystatic.com/16914832/r/il/76f9f6/5725025393/il_794xN.5725025393_pkfs.jpg',
    name: 'Red Rising Book Stack Sticker',
    tags: [
      'sticker',
      'red-rising',
      'golden-son',
      'morning-star',
      'iron-gold',
      'dark-age',
      'light-bringer',
      'red-god'
    ],
    shop: {
      name: 'TheCrystalCactusCo',
      url: 'https://www.etsy.com/shop/TheCrystalCactusCo'
    },
    description: 'Stack of the Red Rising series books.',
    link: 'https://www.etsy.com/listing/1658704397/'
  },
  {
    date: '2024-04-17',
    image: 'https://i.etsystatic.com/47602254/r/il/a56c18/5865447619/il_794xN.5865447619_9jn1.jpg',
    name: 'Never Bow Sticker',
    tags: ['sticker'],
    shop: {
      name: 'RedRisingMugs',
      url: 'https://www.etsy.com/shop/RedRisingMugs'
    },
    description: 'Never bow sticker.',
    link: 'https://www.etsy.com/listing/1676540418/'
  },
  {
    date: '2024-04-17',
    image: 'https://i.etsystatic.com/47602254/r/il/9faf74/5817381088/il_794xN.5817381088_rqud.jpg',
    name: 'Break the Chains Sticker',
    tags: ['sticker'],
    shop: {
      name: 'RedRisingMugs',
      url: 'https://www.etsy.com/shop/RedRisingMugs'
    },
    description: '"Break the Chains" sticker and a slingBlade.',
    link: 'https://www.etsy.com/listing/1676544434/'
  },
  {
    date: '2024-04-17',
    image: 'https://i.etsystatic.com/47602254/r/il/4f7e52/5865456099/il_794xN.5865456099_hy8i.jpg',
    name: 'Summon the Howlers Sticker',
    tags: ['sticker'],
    shop: {
      name: 'RedRisingMugs',
      url: 'https://www.etsy.com/shop/RedRisingMugs'
    },
    description: 'Summon the Howlers sticker.',
    link: 'https://www.etsy.com/listing/1676542216/'
  },
  {
    date: '2024-04-17',
    image: 'https://i.etsystatic.com/47602254/r/il/79a695/5817448192/il_794xN.5817448192_of7n.jpg',
    name: 'Helium 3 Sticker',
    tags: ['sticker'],
    shop: {
      name: 'RedRisingMugs',
      url: 'https://www.etsy.com/shop/RedRisingMugs'
    },
    description: 'Helium 3 element sticker.',
    link: 'https://www.etsy.com/listing/1690714119/'
  }
];

export default data;
