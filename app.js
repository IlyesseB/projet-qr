const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('public'));

app.get('/ar', (req, res) => {
  res.sendFile(__dirname + '/public/ar.html');
});


const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
