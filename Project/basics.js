var on = false;			//Boolean to track if night mode is on or off

function toggleNightMode() {

	if (on==false) {
  		document.body.style.backgroundColor = "#303030";			//Change background colour
		document.body.style.color = "white";					//Change text colour
 		document.getElementById("nav").style.backgroundColor = "black";			//Change navigation bar colour
		document.getElementById("nav2").style.backgroundColor = "black";
		document.getElementById("nav3").style.backgroundColor = "black";
		document.getElementById("nav4").style.backgroundColor = "black";
		document.getElementById("nav5").style.backgroundColor = "black";
		document.getElementById("nav6").style.backgroundColor = "black";
		document.getElementById("nav7").style.backgroundColor = "black";
		document.getElementById("nav8").style.backgroundColor = "black";
		document.getElementById("nav9").style.backgroundColor = "black";
		document.getElementById("nav10").style.backgroundColor = "black";
		document.getElementById("nav11").style.backgroundColor = "black";
		document.getElementById("nav12").style.backgroundColor = "black";
		document.getElementById("nav13").style.backgroundColor = "black";
		document.getElementById("nav14").style.backgroundColor = "black";
		document.getElementById("nav15").style.backgroundColor = "black";
		document.getElementById("nav16").style.backgroundColor = "black";
		document.getElementById("nav17").style.backgroundColor = "black";
		document.getElementById("nav18").style.backgroundColor = "black";
		document.getElementById("nav19").style.backgroundColor = "black";
		document.getElementById("nav20").style.backgroundColor = "black";
		document.getElementById("nav21").style.backgroundColor = "black";
		document.getElementById("nav22").style.backgroundColor = "black";
		document.getElementById("nav23").style.backgroundColor = "black";
		document.getElementById("nav24").style.backgroundColor = "black";
		document.getElementById("nav25").style.backgroundColor = "black";
		document.getElementById("nav26").style.backgroundColor = "black";
		document.getElementById("nav27").style.backgroundColor = "black";
		document.getElementById("nav28").style.backgroundColor = "black";
		document.getElementById("nav29").style.backgroundColor = "black";
		document.getElementById("nav30").style.backgroundColor = "black";
		document.getElementById("nav31").style.backgroundColor = "black";
		document.getElementById("nav32").style.backgroundColor = "black";
		document.getElementById("nav33").style.backgroundColor = "black";
		document.getElementById("link1").style.color = "#CE9177";				//Change link colour
		document.getElementById("link2").style.color = "#CE9177";
		document.getElementById("link3").style.color = "#CE9177";				
		document.getElementById("hr1").style.backgroundColor = "black";			//Change hr colour
		document.getElementById("hr2").style.backgroundColor = "black";
		document.getElementById("image1").src="ImagesNight/SelectorsExample.png";			//Change image
		document.getElementById("image2").src="ImagesNight/MultipleSelectorsExample.png";
		document.getElementById("image3").src="ImagesNight/Class.png";
		document.getElementById("image4").src="ImagesNight/Div.png";
		document.getElementById("image5").src="ImagesNight/ClassImage.png";
		document.getElementById("image6").src="ImagesNight/FontFamily.png";
		document.getElementById("image7").src="ImagesNight/ColourName.png";
		document.getElementById("image8").src="ImagesNight/ColourHex.png";
		document.getElementById("yellowgreen").style.backgroundColor = "green";			//Change background colour
		document.getElementById("image9").src="ImagesNight/BackgroundColor.png";
		document.getElementById("hr3").style.backgroundColor = "black";

		
		on = true;		//Set boolean to true to show night mode is on
	}
	else {
		document.body.style.backgroundColor = "white";			//Change background colour
		document.body.style.color = "black";					//Change text colour
		document.getElementById("nav").style.backgroundColor = "#0A4984";			//Change navigation bar colour
		document.getElementById("nav2").style.backgroundColor = "#0A4984";
		document.getElementById("nav3").style.backgroundColor = "#0A4984";
		document.getElementById("nav4").style.backgroundColor = "#0A4984";
		document.getElementById("nav5").style.backgroundColor = "#0A4984";
		document.getElementById("nav6").style.backgroundColor = "#0A4984";
		document.getElementById("nav7").style.backgroundColor = "#0A4984";
		document.getElementById("nav8").style.backgroundColor = "#0A4984";
		document.getElementById("nav9").style.backgroundColor = "#0A4984";
		document.getElementById("nav10").style.backgroundColor = "#0A4984";
		document.getElementById("nav11").style.backgroundColor = "#0A4984";
		document.getElementById("nav12").style.backgroundColor = "#0A4984";
		document.getElementById("nav13").style.backgroundColor = "#0A4984";
		document.getElementById("nav14").style.backgroundColor = "#0A4984";
		document.getElementById("nav15").style.backgroundColor = "#0A4984";
		document.getElementById("nav16").style.backgroundColor = "#0A4984";
		document.getElementById("nav17").style.backgroundColor = "#0A4984";
		document.getElementById("nav18").style.backgroundColor = "#0A4984";
		document.getElementById("nav19").style.backgroundColor = "#0A4984";
		document.getElementById("nav20").style.backgroundColor = "#0A4984";
		document.getElementById("nav21").style.backgroundColor = "#0A4984";
		document.getElementById("nav22").style.backgroundColor = "#0A4984";
		document.getElementById("nav23").style.backgroundColor = "#0A4984";
		document.getElementById("nav24").style.backgroundColor = "#0A4984";
		document.getElementById("nav25").style.backgroundColor = "#0A4984";
		document.getElementById("nav26").style.backgroundColor = "#0A4984";
		document.getElementById("nav27").style.backgroundColor = "#0A4984";
		document.getElementById("nav28").style.backgroundColor = "#0A4984";
		document.getElementById("nav29").style.backgroundColor = "#0A4984";
		document.getElementById("nav30").style.backgroundColor = "#0A4984";
		document.getElementById("nav31").style.backgroundColor = "#0A4984";
		document.getElementById("nav32").style.backgroundColor = "#0A4984";
		document.getElementById("nav33").style.backgroundColor = "#0A4984";
		document.getElementById("link1").style.color = "blue";				//Change link colour
		document.getElementById("link2").style.color = "blue";
		document.getElementById("link3").style.color = "blue";
		document.getElementById("hr1").style.backgroundColor = "#0A4984";			//Change hr colour
		document.getElementById("hr2").style.backgroundColor = "#0A4984";
		document.getElementById("image1").src="Images/SelectorsExample.png";			//Change image
		document.getElementById("image2").src="Images/MultipleSelectorsExample.png";
		document.getElementById("image3").src="Images/Class.png";
		document.getElementById("image4").src="Images/Div.png";
		document.getElementById("image5").src="Images/ClassImage.png";
		document.getElementById("image6").src="Images/FontFamily.png";
		document.getElementById("image7").src="Images/ColourName.png";
		document.getElementById("image8").src="Images/ColourHex.png";
		document.getElementById("yellowgreen").style.backgroundColor = "yellow";		//Change background colour
		document.getElementById("image9").src="Images/BackgroundColor.png";
		document.getElementById("hr3").style.backgroundColor = "#0A4984";

		on = false;
	}	
		
}

