//----------------- Location of header logo ----------------------------------//

const headerLogo = "https://picsum.photos/400";

//----------------- Header text ----------------------------------------------//

const headerText = "This is what I'd like to write here.";

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
				imgLocation: "https://picsum.photos/400"
			},
			//image three
			{
				imgName: "Image Three",
				imgLocation: "https://picsum.photos/400"
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
				imgLocation: "https://picsum.photos/400"
			},
			// image two
			{
				imgName: "Image Two",
				imgLocation: "https://picsum.photos/400"
			},
			//image three
			{
				imgName: "Image Three",
				imgLocation: "https://picsum.photos/400"
			}
			// end of images
		]
	}
	// end of button two code
];

//-----------------  Top secret code, don't look below here...or else ---------//

const logo = document.querySelector("#headerLogo");
const text = document.querySelector("#headerText");

logo.setAttribute("src", headerLogo);
text.innerText = headerText;
