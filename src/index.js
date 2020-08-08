const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routers/authRoutes');

const app = express();

app.use(authRoutes);

const mongoUri = 'mongodb+srv://admin:passwordpassword@cluster0.vk6mi.mongodb.net/<dbname>?retryWrites=true&w=majority';
mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
  console.log('Connected to mongo instance');
});

mongoose.connection.on('error', (err) => {
  console.error('error connecting to mongo', err)
})

app.get('/', (req, res) => {
  res.send('Hi there!!');
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
