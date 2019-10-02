"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
//import orderController from './controllers/order-controllers';
//import logger from './middlewares/logging';
var app = express_1.default();
//app.use(logger);
//app.use(express.static('../public'));
//app.set('view engine', 'ejs');
//the router
app.get('/', function (req, res) { return res.end('This is express server'); });
//app.get('/order', orderController);
app.listen(4000, function () { return console.log('The server is running on http://localhost:4000'); });
