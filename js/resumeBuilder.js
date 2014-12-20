$("#main").append("Mary Lou Cooke");

var email = "marylou@abouttimect.com";
var newEmail = email.replace("abouttimect.com", "gmail");
console.log(newEmail);

var awesomeThoughts = "I am AWESOME!";
var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");
console.log(funThoughts);

$("#main").append(funThoughts);

var name = "Mary Lou Cooke";
var formattedName = HTMLheaderName.replace("%data%", name);


var role = "Web Developer";
var formattedRole = HTMLheaderRole.replace("%data%", role);
$("#main").prepend(formattedRole);
$("#main").prepend(formattedName);

var s = "audacity";

var udacityizer = function(s) {
	s = s[1].toUpperCase() + s.slice(2);
	return s;
};
console.log(udacityizer(s));

var skills = ["awesomeness", "programming", "JS"];
$("#main").append(skills);
$("#main").append(skills[0]);

console.log(skills.length);

$("#main").append(skills.length);

var sampleArray = [0, 0, 7];
var incrementLastArrayElement = function(_array) {
	var newArray = [];
	newArray = _array.slice(0);
    var lastElement = newArray.pop();
    newArray.push(lastElement + 1);
   	return newArray;
}

console.log(incrementLastArrayElement(sampleArray));

var name = "AlbERt EINstEiN";
function nameChanger(oldName) {
	var finalName = oldName;
	var nameArray = oldName.split(" ");
	nameArray[1] = nameArray[1].toUpperCase();
	nameArray[0] = nameArray[0].slice(0,1).toUpperCase() + nameArray[0].slice(1).toLowerCase();
	finalName = nameArray.join(" ");
	return finalName;

};

console.log(nameChanger(name));
//object literal notation
var bio = {
"name": "Mary Lou Cooke",
"skills": [
	"awesomeness", "programming", "JS"],
"role": "Web Developer",
"contacts": {
	"email": "mlc@maryloucooke.com",
	"location": "Connecticut",
	"mobile": "860-301-5739",
	"github": "marylou17"
},
"welcomeMessage": "Greetings!",
"bioPic": "images/mlcLogo.png"
}
$("#main").append(bio.name);

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedSkills = HTMLskills.replace("%data%", bio.skills);
var formattedMessage = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
var formattedPhoto = HTMLbioPic.replace("%data%", bio.bioPic);
var formattedContactMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);

$("#main").append(formattedName);
$("#main").append(formattedRole);
$("#main").append(formattedSkills[0]);
$("#main").append(formattedMessage);
$("#main").append(formattedPhoto);
$("#main").append(formattedContactMobile);

//bracket notation
bio["location"] = "Mountain View";
$("#main").append(bio.location);

//dot notation

var work = {};
	work.employer = "About Time",
	work.position = "business Manager",
	work.years = 3
	

//brack notation for object creation
var education = {};

education["city"] = "Mountain View";
education["name"] = "Udacity";
education["years"] = "2014";

$("#main").append(work["postion"]);
$("#main").append(education.name);

var education = {
	"schools": [
	{
		"name": "Eckerd College",
		"city": "St Petersburg, FL, US",
		"degree": "BA",
		"major": ["CompSci", "French"]
	},
	{
		"name": "Nova College",
		"city": "Ft Lauderdale, FL, US",
		"degree": "Masters",
		"major": ["CompSci"]		
	}
	]
};


