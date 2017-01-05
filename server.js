/**
 * Created by ilyapolyakov on 12/25/16.
 */
'use strict';
// Load dependencies
const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

// Public route
app.get('/api/deals/public', (req, res)=>{
    let deals = [
        // Array of public deals here
    ];
    res.json(deals);
})

// Private route
app.get('/api/deals/private', (req,res)=>{
    let deals = [
        // Array of Private Deals here
    ];
    res.json(deals);
})

app.listen(3001);
console.log('Serving deals on localhost:3001');