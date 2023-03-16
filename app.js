const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Ajoutez cette ligne pour servir les fichiers statiques
app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
