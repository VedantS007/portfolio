/* Change this file to get your personal Portfolio */

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: true, // set to false to use static SVG
};

const greeting = {
  username: "Vedant Soni",
  title: "Hi all, I'm Vedant",
  subTitle: emoji(
    "A passionate React Software Developer 🚀 having an experience of designing and building Web applications with JavaScript / React JS / React Native / Firebase and some other cool libraries and frameworks, Check some of my works from provided links in below sections."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing",
  displayGreeting: true, // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/VedantS007",
  linkedin: "https://www.linkedin.com/in/vedant-soni-230b551a8",
  gmail: "s.vedant5219@gmail.com",
  // gitlab: "https://gitlab.com/",
  // facebook: "https://www.facebook.com/",
  // medium: "https://medium.com/@davidrakosi",
  // stackoverflow: "https://stackoverflow.com/users/13263979/drakosi",
  instagram: "https://www.instagram.com/__mr.ved__007/",
  // twitter: 'https://twitter.com/davidrakosi_',
  display: true, // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "CRAZY REACT DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK & IMPROVE EVERYDAY",
  skills: [
    emoji(
      "⚡ Developing highly interactive Front end / User Interfaces for web applications"
    ),
    emoji("⚡ Integration of third party services such as Firebase, NodeJs, MongoDB"),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "HTML-5",
      fontAwesomeClassname: "fab fa-html5",
    },
    {
      skillName: "CSS3",
      fontAwesomeClassname: "fab fa-css3-alt",
    },
    {
      skillName: "C++",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js",
    },
    {
      skillName: "React JS",
      fontAwesomeClassname: "fab fa-react",
    },
    {
      skillName: "React Native",
      fontAwesomeClassname: "fab fa-react",
    },
    {
      skillName: "Node JS",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "Adobe XD",
      fontAwesomeClassname: "fas fa-pen-fancy",
    },
    {
      skillName: "Material UI",
      fontAwesomeClassname: "fab fa-uikit",
    },
    {
      skillName: "NPM",
      fontAwesomeClassname: "fab fa-npm",
    },
    {
      skillName: "MongoDB",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Firebase",
      fontAwesomeClassname: "fas fa-fire",
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName:
        "Shri Shankaracharya Institute of Professional Management & Technology, Raipur(C.G)",
      logo: require("./assets/images/SSIPMT.jpg"),
      subHeader: "Bachelor of Engineering with Computer Science",
      duration: "July 2018 - July 2022",
      desc: "Current aggregate in BE is 64.70%",
      descBullets: [
        "Volunteer in Smart India Hackathon - 2020",
        "Participated in many sports events like Baminton, Table Tennis, Tug of War, etc.",
      ],
    },
    {
      schoolName: "Vardhaman The School",
      logo: require("./assets/images/V.png"),
      subHeader: "12th standard",
      duration: "April 2017 - April 2018",
      desc: "Secured 70%", 
      descBullets: [
        "Headboy of the school",
        "Sports Minister of the school in 11th",
      ],
    },
    {
      schoolName: "Holy Cross Byron Bazar, Raipur (C.G)",
      logo: require("./assets/images/HCS.png"),
      subHeader: "10th standard",
      duration: "April 2015 - April 2016",
      desc: "Secured 6.4 CGPA",
      descBullets: [
        "Member of Badminton team in Interschool Sports competetion",
      ],
    },
  ],
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "React JS", //Insert stack or technology you have experience in
      progressPercentage: "70%", //Insert relative proficiency in percentage
    },
    {
      Stack: "React Native",
      progressPercentage: "60%",
    },
    {
      Stack: "Adobe XD",
      progressPercentage: "60%",
    },
    {
      Stack: "Data Structure & Algorithm",
      progressPercentage: "60%",
    },
    {
      Stack: "C++",
      progressPercentage: "50%",
    },
    {
      Stack: "Node JS",
      progressPercentage: "34%",
    },
    {
      Stack: "Mongo DB",
      progressPercentage: "60%",
    },
    {
      Stack: "Firebase",
      progressPercentage: "60%",
    },
  ],
  displayCodersrank: true, // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "React JS Intern",
      company: "FineOps",
      companylogo: require("./assets/images/React.png"),
      date: "12 April 2021 – 12 July 2021",
      desc:
        "Working as a Front-end developer in Noida based startup for 3 months.",
      descBullets: [
        "Built the completely responsive static E-learning website for US-based startup",
        "Built the UI design of Dating application",
        "Built the front-end of Dating web-app in React JS",
      ],
    },
    {
      role: "Managing Director",
      company: "Easy Events",
      companylogo: require("./assets/images/EasyEvent.jpeg"),
      date: "December 2019 - March 2020",
      desc:
        "Experienced working in a new startup, Improving management & communication skills",
      descBullets: [
        "Event Planning",
        "Maintaining Team coordination",
        "Open Mics",
      ],
    },
  ],
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "VedantS007", // Change to your github username to view your profile in Contact Section.
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false, // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  // subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/WA.jpg"),
      projectName: "WhatsApp Clone",
      projectDesc:
        "I made this project using React.JS, Context API for state management & Firebase as Database.",
      footerLink: [
        {
          name: "Visit Website",
          url: `https://whatsapp-mern-63fba.firebaseapp.com/`,
        },
        //  you can add extra buttons here.
      ],
    },
    {
      image: require("./assets/images/Azon.png"),
      projectName: "Amazon clone",
      projectDesc:
        "Made this with React.JS, Used Context API for state management & Firebase as Database.",
      footerLink: [
        {
          name: "Visit Website",
          url: `https://clone-c2793.firebaseapp.com/`,
        },
      ],
    },
    {
      image: require("./assets/images/Disney.jpg"),
      projectName: "Disney+ clone",
      projectDesc:
        "Made with React.JS, Used Redux for state management & Firebase as Database.",
      footerLink: [
        {
          name: "Visit Website",
          url: `https://disney-clone-12e73.web.app/`,
        },
      ],
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        {
          name: "Certification",
          url: "",
        },
        {
          name: "Award Letter",
          url: "",
        },
        {
          name: "Google Code-in Blog",
          url: "",
        },
      ],
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "",
        },
      ],
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [
        { name: "Certification", url: "" },
        {
          name: "Final Project",
          url: "",
        },
      ],
    },
  ],
  display: false, // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url:
        "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?",
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies.",
    },
  ],
  display: false, // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(""),

  talks: [
    {
      title: "",
      subtitle: "",
      slides_url: "",
      event_url: "",
    },
  ],
  display: false, // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [""],
  display: false, // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "8817815911",
  email_address: "s.vedant5219@gmail.com",
};

// Twitter Section

const twitterDetails = {
  userName: "davidrakosi_", //Replace "twitter" with your twitter username without @
  display: false, // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
};
