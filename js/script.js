//----------------- Location of header logo ----------------------------------//

const headerLogo = "https://picsum.photos/400";

//----------------- Header text ----------------------------------------------//

const headerText = "Insert Name of Project Here";

//----------------- List of buttons with image names and locations -----------//

const buttons = [
	// start of button one code
	{
		buttonTitle: "Button One",
		buttonItems: [
			// image one
			{
				imgName: "Image One",
				imgLocation: "https://picsum.photos/400"
			},
			// image two
			{
				imgName: "Image Two",
				imgLocation: "https://picsum.photos/500/300"
			},
			//image three
			{
				imgName: "Image Three",
				imgLocation: "https://picsum.photos/700"
			}
			// end of images
		]
	},
	// end of button one code

	// start of button two code
	{
		buttonTitle: "Button Two",
		buttonItems: [
			// image one
			{
				imgName: "Image One",
				imgLocation: "https://picsum.photos/400/800"
			},
			// image two
			{
				imgName: "Image Two",
				imgLocation: "https://picsum.photos/500/300"
			},
			//image three
			{
				imgName: "Image Three",
				imgLocation: "https://picsum.photos/600/300"
			}
			// end of images
		]
	}
	// end of button two code
];

//-----------------  Top secret code, don't look below here...or else ---------//

const logo = document.querySelector("#headerLogo");
const text = document.querySelector("#headerText");
const allButtons = document.querySelector("#allButtons");
const imgViewer = document.querySelector("#imgViewer");
const forSpinner = document.querySelector("#forSpinner");

logo.setAttribute("src", headerLogo);
text.innerHTML = headerText;
createButtons();
imgToggle();

function createButtons() {
	for (button of buttons) {
		const div1 = document.createElement("div");
		div1.classList.add("dropdown", "mx-4");
		allButtons.append(div1);

		const btn = document.createElement("button");
		btn.classList.add("btn", "btn-lg", "dropdown-toggle");
		btn.id = "dropdownMenuButton";
		btn.setAttribute("type", "button");
		btn.setAttribute("data-toggle", "dropdown");
		btn.innerText = button.buttonTitle;
		div1.append(btn);

		const divDropdown = document.createElement("div");
		divDropdown.classList.add("dropdown-menu");
		div1.append(divDropdown);

		for (image of button.buttonItems) {
			const imgLink = document.createElement("div");
			imgLink.classList.add("dropdown-item");
			imgLink.setAttribute("data-href", image.imgLocation);
			imgLink.innerText = image.imgName;
			divDropdown.append(imgLink);
		}
	}
}

function imgToggle() {
	const dropdownItems = document.querySelectorAll(".dropdown-item");
	for (dropdownItem of dropdownItems) {
		dropdownItem.addEventListener("click", function() {
			const imgLink = this.getAttribute("data-href");
			// setNewImg(imgLink);
			forSpinner.prepend(createSpinner());
			imgViewer.src = imgLink;
			imgViewer.onload = function() {
				forSpinner.removeChild(forSpinner.firstChild);
			};
		});
	}
}

function createSpinner() {
	const spinnerH3 = document.createElement("h3");
	const spinnerSpan = document.createElement("span");
	spinnerH3.innerText = "Loading ";
	spinnerH3.classList.add("text-center");
	spinnerSpan.classList.add("spinner-border");
	spinnerH3.append(spinnerSpan);
	return spinnerH3;
}
