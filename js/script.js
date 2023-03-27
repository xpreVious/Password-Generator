//Variables
const slider = document.querySelector("#myRange");
const output = document.querySelector(".passLength");
const btn = document.querySelector(".generate");
const checkUp = document.querySelector(".uppercase");
const checkLow = document.querySelector(".lowercase");
const checkNum = document.querySelector(".numbers");
const checkSym = document.querySelector(".symbols");
const result = document.querySelector("#passResult");
const error = document.querySelector(".result-container-error");

//Display current password length
output.innerHTML = slider.value;
slider.oninput = () => {
	output.innerHTML = slider.value;
};

function getChar(x) {
	return document.querySelector("input[class=" + x + "]").checked;
}

const generatePass = () => {
	if (
		!checkUp.checked &&
		!checkLow.checked &&
		!checkNum.checked &&
		!checkSym.checked
	) {
		error.style.opacity = 1;
		result.value = "";
	} else {
		error.style.opacity = 0;

		let pass = "";
		let up = "ABCDEFGHIJKLMNOPRSTUVWXYZ";
		let low = "abcdefghijklmnoprstuvwxyz";
		let num = "0123456789";
		let sym = "!@#$%^&*?";

		if (getChar("uppercase")) pass += up;
		if (getChar("lowercase")) pass += low;
		if (getChar("numbers")) pass += num;
		if (getChar("symbols")) pass += sym;

		let final = "";
		for (let i = 0; i < slider.value; i++) {
			let random = Math.floor(Math.random() * pass.length);
			final += pass[random];
		}
		result.value = final;
	}
};

//Event Listeners
btn.addEventListener("click", generatePass);