function hover2() {
	if (on == true) {		//If night mode is on set colour to #424242
		document.getElementById("nav2").style.backgroundColor = "#424242";
	}
	else {					//If night mode is off set colour to #197EAF
		document.getElementById("nav2").style.backgroundColor = "#197EAF";
	}
}

function nohover2() {
	if (on == true) {		//If night mode is on set colour to black
		document.getElementById("nav2").style.backgroundColor = "black";
	}
	else {					//If night mode is off set colour to #0A4984
		document.getElementById("nav2").style.backgroundColor = "#0A4984";
	}
}

function hover3() {
	if (on == true) {
		document.getElementById("nav3").style.backgroundColor = "#424242";
	}
	else {
		document.getElementById("nav3").style.backgroundColor = "#197EAF";
	}
}

function nohover3() {
	if (on == true) {
		document.getElementById("nav3").style.backgroundColor = "black";
	}
	else {
		document.getElementById("nav3").style.backgroundColor = "#0A4984";
	}
}
function hover4() {
	if (on == true) {
		document.getElementById("nav4").style.backgroundColor = "#424242";
	}
	else {
		document.getElementById("nav4").style.backgroundColor = "#197EAF";
	}
}

function nohover4() {
	if (on == true) {
		document.getElementById("nav4").style.backgroundColor = "black";
	}
	else {
		document.getElementById("nav4").style.backgroundColor = "#0A4984";
	}
}
function hover5() {
	if (on == true) {
		document.getElementById("nav5").style.backgroundColor = "#424242";
	}
	else {
		document.getElementById("nav5").style.backgroundColor = "#197EAF";
	}
}

