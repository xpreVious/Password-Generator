//Display current password length
const slider = document.querySelector("#myRange");
const output = document.querySelector(".passLength");

output.innerHTML = slider.value;
slider.oninput = () => {
	output.innerHTML = slider.value;
};