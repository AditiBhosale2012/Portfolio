/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
// import scibins from "./assets/images/s2.jpg";
// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Aditi Bhosale",
  title: "Hey all, I'm Aditi",
  subTitle: emoji(
    "A passionate Web Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native /Android Studio and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1_CJ-iS3sNkJG5P5tX-4FKWi02YZm6vYj/view?usp=sharing",
    // "https://drive.google.com/file/d/12Dajp8W16zSpzFYhmK17ZlDxA61Oqxr_/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/AditiBhosale2012",
  linkedin: "https://www.linkedin.com/in/aditi-bhosale-8b9782233",
  gmail: "aditibhosale2012@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  medium: "https://medium.com/@aditibhosale2012",
  stackoverflow: "https://stackoverflow.com/users/19445386/aditi-bhosale",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK.BELOW ARE THE SKILLS I USE TO DEVELOP",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web applications"
    ),
    emoji("⚡ Integrating backend with Frontend and using Third party API to make the application seemless"),
    emoji(
      "⚡ Integration of third party services such as Firebase"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    // {
    //   skillName: "sass",
    //   fontAwesomeClassname: "fab fa-sass"
    // },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Angular",
      fontAwesomeClassname:"fab fa-angular"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    
    // {
    //   skillName: "npm",
    //   fontAwesomeClassname: "fab fa-npm"
    // },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Bootstrap",
      fontAwesomeClassname:"fab fa-bootstrap"
    },
    // {
    //   skillName: "Spring",
    //   fontAwesomeClassname:"fab fa-envira"
    // },
    {
      skillName: "C/C++",
      fontAwesomeClassname:"fab fa-cuttlefish"
    },
    {
      skillName: "ASP.net",
      fontAwesomeClassname:"fab fa-accusoft"
    },
    {
      skillName: "Android Studio",
      fontAwesomeClassname:"fab fa-android"
    },
    {
      skillName: "PHP",
      fontAwesomeClassname:"fab fa-php"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "Arduino",
      fontAwesomeClassname:"fab fa-amilia"
    },
    
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Vivekanand Education Society's Institute of Technology(VESIT or V.E.S. Institute of Technology)",
      logo: "https://upload.wikimedia.org/wikipedia/en/e/e8/Vesitlog-transparent.png",
        // "https://upload.wikimedia.org/wikipedia/en/e/e8/Vesitlog-transparent.png",
      subHeader: "Master's in Computer Application(MCA)",
      duration: "December 2021 - March 2023",
      desc: "Currently pursuing my Master's from one of the Top 3 College for MCA in maharsahtra.",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    {
      schoolName: "Model College",
      logo: "https://yt3.ggpht.com/yL--r03BELmdmT1uXhn9LOd0QYtSeQre2gMbgNZX6rrNigzEvEzT6Wu4IOq-29CXOAiO7JC5=s900-c-k-c0x00ffffff-no-rj",
      subHeader: "Bachelor of Science in Information Technology",
      duration: "September 2019 - April 2021",
      desc: "Ranked top 10% in the program.",
      descBullets: ["Passed My graduation with 9.72 CGPI"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "60%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "30%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    },
    {
      Stack: "IOT",
      progressPercentage:"65%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

// const workExperiences = {
//   display: true, //Set it to true to show workExperiences Section
//   experience: [
//     {
//       role: "Software Engineer",
//       company: "Facebook",
//       companylogo: require("./assets/images/facebookLogo.png"),
//       date: "June 2018 – Present",
//       desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//       descBullets: [
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
//       ]
//     },
//     {
//       role: "Front-End Developer",
//       company: "Quora",
//       companylogo: require("./assets/images/quoraLogo.png"),
//       date: "May 2017 – May 2018",
//       desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
//     },
//     {
//       role: "Software Engineer Intern",
//       company: "Airbnb",
//       companylogo: require("./assets/images/airbnbLogo.png"),
//       date: "Jan 2015 – Sep 2015",
//       desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
//     }
//   ]
// };

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Project's Made By ME 👩‍💻 ",
  subtitle: "BELOW ARE SOME PROJECTS MADE BY ME:",
  projects: [
    {
      image: "https://user-images.githubusercontent.com/84183428/183541431-db4aa7d1-74ee-4c22-81be-d746b86d5ea0.png",
      projectName: "MenstruFriend",
      projectDesc: "MenstruFriend is a website which enables young girls to learn about menstrual health and hygiene👩‍🏫. The website has Quiz🤔, LiveChat💬 & FAQ section and many more resources.",
      footerLink: [
        {
          name: "Check Out",
          url: "https://github.com/AditiBhosale2012/MenstruFriend"
        },
        {
          name: "Check Website",
          url: "https://menstrufriend.netlify.app/"
        }
        
        //  you can add extra buttons here.
      ]
    },
    {
      image: "https://user-images.githubusercontent.com/84183428/156503995-9b47de4c-894e-414f-850c-762a77262b4a.png",
      projectName: "SCI-bINS",
      projectDesc: "Smart IOT based Bins enabled with 2-way communication functionality📲.The intention of this project is to make our environment healthy and clean by incorporating technology in it. ☘️👾",
      footerLink: [
        {
          name: "Check Out",
          url: "https://github.com/AditiBhosale2012/Sci-bINS"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: "https://user-images.githubusercontent.com/84183428/151180946-303f4e32-1c5f-4f57-84c8-0cbb3d00ea08.png",
      projectName: "SKy-Weather",
      projectDesc: "Sky weather is a dynamic web application which helps users detect weather condition and any given location by using API to fetch data about different location's🌎⚡.Based on the weather condition the background changes which making it more effective and attractive🌈",
      footerLink: [
        {
          name: "Check Out",
          url: "https://github.com/AditiBhosale2012/Sci-bINS"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: "https://repository-images.githubusercontent.com/280387936/7df18000-cbcb-11ea-961a-3feddc6957e3",
      projectName: "AI Virtual Assistant",
      projectDesc: "AI virtual Assistant is a personalized Assistant which runs on voice commands.🤖Build Using PYTHON.",
      footerLink: [
        {
          name: "Check OUT",
          url: "https://github.com/AditiBhosale2012"  //CHANGE IT afterward
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "The Web Developer Bootcamp🚀",
      subtitle:
        "The course HTML5, CSS3, and Modern JavaScript for 2021 Make REAL web applications using cutting-edge technologies Create responsive, accessible, and beautiful layouts.",
      image: "https://drive.google.com/uc?export=view&id=18e5WV5Te9f0VkJA8kSFgpuHl4YTNJQUe",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1m8JNGDaOUXDwjIDZHwsLm4DeKT9kjYE-/view?usp=sharing"
        }
      ]
    },
    {
      title: "NPTEL Database Managmnet System Certification",
      subtitle:
        "The course examines data structures, file organizations, concepts and principles of DBMS’s, data analysis, database design, data modeling, database management, data & query optimization, and database implementation.",
      image: "https://drive.google.com/uc?export=view&id=184qp1A6nmyEfGCBiy6-ZjcV60ykDVy4r",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1_pzEg1spTSTnriISlBJG1enmIVA7MezK/view?usp=sharing"
        }
      ]
    },
    {
      title: "NPTEL Programming, Data Structure and Algorithm using python",
      subtitle:
        "searching and sorting algorithms, dynamic programming and backtracking, exception handling and using files,Python dictionaries as well as classes and objects for defining user defined datatypes such as linked lists and binary search trees.",
      image:"https://drive.google.com/uc?export=view&id=1Le69iIszOF72WP6s0SG1bTVUmqFlFEIj",
      footerLink: [
        {
          name: "Certificate",
          url: "https://drive.google.com/file/d/16mceXFgh37Ayf3nR4Zu_ydLdGKYIK_lb/view?usp=sharing"
        }
      ]
    },

    {
      title: "Embedded System With Microprocessor 8085",
      subtitle: "Completed Certifcation from tekteach Education",
      image: "https://drive.google.com/uc?export=view&id=1EGQxjiiX1Cnu6KpflRR3V9mF_voB9Kmo",
      footerLink: [
        {name: "Certification", url: "https://drive.google.com/file/d/181Cql4ovayH7q296j5d8pHgrMWlStF1E/view?usp=sharing"},
        
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

//self written
const hackerrankSection = {
  title: emoji("HackerRank Badges 🎖️🏆 "),
  Badges: [
    {
      title: "Problem Solving",
      subtitle:" Silver level🥈",
      image: "https://drive.google.com/uc?export=view&id=1lK65gs6A__VIZlssdHB_cLCaLJrOpo4o",
    },
    {
      title: "Python ",
      subtitle:" Bronze level🥉",
      image: "https://drive.google.com/uc?export=view&id=1AMA0T1CVnrt93Y3A8GrA9PrP-XQBfit3",
    },
    {
      title: "Sql",
      subtitle:"Bronze level🥉",
      image: "https://drive.google.com/uc?export=view&id=1vBUOnrE0dnxu1yb9TJ7U3K7UYablPiRQ"
    }
    
  ],
  display: true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-8104066652",
  email_address: "aditibhosale2012@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  // workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  hackerrankSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