function nohover5() {
	if (on == true) {
		document.getElementById("nav5").style.backgroundColor = "black";
	}
	else {
		document.getElementById("nav5").style.backgroundColor = "#0A4984";
	}
}
function hover6() {
	if (on == true) {
		document.getElementById("nav6").style.backgroundColor = "#424242";
	}
	else {
		document.getElementById("nav6").style.backgroundColor = "#197EAF";
	}
}

function nohover6() {
	if (on == true) {
		document.getElementById("nav6").style.backgroundColor = "black";
	}
	else {
		document.getElementById("nav6").style.backgroundColor = "#0A4984";
	}
}
function hover7() {
	if (on == true) {
		document.getElementById("nav7").style.backgroundColor = "#424242";
	}
	else {
		document.getElementById("nav7").style.backgroundColor = "#197EAF";
	}
}

function nohover7() {
	if (on == true) {
		document.getElementById("nav7").style.backgroundColor = "black";
	}
	else {
		document.getElementById("nav7").style.backgroundColor = "#0A4984";
	}
}
function hover8() {
	if (on == true) {
		document.getElementById("nav8").style.backgroundColor = "#424242";
	}
	else {
		document.getElementById("nav8").style.backgroundColor = "#197EAF";
	}
}

function nohover8() {
	if (on == true) {
		document.getElementById("nav8").style.backgroundColor = "black";
	}
	else {
		document.getElementById("nav8").style.backgroundColor = "#0A4984";
	}
}
function hover9() {
	if (on == true) {
		document.getElementById("nav9").style.backgroundColor = "#424242";
	}
	else {
		document.getElementById("nav9").style.backgroundColor = "#197EAF";
	}
}

function nohover9() {
	if (on == true) {
		document.getElementById("nav9").style.backgroundColor = "black";
	}
	else {
		document.getElementById("nav9").style.backgroundColor = "#0A4984";
	}
}
function hover10() {
	if (on == true) {
		document.getElementById("nav10").style.backgroundColor = "#424242";
	}
	else {
		document.getElementById("nav10").style.backgroundColor = "#197EAF";
	
	}
}

function nohover10() {
	if (on == true) {
		document.getElementById("nav10").style.backgroundColor = "black";
	}
	else {
		document.getElementById("nav10").style.backgroundColor = "#0A4984";
	}
}
function hover11() {
	if (on == true) {
		document.getElementById("nav11").style.backgroundColor = "#424242";
	}
	else {
	document.getElementById("nav11").style.backgroundColor = "#197EAF";
	}
}

function nohover11() {
	if (on == true) {
		document.getElementById("nav11").style.backgroundColor = "black";
	}
	else {
		document.getElementById("nav11").style.backgroundColor = "#0A4984";
	}
}
function hover12() {
	if (on == true) {
		document.getElementById("nav12").style.backgroundColor = "#424242";
	}
	else {
		document.getElementById("nav12").style.backgroundColor = "#197EAF";
	}
}

function nohover12() {
	if (on == true) {
		document.getElementById("nav12").style.backgroundColor = "black";
	}
	else {
		document.getElementById("nav12").style.backgroundColor = "#0A4984";
	}
}
function hover13() {
	if (on == true) {
		document.getElementById("nav13").style.backgroundColor = "#424242";
	}
	else {	
		document.getElementById("nav13").style.backgroundColor = "#197EAF";
	}
}

function nohover13() {
	if (on == true) {
		document.getElementById("nav13").style.backgroundColor = "black";
	}
	else {
		document.getElementById("nav13").style.backgroundColor = "#0A4984";
	}
}
function hover14() {
	if (on == true) {
		document.getElementById("nav14").style.backgroundColor = "#424242";
	}
	else {
		document.getElementById("nav14").style.backgroundColor = "#197EAF";
	}
}

