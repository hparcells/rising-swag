---
sidebar_position: 2
---

# Contributing

Thank you for being interested in contributing to this project of mine.

The Red Rising saga by Pierce Brown has been one of my favorite book series, and the community is one that I have been a part of quite some time now, and always have been welcoming. Over the years, I've seen many different items being sold online to rep the fandom. The goal of this project was to gather all of these items onto a single page, and because of how passionate the community is, there is nearly an endless supply of things on sites like Etsy and Redbubble.

## Ways to Contribute
### Adding New Items

If there is an item that is missing from the website, I would love to know about it! It doesn't have to be strictly Red Rising related, as there are some items on the site already that dance around quotes like "Per Aspera Ad Astra" but the item must be at least somewhat relevant. There are a number of ways you can get started.

- You can send me a direct message on [Twitter](https://twitter.com/hunterparcells).
- You can send me an email at `contact@hunterparcells.com`.
- You can open up an issue with the "New item" template on GitHub.
- You can fork this repository and add the item yourself with a Pull Request. Changes may be requested.
- Using the new Discussions feature in GitHub, you can open a discussion post.

There are a couple requirements. The item must not currently be on the site, and as stated before, the item must be at least somewhat relevant to the Red Rising universe.

### Updating Items

There are times where an item may sell out, or an item may no longer be sold, and yet be still listed on the website. If this is a case, you can let me know with the same methods listed above.

If you would like to add this yourself, it's as simple as a single line of "code." In the item files in `/src/data`, there is an array of objects. Each of these objects may take `expired: true` to hide it from the website. For example:

```typescript
{
  date: '2023-03-14',
  image:
    'https://milesbenskydesigns.square.site/uploads/1/4/1/5/141543876/s308665402237166980_p9_i1_w3024.jpeg',
  name: 'Cassius Art Print (8" x 10")',
  tags: ['print'],
  shop: {
    name: 'Miles Bensky Designs',
    url: 'https://milesbenskydesigns.square.site/'
  },
  description: 'Physical Print of the Morning Knight, Cassius au Bellona.',
  link: 'https://milesbenskydesigns.square.site/product/cassius-art-print-8-x-10-/9',
  expired: true
},
```

### Adding Features

If there is something missing that you would like to see, open an issue! I'd love to discuss this.
