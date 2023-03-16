const express = require('express');
const app = express();

app.get('/ma-route', (req, res) => {
  res.send('Bienvenue sur ma route personnalisée!');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
