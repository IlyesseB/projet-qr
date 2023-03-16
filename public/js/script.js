document.addEventListener('DOMContentLoaded', function () {
  const qrCodeElement = document.getElementById('qrcode');
  const url = 'https://www.ilyessebouraghda.fr/ar.html?modelUrl=models/model1/scene.gltf';

  new QRCode(qrCodeElement, {
    text: url,
    width: 256,
    height: 256,
    colorDark: '#000000',
    colorLight: '#ffffff',
    correctLevel: QRCode.CorrectLevel.H,
  });
});
