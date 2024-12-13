document.getElementById('fetch').addEventListener('click', () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    function fetchData() {
      if(!document.location.host.includes('etsy.com')) {
        (async () => {
          await chrome.runtime.sendMessage('This extension only works on Etsy.com.');
        })();
        return;
      }
      
      const name = document.querySelector('h1').innerText;
      const image = document.querySelector(".carousel-image").src;
      const shopName = document.querySelector(".wt-text-link-no-underline").innerText;
      const description = document.querySelector('p[data-product-details-description-text-content]').innerText.replace(/\n+/g, ' ');
      const shopUrl = `https://www.etsy.com/shop/${shopName}`;
      const itemId = document.location.pathname.match(/listing\/(\d*)/)[1];
      const link = `https://www.etsy.com/listing/${itemId}`;
      
      (async () => {
        await chrome.runtime.sendMessage({
          name,
          image,
          shop: {
            name: shopName,
            url: shopUrl
          },
          description,
          link
        });
      })();
    };
    
    const tab = tabs[0];

    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: fetchData
    });
  });
});

chrome.runtime.onMessage.addListener(async (request, sender, sendResponse) => {
  const data = request;

  const output = document.getElementById('output');
  output.innerHTML = '';

  if(typeof data === 'string') {
    output.textContent = data;
    return;
  }
  
  if (Object.keys(data).length) {
    let {
      name,
      image,
      shop,
      description,
    } = data;

    const keyResponse = await fetch('MASTER_ETSY_API_KEY.txt');
    const key = await keyResponse.text();
    
    const shortenNameResponse = await fetch('https://api.hunterparcells.com/etsy/shorten-name', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Etsy-Key': key
      },
      body: JSON.stringify({ name })
    });
    const shortenedName = await shortenNameResponse.text();

    const date = new Date().toISOString().split('T')[0];

    const string = `,{
      date: '${date}',
      image: '${image}',
      name: '${shortenedName}',
      tags: [],
      shop: {
        name: '${shop.name}',
        url: '${shop.url}'
      },
      description: 'FILL',
      link: '${data.link}'
    }`;
    
    const textArea = document.createElement('textarea');
    textArea.classList.add('outputBox');
    textArea.value = string;
    textArea.rows = 10;
    textArea.readOnly = true;
    output.appendChild(textArea);
    textArea.select();
  }
});
