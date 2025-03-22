const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const customerRoutes = require('./routes/customers');
const menuRoutes = require('./routes/menu');
const roomRoutes = require('./routes/rooms');
const paymentRoutes = require('./routes/payments');

const app = express();
app.use(express.json());
app.use(cors());
