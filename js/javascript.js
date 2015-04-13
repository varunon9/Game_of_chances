//document.getElementById('play').style.display='none';
var chance=4;
var points=0;
var lucky_no=0;
var total_points=0;
var temp_lucky_no=0;
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
		document.getElementById('chances').innerHTML="You have four chances. Good Luck!";
		//chance--;
	}
}
function start()
{
	calculate();
	chance--;
	show_lucky_no();
	show_points();
	//if(chance==0)
		show_result();
	//if(chance==0)
		//var final_points=total_points;
	if(chance>=0)
	{
		document.getElementById('chances').innerHTML="Chances Left: "+chance;
	}
	else //if(chance==-1)
	{
		var final_points=total_points-points;
		document.getElementById('chances').innerHTML="Game Over. Collect your points.";
		//document.getElementById("audio_tag").play();
		document.getElementById('lucky_no').style.display='none';
		document.getElementById('points').style.display='none';
		document.getElementById('result').style.display='none';
		document.getElementById('final_result').innerHTML="You earned total "+final_points+" points.";
	}
	document.getElementById("audio_tag").play();
	
}
function calculate()
{
	if(chance>=0)
	{
		lucky_no=Math.random()*100;
		//points=89;
		if(lucky_no==0)
			lucky_no=0;
		else if(lucky_no>0&&lucky_no<=6)
			lucky_no=6;
		else if(lucky_no>6&&lucky_no<=13)
			lucky_no=13;
		else if(lucky_no>13&&lucky_no<=44)
			lucky_no=44;
		else if(lucky_no>44&&lucky_no<=97)
			lucky_no=97;
		else 
			lucky_no=100;
			
			
		if(lucky_no==temp_lucky_no)
		{
			lucky_no=0;
			temp_lucky_no=6;
			//alert("same as previous");
		}
		else
			temp_lucky_no=lucky_no;
			
			
		switch(lucky_no)
		{
			case 0: points=32;break;
			case 6: points=77;break;
			case 13: points=5;break;
			case 44: points=81;break;
			case 97: points=21;break;
			default: points=0;
		}
		total_points=total_points+points;
	}
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