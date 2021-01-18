require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const taskRouter = require('./src/routes/task');
const dbConnect = require('./src/config/db');
const cors = require('cors');

dbConnect();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/tasks', taskRouter);

app.listen(PORT, () => {
  console.log('Server started on port: ', PORT);
});
