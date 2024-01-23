let imgBox = document.getElementById("imgBox");
let qrImage = document.getElementById("qrImg");
let qrText = document.getElementById("qrText");
function generateQR() {
  if (qrText.value.length > 0) {
    qrImage.src =
      " https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
      qrText.value;
    imgBox.classList.add("show-img");
  } else {
    qr.Text.classList.add("error");
    setTimeout(() => {
      qr.Text.classList.remove("error");
    }, 1000);
  }
}
