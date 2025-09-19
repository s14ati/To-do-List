let inputBox = document.getElementById("input-box");
let listContainer = document.getElementById("list-container");

function addTask() {
    if (inputBox.value === "") {
        alert("You must write something");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;

        // delete button span
        let span = document.createElement("span");
        span.classList.add("delete-btn"); 
        li.appendChild(span);

        listContainer.appendChild(li);
    }
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function (value) {
    if (value.target.tagName === "LI") {
        value.target.classList.toggle("checked");
        saveData();
    } else if (value.target.tagName === "SPAN") {
        value.target.parentElement.remove();
        saveData();
    }
});

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showList() {
    listContainer.innerHTML = localStorage.getItem("data");
}
// window.onload = function () {
//     localStorage.clear();
// };
showList();

