const newQuoteButton = document.querySelector('#js-new-quote');
newQuoteButton.addEventListener('click', getQuote);
    
    async function getQuote() {
        const endpoint = 'https://api.whatdoestrumpthink.com/api/v1/quotes/random';
     
        try {
          const response = await fetch(endpoint)
          if (!response.ok) {
            throw Error(response.statusText)
          }
      
          const json = await response.json();
          displayQuote(json.message);
          setTweetButton(json.message);
        } catch (err) {
          console.log(err)
          alert('Failed to fetch new quote');
        }
      }getQuote();
      function displayQuote(quote) {
        const quoteText = document.querySelector('#js-quote-text');
        quoteText.textContent = quote;
      }

      const twitterButton = document.querySelector('#js-tweet');
      function setTweetButton(quote) {
        twitterButton.setAttribute('href', `https://twitter.com/share?text=${quote} - Donald Trump`);
      }