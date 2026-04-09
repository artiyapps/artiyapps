const searchBtn = document.getElementById("searchBtn");
const searchBox = document.getElementById("searchBox");

searchBtn.onclick = () => {
  searchBox.classList.toggle("active");
};

const input = document.getElementById("searchInput");

input.addEventListener("keyup", function () {
  let value = this.value.toLowerCase();
  let cards = document.querySelectorAll(".g-card");

  let firstMatch = null;

  cards.forEach(card => {
    let text = card.innerText.toLowerCase();

    if (text.includes(value)) {
      card.style.display = "block";

      // store first matched card
      if (!firstMatch) {
        firstMatch = card;
      }

    } else {
      card.style.display = "none";
    }
  });

  // scroll to first matched card
  if (firstMatch && value.length > 0) {
    firstMatch.scrollIntoView({
      behavior: "smooth",
      block: "center"
    });
  }
});