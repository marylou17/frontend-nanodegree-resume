
var bio = {
	"name": "Mary Lou Cooke",
	"role": "Web Developer",
	"message": "Greetings!",
	"bioPic": "images/fry.jpg",
	"contacts": {
		"mobile": "860.301.5739",
		"email": "mlc@maryloucooke.com",
		"github": "marylou17",
		"location": "Connecticut"	
		},	
	"skills": ["javaScript", "HTML", "CSS", "Graphic Design", "Audio Composition"]	
}

var work = {
	"jobs": [
	{
	"employer": "About Time",
	"title": "Business Manager",
	"location": "Higganum, CT",
	"dates": "2005 - 2014",
	"description": "Manage the financial, marketing, and technical aspects of running a small business"
	},
	{
	"employer": "Electronic Data Systems",
	"title": "Senior Systems Administrator",
	"location": "New Britain, CT",
	"dates": "1999 - 2005",
	"description": "Managed the network and user experience for a medium sized LAN"
	}
	]
}

var projects = {
	"projects": [
	{
	"title": "maryloucooke.com",
	"dates": "2014",
	"description": "Personal portfolio website",
	"images": ["images/mlcLogo.png"]
	},
	{
	"title": "Computer Graphics",
	"dates": "2014",
	"description": "Adobe InDesign, Illustrator, and PhotoShop Projects",
	"images": ["images/edwardianScriptAnimal-pheonix.png"]	
	},
	{
	"title": "Web Design",
	"dates": "2014",
	"description": "Tourism Website for the town of Chester, CT",
	"images": ["images/visitChesterWebsite.png"]
	},
	{
	"title": "Digital Multimedia",
	"dates": "2014",
	"description": "Animated and still photo videos with original music",
	"images": ["images/designPrincipals.png"]
	}	
	]

}

var education = {
	"schools": [
	{
	"name": "Middlesex Community College",
	"location": "Middletown, CT",
	"degree": "Associates",
	"majors": ["Multi-media Arts"],
	"dates": "2014",
	"url": "http://mxcc.edu"
	},

	{
	"name": "Udacity.com",
	"location": "Mountain View, CA",
	"degree": "Nano Degree",
	"majors": ["Web Developer"],
	"dates": "2014",
	"url": "http://udacity.com"
	}
	],
	"onLineCourses": [
	{
		"title": "Intro to Digital Arts",
		"school": "Middlsex CC",
		"dates": "2014",
		"url": "http://mxcc.edu"
	},
	{
		"title": "Computer Graphics",
		"school": "Middlsex CC",
		"dates": "2014",
		"url": "http://mxcc.edu"
	},
	{
		"title": "Intermediate Algebra",
		"school": "Middlsex CC",
		"dates": "2014",
		"url": "http://mxcc.edu"
	},
	{
		"title": "Web Design I",
		"school": "Middlsex CC",
		"dates": "2014",
		"url": "http://mxcc.edu"
	},
	{			
		"title": "Intro the HTML and CSS",
		"school": "Udacity",
		"dates": "2014",
		"url": "https://www.udacity.com/course/ud304"
	},
	{			
		"title": "How to Use Git and GitHub",
		"school": "Udacity",
		"dates": "2014",
		"url": "https://https://www.udacity.com/course/ud775"
	},		 
	{			
		"title": "JavaScript Basics",
		"school": "Udacity",
		"dates": "2014",
		"url": "hhttps://www.udacity.com/course/ud804"
	}
]	
}



var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").prepend(formattedRole);
var formattedName = HTMLheaderName.replace("%data%", bio.name);
$("#header").prepend(formattedName);



var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile)
$("#topContacts").append(formattedMobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email)
$("#topContacts").append(formattedEmail);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github)
$("#topContacts").append(formattedGithub);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location)
$("#topContacts").append(formattedLocation);

var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic)
$("#header").append(formattedBioPic);
var formattedMessage = HTMLWelcomeMsg.replace("%data%", bio.message)
$("#header").append(formattedMessage);


// if statement that adds skills
if (bio.skills.length > 0) {
  $("#header").append(HTMLskillsStart);
  for (skill in bio.skills) {
  var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
  $("#skills").append(formattedSkill);	
  }

}; 

//Lesson 2 exercises

function makeCourse() {

};

var cameron = {}
cameron.job = "course dev";
var courses = 0;
while (cameron.job === "course dev") {
	makeCourse();
	courses = courses +1;
	console.log(cameron.job);
	if (courses === 10) {
		cameron.job = "learning specialist";
	}
}

console.log(cameron.job);

for (var i = 0; i< 9; i++) {
	console.log(i);
}

var countries = ["Germany", "USA", "Brazil", "Argentina", "Netherlands"];
for (country in countries) {
	console.log(countries[country]);
}



// back to the resume building



var displayWork = function() {
	for (job in work.jobs) {
	$("#workExperience").append(HTMLworkStart);
	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
	var formattedEmployerTitle = formattedEmployer + formattedTitle;	
	$(".work-entry:last").append(formattedEmployerTitle);
	
	var formattedLocation = HTMLworkLocation.replace("%data%",work.jobs[job].location)
	$("#WorkExperience").append(formattedLocation);
	var formattedDates = HTMLworkDates.replace("%data%",work.jobs[job].dates)
	$("#WorkExperience").append(formattedDates);
	var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description)
	$("#WorkExperience").append(formattedDescription);
	var formattedLocationDatesDescription= formattedLocation + formattedDates 
	+ formattedDescription;	
	$(".work-entry:last").append(formattedLocationDatesDescription);
}
}

displayWork();

var locationizer = function(work_obj) {
	work = work_obj;
	var workLocationArray = [];
	for (var job in work.jobs) {
		workLocationArray.push(work.jobs[job].location);
		
	}
	return workLocationArray;
}
//make an international name change button
var inName = function(name) {
 	nameArray = [];
 	var finalName = bio.name;
	nameArray = finalName.trim().split(" ");
	nameArray[0] = nameArray[0].slice(0,1).toUpperCase() + nameArray[0].slice(1).toLowerCase();
	nameArray[2] = nameArray[2].toUpperCase();
	finalName = nameArray.join(" ");
	return finalName;


	
	var workLocationArray = [];
	for (var job in work.jobs) {
		workLocationArray.push(work.jobs[job].location);
		
	}
	return workLocationArray;
}
$("#main").append(internationalizeButton);

projects.display = function() {
	for (project in projects.projects) {
	$("#projects").append(HTMLprojectStart);

	var formattedTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].title)
	$(".project-entry:last").append(formattedTitle);
	
	var formattedDates = HTMLprojectDates.replace("%data%",projects.projects[project].dates)
	$(".project-entry:last").append(formattedDates);

	var formattedDescription = HTMLprojectDescription.replace("%data%",projects.projects[project].description)
	$(".project-entry:last").append(formattedDescription);

		if (projects.projects[project].images.length > 0) {
			for (image in projects.projects[project].images) {
			var formattedImage = HTMLprojectImage.replace("%data%",projects.projects[project].images[image])
			$(".project-entry:last").append(formattedImage);
	}
	}
}
}


projects.display();

$("#main").append(googleMap);
$("#mapDiv").append(googleMap);



