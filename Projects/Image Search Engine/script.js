const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");
const showmorebtn = document.getElementById("show-more-btn");


let keyword = "";
let page = 1;

async function searchImages(){
    keyword = searchBox.value;
    const url = `https://pixabay.com/api/?key=53013924-13a986c7afeb8665d9cae6f7b&q=yellow+flowers&image_type=photo&pretty=true`
    const response = await fetch(url);
    const data = await response.json();
    const results = data.results;

    results.map((result) => {
        const image = document.createElement
    })
}

searchForm.addEventListener("submit",(e) =>{
    e.preventDefault();
    page = 1;
    searchImages()
} )
