document.addEventListener('DOMContentLoaded', function () {
  const qrCodeElement = document.getElementById('qrcode');
  const url = 'http://192.168.1.47:3000/ar.html?modelUrl=models/model1/scene.gltf';

  new QRCode(qrCodeElement, {
    text: url,
    width: 256,
    height: 256,
    colorDark: '#000000',
    colorLight: '#ffffff',
    correctLevel: QRCode.CorrectLevel.H,
  });
});
