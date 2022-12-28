function addNewWEField() {

	let newNode = document.createElement("textarea");
	newNode.classList.add("form-control");
	newNode.classList.add("weField");
	newNode.classList.add("mt-2");
	newNode.setAttribute("rows",3);
	newNode.setAttribute("placeholder","Enter Here");

	let weOb = document.getElementById("we");
	let weAddButtonOb = document.getElementById("weAddButton");

	weOb.insertBefore(newNode,weAddButtonOb);

}

function addNewAQField(){

	let newNode = document.createElement("textarea");
	newNode.classList.add("form-control");
	newNode.classList.add("aqField");
	newNode.classList.add("mt-2");
	newNode.setAttribute("rows",3);
	newNode.setAttribute("placeholder","Enter Here");

	let aqOb = document.getElementById("aq");
	let aqAddButtonOb = document.getElementById("aqAddButton");

	aqOb.insertBefore(newNode,aqAddButton);
}

function addNewTSField(){

	let newNode = document.createElement("textarea");
	newNode.classList.add("form-control");
	newNode.classList.add("tsField");
	newNode.classList.add("mt-2");
	newNode.setAttribute("rows",3);
	newNode.setAttribute("placeholder","Enter Here");

	let tsOb = document.getElementById("ts");
	let tsAddButtonOb = document.getElementById("tsAddButton");

	tsOb.insertBefore(newNode,tsAddButton);
}

function addNewHTField(){

	let newNode = document.createElement("textarea");
	newNode.classList.add("form-control");
	newNode.classList.add("htField");
	newNode.classList.add("mt-2");
	newNode.setAttribute("rows",3);
	newNode.setAttribute("placeholder","Enter Here");

	let htOb = document.getElementById("hob");
	let htAddButtonOb = document.getElementById("htAddButton");

	htOb.insertBefore(newNode,htAddButton);
}

/*generate CV*/
function generateCV(){

	/*Name*/
	let nameField = document.getElementById("nameField").value;

	let nameT1 = document.getElementById("nameT1");
	nameT1.innerHTML = nameField;

	/*Phone Number*/
	let contactField = document.getElementById("contactField").value;
	document.getElementById("contactT").innerHTML = contactField;

	/*Mail*/
	let mailField = document.getElementById("mailField").value;
	document.getElementById("mailT").innerHTML = mailField;


	/*Objective*/
	let objField = document.getElementById("objField").value;
	document.getElementById("objT").innerHTML = objField;

	/*Technical Skills*/
	let tss=document.getElementsByClassName('tsField');

	let strt = "";

	for(let t of tss){
		strt = strt + `<li> ${t.value}</li>`;
	}
	document.getElementById("techT").innerHTML = strt;

	/*Work Experience*/
	let wes=document.getElementsByClassName('weField');

	let str = "";

	for(let e of wes){
		str = str + `<li> ${e.value}</li>`;
	}
	document.getElementById("weT").innerHTML = str;

	/*Academic Qualification*/
	let aqs=document.getElementsByClassName('aqField');

	let strd = "";

	for(let f of aqs){
		strd = strd + `<li> ${f.value}</li>`;
	}
	document.getElementById("aqT").innerHTML = strd;

	/*Hobbies*/
	let hos=document.getElementsByClassName('htField');

	let strh = "";

	for(let h of hos){
		strh = strh + `<li> ${h.value}</li>`;
	}
	document.getElementById("hT").innerHTML = strh;

	document.getElementById('footer-resume').style.display="none";
	document.getElementById('header-2').style.display="none";
	document.getElementById('cv-form').style.display="none";
	document.getElementById('cv-template1').style.display="block";

}


function printCV(){
	document.getElementById('print-btn').style.display="none";
	window.print();
}