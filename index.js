function setRating(ratingValue) {
  const stars = document.querySelectorAll(".fa-star");
  stars.forEach((star, index) => {
    if (index < ratingValue) {
      star.classList.add("active");
    } else {
      star.classList.remove("active");
    }
  });
}
