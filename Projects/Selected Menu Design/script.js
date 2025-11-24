var selectField = document.getElementById("selectField");
var selectText = document.getElementById("selectText");
var options = document.getElementsByClassName("options");
var list = document.getElementById("list");
var arrowIcon = document.getElementById("arrowIcon");

// Toggle list open/close
selectField.onclick = function () {
    list.classList.toggle("hide");
    arrowIcon.classList.toggle("rotate");
};

// Set selected option
for (let option of options) {
    option.onclick = function () {
        selectText.innerText = this.querySelector("p").innerText;
        list.classList.add("hide");
        arrowIcon.classList.remove("rotate");
    };
}
