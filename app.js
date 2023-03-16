const express = require('express');
const QRCode = require('qrcode');
const app = express();

app.get('/ma-route', (req, res) => {
  res.send('Bienvenue sur ma route personnalisée!');
});

app.get('/qr-code', async (req, res) => {
  try {
    const url = 'https://example.com'; // Remplacez par l'URL souhaitée
    const qrCodeImage = await QRCode.toDataURL(url);
    res.send(`<img src="${qrCodeImage}" alt="QR Code" />`);
  } catch (error) {
    console.error(error);
    res.status(500).send('Erreur lors de la génération du QR Code');
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
