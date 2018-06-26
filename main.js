function check() {
	
	var ques_1 = document.Quiz.q1.value;
	var ques_2 = document.Quiz.q2.value;
	var correct = 0;
	if(ques_1 == "29") {
		correct++;
	}
	if(ques_2 == "Gandhinagar") {
		correct++;
	}
	
	var messages = ["Great Job","That's just okay","You really need to do better"];
	var pictures = ["img/win.gif","img/okay.gif","img/bad.gif"];
	var range;
	
	if(correct < 1)
		range = 2;
	if(correct > 0 && correct < 2)
		 range = 1;
	if(correct >= 2)
		range = 0;
	document.getElementById("after_submit").style.visibility = "visible";
	var name = document.Quiz.username.value;
	document.getElementById("message").innerHTML =messages[range]+" "+name+".";
	document.getElementById("num_correct").innerHTML = "You got " + correct + " answers correct.";
	document.getElementById("pic").src = pictures[range];
}