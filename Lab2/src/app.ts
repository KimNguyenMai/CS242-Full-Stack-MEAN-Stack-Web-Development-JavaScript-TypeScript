import express from 'express';

import addressControl from './controllers/address-controller';

import logger from './middleware/timestamp';

const app = express();

app.use(logger);
app.use(express.static('../public'));
app.set('view engine', 'ejs');
app.set('views', './views');

//the router
app.get('/' || '/home', (req, res) => res.end('This is express server'));
app.get('/address', addressControl);


app.listen (4000, () => console.log('The server is running on http://localhost:4000'));

