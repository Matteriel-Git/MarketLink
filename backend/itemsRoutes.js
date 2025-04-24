
const express = require('express');
const database = require('./connect');

let itemsRoutes = express.Router();

// - Retrieve all
itemsRoutes.route('/items').get(async (req, res) => {
    let db = database.getDb();
    let data = await db.collection('items').find({}).toArray();
    if (data.length > 0) {
        res.json(data);
    } else {
        throw new Error('Data was not found');
    }
});

// - Retrieve one



// - Create one



// - Update one
// - Delete one