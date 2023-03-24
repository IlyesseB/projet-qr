document.addEventListener("DOMContentLoaded", function () {
  const qrCodeElement1 = document.getElementById("qrcode1");
  const qrCodeElement2 = document.getElementById("qrcode2");
  const url1 = "https://your-domain.com/ar.html?modelUrl=models/model1/scene.gltf";
  const url2 = "https://your-domain.com/ar.html?modelUrl=models/model2/scene.gltf";

  new QRCode(qrCodeElement1, {
    text: url1,
    width: 256,
    height: 256,
    colorDark: "#000000",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H,
  });

  new QRCode(qrCodeElement2, {
    text: url2,
    width: 256,
    height: 256,
    colorDark: "#000000",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H,
  });
});
