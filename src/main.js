// Initialize Firebase
var config = {
	apiKey: "AIzaSyBsMZn5ArF_zFpSYfy7husO1tdHbHcs41M",
	authDomain: "bootleg-youtube-music-app.firebaseapp.com",
	databaseURL: "https://bootleg-youtube-music-app.firebaseio.com",
	projectId: "bootleg-youtube-music-app",
	storageBucket: "",
	messagingSenderId: "324934807777"
};
firebase.initializeApp(config);
console.log("firebase log: "+config);

let database = firebase.database();

// global name
let global = "";
// retrieving data
function store(url,song){
	console.log("firebase 2nd log: "+firebase);
	console.log("first log: "+url);
	console.log(`log in store ${global}`);
	console.log("Non query log "+global)
	// filter out watch id from url


	// send watch id into storage
	let ref = database.ref(global);
	let data = {
		// test: `${global}`
		name: `${global}/${song}`,
		url: `${global}/${url}`
	}
	ref.push(data);
}
function storeName(name){
	// create parent directory in fire base using name
	global = `${name}`
	console.log(global);

	// toggle between create and log in
	let guuh = true
	let config = document.querySelector("#config");
	if(guuh == true){
		console.log(guuh);
		config.innerHTML = `<input type="text" id="url" placeholder="url"/></br><input type="text" id="song" placeholder="name your song"/>
	    <input type="submit" value="store" id="button" onclick='store(document.querySelector("#url").value,document.querySelector("#song").value)'>`
		guuh = false;
	}
}

let block = document.querySelector("#block");
let listers = document.querySelector("#listers");
let singles = document.querySelector("#singles");
let toggle = document.querySelector("#toggle");

function show(){
	if(listers.style.display == "none"){
		singles.style.display = "none";
		listers.style.display = "inline";
		toggle.innerText = "Click for singles";
	}
	else{
		singles.style.display = "inline";
		listers.style.display = "none";
		toggle.innerText = "Click for lists";
	}
}
function playlist(list){
	block.innerHTML = `<iframe width="700" height="550" src="https://www.youtube.com/embed/_vS0_1tdqMI?rel=0&amp;autoplay=1&amp;loop=1&amp;list=${list}"frameborder="0" allowfullscreen></iframe>`
}
function playsingles(single){
	block.innerHTML = `<iframe width="700" height="500" src="https://www.youtube.com/embed/${single}?rel=0&amp;autoplay=1" frameborder="0" allowfullscreen></iframe>`
}