function nohover14() {
	if (on == true) {
		document.getElementById("nav14").style.backgroundColor = "black";
	}
	else {
		document.getElementById("nav14").style.backgroundColor = "#0A4984";
	}
}
function hover15() {
	if (on == true) {
		document.getElementById("nav15").style.backgroundColor = "#424242";
	}
	else {
		document.getElementById("nav15").style.backgroundColor = "#197EAF";
	}
}

function nohover15() {
	if (on == true) {
		document.getElementById("nav15").style.backgroundColor = "black";
	}
	else {
		document.getElementById("nav15").style.backgroundColor = "#0A4984";
	}
}
function hover16() {
	if (on == true) {
		document.getElementById("nav16").style.backgroundColor = "#424242";
	}
	else {
		document.getElementById("nav16").style.backgroundColor = "#197EAF";
	}
}

function nohover16() {
	if (on == true) {
		document.getElementById("nav16").style.backgroundColor = "black";
	}
	else {
		document.getElementById("nav16").style.backgroundColor = "#0A4984";
	}
}
function hover17() {
	if (on == true) {
		document.getElementById("nav17").style.backgroundColor = "#424242";
	}
	else {
		document.getElementById("nav17").style.backgroundColor = "#197EAF";
	}
}

function nohover17() {
	if (on == true) {
		document.getElementById("nav17").style.backgroundColor = "black";
	}
	else {
		document.getElementById("nav17").style.backgroundColor = "#0A4984";
	}
}
function hover18() {
	if (on == true) {
		document.getElementById("nav18").style.backgroundColor = "#424242";
	}
	else {
		document.getElementById("nav18").style.backgroundColor = "#197EAF";
	}
}

function nohover18() {
	if (on == true) {
		document.getElementById("nav18").style.backgroundColor = "black";
	}
	else {
		document.getElementById("nav18").style.backgroundColor = "#0A4984";
	}
}
function hover19() {
	if (on == true) {
		document.getElementById("nav19").style.backgroundColor = "#424242";
	}
	else {
		document.getElementById("nav19").style.backgroundColor = "#197EAF";
	}
}

function nohover19() {
	if (on == true) {
		document.getElementById("nav19").style.backgroundColor = "black";
	}
	else {
		document.getElementById("nav19").style.backgroundColor = "#0A4984";
	}
}
function hover20() {
	if (on == true) {
		document.getElementById("nav20").style.backgroundColor = "#424242";
	}
	else {
		document.getElementById("nav20").style.backgroundColor = "#197EAF";
	}
}

function nohover20() {
	if (on == true) {
		document.getElementById("nav20").style.backgroundColor = "black";
	}
	else {
		document.getElementById("nav20").style.backgroundColor = "#0A4984";
	}
}
function hover21() {
	if (on == true) {
		document.getElementById("nav21").style.backgroundColor = "#424242";
	}
	else {
		document.getElementById("nav21").style.backgroundColor = "#197EAF";
	}
}

function nohover21() {
	if (on == true) {
		document.getElementById("nav21").style.backgroundColor = "black";
	}
	else {
		document.getElementById("nav21").style.backgroundColor = "#0A4984";
	}
}
function hover22() {
	if (on == true) {
		document.getElementById("nav22").style.backgroundColor = "#424242";
	}
	else {
		document.getElementById("nav22").style.backgroundColor = "#197EAF";
	}
}

function nohover22() {
	if (on == true) {
		document.getElementById("nav22").style.backgroundColor = "black";
	}
	else {
		document.getElementById("nav22").style.backgroundColor = "#0A4984";
	}
}
function hover23() {
	if (on == true) {
		document.getElementById("nav23").style.backgroundColor = "#424242";
	}
	else {
		document.getElementById("nav23").style.backgroundColor = "#197EAF";
	}
}

function nohover23() {
	if (on == true) {
		document.getElementById("nav23").style.backgroundColor = "black";
	}
	else {
		document.getElementById("nav23").style.backgroundColor = "#0A4984";
	}
}
function hover24() {
	if (on == true) {
		document.getElementById("nav24").style.backgroundColor = "#424242";
	}
	else {
		document.getElementById("nav24").style.backgroundColor = "#197EAF";
	}
}

function nohover24() {
	if (on == true) {
		document.getElementById("nav24").style.backgroundColor = "black";
	}
	else {
		document.getElementById("nav24").style.backgroundColor = "#0A4984";
	}
}
function hover25() {
	if (on == true) {
		document.getElementById("nav25").style.backgroundColor = "#424242";
	}
	else {
		document.getElementById("nav25").style.backgroundColor = "#197EAF";
	}
}

