const express = require('express');
const connectDB = require('./config/db');


const app = express();

// Connect to database
connectDB();

app.use(express.json({ extended: false }));
app.use('/api/url', require('./routes/url'));
const PORT = 5000;

app.listen(PORT, () => console.log(`Server srunning on port ${PORT}`));