var actualQuestion = 1;
elements = [];

for (let i = 0; i < 10; i++) {
	elements.push({ question: document.getElementById("q-" + (i + 1)) });
	elements[i].nbutton = elements[i].question.querySelector(".next");
	elements[i].pbutton = elements[i].question.querySelector(".prev");
	if (elements[i].nbutton !== null) {
		elements[i].nbutton.addEventListener("click", () => {
			actualQuestion += 1;
			question(actualQuestion);
		});
	}
	if (elements[i].pbutton !== null) {
		elements[i].pbutton.addEventListener("click", () => {
			actualQuestion -= 1;
			question(actualQuestion);
		});
	}
}

const question = (x) => {
	if (x === 0) {
		document.getElementById("formularz").style.display = "none";
		document.getElementById("line1").style.display = "none";
		document.getElementById("line2").style.display = "none";
		document.getElementById("quiz").style.display = "block";
		x = 1;
	}
	for (let i = 0; i < elements.length; i++) {
		if (elements[i].question.id === "q-" + x) {
			console.log("elements[i].id = " + elements[i].id);
			elements[i].question.style.display = "block";
		} else {
			elements[i].question.style.display = "none";
		}
	}
};

document.getElementById("send").onclick = () => verify(); //question(0);
const verify = () => {
	let nick = document.getElementById("nickName").value;
	if (nick === "") {
		alert("Wprowadź dane w polu Pseudonim !");
	} else {
		question(0);
	}
};

$(document).on("keydown", "form", function(event) { 
    return event.key != "Enter";
});