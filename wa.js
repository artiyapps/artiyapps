/* ================= WHATSAPP ORDER ================= */

document.querySelectorAll(".product-btn").forEach(btn => {
  btn.addEventListener("click", function () {

    let product = this.getAttribute("data-product");

    let message = `Hi *Artiy Apps* ,
Need best price for ${product}, for customisation`;

    let number = "918129417870";

    let url = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");

  });
});


/* ================= FOOTER GALLERY ================= */

/*
  Add all your website images here.
  Change the number if your image collection is larger/smaller.
*/

/* ================= FOOTER GALLERY ================= */

const galleryImages = [
  "images/Birthday-gift.webp",
  "images/Birthday-gift1.webp",
  "images/Ceremony-box.webp",
  "images/Chocolate-bouquet.webp",
  "images/Chocolate-box.webp",
  "images/Chocolate-hamper.webp",
  "images/Dress-hamper.webp",
  "images/Engagement-hamper.webp",
  "images/Flower-bouquet.webp",
  "images/Frames.webp",
  "images/Gift-box.webp",
  "images/Hamper-set.webp",
  "images/Hamper.webp",
  "images/img.webp",
  "images/img2.webp",
  "images/img3.webp",
  "images/img4.webp",
  "images/img5.webp",
  "images/img6.webp",
  "images/img7.webp",
  "images/img8.webp",
  "images/img9.webp",
  "images/img10.webp",
  "images/img11.webp",
  "images/img12.webp",
  "images/img13.webp",
  "images/img14.webp",
  "images/img15.webp",
  "images/img16.webp",
  "images/img17.webp",
  "images/img18.webp",
  "images/img19.webp",
  "images/img20.webp",
  "images/img21.webp",
  "images/img22.webp",
  "images/img23.webp",
  "images/img24.webp",
  "images/img25.webp",
  "images/img26.webp",
  "images/Mini-chocolate-bouquet.webp",
  "images/Money-tower.webp",
  "images/Name-wallet.webp",
  "images/Photo-gift-card.webp",
  "images/Ring-album.webp",
  "images/Sketch-wallet.webp",
  "images/Trolley-hamper.webp",
  "images/Wedding-hamper.webp"
];

/* CREATE LIGHTBOX */

const lightbox = document.createElement("div");
lightbox.className = "lightbox";

lightbox.innerHTML = `
  <span class="lightbox-close">&times;</span>

  <span class="lightbox-prev">&#10094;</span>

  <img class="lightbox-image" src="" alt="Gallery Image">

  <span class="lightbox-next">&#10095;</span>

  <div class="lightbox-counter"></div>
`;

document.body.appendChild(lightbox);


/* ELEMENTS */

const lightboxImage = lightbox.querySelector(".lightbox-image");
const closeButton = lightbox.querySelector(".lightbox-close");
const prevButton = lightbox.querySelector(".lightbox-prev");
const nextButton = lightbox.querySelector(".lightbox-next");
const counter = lightbox.querySelector(".lightbox-counter");

let currentImage = 0;


/* FOOTER IMAGES */

const footerImages = document.querySelectorAll(".footer-gallery img");


footerImages.forEach(img => {

  img.parentElement.addEventListener("click", function(e) {

    e.preventDefault();

    /*
      Find which image was clicked
      inside our complete gallery list.
    */

    let clickedImage = img.getAttribute("src");

    currentImage = galleryImages.indexOf(clickedImage);

    /*
      If image isn't found in the list,
      use the first image.
    */

    if (currentImage === -1) {
      currentImage = 0;
    }

    showGalleryImage();

    lightbox.classList.add("active");

    document.body.style.overflow = "hidden";

  });

});


/* SHOW IMAGE */

function showGalleryImage() {

  lightboxImage.src = galleryImages[currentImage];

  counter.textContent =
    `${currentImage + 1} / ${galleryImages.length}`;

}


/* NEXT */

nextButton.addEventListener("click", function(e) {

  e.stopPropagation();

  currentImage++;

  if (currentImage >= galleryImages.length) {
    currentImage = 0;
  }

  showGalleryImage();

});


/* PREVIOUS */

prevButton.addEventListener("click", function(e) {

  e.stopPropagation();

  currentImage--;

  if (currentImage < 0) {
    currentImage = galleryImages.length - 1;
  }

  showGalleryImage();

});


/* CLOSE */

closeButton.addEventListener("click", function() {

  closeGallery();

});


/* CLICK OUTSIDE IMAGE */

lightbox.addEventListener("click", function(e) {

  if (e.target === lightbox) {
    closeGallery();
  }

});


/* CLOSE FUNCTION */

function closeGallery() {

  lightbox.classList.remove("active");

  document.body.style.overflow = "";

}


/* ================= KEYBOARD CONTROLS ================= */

document.addEventListener("keydown", function(e) {

  if (!lightbox.classList.contains("active")) {
    return;
  }

  if (e.key === "ArrowRight") {
    currentImage++;

    if (currentImage >= galleryImages.length) {
      currentImage = 0;
    }

    showGalleryImage();
  }

  if (e.key === "ArrowLeft") {
    currentImage--;

    if (currentImage < 0) {
      currentImage = galleryImages.length - 1;
    }

    showGalleryImage();
  }

  if (e.key === "Escape") {
    closeGallery();
  }

});
