//document.getElementById('play').style.display='none';
var chance=3;
var points=0;
var lucky_no=0;
var total_points=0;
function show_name()
{
	var user=window.document.myform.name.value;
	if(user=="")
	{
		alert("Please enter your name");
		window.document.myform.name.focus();
	}
	else
	{
		document.getElementById('greet').innerHTML="Hello "+user+"! Tap on the wheel to earn points.";
		document.getElementById('play').style.display='';
		document.getElementById('chances').innerHTML="Chances Left: "+chance;
		//chance--;
	}
}
function start()
{
	calculate();
	chance--;
	show_lucky_no();
	show_points();
	if(chance==0)
	{
		show_result();
	}
	document.getElementById('chances').innerHTML="Chances Left: "+chance;
	
}
function calculate()
{
	lucky_no=5;
	points=89;
}
function show_lucky_no()
{
	/*document.getElementById('lucky_no').style.display='';
	var set=setTimeout(function(){
		document.getElementById('lucky_no').innerHTML="Your Lucky Number: "+lucky_no;
	},3000);*/
	document.getElementById('lucky_no').innerHTML="Your Lucky Number: "+lucky_no;
}
function show_points()
{
	document.getElementById('points').innerHTML="Gained Points: "+points;
}
function show_result()
{
	document.getElementById('result').innerHTML="Total Points: "+total_points;
}