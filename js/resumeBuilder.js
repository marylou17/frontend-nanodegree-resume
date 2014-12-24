
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
	"onlineClasses": [
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


// Add Name and role
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").prepend(formattedRole);
var formattedName = HTMLheaderName.replace("%data%", bio.name);
$("#header").prepend(formattedName);


// Add contact information
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile)
$("#topContacts").append(formattedMobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email)
$("#topContacts").append(formattedEmail);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github)
$("#topContacts").append(formattedGithub);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location)
$("#topContacts").append(formattedLocation);

// Add Photo and Message
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

// Add Work Experience
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

// Add locations to an array for the map
var locationizer = function(work_obj) {
	work = work_obj;
	var workLocationArray = [];
	for (var job in work.jobs) {
		workLocationArray.push(work.jobs[job].location);	
	}
	return workLocationArray;
}

// Add an international name change button
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

// Add projects
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

// Add Education
education.display = function() {
	for (school in education.schools) {
	$("#education").append(HTMLschoolStart);

	var formattedName = HTMLschoolName.replace("%data%",education.schools[school].name)
	$(".education-entry:last").append(formattedName);
	
	var formattedLocation = HTMLschoolLocation.replace("%data%",education.schools[school].location)
	$(".education-entry:last").append(formattedLocation);

	var formattedUrl = HTMLschoolLocation.replace("%data%",education.schools[school].url)
	$(".education-entry:last").append(formattedUrl);

	var formattedDegree = HTMLschoolDegree.replace("%data%",education.schools[school].degree)
	$(".education-entry:last").append(formattedDegree);

		if (education.schools[school].majors.length > 0) {
			for (major in education.schools[school].majors) {
			var formattedMajors = HTMLschoolMajor.replace("%data%",education.schools[school].majors[major])
			$(".education-entry:last").append(formattedMajors);
	}
	}
	var formattedDates = HTMLschoolDates.replace("%data%",education.schools[school].dates)
	$(".education-entry:last").append(formattedDates);
}
}
education.display();

education.onlineClasses.display = function() {
	if (education.onlineClasses.length > 0) {
		for (onlineClass in education.onlineClasses) {
		$("#education").append(HTMLonlineClasses);
	}
	}	
	for (course in education.onlineClasses) {
	// $("#education").append(HTMLonlineClasses);

	var formattedTitle = HTMLonlineTitle.replace("%data%",education.onlineClasses[course].title)
	$(".education-entry:last").append(formattedTitle);
	
	var formattedSchool = HTMLonlineSchool.replace("%data%",education.onlineClasses[course].school)
	$(".education-entry:last").append(formattedSchool);

	var formattedDates = HTMLonlineDates.replace("%data%",education.onlineClasses[course].dates)
	$(".education-entry:last").append(formattedDates);

	var formattedUrl = HTMLonlineURL.replace("%data%",education.onlineClasses[course].url)
	$(".education-entry:last").append(formattedUrl);
}
}

education.onlineClasses.display();	

// Add map 
$("#main").append(googleMap);
$("#mapDiv").append(googleMap);



