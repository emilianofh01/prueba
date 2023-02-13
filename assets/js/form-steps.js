//NEXT BUTTONS
var step_1_next_btn = document.querySelector(".formStep1-btns .btn_next");
var step_2_next_btn = document.querySelector(".formStep2-btns .btn_next");

//BACK BUTTONS
var step_2_back_btn = document.querySelector(".formStep2-btns .btn_back");
var step_3_back_btn = document.querySelector(".formStep3-btns .btn_back");

//PROGRESSBAR
var stepProgressbar2 = document.querySelector(".stepProgressbar2");
var stepProgressbar3 = document.querySelector(".stepProgressbar3");

//FUNCTIONS
step_1_next_btn.addEventListener("click", function(){
	document.querySelector(".formStep1").style.display = "none";
	document.querySelector(".formStep2").style.display = "block";
	
	document.querySelector(".formStep1-btns").style.display = "none";
	document.querySelector(".formStep2-btns").style.display = "flex";

	stepProgressbar2.classList.add("active");
	document.documentElement.scrollTop = 0;
});

step_2_back_btn.addEventListener("click", function(){
	document.querySelector(".formStep1").style.display = "block";
	document.querySelector(".formStep2").style.display = "none";

	document.querySelector(".formStep1-btns").style.display = "flex";
	document.querySelector(".formStep2-btns").style.display = "none";

	stepProgressbar2.classList.remove("active");
	document.documentElement.scrollTop = 0;
});

step_2_next_btn.addEventListener("click", function(){
	document.querySelector(".formStep2").style.display = "none";
	document.querySelector(".formStep3").style.display = "block";
	
	document.querySelector(".formStep2-btns").style.display = "none";
	document.querySelector(".formStep3-btns").style.display = "flex";

	stepProgressbar3.classList.add("active");
	document.documentElement.scrollTop = 0;
});

step_3_back_btn.addEventListener("click", function(){
	document.querySelector(".formStep2").style.display = "block";
	document.querySelector(".formStep3").style.display = "none";

	document.querySelector(".formStep2-btns").style.display = "flex";
	document.querySelector(".formStep3-btns").style.display = "none";

	stepProgressbar3.classList.remove("active");
	document.documentElement.scrollTop = 0;
});