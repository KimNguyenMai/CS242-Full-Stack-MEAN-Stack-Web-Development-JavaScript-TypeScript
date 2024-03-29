import express from 'express';

import orderController from './controllers/order-controllers';

import logger from './middlewares/logging';

const app = express();

app.use(logger);
app.use(express.static('../public'));
app.set('view engine', 'ejs');

//the router
app.get('/', (req, res) => res.render('index', {
    title: 'The index page tittle',
    content: 'This is the content for the index page'
}));
app.get('/order', orderController);

app.listen (3000, () => console.log('The server is running on http://localhost:3000'));

