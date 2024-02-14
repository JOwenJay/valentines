document.addEventListener("DOMContentLoaded", function () {
  var heart = document.getElementById("heart");
  var cardContainer = document.getElementById("cardContainer");

  // Evento de clic en el corazón
  heart.addEventListener("click", function () {
      // Mostramos o ocultamos la carta al hacer clic
      if (cardContainer.style.display === "none" || cardContainer.style.display === "") {
          cardContainer.style.display = "block";
      } else {
          cardContainer.style.display = "none";
      }
  });
});
