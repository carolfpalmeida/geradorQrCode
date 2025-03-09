function gerarQRCode() {
  let inputText = document.getElementById("input-text").value;
  if (inputText.trim() === "") {
    alert("Digite algo para gerar o QR Code!");
    return;
  }
  let qrImage = document.getElementById("qr-code");
  qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputText}`;
}
