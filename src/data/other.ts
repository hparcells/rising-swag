import { IItem } from '@/types/item';
import { link } from 'fs';

const data: IItem[] = [
  {
    date: '2023-03-10',
    image:
      'https://cdn.shopify.com/s/files/1/0374/1499/4053/products/engraved-pet-id-tag-silver-front-60e5e09d9578a_1024x1024.jpg',
    name: 'Mangy Angel Engraved Pet ID Tag',
    tags: ['other', 'morning-star', 'official'],
    shop: {
      name: 'Lit Escalates',
      url: 'https://www.lit-escalates.com/'
    },
    description:
      'For the real Mangy Angel in your life. No matter how mischievous, they manage to bring joy wherever they go. Make sure your pets always find their way back to you and get this custom-made pet tag.',
    link: 'https://www.lit-escalates.com/collections/home-goods/products/mangy-angel-engraved-pet-id-tag'
  },
  {
    date: '2023-03-14',
    image: 'https://i.etsystatic.com/29764445/r/il/c169c3/3801211612/il_794xN.3801211612_9c1a.jpg',
    name: 'Finished SlingBlade',
    tags: ['other'],
    shop: {
      name: 'OrangeArmory',
      url: 'https://www.etsy.com/shop/OrangeArmory'
    },
    description:
      "It'll save your life, at the cost of a limb. Fully finished with acrylic paint and simulated leather on the hilt. Nearly 3 feet long, will come shipped in 2 pieces.",
    link: 'https://www.etsy.com/listing/1199461676/finished-slingblade',
    expired: true
  },
  {
    date: '2023-03-14',
    image: 'https://i.etsystatic.com/29764445/r/il/ed1cfa/3848811535/il_794xN.3848811535_3xsv.jpg',
    name: 'SlingBlade Kit',
    tags: ['other'],
    shop: {
      name: 'OrangeArmory',
      url: 'https://www.etsy.com/shop/OrangeArmory'
    },
    description:
      "It'll save your life, at the cost of a limb. Nearly 3 feet long, will come shipped in 5 pieces. Will need to be glued, sanded, and painted.",
    link: 'https://www.etsy.com/listing/1213418629/slingblade-kit',
    expired: true
  },
  {
    date: '2023-03-14',
    image: 'https://i.etsystatic.com/29764445/r/il/d7da32/3862382987/il_794xN.3862382987_cp6x.jpg',
    name: "Mustang's Razor Kit",
    tags: ['other', 'mustang'],
    shop: {
      name: 'OrangeArmory',
      url: 'https://www.etsy.com/shop/OrangeArmory'
    },
    description: "Mustang's razor kit comes in 5 pieces and is printed in PLA plastic.",
    link: 'https://www.etsy.com/listing/1216893789/mustangs-razor-kit'
  },
  {
    date: '2023-03-15',
    image: 'https://i.etsystatic.com/21279369/r/il/405046/2310048940/il_794xN.2310048940_7thw.jpg',
    name: 'Color the Rising - The Unofficial Little Red Rising Coloring Book',
    tags: ['other'],
    shop: {
      name: 'TheMightyPenBookTees',
      url: 'https://www.etsy.com/shop/TheMightyPenBookTees'
    },
    description:
      'Color the Rising is an alphabetized collection of Red Rising characters as drawn by me in chibi style. Contains 56 pages of coloring fun.',
    link: 'https://www.etsy.com/listing/793574550/color-the-rising-the-unofficial-little',
    expired: true
  },
  {
    date: '2023-03-17',
    image: 'https://i.etsystatic.com/10165646/r/il/babfff/3886048363/il_794xN.3886048363_nfmv.jpg',
    name: 'Hail Libertas Hail Reaper Bottle Opener',
    tags: ['other'],
    shop: {
      name: 'LiveForMore',
      url: 'https://www.etsy.com/shop/LiveForMore'
    },
    description:
      "Hail Libertas! Hail Reaper! Let's crack open some bottles using this high quality, stainless steel bartenders friend.",
    link: 'https://www.etsy.com/listing/1222904305/',
    expired: true
  },
  {
    date: '2023-03-17',
    image: 'https://i.etsystatic.com/10165646/r/il/cebac8/4642699815/il_794xN.4642699815_jsfo.jpg',
    name: 'Hail Reaper Can Cooler',
    tags: ['other'],
    shop: {
      name: 'LiveForMore',
      url: 'https://www.etsy.com/shop/LiveForMore'
    },
    description: 'Hail Reaper! Keep these can coolers on hand this summer!',
    link: 'https://www.etsy.com/listing/1393169389/red-rising-never-bow-howler-standard'
  },
  {
    date: '2023-03-17',
    image: 'https://i.etsystatic.com/10165646/r/il/12a8cb/4594485388/il_794xN.4594485388_8a4y.jpg',
    name: 'Let Fall the Rain Can Cooler',
    tags: ['other', 'roque'],
    shop: {
      name: 'LiveForMore',
      url: 'https://www.etsy.com/shop/LiveForMore'
    },
    description: 'Let Fall the Rain! Keep these can coolers on hand this summer!',
    link: 'https://www.etsy.com/listing/1378270526/red-rising-never-bow-howler-standard'
  },
  {
    date: '2023-03-20',
    image: 'https://i.etsystatic.com/10165646/r/il/8d056f/4594468368/il_794xN.4594468368_1114.jpg',
    name: 'Hail Libertas Hail Reaper Can Cooler',
    tags: ['other'],
    shop: {
      name: 'LiveForMore',
      url: 'https://www.etsy.com/shop/LiveForMore'
    },
    description: 'Hail Libertas! Hail Reaper! Keep these can coolers on hand this summer!',
    link: 'https://www.etsy.com/listing/1392267243/red-rising-hail-libertas-hail-reaper'
  },
  {
    date: '2023-03-20',
    image: 'https://i.etsystatic.com/10165646/r/il/e56218/4594457874/il_794xN.4594457874_6nva.jpg',
    name: 'Never Bow Can Cooler',
    tags: ['other'],
    shop: {
      name: 'LiveForMore',
      url: 'https://www.etsy.com/shop/LiveForMore'
    },
    description: 'Never Bow! Keep these can coolers on hand this summer!',
    link: 'https://www.etsy.com/listing/1392263765/red-rising-never-bow-howler-standard'
  },
  {
    date: '2023-03-20',
    image: 'https://i.etsystatic.com/10165646/r/il/d8b745/4642722343/il_794xN.4642722343_748u.jpg',
    name: 'Pegasus Legion Can Cooler',
    tags: ['other'],
    shop: {
      name: 'LiveForMore',

      url: 'https://www.etsy.com/shop/LiveForMore'
    },
    description: 'Pegasus Legion! Keep these can coolers on hand this summer!',
    link: 'https://www.etsy.com/listing/1378261390/red-rising-never-bow-howler-standard'
  },
  {
    date: '2023-03-20',
    image: 'https://i.etsystatic.com/10165646/r/il/13ea13/4594473550/il_794xN.4594473550_e15y.jpg',
    name: 'Pegasus Legion Can Cooler (Red)',
    tags: ['other'],
    shop: {
      name: 'LiveForMore',
      url: 'https://www.etsy.com/shop/LiveForMore'
    },
    description: 'Pegasus Legion! Keep these can coolers on hand this summer!',
    link: 'https://www.etsy.com/listing/1378256964/red-rising-never-bow-howler-can-cooler'
  },
  {
    date: '2023-03-20',
    image: 'https://i.etsystatic.com/10165646/r/il/89ccd7/4591413934/il_794xN.4591413934_cxrm.jpg',
    name: 'Hail Reaper Hail Libertas Fanny Pack',
    tags: ['other'],
    shop: {
      name: 'LiveForMore',
      url: 'https://www.etsy.com/shop/LiveForMore'
    },
    description:
      'Hail Reaper! Practical, utilitarian, and packed with style, this custom print fanny pack is the perfect accessory to any adventure.',
    link: 'https://www.etsy.com/listing/1383435979/hail-libertas-hail-reaper-red-rising'
  },
  {
    date: '2023-03-20',
    image: 'https://i.etsystatic.com/10165646/r/il/da1312/3885967861/il_794xN.3885967861_hr1u.jpg',
    name: 'Red Rising Coasters',
    tags: ['other'],
    shop: {
      name: 'LiveForMore',
      url: 'https://www.etsy.com/shop/LiveForMore'
    },
    description:
      'The sun is out, the drinks are cold, and these coasters are perfect for saving your surface. These high quality rubber backed coasters are excellent conversation starters.',
    link: 'https://www.etsy.com/listing/1222897013/red-rising-coasters-hail-reaper-scifi',
    expired: true
  },
  {
    date: '2023-03-20',
    image: 'https://i.etsystatic.com/10165646/r/il/033b6f/3886052759/il_794xN.3886052759_8ysx.jpg',
    name: 'Per Aspera Ad Astra Bottle Opener',
    tags: ['other'],
    shop: {
      name: 'LiveForMore',
      url: 'https://www.etsy.com/shop/LiveForMore'
    },
    description:
      "Per Aspera ad Astra. Let's crack open some bottles using this high quality, stainless steel bartenders friend.",
    link: 'https://www.etsy.com/listing/1208958020/',
    expired: true
  },
  {
    date: '2023-03-21',
    image: 'https://i.etsystatic.com/32661494/r/il/38edf5/4701128616/il_1140xN.4701128616_h099.jpg',
    name: 'Wood Engraved Sevro Graphic',
    tags: ['other', 'sevro'],
    shop: {
      name: 'JTRichWood',
      url: 'https://www.etsy.com/shop/JTRichWood'
    },
    description: '3D Laser cut graphic of Sevro from Red Rising.',
    link: 'https://www.etsy.com/listing/1433882677/'
  },
  {
    date: '2023-03-21',
    image: 'https://i.etsystatic.com/32661494/r/il/ae0e77/4701100172/il_1140xN.4701100172_3osd.jpg',
    name: 'Wood Engraved Iron Rain Graphic',
    tags: ['other'],
    shop: {
      name: 'JTRichWood',
      url: 'https://www.etsy.com/shop/JTRichWood'
    },
    description: '3D Laser cut graphic of an Iron Rain poster from Red Rising.',
    link: 'https://www.etsy.com/listing/1419669254/wood-engraved-red-rising-graphic-iron',
    expired: true
  },
  {
    date: '2023-03-21',
    image: 'https://i.etsystatic.com/32661494/r/il/b55ca2/4701083050/il_1140xN.4701083050_4zms.jpg',
    name: 'Wood Engraved Mercury Graphic',
    tags: ['other'],
    shop: {
      name: 'JTRichWood',
      url: 'https://www.etsy.com/shop/JTRichWood'
    },
    description: '3D Laser cut map of Mercury from Red Rising.',
    link: 'https://www.etsy.com/listing/1419664738/wood-engraved-map-mercury-from-red',
    expired: true
  },
  {
    date: '2023-03-21',
    image: 'https://i.etsystatic.com/32661494/r/il/90343d/4707631867/il_1140xN.4707631867_jd7f.jpg',
    name: 'Wood Engraved Solar System Graphic',
    tags: ['other'],
    shop: {
      name: 'JTRichWood',
      url: 'https://www.etsy.com/shop/JTRichWood'
    },
    description: '3D Laser cut graphic of the solar system from Red Rising.',
    link: 'https://www.etsy.com/listing/1410243202/wood-engraved-map-of-red-rising-the',
    expired: true
  },
  {
    date: '2023-03-21',
    image: 'https://i.etsystatic.com/32661494/r/il/9cabf1/4618543756/il_794xN.4618543756_jcbl.jpg',
    name: 'Wood Engraved Color Pyramid',
    tags: ['other'],
    shop: {
      name: 'JTRichWood',
      url: 'https://www.etsy.com/shop/JTRichWood'
    },
    description: '3D laser engraved color diagram inspired by the Red Rising book series.',
    link: 'https://www.etsy.com/listing/1390502854/red-rising-color-pyramid-inspired-by-the',
    expired: true
  },
  {
    date: '2023-03-21',
    image: 'https://i.etsystatic.com/32661494/r/il/5c2036/4425730987/il_794xN.4425730987_oh9h.jpg',
    name: 'Wood Engraved Institute Map',
    tags: ['other'],
    shop: {
      name: 'JTRichWood',
      url: 'https://www.etsy.com/shop/JTRichWood'
    },
    description: '3D Laser cut map of The Institute from Red Rising.',
    link: 'https://www.etsy.com/listing/1340471250/3d-wood-engraved-map-of-red-rising-the',
    expired: true
  },
  {
    date: '2023-03-22',
    image: 'https://i.etsystatic.com/32661494/r/il/83941d/3873443214/il_794xN.3873443214_eolu.jpg',
    name: 'Red Rising Inspired Ceramic Tile Coasters',
    tags: ['other'],
    shop: {
      name: 'JTRichWood',
      url: 'https://www.etsy.com/shop/JTRichWood'
    },
    description: '6 Ceramic Tile Coasters laser engraved and inspired by the world of Red Rising!',
    link: 'https://www.etsy.com/listing/1232853781/red-rising-inspired-ceramic-tile',
    expired: true
  },
  {
    date: '2023-03-22',
    image: 'https://i.etsystatic.com/32783179/r/il/429dc5/4090815245/il_1140xN.4090815245_ns8q.jpg',
    name: 'Howler Shelf Display',
    tags: ['other'],
    shop: {
      name: '3DPrintsbyTheodore',
      url: 'https://www.etsy.com/shop/3DPrintsbyTheodore'
    },
    description: 'A 3D printed Howler logo printed in Marble and Red pla.',
    link: 'https://www.etsy.com/listing/1276452077/'
  },
  {
    date: '2023-03-22',
    image: 'https://i.etsystatic.com/19636488/r/il/09630b/4331337244/il_794xN.4331337244_o4yp.jpg',
    name: 'Howler Ornament',
    tags: ['other', 'christmas'],
    shop: {
      name: 'OilyYou',
      url: 'https://www.etsy.com/shop/OilyYou'
    },
    description:
      'Festive one of a kind ornament for your tree, inspired by one of the best book series!',
    link: 'https://www.etsy.com/listing/1329117064/red-rising-howler-ornament',
    expired: true
  },
  {
    date: '2023-03-23',
    image: 'https://i.etsystatic.com/30214316/r/il/2332b9/4565121287/il_794xN.4565121287_3iiw.jpg',
    name: 'Per Aspera Ad Astra Canvas',
    tags: ['other'],
    shop: {
      name: 'PurpleWoodlands',
      url: 'https://www.etsy.com/shop/PurpleWoodlands'
    },
    description:
      'Through hardships to the stars. Latin phrase commonly used in literature, music, educational and research institutes, government and military, space exploration, pop culture, fraternities and sororities.',
    link: 'https://www.etsy.com/listing/1234583764/per-aspera-ad-astra-through-hardships-to'
  },
  {
    date: '2023-03-23',
    image: 'https://i.etsystatic.com/30214316/r/il/9ab0a5/4335344178/il_794xN.4335344178_tv8p.jpg',
    name: 'Omnis Vir Lupus Canvas',
    tags: ['other'],
    shop: {
      name: 'PurpleWoodlands',
      url: 'https://www.etsy.com/shop/PurpleWoodlands'
    },
    description:
      'Howlers motto from Red Rising - Omnis Vir Lupus - Everyone a Wolf. Howler for life.',
    link: 'https://www.etsy.com/listing/1296971515/omnis-vir-lupus-everyone-a-wolf-pierce'
  },
  {
    date: '2023-03-24',
    image: 'https://i.etsystatic.com/22469851/r/il/b24631/3514238135/il_794xN.3514238135_mjqk.jpg',
    name: 'Happy Howler-Days Pine Wood Christmas Ornament',
    tags: ['other', 'christmas'],
    shop: {
      name: 'LiteraryLeoCo',
      url: 'https://www.etsy.com/shop/LiteraryLeoCo'
    },
    description: 'The wolf of Mars pressed into a pine wood cookie.',
    link: 'https://www.etsy.com/listing/1120619399/happy-howler-days-35-4-pine-wood',
    expired: true
  },
  {
    date: '2023-03-24',
    image: 'https://i.etsystatic.com/22469851/r/il/eef951/4344774432/il_794xN.4344774432_tgs7.jpg',
    name: 'Bloody Damn Goblin Wax Melts: Unicorn Poop Scented',
    tags: ['other', 'sevro'],
    shop: {
      name: 'LiteraryLeoCo',
      url: 'https://www.etsy.com/shop/LiteraryLeoCo'
    },
    description:
      'Help cover up the smell of dead fish in your room with these wax melts inspired by Sevro from Red Rising! ;)',
    link: 'https://www.etsy.com/listing/1328197257/bloody-damn-goblin-wax-melts-unicorn',
    expired: true
  },
  {
    date: '2023-03-26',
    image: 'https://i.etsystatic.com/14520538/r/il/c2bcc3/2837260049/il_794xN.2837260049_fp33.jpg',
    name: "Darrow O'Lykos Lip Balm",
    tags: ['other', 'darrow'],
    shop: {
      name: 'BookishBalms',
      url: 'https://www.etsy.com/shop/BookishBalms'
    },
    description: 'Darrow is scented of cucumber melon and lime!',
    link: 'https://www.etsy.com/listing/941229303/darrow-olykos-lip-balm-red-rising'
  },
  {
    date: '2023-04-06',
    image: 'https://i.etsystatic.com/32661494/r/il/8b6d62/4701091410/il_1140xN.4701091410_34fd.jpg',
    name: 'Wood Engraved Pulse Armor Graphic',
    tags: ['other'],
    shop: {
      name: 'JTRichWood',
      url: 'https://www.etsy.com/shop/JTRichWood'
    },
    description:
      '3D Laser cut graphic of Pulse Armor from Red Rising. Laser cut from basswood, layered, stained, and sealed.',
    link: 'https://www.etsy.com/listing/1433872471/'
  },
  {
    date: '2023-04-12',
    image: 'https://i.etsystatic.com/30544133/r/il/aa8222/4157945038/il_794xN.4157945038_bi0o.jpg',
    name: 'Metal Wall LED Light',
    tags: ['other'],
    shop: {
      name: 'MetalLegacyByBlaine',
      url: 'https://www.etsy.com/shop/MetalLegacyByBlaine'
    },
    description:
      "This sign is perfect for any Red Rising fan and will make a unique statement piece in anyone's room or collection.",
    link: 'https://www.etsy.com/listing/1264816175/red-rising-light-metal-wall-led-light'
  },
  {
    date: '2023-04-29',
    image: 'https://i.etsystatic.com/38424619/r/il/a034e8/4802911818/il_1140xN.4802911818_6k97.jpg',
    name: 'The Society Solar System Blanket',
    tags: ['other'],
    shop: {
      name: 'FunnyBoxLogo',
      url: 'https://www.etsy.com/shop/FunnyBoxLogo'
    },
    description: 'A fleece blanket of the Solar System map.',
    link: 'https://www.etsy.com/listing/1457885225/red-rising-the-society-solar-system',
    expired: true
  },
  {
    date: '2023-04-29',
    image: 'https://i.etsystatic.com/38424619/r/il/81e7a8/4811884994/il_794xN.4811884994_32yr.jpg',
    name: 'FairyLoot Red Rising Blanket',
    tags: ['other', 'red-rising'],
    shop: {
      name: 'FunnyBoxLogo',
      url: 'https://www.etsy.com/shop/FunnyBoxLogo'
    },
    description: 'A fleece blanket of the cover art of the FairyLoot edition Red Rising book.',
    link: 'https://www.etsy.com/listing/1458246709/red-rising-plush-fleece-blanket',
    expired: true
  },
  {
    date: '2023-04-29',
    image: 'https://i.etsystatic.com/38424619/r/il/8d3e2a/4857574709/il_794xN.4857574709_iyth.jpg',
    name: 'FairyLoot Golden Son Blanket',
    tags: ['other', 'golden-son'],
    shop: {
      name: 'FunnyBoxLogo',
      url: 'https://www.etsy.com/shop/FunnyBoxLogo'
    },
    description: 'A fleece blanket of the cover art of the FairyLoot edition Golden Son book.',
    link: 'https://www.etsy.com/listing/1444043658/red-rising-golden-son-plush-fleece',
    expired: true
  },
  {
    date: '2023-04-29',
    image: 'https://i.etsystatic.com/38424619/r/il/442755/4857865143/il_794xN.4857865143_dz7q.jpg',
    name: 'FairyLoot Morning Star Blanket',
    tags: ['other', 'morning-star'],
    shop: {
      name: 'FunnyBoxLogo',
      url: 'https://www.etsy.com/shop/FunnyBoxLogo'
    },
    description: 'A fleece blanket of the cover art of the FairyLoot edition Morning Star book.',
    link: 'https://www.etsy.com/listing/1458245579/red-rising-morning-star-plush-fleece',
    expired: true
  },
  {
    date: '2023-05-03',
    image: 'https://i.etsystatic.com/38424619/r/il/a8e931/4868675126/il_794xN.4868675126_ofu4.jpg',
    name: 'Wolf Gold Sigil Wall Clock',
    tags: ['other', 'red', 'gold'],
    shop: {
      name: 'FunnyBoxLogo',
      url: 'https://www.etsy.com/shop/FunnyBoxLogo'
    },
    description: 'A wall clock with Mars and the sigils of Red and Gold.',
    link: 'https://www.etsy.com/listing/1459185990/red-rising-wolf-gold-sigil-wall-clock',
    expired: true
  },
  {
    date: '2023-05-03',
    image:
      'https://cdn.shopify.com/s/files/1/0374/1499/4053/products/4D51C74F-F370-4D42-8E2C-EC01D14D091E_1024x1024@2x.jpg?',
    name: 'SlingBlade Pen',
    tags: ['other'],
    shop: {
      name: 'Lit Escalates',
      url: 'https://www.lit-escalates.com/'
    },
    description:
      'Designed and manufactured by Josh Polus, the Master Maker behind The Orange Armory, our SlingBlade pen is a working work of art.',
    link: 'https://www.lit-escalates.com/products/slingblade-pen',
    expired: true
  },
  {
    date: '2023-05-04',
    image: 'https://cdn.shopify.com/s/files/1/0374/1499/4053/products/Profile_1024x1024@2x.jpg',
    name: 'Ceramic Howler Pendant',
    tags: ['other'],
    shop: {
      name: 'Lit Escalates',
      url: 'https://www.lit-escalates.com/'
    },
    description:
      'Stamped on the reverse with the House Mars Sigil, this unique artwork was fired with an iron oxide glaze to get that Martian-Red look and comes complete with a hand-forged iron hanging hook.',
    link: 'https://www.lit-escalates.com/products/ceramic-wolf-pendant',
    expired: true
  },
  {
    date: '2023-05-04',
    image: 'https://cdn.shopify.com/s/files/1/0374/1499/4053/products/Union_1024x1024@2x.jpg',
    name: 'Helldivers Union Button',
    tags: ['other'],
    shop: {
      name: 'Lit Escalates',
      url: 'https://www.lit-escalates.com/'
    },
    description:
      'While Quicksilver would probably fight unionization with every ounce of his murky being, we wanted to imaging what would happen if the Helldivers unionized during Dark Age.',
    link: 'https://www.lit-escalates.com/products/helldivers-union-button',
    expired: true
  },
  {
    date: '2023-05-04',
    image: 'https://cdn.shopify.com/s/files/1/0374/1499/4053/products/HeadbandSet_1024x1024@2x.jpg',
    name: 'Helldiver Headband Set',
    tags: ['other'],
    shop: {
      name: 'Lit Escalates',
      url: 'https://www.lit-escalates.com/'
    },
    description:
      "What would a Helldiver receive in the Laureltide box? A Helldiver sweat band of course. And a matching wristband. Blood doesn't show so badly on Red.",
    link: 'https://www.lit-escalates.com/products/helldiver-headband-set',
    expired: true
  },
  {
    date: '2023-05-04',
    image: 'https://cdn.shopify.com/s/files/1/0374/1499/4053/products/Back_1024x1024@2x.jpg',
    name: 'Sling Blade Pendant',
    tags: ['other'],
    shop: {
      name: 'Lit Escalates',
      url: 'https://www.lit-escalates.com/'
    },
    description:
      "Created by Master Artisan Connor Haygood of King Charles Forge, these Sling Blade necklace pendants were forged by hand from custom folded Damascus Steel at Connor's forge in Mississippi.",
    link: 'https://www.lit-escalates.com/products/sling-blade-pendant',
    expired: true
  },
  {
    date: '2023-05-04',
    image:
      'https://cdn.shopify.com/s/files/1/0374/1499/4053/products/needlessquare_1024x1024@2x.jpg',
    name: 'Stained Glass Howler Ornament',
    tags: ['other', 'christmas', 'christmas'],
    shop: {
      name: 'Lit Escalates',
      url: 'https://www.lit-escalates.com/'
    },
    description:
      'Whether hanging from your rearview mirror or as a part of your holiday decorations, our Stained Glass Howler Wolf is sure to make your frenemies howl with jealousy.',
    link: 'https://www.lit-escalates.com/products/stained-glass-howler-ornament',
    expired: true
  },
  {
    date: '2023-05-04',
    image: 'https://cdn.shopify.com/s/files/1/0374/1499/4053/products/Ornament4_1024x1024@2x.jpg',
    name: 'Sons of Ares Holiday Ornament',
    tags: ['other', 'christmas', 'christmas'],
    shop: {
      name: 'Lit Escalates',
      url: 'https://www.lit-escalates.com/'
    },
    description:
      "You asked for holiday ornaments and we delivered. However, we couldn't help but make one that doubles as a coaster so you can keep those gorydamn whiskey tumblers from putting rings on the Venusian side-table in your cockpit.",
    link: 'https://www.lit-escalates.com/products/sons-of-ares-holiday-ornament',
    expired: true
  },
  {
    date: '2023-05-04',
    image: 'https://cdn.shopify.com/s/files/1/0374/1499/4053/products/BEDLAM_1024x1024@2x.jpg',
    name: 'Hazard Bedlam Button',
    tags: ['other'],
    shop: {
      name: 'Lit Escalates',
      url: 'https://www.lit-escalates.com/'
    },
    description:
      "Commemorate your participation in this Summer's chaos with this bit of Red Rising Flair.",
    link: 'https://www.lit-escalates.com/products/hazard-bedlam-button',
    expired: true
  },
  {
    date: '2023-05-04',
    image: 'https://i.etsystatic.com/29764445/r/il/baff74/3814819528/il_794xN.3814819528_a1ap.jpg',
    name: 'SlingPen',
    tags: ['other'],
    shop: {
      name: 'OrangeArmory',
      url: 'https://www.etsy.com/shop/OrangeArmory'
    },
    description: 'If the pen is mightier than the sword, make sure you have the mightiest pen.',
    link: 'https://www.etsy.com/listing/1216887029/slingpen',
    expired: true
  },
  {
    date: '2023-05-04',
    image: 'https://i.etsystatic.com/29764445/r/il/7c1985/3866671817/il_794xN.3866671817_29dv.jpg',
    name: 'Sevro Razor Finished',
    tags: ['other', 'sevro'],
    shop: {
      name: 'OrangeArmory',
      url: 'https://www.etsy.com/shop/OrangeArmory'
    },
    description: "Sevro's Razor fully painted and assembled.",
    link: 'https://www.etsy.com/listing/1217942329/sevro-razor-finished',
    expired: true
  },
  {
    date: '2023-05-04',
    image: 'https://i.etsystatic.com/29764445/r/il/ef247c/3814877084/il_794xN.3814877084_r8x8.jpg',
    name: 'Sevro Razor Kit',
    tags: ['other', 'sevro'],
    shop: {
      name: 'OrangeArmory',
      url: 'https://www.etsy.com/shop/OrangeArmory'
    },
    description:
      "He's the only howler who uses a serrated blade, he thinks is looks scarier. He's right.",
    link: 'https://www.etsy.com/listing/1202946570/sevros-razor-kit'
  },
  {
    date: '2023-05-04',
    image: 'https://i.etsystatic.com/29764445/r/il/eaaeb4/3871931741/il_794xN.3871931741_s8gx.jpg',
    name: 'Telemanus Razor Unfinished',
    tags: ['other'],
    shop: {
      name: 'OrangeArmory',
      url: 'https://www.etsy.com/shop/OrangeArmory'
    },
    description: 'An unfinished Telemanus razor, printed in PLA comes in 8 pieces.',
    link: 'https://www.etsy.com/listing/1205271598/telemanus-razor-unfinished',
    expired: true
  },
  {
    date: '2023-05-04',
    image: 'https://i.etsystatic.com/iap/085502/3944675227/iap_640x640.3944675227_q1dcclux.jpg',
    name: 'Painted SlingPen',
    tags: ['other'],
    shop: {
      name: 'OrangeArmory',
      url: 'https://www.etsy.com/shop/OrangeArmory'
    },
    description: '1 Painted slingBlade pen.',
    link: 'https://www.etsy.com/listing/1235199809/painted-slingpen',
    expired: true
  },
  {
    date: '2023-05-04',
    image: 'https://i.etsystatic.com/29764445/r/il/7db900/3929500039/il_794xN.3929500039_puju.jpg',
    name: 'Mini Razor Trio',
    tags: ['other', 'mustang', 'sevro', 'darrow'],
    shop: {
      name: 'OrangeArmory',
      url: 'https://www.etsy.com/shop/OrangeArmory'
    },
    description: "1:4 scale finished razors of Mustang, Sevro, and Darrow's slingBlade.",
    link: 'https://www.etsy.com/listing/1235198891/mini-razor-trio',
    expired: true
  },
  {
    date: '2023-06-29',
    image: 'https://www.howlerholo.net/wp-content/uploads/2023/06/72762.jpg',
    name: 'The Rose Garden Key Chain',
    tags: ['other'],
    shop: {
      name: "The Howler's Den",
      url: 'https://www.howlerholo.net'
    },
    description: 'To the Rose Garden with you!',
    link: 'https://www.howlerholo.net/product/the-rose-garden-keychain/'
  },
  {
    date: '2023-06-29',
    image: 'https://www.howlerholo.net/wp-content/uploads/2023/06/68311.jpg',
    name: 'The Rose Garden Fleece Joggers',
    tags: ['other'],
    shop: {
      name: "The Howler's Den",
      url: 'https://www.howlerholo.net'
    },
    description: 'Fleece joggers with the Rose Garden logo.',
    link: 'https://www.howlerholo.net/product/the-rose-garden-fleece-joggers/'
  },
  {
    date: '2023-08-08',
    image: 'https://www.lit-escalates.com/cdn/shop/files/Bandana_1024x1024@2x.jpg',
    name: 'Light Bringer Page 01 Bandana',
    tags: ['other', 'light-bringer', 'howlercon'],
    shop: {
      name: 'Lit Escalates',
      url: 'https://www.lit-escalates.com/'
    },
    description:
      'Created exclusively for HowlerCon 2023, these bandanas were printed live at the event and are limited to the few leftovers we had after the chaos ended.',
    link: 'https://www.lit-escalates.com/collections/howlercon-2023/products/circus-bandana'
  },
  {
    date: '2023-08-09',
    image: 'https://i.etsystatic.com/42249263/r/il/e013e0/4907969474/il_794xN.4907969474_7jgn.jpg',
    name: 'Red Rising Neon Led Sign',
    tags: ['other'],
    shop: {
      name: 'GamerSetupStore',
      url: 'https://www.etsy.com/shop/GamerSetupStore'
    },
    description: 'Wall mounted RGB wolf sign.',
    link: 'https://www.etsy.com/listing/1482335243/',
    expired: true
  },
  {
    date: '2023-08-09',
    image: 'https://i.etsystatic.com/24845246/r/il/85a63c/5196579375/il_794xN.5196579375_od1q.jpg',
    name: 'Red Rising Howler Logo',
    tags: ['other'],
    shop: {
      name: 'AresIndustries3D',
      url: 'https://www.etsy.com/shop/AresIndustries3D'
    },
    description: '3D printed Howler logo, comes in three different colors.',
    link: 'https://www.etsy.com/listing/1522270843/'
  },
  {
    date: '2023-08-21',
    image: 'https://i.etsystatic.com/18590820/r/il/5bdcbb/2172647379/il_794xN.2172647379_qcgr.jpg',
    name: 'Darrow of Lykos Funko Pop',
    tags: ['other', 'darrow'],
    shop: {
      name: 'DreamInABottleShop',
      url: 'https://www.etsy.com/shop/DreamInABottleShop'
    },
    description:
      'This custom funko pop is inspired by Darrow, the main character of the Red Rising series.',
    link: 'https://www.etsy.com/listing/670592252/',
    expired: true
  },
  {
    date: '2023-08-22',
    image: 'https://i.etsystatic.com/18590820/r/il/bc92c9/4101104889/il_794xN.4101104889_sjgs.jpg',
    name: 'Red Rising Inspired Tote',
    tags: ['other'],
    shop: {
      name: 'DreamInABottleShop',
      url: 'https://www.etsy.com/shop/DreamInABottleShop'
    },
    description: 'Haul your books in style and show off your love for Red Rising.',
    link: 'https://www.etsy.com/listing/689164112/',
    expired: true
  },
  {
    date: '2023-09-07',
    image: 'https://i0.wp.com/stoneangelbrewing.com/wp-content/uploads/2022/03/stained-mock.jpg',
    name: 'Stained IPA (Full Greek)',
    tags: ['other'],
    shop: {
      name: 'Stone Angel Brewing',
      url: 'https://stoneangelbrewing.com/'
    },
    description: 'This warrior of a black IPA has hop aroma that battles between piney and citrus.',
    link: 'https://stoneangelbrewing.com/product/full-geek-stained/',
    expired: true
  },
  {
    date: '2023-10-05',
    image: 'https://i.etsystatic.com/18590820/r/il/9a6065/2100681701/il_794xN.2100681701_byux.jpg',
    name: 'Eo Of Lykos Funko Pop',
    tags: ['other'],
    shop: {
      name: 'DreamInABottleShop',
      url: 'https://www.etsy.com/shop/DreamInABottleShop'
    },
    description:
      'A custom funko pop based on the character of Eo from the amazing Red Rising series by Pierce Brown.',
    link: 'https://www.etsy.com/listing/732566712/',
    expired: true
  },
  {
    date: '2023-10-05',
    image: 'https://i.etsystatic.com/18590820/r/il/adc3d1/2125166274/il_794xN.2125166274_lbyo.jpg',
    name: 'Sevro au Barca Funko Pop',
    tags: ['other', 'sevro'],
    shop: {
      name: 'DreamInABottleShop',
      url: 'https://www.etsy.com/shop/DreamInABottleShop'
    },
    description: 'Muddy, bloody, pissed off Sevro au Barca. Just the way we all know and love him.',
    link: 'https://www.etsy.com/listing/728898847/',
    expired: true
  },
  {
    date: '2023-10-05',
    image: 'https://i.etsystatic.com/18590820/r/il/f4cd9f/2415867343/il_794xN.2415867343_mmyx.jpg',
    name: 'Ares Sevro Au Barca Funko Pop',
    tags: ['other', 'sevro'],
    shop: {
      name: 'DreamInABottleShop',
      url: 'https://www.etsy.com/shop/DreamInABottleShop'
    },
    description: "Everyone's favorite goblin, in the Ares helmet. Hand-sculpted and hand-painted.",
    link: 'https://www.etsy.com/listing/740089209/',
    expired: true
  },
  {
    date: '2023-10-05',
    image: 'https://i.etsystatic.com/18590820/r/il/570b00/2263436075/il_794xN.2263436075_lz4h.jpg',
    name: 'Bottled Helldiver Matches',
    tags: ['other'],
    shop: {
      name: 'DreamInABottleShop',
      url: 'https://www.etsy.com/shop/DreamInABottleShop'
    },
    description: 'Warning: May spark a revolution.',
    link: 'https://www.etsy.com/listing/770688466/',
    expired: true
  },
  {
    date: '2023-10-05',
    image: 'https://i.etsystatic.com/18590820/r/il/ff2168/3083414515/il_794xN.3083414515_6m81.jpg',
    name: 'Holiday ti Nakamura Funko Pop',
    tags: ['other'],
    shop: {
      name: 'DreamInABottleShop',
      url: 'https://www.etsy.com/shop/DreamInABottleShop'
    },
    description: 'Inspired by the Red Rising series by Pierce Brown.',
    link: 'https://www.etsy.com/listing/1006768033/',
    expired: true
  },
  {
    date: '2023-10-05',
    image: 'https://i.etsystatic.com/18590820/r/il/3b0090/2164378546/il_794xN.2164378546_fkg6.jpg',
    name: 'Apollonius Au Valii-Rath Funko Pop',
    tags: ['other'],
    shop: {
      name: 'DreamInABottleShop',
      url: 'https://www.etsy.com/shop/DreamInABottleShop'
    },
    description: 'Funko pop of Apollonius au Valii-Rath.',
    link: 'https://www.etsy.com/listing/748103810/',
    expired: true
  },
  {
    date: '2023-10-05',
    image: 'https://i.etsystatic.com/18590820/r/il/9410f0/2897698571/il_794xN.2897698571_ovj0.jpg',
    name: 'Mustang Funko Pop',
    tags: ['other', 'mustang'],
    shop: {
      name: 'DreamInABottleShop',
      url: 'https://www.etsy.com/shop/DreamInABottleShop'
    },
    description: 'Handmade, hand painted custom Funko pop of Mustang from the Red Rising series.',
    link: 'https://www.etsy.com/listing/943238706/',
    expired: true
  },
  {
    date: '2023-10-05',
    image: 'https://i.etsystatic.com/18590820/r/il/a89968/2026704004/il_794xN.2026704004_rn87.jpg',
    name: 'Ragnar Volarus Funko Pop',
    tags: ['other'],
    shop: {
      name: 'DreamInABottleShop',
      url: 'https://www.etsy.com/shop/DreamInABottleShop'
    },
    description: "Everyone's favorite stained, Ragnar Volarus.",
    link: 'https://www.etsy.com/listing/740660059/',
    expired: true
  },
  {
    date: '2023-10-05',
    image: 'https://i.etsystatic.com/18590820/r/il/3f6036/2850022916/il_794xN.2850022916_3ntf.jpg',
    name: 'Sefi the Quiet Funko Pop',
    tags: ['other'],
    shop: {
      name: 'DreamInABottleShop',
      url: 'https://www.etsy.com/shop/DreamInABottleShop'
    },
    description:
      'Handmade, hand painted custom Funko pop of Sefi the quiet from the Red Rising series.',
    link: 'https://www.etsy.com/listing/957190939/',
    expired: true
  },
  {
    date: '2023-10-05',
    image: 'https://i.etsystatic.com/18590820/r/il/b94efd/2024099434/il_794xN.2024099434_3yce.jpg',
    name: 'Victra Au Julii Funko Pop',
    tags: ['other', 'victra'],
    shop: {
      name: 'DreamInABottleShop',
      url: 'https://www.etsy.com/shop/DreamInABottleShop'
    },
    description:
      "Everyone's favorite Victra au Julii. Hand sculpted and painted! Complete with her Jade earrings and a golden razor.",
    link: 'https://www.etsy.com/listing/777030327/',
    expired: true
  },
  {
    date: '2023-10-05',
    image:
      'https://i.etsystatic.com/18590820/r/il/fbd16a/2121067322/il_680x540.2121067322_ifxj.jpg',
    name: 'Cassius au Bellona Funko Pop',
    tags: ['other', 'cassius'],
    shop: {
      name: 'DreamInABottleShop',
      url: 'https://www.etsy.com/shop/DreamInABottleShop'
    },
    description:
      'Handmade, hand painted custom Funko pop of Cassius au Bellona from the Red Rising series.',
    link: 'https://www.etsy.com/listing/748089508/',
    expired: true
  },
  {
    date: '2023-10-23',
    image: 'https://i.etsystatic.com/37251580/r/il/23aa93/5383773346/il_794xN.5383773346_m5px.jpg',
    name: 'Original Wolf Pencil Drawing',
    tags: ['other'],
    shop: {
      name: 'StillWoodsStudios',
      url: 'https://www.etsy.com/shop/StillWoodsStudios'
    },
    description:
      'Omnis Vir Lupus! Hand drawn on Acid Free paper. The finished product is 8x9 inches.',
    link: 'https://www.etsy.com/listing/1571039912/'
  },
  {
    date: '2023-10-23',
    image: 'https://i.etsystatic.com/24845246/r/il/e15a2c/5316626526/il_794xN.5316626526_geeu.jpg',
    name: 'Red Rising Christmas Howler Ornament',
    tags: ['other', 'christmas'],
    shop: {
      name: 'AresIndustries3D',
      url: 'https://www.etsy.com/shop/AresIndustries3D'
    },
    description: '3D printed Howler ornament from the Red Rising series.',
    link: 'https://www.etsy.com/listing/1324450374/',
    expired: true
  },
  {
    date: '2023-11-06',
    image: 'https://i.etsystatic.com/42249263/r/il/53f7f5/5393802064/il_794xN.5393802064_ovxq.jpg',
    name: 'Howler Neon Sign',
    tags: ['other'],
    shop: {
      name: 'GamerSetupStore',
      url: 'https://www.etsy.com/shop/GamerSetupStore'
    },
    description: 'Wall mounted RGB wolf sign.',
    link: 'https://www.etsy.com/listing/1587131443/',
    expired: true
  },
  {
    date: '2023-11-08',
    image: 'https://i.etsystatic.com/42249263/r/il/ee7b2e/5441957829/il_794xN.5441957829_jmsy.jpg',
    name: 'Omnis Vir Lupus Red Neon Led Sign',
    tags: [],
    shop: {
      name: 'GamerSetupStore',
      url: 'https://www.etsy.com/shop/GamerSetupStore'
    },
    description: 'Customizable wall mounted RGB sign.',
    link: 'https://www.etsy.com/listing/1572956738/',
    expired: true
  },
  {
    date: '2023-11-08',
    image: 'https://i.etsystatic.com/38585656/r/il/b60398/5235240088/il_794xN.5235240088_ji8u.jpg',
    name: 'Red Rising Wax Melts',
    tags: ['other'],
    shop: {
      name: 'TheCosyFlame',
      url: 'https://www.etsy.com/shop/TheCosyFlame'
    },
    description: 'Wax melts inspired by the Red Rising series.',
    link: 'https://www.etsy.com/listing/1554878749/',
    expired: true
  },
  {
    date: '2023-11-08',
    image: 'https://i.etsystatic.com/43921165/r/il/8fe239/5497709623/il_794xN.5497709623_13bj.jpg',
    name: 'Lo, Mustang and Reaper Tote',
    tags: ['other', 'darrow', 'mustang'],
    shop: {
      name: 'BookWears',
      url: 'https://www.etsy.com/shop/BookWears'
    },
    description: 'Two side tote with Mustang and Reaper.',
    link: 'https://www.etsy.com/listing/1598760009/'
  },
  {
    date: '2023-11-12',
    image: 'https://i.etsystatic.com/48035771/r/il/be80d5/5484785496/il_794xN.5484785496_1ntz.jpg',
    name: 'Engraved Brass Obsidian Coin',
    tags: ['other'],
    shop: {
      name: 'LykosMint',
      url: 'https://www.etsy.com/shop/LykosMint'
    },
    description:
      'Obsidian themed obverse & Minimalist solar system with society triangle in the center of the reverse.',
    link: 'https://www.etsy.com/listing/1592394982/',
    expired: true
  },
  {
    date: '2023-11-24',
    image: 'https://www.lit-escalates.com/cdn/shop/files/Cbust_1024x1024@2x.jpg',
    name: 'The Bust of Silenius au Lune (Crystalized)',
    tags: ['other', 'official'],
    shop: {
      name: 'Lit Escalates',
      url: 'https://www.lit-escalates.com/'
    },
    description:
      'The Crystalized Edition of our Silenius au Lune bust is cast from resin with a Weathered Marble patina and Limited to an Edition of 125.',
    link: 'https://www.lit-escalates.com/collections/cybermonday/products/crystal-edition-the-bust-of-silenius-au-lune',
    expired: true
  },
  {
    date: '2023-11-24',
    image:
      'https://www.lit-escalates.com/cdn/shop/files/Front_700124f7-d516-43f8-bdff-f162262f8b2a_1024x1024@2x.jpg',
    name: 'The Bust of Silenius au Lune',
    tags: ['other', 'official'],
    shop: {
      name: 'Lit Escalates',
      url: 'https://www.lit-escalates.com/'
    },
    description:
      'Our Silenius au Lune bust is cast from resin, finished with a Weathered Marble patina and Limited to an Edition of 225.',
    link: 'https://www.lit-escalates.com/collections/cybermonday/products/the-bust-of-silenius-au-lune'
  },
  {
    date: '2023-11-24',
    image: 'https://www.lit-escalates.com/cdn/shop/files/card1_1024x1024@2x.png',
    name: 'Howler Holiday Card',
    tags: ['other', 'official', 'christmas'],
    shop: {
      name: 'Lit Escalates',
      url: 'https://www.lit-escalates.com/'
    },
    description:
      'Illustrated by our very own Christine Aria, this adorable holiday card features a gorgeous watercolor painting of Sophocles bedecked in a Santa hat nested in a wreath of jellybeans.',
    link: 'https://www.lit-escalates.com/collections/cybermonday/products/howler-holiday-card'
  },
  {
    date: '2023-11-24',
    image:
      'https://www.lit-escalates.com/cdn/shop/files/christmas-stocking-white-front-655d5173221bb_1024x1024@2x.jpg',
    name: 'Red Rising Christmas Stocking',
    tags: ['other', 'official', 'christmas'],
    shop: {
      name: 'Lit Escalates',
      url: 'https://www.lit-escalates.com/'
    },
    description:
      "Ready to be filled with your favorite Red Rising Fan's choicest whiskeys, weapons and whimsies.",
    link: 'https://www.lit-escalates.com/collections/cybermonday/products/red-rising-christmas-stocking'
  },
  {
    date: '2024-01-23',
    image: 'https://i.etsystatic.com/47602254/r/il/4667f1/5703918859/il_794xN.5703918859_337u.jpg',
    name: 'Wakey Wakey Goblin Coaster',
    tags: ['other', 'sevro'],
    shop: {
      name: 'RedRisingMugs',
      url: 'https://www.etsy.com/shop/RedRisingMugs'
    },
    description:
      'Let these coasters serve as a covert symbol of unity, where rebellion and courtesy intertwine in the tapestry of revolution.',
    link: 'https://www.etsy.com/listing/1639412844/'
  },
  {
    date: '2024-01-23',
    image: 'https://i.etsystatic.com/47602254/r/il/bad297/5655853172/il_794xN.5655853172_awx7.jpg',
    name: 'Break the Chains Coaster',
    tags: ['other'],
    shop: {
      name: 'RedRisingMugs',
      url: 'https://www.etsy.com/shop/RedRisingMugs'
    },
    description:
      'Let these coasters serve as a covert symbol of unity, where rebellion and courtesy intertwine in the tapestry of revolution.',
    link: 'https://www.etsy.com/listing/1653577959/'
  },
  {
    date: '2024-01-23',
    image: 'https://i.etsystatic.com/47602254/r/il/900104/5655848010/il_794xN.5655848010_fpur.jpg',
    name: 'Summon the Howlers Coaster',
    tags: ['other'],
    shop: {
      name: 'RedRisingMugs',
      url: 'https://www.etsy.com/shop/RedRisingMugs'
    },
    description:
      'Let these coasters serve as a covert symbol of unity, where rebellion and courtesy intertwine in the tapestry of revolution.',
    link: 'https://www.etsy.com/listing/1653576763/'
  },
  {
    date: '2024-01-23',
    image: 'https://i.etsystatic.com/47602254/r/il/a024c0/5655839144/il_794xN.5655839144_mw2d.jpg',
    name: 'Helium-3 Coaster',
    tags: ['other'],
    shop: {
      name: 'RedRisingMugs',
      url: 'https://www.etsy.com/shop/RedRisingMugs'
    },
    description:
      'Let these coasters serve as a covert symbol of unity, where rebellion and courtesy intertwine in the tapestry of revolution.',
    link: 'https://www.etsy.com/listing/1639407892/'
  },
  {
    date: '2024-01-27',
    image:
      'https://www.lit-escalates.com/cdn/shop/files/DarrowofLykos_ActionFigure_Front_1024x1024@2x.jpg',
    name: 'Darrow of Lykos Action Figure',
    tags: ['other', 'official'],
    shop: {
      name: 'Lit Escalates',
      url: 'https://www.lit-escalates.com/'
    },
    description:
      'Our Darrow of Lykos action figure is 5.5 inches tall and features hand painted details over injection molded vinyl.',
    link: 'https://www.lit-escalates.com/products/darrow-of-lykos-action-figure'
  },
  {
    date: '2024-01-27',
    image: 'https://www.lit-escalates.com/cdn/shop/products/RisingBACKB_1024x1024@2x.jpg',
    name: 'Red Rising Card Deck',
    tags: ['other', 'official'],
    shop: {
      name: 'Lit Escalates',
      url: 'https://www.lit-escalates.com/'
    },
    description:
      'Designed by Randy Butterfield of Midnight Cards with unique illustrations of your favorite Red Rising characters by Briana Crotinger (PB Doodles).',
    link: 'https://www.lit-escalates.com/products/red-rising-card-deck-wholesale'
  },
  {
    date: '2024-01-27',
    image:
      'https://www.lit-escalates.com/cdn/shop/files/d2d2be5fc937c544c830c6a1a69f9b9e_original_4d1b6698-92ff-443b-85db-1ffdc6601cfa_1024x1024@2x.jpg',
    name: 'House Mars LUXE Card Deck',
    tags: ['other', 'official'],
    shop: {
      name: 'Lit Escalates',
      url: 'https://www.lit-escalates.com/'
    },
    description:
      'Designed by Randy Butterfield of Midnight Cards with unique illustrations of your favorite Red Rising characters by Briana Crotinger (PB Doodles).',
    link: 'https://www.lit-escalates.com/products/copy-of-house-mars-card-deck-pos'
  },
  {
    date: '2024-01-28',
    image:
      'https://www.lit-escalates.com/cdn/shop/files/LitEscalates_HouseTelemanusPropitiusBeans_1024x1024@2x.jpg',
    name: 'House Telemanus Propitious Beans',
    tags: ['other', 'official'],
    shop: {
      name: 'Lit Escalates',
      url: 'https://www.lit-escalates.com/'
    },
    description:
      'Featuring the official House Telemanus Sigil designed just for this item by Joel Daniel Phillips, our House Telemanus Propitious Beans will bring a smile to the face of even the most curmudgeonly of Red Rising Fans.',
    link: 'https://www.lit-escalates.com/products/house-telemanus-propitious-beans',
    expired: true
  },
  {
    date: '2024-02-03',
    image: 'https://www.lit-escalates.com/cdn/shop/files/PierceCard_1024x1024@2x.jpg',
    name: "You're the Sevro to my Darrow Card",
    tags: ['other', 'official', 'sevro', 'darrow'],
    shop: {
      name: 'Lit Escalates',
      url: 'https://www.lit-escalates.com/'
    },
    description:
      'This one is for your fav flave... your ride or die. Created in response to a poll asking your favorite Sevro/Darrow bromance moment.',
    link: 'https://www.lit-escalates.com/products/top-secret-3'
  },
  {
    date: '2024-02-21',
    image: 'https://i.etsystatic.com/15519608/r/il/f7e5cb/5719934858/il_794xN.5719934858_jw1g.jpg',
    name: 'Darrow Kindle Charm',
    tags: ['other', 'darrow'],
    shop: {
      name: 'BookmarksBaublesFae',
      url: 'https://www.etsy.com/shop/BookmarksBaublesFae'
    },
    description: 'Handmade beaded and elastic corded Kindle Case Sleeve charm.',
    link: 'https://www.etsy.com/listing/1668928295/'
  },
  {
    date: '2024-02-21',
    image: 'https://i.etsystatic.com/15519608/r/il/e898ae/5719956510/il_794xN.5719956510_tok3.jpg',
    name: 'Sevro Kindle Charm',
    tags: ['other', 'sevro'],
    shop: {
      name: 'BookmarksBaublesFae',
      url: 'https://www.etsy.com/shop/BookmarksBaublesFae'
    },
    description: 'Handmade beaded and elastic corded Kindle Case Sleeve charm.',
    link: 'https://www.etsy.com/listing/1654765936/'
  },
  {
    date: '2024-02-21',
    image: 'https://i.etsystatic.com/25281788/r/il/558cd6/2735249115/il_794xN.2735249115_jhrp.jpg',
    name: 'Howler Wolf Glass Art',
    tags: ['other'],
    shop: {
      name: 'MortalGodsGlass',
      url: 'https://www.etsy.com/shop/MortalGodsGlass'
    },
    description:
      'Handmade Wolf Stained Glass Art! Inspired by House Mars, this is a perfect gift or wall/window decoration!',
    link: 'https://www.etsy.com/listing/909958319/'
  }
];

export default data;
