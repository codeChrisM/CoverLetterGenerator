//javascript code

    function validateForm()
    {
    var company=document.getElementById("company").value;
    var jobTitle=document.getElementById("jobTitle").value;
    var profession= document.getElementById("profesion").value;
    var skills= document.getElementById("skills").value;

    if (company==""||jobTitle==""|| skills=== "" || profession=="")
      {
      	alert("Company Name, Boss Name, Job title, Skills, and Profession are required");
      	console.log("Company: "+ company + " Boss: " + bossName + "JobTitle: "+ jobTitle + "Skills: " + skills + "Profession: " + profession);
      	return false;
      }else{
    	return true;
      }
    }

//insert boss name
function intro(){
	var bossName= document.getElementById("bossName").value;
	var replacement ="Dear " + bossName + ","+  "<br>"  +"  My name is Christopher Marlowe and";
	if(bossName.length>1){ //address a specific person if given.
		document.getElementById("intro").innerHTML = replacement;
		document.getElementById("boss").innerHTML = bossName + ",";
	}else{
		document.getElementById("intro").innerHTML= "Hello," +  "<br>"  + "  My name is Christopher Marlowe,";
	}
}



//young or not inserted
function internship(){
	var internbox= document.getElementById("intern").checked;
	if(internbox)
		document.getElementById("youngInsert").innerHTML = "young ";
	else
		document.getElementById("youngInsert").innerHTML = " ";
}


//profesion inserted
function profesionName(){
	var chosenProfesion = document.getElementById("profesion");
	var selectedText = chosenProfesion.options[chosenProfesion.selectedIndex].text;
	document.getElementById("profesionInsert").innerHTML = selectedText;
}


//time  
function time(){
	var  chosenProfesion= document.getElementById("profesion");
	var x= chosenProfesion.options[chosenProfesion.selectedIndex].text;
	var timeID = document.getElementById("timeInsert").innerHTML;

	if((x == "Front-End Developer")||(x == "Web Designer")||(x == "Web Developer")||(x == "Coder"))
		document.getElementById("timeInsert").innerHTML= "almost a year ";
	else if((x == "Animator")||(x == "Motion Graphics Artist")||(x == "Video Editor"))
		document.getElementById("timeInsert").innerHTML= "several years ";
	else 
		document.getElementById("timeInsert").innerHTML= "ERROR. TIME function ERROR";
}

//add n for animator
function n(){
	var chosenProfesion= document.getElementById("profesion");
	var x= chosenProfesion.options[chosenProfesion.selectedIndex].text;
	var internbox=document.getElementById("intern").checked;

	if((x=="Animator")&&(internbox==false) )	
		document.getElementById("n").innerHTML="n ";
	else
		document.getElementById("n").innerHTML=" ";
}


//thier job title insert function
function job(){
	var title= document.getElementById("jobTitle").value;

	if(title.length>1)
		document.getElementById("jobTitleInsert").innerHTML = title;
	else
		document.getElementById("jobTitleInsert").innerHTML= "ERROR: NO JOB TITLE!!";
}


//company name
function company(){
	var companyA= document.getElementById("company").value;

	if(companyA.length>1)
		document.getElementById("companyName").innerHTML = companyA;
	else
		document.getElementById("companyName").innerHTML= "ERROR: No  COMPANY NAME!!";
}

//
function skillsList(){ //s

	var skill= document.getElementById("skills").value;

	console.log("skills to include " + skill);
		//selected pattern to search for HTML or java script
		var pattern = /(html|java script|js|javascript+)\s*,*\s*(html|java script|js|javascript)+\s*,*\s*(html|java script|js|javascript)*/gi;
		var result = pattern.exec(skill); // makes array[everything, thing1, thing 2,...]
		console.log("can you see this")
		console.log(result);		

		console.log("can you see this 2")
		console.log(result.length);
		
		// if(result[3] === undefined){
		// 	result.pop();
		// 	console.log("un"+ result);
		// }
		console.log("postpop"+result);
		result.shift(); //removes "index0" from array
		console.log(result);	
		console.log(result.length);		
		var end= result.length-1; //one spot in index before last 


		
		if(result.length<2){
			document.getElementById("skillsList").innerHTML= "ERROR: No  SKILLSLIST!!";
			console.log("none");


		}else if(result.length== 2){
			console.log("two");

			result.splice(1,0," and ");
			var resultA= result.join(" ");
document.getElementById("skillsList").innerHTML = resultA+","; //two words 

}else{ 
	console.log("more two");	
	console.log(result);
	var z= ", and " + result.slice(end);
	console.log(z);
	var y=result.slice(0,end);
	console.log(y);
	var resultAB=  y.join(", ")+ z;
document.getElementById("skillsList").innerHTML = resultAB;  //3 or more
}

}


//funtion  for each type 
function skills(){

	var skillsA= document.getElementById("skills").value;

		//selected pattern to search for HTML or java script
		var pattern = /(html|java script|js|javascript)+\s*,*\s*(html|java script|js|javascript)+/i;
		var result = pattern.test(skillsA);
		
		if(result){
			document.getElementById("htmlTrigger").style.display = "inline";
		}else{
			document.getElementById("htmlTrigger").style.display = "none";		
		}
	}

//bonus skills
function bonus(){
	var bonusA= document.getElementById("bonus").value;

	if(bonusA.length>1){
		document.getElementById("bonusTrigger").style.display = "inline";	
		document.getElementById("bonusSkills").innerHTML = bonusA;
	}else{
		document.getElementById("bonusTrigger").style.display = "none";	
	}
}


//LInks approriate for display
function links(){
	var chosenProfesion = document.getElementById("profesion");
	var selectedText = chosenProfesion.options[chosenProfesion.selectedIndex].text;


	if((selectedText == "Front-End Developer")||(selectedText == "Web Designer")||(selectedText == "Web Developer")||(selectedText == "Coder")){
		document.getElementById("animationLink").style.display = "inline";	
		document.getElementById("gitLink").style.display = "inline";
		document.getElementById("and").style.display = "inline";
	}else if((selectedText == "Animator")||(selectedText == "Motion Graphics Artist")||(selectedText == "Video Editor")){
		document.getElementById("animationLink").style.display = "inline";	
		document.getElementById("gitLink").style.display = "none";
		document.getElementById("and").style.display = "none";
	}else {
		document.getElementById("timeInsert").innerHTML= "ERROR NO LINKS!!!";
	}
}



function lightsOn(){
	document.getElementById("everything").style.display = "inline";	
}


//all functions
function submitAll(){
	if(validateForm()){
		intro();
		internship();
		profesionName();
		time();
		n();
		job();
		company();
		skills();
		skillsList();
		bonus();
		links();
		lightsOn();
	}

}
