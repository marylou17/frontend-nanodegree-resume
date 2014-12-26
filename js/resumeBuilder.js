


var bio = {
	"name": "Mary Lou Cooke",
	"role": "Web Designer & Developer",

	"contacts": {
		"mobile": "860.301.5739",
		"email": "mlc@maryloucooke.com",
		"github": "marylou17",
		"twitter": "@maryloucooke17",
		"location": "Connecticut"	
		},
	"welcomeMessage": "Here's a look at what I've been doing with my life",	
	"skills": ["javaScript", "HTML", "CSS", "Graphic Design", "Audio Composition"],	
	"biopic": "images/fry.jpg",
	"inName": function(name) {
	 	nameArray = [];
	 	var intName = bio.name;
		nameArray = intName.trim().split(" ");
		nameArray[0] = nameArray[0].slice(0,1).toUpperCase() + nameArray[0].slice(1).toLowerCase();
		nameArray[2] = nameArray[2].toUpperCase();
		intName = nameArray.join(" ");
		return intName;
	},	
	"display": function() {
	// Add Name and role
		var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
		$("#header").prepend(formattedRole);
		var formattedName = HTMLheaderName.replace("%data%", bio.inName(bio.intName));
		$("#header").prepend(formattedName);
		// Add contact information
		var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
		$("#topContacts, #letsConnect").append(formattedMobile);
		var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
		$("#topContacts, #letsConnect").append(formattedEmail);
		var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
		$("#topContacts, #letsConnect").append(formattedGithub);		
		var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);		
		$("#topContacts, #letsConnect").append(formattedTwitter);
		var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
		$("#topContacts, #letsConnect").append(formattedLocation);
		// Add Photo and Message
		var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
		$("#header").append(formattedBioPic);
		var formattedMessage = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
		$("#header").append(formattedMessage);
		// if statement that adds skills
			if (bio.skills.length > 0) {
		 		$("#header").append(HTMLskillsStart);
	 			for (skill in bio.skills) {
	 	 		var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
		  		$("#skills").append(formattedSkill);	
	  		}
		}
	}
}

