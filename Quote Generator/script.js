async function getRandomQuote() {
  try {
    // Fetch the quotes JSON file
    const response = await fetch('quotes_with_ids.json');
    const { quotes } = await response.json();

    // Ensure quotes exist in the file
    if (!quotes || quotes.length === 0) {
      throw new Error('No quotes available');
    }

    // Pick a random quote
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

    // Display the quote in the HTML
    document.getElementById('quoteDisplay').textContent = `Quote : ${randomQuote.quote}`;

  } catch (error) {
    console.error('Error fetching quotes:', error);
    document.getElementById('quoteDisplay').textContent = 'Error: Unable to load quotes.';
  }
}

// Load a random quote when the page is loaded
window.onload = getRandomQuote;
