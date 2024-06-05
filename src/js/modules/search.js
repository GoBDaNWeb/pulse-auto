export const search = () => {
  const search = document.querySelector(".search");
  const searchBtn = document.querySelector(".searchBtn");
  const searchResults = document.querySelector(".search-results");
  search.addEventListener("focus", () => {
    searchResults.classList.add("active");
    setTimeout(() => {
      if (searchBtn) {
        searchBtn.addEventListener("mouseleave", () => {
          searchResults.classList.remove("active");
        });
      }
    }, 1300);
  });
};
