let qrcode = new QRCode("qrcode", {
  text: window.location.href,
  width: 160,
  height: 160,
  colorDark: "#ffffff",
  colorLight: "#000000",
  correctLevel: QRCode.CorrectLevel.H,
});
