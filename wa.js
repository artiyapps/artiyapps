document.querySelectorAll(".product-btn").forEach(btn => {
  btn.addEventListener("click", function () {

    let product = this.getAttribute("data-product");

    let message = `Hi *Artiy Apps* ,
Need best price for ${product}, for customisation`;

    let number = "918129417870"; // your number (no +)

    let url = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");

  });
});

