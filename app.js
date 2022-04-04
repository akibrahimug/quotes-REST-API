const express = require('express');
const app = express();
const records = require('./records')

// Send a GET request /quotes to READ all the quotes
app.get('/quotes', async(req,res) => {
    const quotes = await records.getQuotes();
    res.json(quotes)
})
// Send a GET request /qoutes/:id to READ a quote
app.get('/quotes/:id', async(req,res) => {
    const quote = await records.getQuote(req.params.id);
    res.json(quote)
})
// Send a POST request /qoutes/ to CREATE a quote
// Send a PUT request /quotes/:id toUPDATE a quote
// Send a DELETE request /quotes/:id to DELETE a quote

// Send a GET request /quotes/quote/random to READ a random quote

app.listen(3000, () => console.log('Quote API listening on port 3000!'));
