const rating = document.querySelectorAll(".fa-star");

rating.forEach((item, index1) => {
  item.addEventListener("click", () => {
    rating.forEach((rating, index2) => {
      index1 >= index2
        ? rating.classList.add("active")
        : rating.classList.remove("active");
    });
  });
});
