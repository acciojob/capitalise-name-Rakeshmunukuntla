
let input = document.getElementById("fname");

input.addEventListener("blur" ,Onblur);
function Onblur() {
	let capName=input.value;
	input.value=capName.toUpperCase()
}