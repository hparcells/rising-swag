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

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  const data = request;

  const output = document.getElementById('output');
  output.innerHTML = '';

  if(typeof data === 'string') {
    output.textContent = data;
    return;
  }
  
  if (Object.keys(data).length) {
    const {
      name,
      image,
      shop,
      description,
    } = data;

    const string = 'TODO';
    
    const textArea = document.createElement('textarea');
    textArea.classList.add('outputBox');
    textArea.value = string;
    textArea.rows = 10;
    textArea.readOnly = true;
    output.appendChild(textArea);
    textArea.select();
  }
});
