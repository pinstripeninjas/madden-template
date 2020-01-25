const btnListener = document.querySelectorAll(".dropdown-item");

for (item of btnListener) {
	item.addEventListener("click", displayImg);
}

function displayImg() {
	console.log(this);
}
