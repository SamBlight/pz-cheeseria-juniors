import * as express from 'express';
const cheeses = require('./data/cheeses.json');

const router = express.Router();

router.get('/api/cheeses', (req, res, next) => {

  res.json(cheeses);
});

const purchaseOrder = [];

router.post('/api/purchase', (req, res, next) => {

   purchaseOrder.push(req.body);
});

router.get('/api/purchase', (req, res, next) => {

  res.json(purchaseOrder);
});

export default router;
