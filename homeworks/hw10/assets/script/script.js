// s1 outfit
let s1 = /* get #s1 outfit */document.getElementById("s1")
/* the process: */
s1.onclick = function() {
	/* 1. hide #body (set display to none)
	/* 2. call the function you created to hide all the outfits 
	(remember: get the list of .outfit elements and use a for loop to hide each outfit)
	/* 3. show #o1 outfit (set display to block)*/
	stripper()
	document.getElementById("body").style.display = "none";
	document.getElementById("o1").style.display = "block";

};

// s2 outfit
/* get #s2 outfit */
let s2 = document.getElementById("s2")
s2.onclick = function() {
	stripper()
	document.getElementById("body").style.display = "none";
	document.getElementById("o2").style.display = "block";
};
/* repeat process */

// s3 outfit
/* get #s3 outfit */
let s3 = document.getElementById("s3")
s3.onclick = function() {
	stripper()
	document.getElementById("body").style.display = "none";
	document.getElementById("o3").style.display = "block";
};
/* repeat process */

// s4 outfit
/* get #s4 outfit */
let s4 = document.getElementById("s4")
s4.onclick = function() {
	
	stripper()
	document.getElementById("body").style.display = "none";
	document.getElementById("o4").style.display = "block";
};
/* repeat process */

// s5 outfit
/* get #s5 outfit */
let s5 = document.getElementById("s5")
s5.onclick = function() {
	
	stripper()
	document.getElementById("body").style.display = "none";
	document.getElementById("o5").style.display = "block";
};
/* repeat process */

// strip outfit
let strip = /* get #strip-button */document.getElementById("strip-button")
strip.onclick = stripper;
	/* call the function you created to hide all the outfits */
	/* show #body */


function stripper() {
	let outfit = document.getElementsByClassName("outfit")
	for (let i = 0; i < outfit.length; i++) {
		outfit[i].style.display = "none";
	}
	document.getElementById("body").style.display = "block";


}