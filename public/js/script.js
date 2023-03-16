document.addEventListener('DOMContentLoaded', function () {
  console.log('DOM content loaded');
  const qrCodeElement = document.getElementById('qrcode');
  console.log('qrCodeElement:', qrCodeElement);
  const url = 'https://sleepy-taiga-62999.herokuapp.com/ar?modelUrl=models/model1/scene.gltf';

  new QRCode(qrCodeElement, {
    text: url,
    width: 256,
    height: 256,
    colorDark: '#000000',
    colorLight: '#ffffff',
    correctLevel: QRCode.CorrectLevel.H,
  });
});
