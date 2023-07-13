// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const authRoutes = require('./routes/auth');
const lotissemntRoutes = require('./routes/lotissemntRoutes');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/auth', authRoutes);
app.use('/api/lotissemnts', lotissemntRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
