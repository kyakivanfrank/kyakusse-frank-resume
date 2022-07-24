import profile_pic from "../resources/profileimage.jpg"

const currentYear = new Date().getFullYear()
const myage = currentYear - 1994


const Mydata = {
	"myName": "Frank Ivan Kyakusse",
	"position": "Front-end web developer",
	"profile_pic": profile_pic,
	
	"personal_statement": [`As am inclined more towards software(web development), Am generally a Technology enthusiast.`,`I have a great passion for coming up with solutions to problems relating to communication, comprehending and writing logic for the software front-end and back-end with a touch of creative user-interface design.`
	,`I have a great hold of my capabilities gained from both in-field and personal practice therefore am able to finalize upto 90% of what I put hands on.`,`
	I love collaborating among teams and this has built more confidence in me and sharpened my learning abilities`,`
	I'm also institutionally well trained hence awarded with a bachelor's in computer applications degree from a reputable University`],

// [`Professionally a web developer and software tech enthusiast with great passion for what i do.
		// Through aspects like creativity, design and building logic. I come up with user-interactive web based solutions and models that give a rather fulfilling experience.
		// `,
		// `With practice and familiarity of the technologies in the field, I have well trusted abilities in working and finalizing given assignments.
		// `,
		// `I have a great eye for ideating and seeing design and this helps strengthen my workability.`,
	
		// // `I hold a Bachelors in computer applications degree acquired from a well reputated university in my area.`],
	experience: [
	{
			"job_title":"Graphics designer/ Digital Marketeer",
			"job_location": "barrels Blended scotch whisky company",
			"time_spent": "2022 - to Date",
			"duties": [
				"Designing product promotion and advertisement documents like posters, price lists brochures and nore",
				"social media advertisement and digital marketing",
				"communications, optimsizing the connection between our sales team to the clients thus increasing sales",
			]
		},
		{
			"job_title":"Graphics designer, web developer",
			"job_location": "Livewire Uganda/ Cadd Centre/ cyber school tech solutions",
			"time_spent": "2019 -2020",
			"duties": [
				"Designing web interfaces for websites",
				"Designed graphics for advertisement and marketing for our products team",
				"Did online marketing on social media management for livewire training institute",
			]
		},
		{
			"job_title":"Digital marketeer",
			"job_location": "Premier distilleries Uganda Limited, Kampala",
			"time_spent": "2019 -2019",
			"duties": [
				"Companies representative for products like 9 barrels & old glen scotch",
				"inter-communication between clients and company for product sales",
				"Was partly a designer & helped create bill-board ads for our products",
			]
		},
		{
			"job_title":"Data Entrant",
			"job_location": "Career College Abroad,Ludhiana India",
			"time_spent": "2016 -2017",
			"duties": [
				"Creating and editing students assignment for printing",
				"Was partly a tutor and interacted with students for english lessons",
				"Carrying out teaser interview on students' studies",
			]
		},
	
	],


	"education": [
		{
			"course":"Bachelors in computer application( BCA )",
			"study_location": "Punjab technical University, India",
			"time_spent": "2015 - 2018",
			"achievements": [
				`I got hands on with: general and advanced computer knowledge, computer programming in the fundamental languages,
				web development, android development and much more`,
				"i acquired standard certification as an information technologist",
				"acquired technical expertise and interpersonal skills"
			]
		},
		{
			"course":"Uganda Advanced Certificate of Education(UACE)",
			"study_location": "Nansana Education Centre (NEC), Kampala Uganda",
			"time_spent": "2013 - 2014",
			"achievements": [
				`i got certification in Advanced Secondary School Learning with a Good aggregate`,
				"Studied Geography, Enterprenuership, Computer and information Technology, Fine art and many other suplementary credits",
			]
		}
	],
	
	
	"certification": [
		{
		"time_spent": "2013 - 2013",
		"certification_name": "Certificate in Computer Applications(CCA), Makerere University"
	},
	{
		"time_spent": "2018 -2018",
		"certification_name": "Certificate in Android development, Ansh infoTech, ludhiana India"
	},{
		"time_spent": "2017-2017",
		"certification_name": "Certificate in Embedded Systems programming, PCTE college, Ludhiana India"
	}
],


"Hobbies_interests": ["Swimming", "dancing" , "Listening to Music", "networking with people"],

"personal_info":{
	"obj1":[ 
	{"attribute":"Gender & Age","item": `Male, ${myage} years`},
	{"attribute":"Address","item": "Kasubi Kampala, Uganda"},
	{"attribute":"Phone","item": " whatsapp@ 0708481316"},
	{"attribute":"E-mail","item": "kyakivanfrank@gmail.com"}
	
], "obj2": {"attribute":"Links", "item": [
	{"http":"http://www.linkedin.com/in/kyakusse-frank-ivan-16a7aa101/","to":"LinkedIn"},
	{"http":"https://github.com/kyakivanfrank/","to":"GitHub"}]},
},
skills: [
"Problem solving, I developed away of looking at challenges as just levels for one to overcome and I'd work my way out to another level",
"Team work, I love socializing. I believe that two heads are better than one and i also know that a lone walker would reach fast but as a group you'd reach farthest hence being able to complete bigger achievements",
"I'm a quick learner, I love learning new things and in this i devised in myself a working approach to anything am subjected to hence adding that to my repertoire, this gives me versatility at any Technology"],


"TechnicalExpertise":{
	"programming_skills": [
		{"language":"javaScript",  "level": 3 }, // level is any integer <= 5
		{"language":"React",  "level": 4 }, // level is any integer <= 5
		{"language":"UI design",  "level": 4 }, // level is any integer <= 5
	], "otherSkills": ["adobe suite", "video editing", "graphics designing"]},
	
	"languages_spoken": [
		{"language":"English",  "level": 4 }, // level is any integer <= 5
		{"language":"Luganda",  "level": 5 }, // level is any integer <= 5
	]

	
}

export default Mydata;
