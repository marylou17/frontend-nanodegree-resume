
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
	"dates": "1999 - 20105",
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
	"images": ["http://maryloucooke.com/img/mlcLogo.png"]
	},
	{
	"title": "Computer Graphics",
	"dates": "2014",
	"description": "Adobe InDesign, Illustrator, and PhotoShop Projects",
	"images": ["http://maryloucooke.com/img/edwardianScriptAnimal-pheonix.png", "illustratedPhoto.png", "bookCover-one-fine-day-brookmyre-med.png", "colorizedPhoto.png", "PageofText-minyaNovelle.png"]	
	},
	{
	"title": "Web Design",
	"dates": "2014",
	"description": "Tourism Website for the town of Chester, CT",
	"images": ["http://maryloucooke.com/img/visitChesterWebsite.png"]
	},
	{
	"title": "Digital Multimedia",
	"dates": "2014",
	"description": "Animated and still photo videos with original music",
	"images": ["http://maryloucooke.com/img/mlcLogo.png"]
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

if (bio.skills.length > 0) {
  $("#header").append(HTMLskillsStart);
  var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
  $("#header").append(formattedSkill);
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
  $("#header").append(formattedSkill);
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
  $("#header").append(formattedSkill);
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
  $("#header").append(formattedSkill);
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[4]);
  $("#header").append(formattedSkill);
}; 



