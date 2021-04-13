var on = false;			//Boolean variable to track night mode status

function toggleNightMode() {

	if (on==false) {			//If night mode is off
  		document.body.style.backgroundColor = "#303030";			//Change background colour
		document.body.style.color = "white";				//Change text colour
 		document.getElementById("nav").style.backgroundColor = "black";			//Change all navigation bar colours
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
		document.getElementById("link1").style.color = "#CE9177";			//Change all link colours
		document.getElementById("link2").style.color = "#CE9177";
		document.getElementById("hr1").style.backgroundColor = "black";			//Change hr colour
		
		on = true;			//Set on to true
	}
	else {
		document.body.style.backgroundColor = "white";			//Change background colour
		document.body.style.color = "black";				//Change text colour
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
		document.getElementById("link1").style.color = "blue";						//Change link colour
		document.getElementById("link2").style.color = "blue";
		document.getElementById("hr1").style.backgroundColor = "#0A4984";			//Change hr colour

		on = false;		//Set on to false
	}	
		
}

function hover2() {
	if (on == true) {			//If night mode is on change colour to #424242
		document.getElementById("nav2").style.backgroundColor = "#424242";
	}
	else {					//If night mode in off change colour to #197EAF
		document.getElementById("nav2").style.backgroundColor = "#197EAF";
	}
}

function nohover2() {
	if (on == true) {			//If night mode is on set colour to black
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

function Form() {
	var score = 0;			//Variable to keep score
	var cascade = document.getElementById("cascade").value;		//Get value entered into textbox
	var style = document.getElementById("style").value;
	var sheet = document.getElementById("sheet").value;
	var c = cascade.toLowerCase();			//Convert to lowercase
	var s = style.toLowerCase();
	var sh = sheet.toLowerCase();
	if (c == "cascading" && s == "style" && sh == "sheet") {			//If all 3 boxes contain the correct answer then add 1 to score
		score +=1;
	}

	var paragraph = document.getElementById("paragraph").value;
	var p = paragraph.toLowerCase();
	if (p == "p") {
		score +=1;
	}

	var bold = document.getElementsByName("bold");
	for (var i = 0, length = bold.length; i < length; i++) {			//For loop iterates number of times that there are options for question
 		if (bold[i].checked) {			//If current radio button is checked
  			var b = bold[i].value;			//Get value selected
			break;			//Break from loop
		}
	}
	if (b == "fw") {		//If answer is correct then add 1 to score
		score +=1;
	}

	var italic = document.getElementsByName("italic");
	for (var i = 0, length = italic.length; i < length; i++) {
 		if (italic[i].checked) {
  			var i = italic[i].value;
			break;
		}
	}
	if (i == "fs") {
		score +=1;
	}

	var underline = document.getElementsByName("underline");
	for (var i = 0, length = underline.length; i < length; i++) {
 		if (underline[i].checked) {
  			var u = underline[i].value;
			break;
		}
	}
	if (u == "td") {
		score +=1;
	}

	var head = document.getElementById("head");
	var h = head.options[head.selectedIndex].innerHTML;		//Get user selection from dropdown menu
	if (h == "Head") {
		score +=1;
	}

	var padding = document.getElementsByName("padding");
	for ( var i = 0, length = padding.length; i < length; i++) {
		if (padding[i].checked) {
			var pad = padding[i].value;
			break;
		}
	}
	if (pad == "inside") {
		score += 1;
	}

	var overflow = document.getElementById("overflow").value;
	var o = overflow.toLowerCase();
	if (o == "overflow") {
		score += 1;
	}

	var position1 = document.getElementById("p1").value;
	var position2 = document.getElementById("p2").value;
	var position3 = document.getElementById("p3").value;
	var position4 = document.getElementById("p4").value;
	var position5 = document.getElementById("p5").value;

	var p1 = position1.toLowerCase();
	var p2 = position2.toLowerCase();
	var p3 = position3.toLowerCase();
	var p4 = position4.toLowerCase();
	var p5 = position5.toLowerCase();

	if (p1 == "static" || p2 == "static" || p3 == "static" || p4 == "static" || p5 ==  "static") {		//If any of the text boxes contain "static" then create a variable that is true
		var static = true;
	}

	if (p1 == "relative" || p2 == "relative" || p3 == "relative" || p4 == "relative" || p5 == "relative") {
		var relative = true;
	}

	if (p1 == "fixed" || p2 == "fixed" || p3 == "fixed" || p4 == "fixed" || p5 == "fixed") {
		var fixed = true;
	}

	if (p1 == "absolute" || p2 == "absolute" || p3 == "absolute" ||p4 == "absolute" || p5 == "absolute") {
		var absolute = true;
	}

	if (p1 == "sticky" || p2 == "sticky" || p3 == "sticky" || p4 == "sticky" || p5 == "sticky") {
		var sticky = true;
	}

	if (static == true && relative == true && fixed == true && absolute == true && sticky == true) {		//If all 5 options have been entered correctly then add 1 to score
		score += 1;
	}

	var target = document.getElementById("t").value;
	var t = target.toLowerCase();

	if (t == "_blank") {
		score +=1;
	}

	document.getElementById("result").innerHTML = "Your score is: " + score + "/10";			//Add message telling user of their score to screen

}

function increaseFont() {
	text = document.getElementById("a");			//Get all text
	style = window.getComputedStyle(text, null).getPropertyValue("font-size");			//Get font size
	currentsize = parseFloat(style);			//Convert to integer
	text.style.fontSize = (currentsize +1) +"px";			//Add 1 to font size
}

function decreaseFont() {
	text = document.getElementById("a");
	style = window.getComputedStyle(text, null).getPropertyValue("font-size");
	currentsize = parseFloat(style);
	text.style.fontSize = (currentsize -1) +"px";			//Subtract 1 from font size
}