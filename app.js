const express = require('express');
const { restart } = require('nodemon');
const app = express();
const records = require('./records')

app.use(express.json())
// Send a GET request /quotes to READ all the quotes
app.get('/quotes', async(req,res) => {
    try{
        const quotes = await records.getQuotes();
        res.json(quotes)
    }catch(err) {
        res.json({message: err.message})
    }
    
})
// Send a GET request /qoutes/:id to READ a quote
app.get('/quotes/:id', async(req,res) => {
    try{
        const quote = await records.getQuote(req.params.id);
        if(qoutes){
            res.json(quote)
        }else{
            res.status(404).json({message: "Quote not found"})
        }
    }catch(err){
        res.status(500).json({message: err.message})
    }

})
// Send a POST request /qoutes to CREATE a quote
app.post('/quotes', async(req,res) => {
    try{
        if(req.body.author && req.body.quote){
            const createQuote = await records.createQuote({
                quote: req.body.quote,
                author: req.body.author
            })
            res.status(201).json(createQuote)
        }else{
            res.status(400).json({message: "Quote and Author required"})
        }
        
    }catch(err){
        res.status(500).json({message: err.message})
    }
})
// Send a PUT request /quotes/:id toUPDATE a quote
// Send a DELETE request /quotes/:id to DELETE a quote

// Send a GET request /quotes/quote/random to READ a random quote

app.listen(3000, () => console.log('Quote API listening on port 3000!'));