function nohover25() {
	if (on == true) {
		document.getElementById("nav25").style.backgroundColor = "black";
	}
	else {
		document.getElementById("nav25").style.backgroundColor = "#0A4984";
	}
}
function hover26() {
	if (on == true) {
		document.getElementById("nav26").style.backgroundColor = "#424242";
	}
	else {
		document.getElementById("nav26").style.backgroundColor = "#197EAF";
	}
}

function nohover26() {
	if (on == true) {
		document.getElementById("nav26").style.backgroundColor = "black";
	}
	else {
		document.getElementById("nav26").style.backgroundColor = "#0A4984";
	}
}
function hover27() {
	if (on == true) {
		document.getElementById("nav27").style.backgroundColor = "#424242";
	}
	else {
		document.getElementById("nav27").style.backgroundColor = "#197EAF";
	}
}

function nohover27() {
	if (on == true) {
		document.getElementById("nav27").style.backgroundColor = "black";
	}
	else {
		document.getElementById("nav27").style.backgroundColor = "#0A4984";
	}
}
function hover28() {
	if (on == true) {
		document.getElementById("nav28").style.backgroundColor = "#424242";
	}
	else {
		document.getElementById("nav28").style.backgroundColor = "#197EAF";
	}
}

function nohover28() {
	if (on == true) {
		document.getElementById("nav28").style.backgroundColor = "black";
	}
	else {
		document.getElementById("nav28").style.backgroundColor = "#0A4984";
	}
}

function hover29() {
	if (on == true) {
		document.getElementById("nav29").style.backgroundColor = "#424242";
	}
	else {
		document.getElementById("nav29").style.backgroundColor = "#197EAF";
	}
}

function nohover29() {
	if (on == true) {
		document.getElementById("nav29").style.backgroundColor = "black";
	}
	else {
		document.getElementById("nav29").style.backgroundColor = "#0A4984";
	}
}

function hover30() {
	if (on == true) {
		document.getElementById("nav30").style.backgroundColor = "#424242";
	}
	else {
		document.getElementById("nav30").style.backgroundColor = "#197EAF";
	}
}

function nohover30() {
	if (on == true) {
		document.getElementById("nav30").style.backgroundColor = "black";
	}
	else {
		document.getElementById("nav30").style.backgroundColor = "#0A4984";
	}
}

function hover31() {
	if (on == true) {
		document.getElementById("nav31").style.backgroundColor = "#424242";
	}
	else {
		document.getElementById("nav31").style.backgroundColor = "#197EAF";
	}
}

function nohover31() {
	if (on == true) {
		document.getElementById("nav31").style.backgroundColor = "black";
	}
	else {
		document.getElementById("nav31").style.backgroundColor = "#0A4984";
	}
}
function hover32() {
	if (on == true) {
		document.getElementById("nav32").style.backgroundColor = "#424242";
	}
	else {
		document.getElementById("nav32").style.backgroundColor = "#197EAF";
	}
}

function nohover32() {
	if (on == true) {
		document.getElementById("nav32").style.backgroundColor = "black";
	}
	else {
		document.getElementById("nav32").style.backgroundColor = "#0A4984";
	}
}
function hover33() {
	if (on == true) {
		document.getElementById("nav33").style.backgroundColor = "#424242";
	}
	else {
		document.getElementById("nav33").style.backgroundColor = "#197EAF";
	}
}

function nohover33() {
	if (on == true) {
		document.getElementById("nav33").style.backgroundColor = "black";
	}
	else {
		document.getElementById("nav33").style.backgroundColor = "#0A4984";
	}
}

function increaseFont() {
	text = document.getElementById("a");			//Get all text on page
	style = window.getComputedStyle(text, null).getPropertyValue("font-size");			//Get current font size
	currentsize = parseFloat(style);
	text.style.fontSize = (currentsize +1) +"px";		//Add 1 to font size
}

function decreaseFont() {
	text = document.getElementById("a");
	style = window.getComputedStyle(text, null).getPropertyValue("font-size");
	currentsize = parseFloat(style);
	text.style.fontSize = (currentsize -1) +"px";			//Subtract 1 from font size
}