var work = {
	"jobs": [
	{
	"employer": "About Time Restorations",
	"title": "Business Manager",
	"location": "Higganum, CT",
	"dates": "2005 - 2014",
	"description": "Manage the day-to-day financial, marketing, and technical aspects of a small business"
	},
	{
	"employer": "Electronic Data Systems",
	"title": "Senior Systems Administrator",
	"location": "New Britain, CT",
	"dates": "1999 - 2005",
	"description": "Managed the network and user experience for a mid-sized LAN"
	}
	],
	"display": function() {
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
	],
	"display": function() {
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
}

var education = {
	"schools": [
	{
	"name": "Middlesex Community College",
	"location": "Middletown, CT",
	"degree": "Associates",
	"majors": ["Multi-media Arts"],
	"dates": 2015,
	"url": "http://mxcc.edu"
	},
	{
	"name": "Udacity.com",
	"location": "Mountain View, CA",
	"degree": "Front-End Web Developer Nanodegree",
	"majors": ["Web Development"],
	"dates": 2015,
	"url": "http://udacity.com"
	},
	{
	"name": "Berklee College of Music",
	"location": "Boston, MA",
	"degree": "Songwriting Master Certificate",
	"majors": ["Songwriting", "Arranging", "Music Production"],
	"dates": 2012,
	"url": "http://online.berklee.edu"
	}
	],
	"onlineCourses": [
	{
		"title": "Intro to Digital Arts",
		"school": "Middlesex Community College",
		"date": 2014,
		"url": "http://mxcc.edu"
	},
	{
		"title": "Computer Graphics",
		"school": "Middlesex Community College",
		"date": 2014,
		"url": "http://mxcc.edu"
	},
	{
		"title": "Intermediate Algebra",
		"school": "Middlesex Community College",
		"date": 2014,
		"url": "http://mxcc.edu"
	},
	{
		"title": "Web Design I",
		"school": "Middlesex Community College",
		"date": 2014,
		"url": "http://mxcc.edu"
	},
	{			
		"title": "Intro the HTML and CSS",
		"school": "Udacity",
		"date": 2014,
		"url": "https://www.udacity.com/course/ud304"
	},
	{			
		"title": "How to Use Git and GitHub",
		"school": "Udacity",
		"date": 2014,
		"url": "https://https://www.udacity.com/course/ud775"
	},		 
	{			
		"title": "JavaScript Basics",
		"school": "Udacity",
		"date": 2014,
		"url": "https://www.udacity.com/course/ud804"
	},
	{			
		"title": "Arranging 1: Rhythm Section",
		"school": "Berkleemusic.com",
		"date": 2009,
		"url": "http://online.berklee.edu/courses/arranging-1-rhythm-section"
	},
	{			
		"title": "Desktop Music Production for PC",
		"school": "Berkleemusic.com",
		"date": 2010,
		"url": "http://online.berklee.edu/courses/desktop-music-production-for-pc"
	},
	{			
		"title": "Pro Tools 101",
		"school": "Berkleemusic.com",
		"date": 2010,
		"url": "http://online.berklee.edu/courses/pro-tools-101"
	},
	{			
		"title": "Music Production Analysis",
		"school": "Berkleemusic.com",
		"date": 2013,
		"url": "http://online.berklee.edu/courses/music-production-analysis"
	},
	{			
		"title": "Songwriting: Writing Hit Songs",
		"school": "Berkleemusic.com",
		"date": 2010,
		"url": "http://online.berklee.edu/courses/songwriting-writing-hit-songs"
	},
	{			
		"title": "Songwriting: Harmony",
		"school": "Berkleemusic.com",
		"date": 2011,
		"url": "http://online.berklee.edu/courses/songwriting-harmony"
	},
	{			
		"title": "Songwriting: Melody",
		"school": "Berkleemusic.com",
		"date": 2012,
		"url": "http://online.berklee.edu/courses/songwriting-melody"
	},
	{			
		"title": "Songwriting for Film and TV",
		"school": "Berkleemusic.com",
		"date": 2010,
		"url": "http://online.berklee.edu/courses/songwriting-for-film-and-tv"
	},
	{			
		"title": "Lyric Writing: Writing From the Title",
		"school": "Berkleemusic.com",
		"date": 2012,
		"url": "http://online.berklee.edu/courses/lyric-writing-writing-from-the-title"
	},
	{			
		"title": "Lyric Writing: Tools and Strategies",
		"school": "Berkleemusic.com",
		"date": 2011,
		"url": "http://online.berklee.edu/courses/lyric-writing-tools-and-strategies"
	},
	{			
		"title": "Lyric Writing: Writing Lyrics to Music",
		"school": "Berkleemusic.com",
		"date": 2011,
		"url": "http://online.berklee.edu/courses/lyric-writing-writing-lyrics-to-music"
	},
	{			
		"title": "Commercial Songwriting Techniques",
		"school": "Berkleemusic.com",
		"date": 2012,
		"url": "http://online.berklee.edu/courses/commercial-songwriting-techniques"
	}
	],
	"display": function() {
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
		var formattedDates = HTMLschoolDates.replace("%data%",education.schools[school].dates);
		$(".education-entry:last").append(formattedDates);			
		}
		for (course in education.onlineCourses) {
		var formattedTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[course].title)
		$(".education-entry:last").append(formattedTitle);			
		var formattedSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses[course].school)
		$(".education-entry:last").append(formattedSchool);
		var formattedDates = HTMLonlineDates.replace("%data%",education.onlineCourses[course].date)
		$(".education-entry:last").append(formattedDates);
		var formattedUrl = HTMLonlineURL.replace("%data%",education.onlineCourses[course].url)
		$(".education-entry:last").append(formattedUrl);
		}
		$("#education").append(HTMLonlineClasses);	
	}

}


var renderResume = function() {
	bio.display();
	work.display();
	projects.display();	
	education.display();
	$("#main").append(googleMap);
	$("#mapDiv").append(googleMap);
}
renderResume();




