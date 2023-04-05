---
sidebar_position: 1
---

# API

There is a public and free API available for use to query for the data that Rising Swag serves. **The base url for which is https://risingswag.com/api/v1**.

## Data

### `/data`

Returns every item.

### `/random`

Returns a random item.

## Shops

### `/shops`

Returns all of the shops and their item counts.

```ts
[
  {
    name: "3DPrintsbyTheodore",
    url: "https://www.etsy.com/shop/3DPrintsbyTheodore",itemCount:1
  },
  {
    name: "Badali Jewelry",
    url: "https://badalijewelry.com/collections/red-rising/",itemCount: 31
  },
  // ...
]
```

### `/shop/[shopName]`

Returns all the items of a specified shop.

```ts
{
  name: "OrangeArmory",
  url: "https://www.etsy.com/shop/OrangeArmory",
  items: [
    {
      "date": "2023-03-14",
      "image": "https://i.etsystatic.com/29764445/r/il/c169c3/3801211612/il_794xN.3801211612_9c1a.jpg",
      "name": "Finished SlingBlade",
      "tags": [
          "other"
      ],
      "shop": {
          "name": "OrangeArmory",
          "url": "https://www.etsy.com/shop/OrangeArmory"
      },
      "description": "It'll save your life, at the cost of a limb. Fully finished with acrylic paint and simulated leather on the hilt. Nearly 3 feet long, will come shipped in 2 pieces.",
      "link": "https://www.etsy.com/listing/1199461676/finished-slingblade"
    },
    // ...
  ]
}
```

## Tags

### `/tags`

Returns all the tags and their item counts.

```ts
[
  {
    tag: "blue",
    itemCount: 7
  },
  {
    tag: "bookmark",
    itemCount: 12
  },
  // ...
]
```

### `/tag/[tagName]`

Returns all the items with the specified tag.

```ts
[
  {
    date: "2023-03-13",
    image: "https://cdn.shopify.com/s/files/1/0374/1499/4053/products/retro-trucker-hat-black-front-60a697ccf17f1_1024x1024.jpg",
    name: "Blue Sigil Trucker Cap",
    tags: [
      "hat",
      "blue",
      "official"
    ],
    shop: {
      name: "Lit Escalates",
      url: "https://www.lit-escalates.com/"
    },
    description: "Emblazoned with the Official Blue Sigil from Pierce Brown's Red Rising series.",
  },
  // ...
]
```
