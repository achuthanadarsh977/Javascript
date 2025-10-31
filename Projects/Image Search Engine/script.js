const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");
const showMoreBtn = document.getElementById("show-more-btn");

let keyword = "";
let page = 1;

const accessKey = "53013924-13a986c7afeb8665d9cae6f7b"; // Pixabay API key

async function searchImages() {
  keyword = searchBox.value.trim();
  if (!keyword) {
    alert("Please enter a search term!");
    return;
  }

  const url = `https://pixabay.com/api/?key=${accessKey}&q=${encodeURIComponent(
    keyword
  )}&image_type=photo&pretty=true&page=${page}&per_page=12`;

  const response = await fetch(url);
  const data = await response.json();

  if (page === 1) {
    searchResult.innerHTML = "";
  }

  const results = data.hits;

  results.forEach((result) => {
    const image = document.createElement("img");
    image.src = result.webformatURL;
    image.alt = result.tags;

    const imageLink = document.createElement("a");
    imageLink.href = result.pageURL;
    imageLink.target = "_blank";
    imageLink.appendChild(image);

    searchResult.appendChild(imageLink);
  });

  if (data.totalHits > page * 12) {
    showMoreBtn.style.display = "block";
  } else {
    showMoreBtn.style.display = "none";
  }
}

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  page = 1;
  searchImages();
});

showMoreBtn.addEventListener("click", () => {
  page++;
  searchImages();
});
