function generateQRCode() {
  const input = document.getElementById("qrInput").value;
  const qrBox = document.getElementById("qrcode");
  const downloadBtn = document.getElementById("downloadBtn");

  if (!input.trim()) {
    alert("Please enter some text.");
    return;
  }

  qrBox.innerHTML = ""; // Clear old QR
  downloadBtn.style.display = "none"; // Hide button until generated

  QRCode.toDataURL(input, { width: 200 }, function (err, url) {
    if (err) {
      alert("Error generating QR code.");
      console.error(err);
      return;
    }

    const img = document.createElement("img");
    img.src = url;
    img.alt = "Generated QR Code";
    img.style.width = "200px";
    qrBox.appendChild(img);

    // Set download link
    downloadBtn.href = url;
    downloadBtn.style.display = "inline-block";
  });
}