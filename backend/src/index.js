/**
 * Created by ilyapolyakov on 12/25/16.
 */
// Load dependencies
// const express = require('express');
// const app = express();
// const cors = require('cors');

import http from 'http';

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World!!\n');
}).listen(1337, 'localhost');

// app.use(cors());
//
// // Public route
// app.get('/api/deals/public', (req, res) => {
//     let deals = [
//         // Array of public deals here
//     ];
//     res.json(deals);
// })
//
// // Private route
// app.get('/api/deals/private', (req,res) => {
//     let deals = [
//         // Array of Private Deals here
//     ];
//     res.json(deals);
// })
//
// app.listen(1337);
console.log('Serving deals on localhost:1337');