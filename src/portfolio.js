/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Maninder Singh",
  title: "Hi all, I'm Maninder",
  subTitle: emoji(
    "MERN Stack Developer with 5 Years of Experience | JavaScript, React, Node and Some Other Cool Libraries and Frameworks | My Playground, Your Next Web App"
  ),
  resumeLink:
    "https://docs.google.com/document/d/1ciLvK6xzFpGMO3V6gDJA2RqKNRHhty7qg6AjTqBe_bU/edit?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/ManinderGharuan",
  linkedin: "https://www.linkedin.com/in/maninder-singh-a617b2110/",
  gmail: "maninderrai7@gmail.com",
  gitlab: "",
  facebook: "",
  medium: "",
  stackoverflow: "",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Crafting Impactful Solutions | Always Learning",
  skills: [
    emoji(
      "⚡ Node.js: Asynchronous programming, server-side scripting, popular Node.js modules (e.g., Mongoose, Express)"
    ),
    emoji(
      "⚡ MongoDB: Data modeling, querying techniques, aggregation pipelines"
    ),
    emoji(
      "⚡ React.js: Component structure, state management (Redux, Context API)"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji("⚡ Integration of third party services such as Firebase/ AWS"),
    emoji(
      "⚡ APIs and Integrations: Experience with integrating external APIs."
    ),
    emoji(
      "⚡ Version Control & Collaboration: Using Git and collaborating on projects (GitHub)"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "mongodb",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "stripe",
      fontAwesomeClassname: "fab fa-stripe"
    },
    {
      skillName: "CI/CD",
      fontAwesomeClassname: "fas fa-code-branch"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Chandigarh University",
      logo: require("./assets/images/cu.jpeg"),
      subHeader: "Bachelor of Computer Applications",
      desc: "",
      descBullets: [],
      duration: "August 2015 - May 2018"
    },
    {
      schoolName: "Punjab School Eduction Board",
      logo: require("./assets/images/pseb.jpg"),
      subHeader: "12th",
      desc: "",
      descBullets: [],
      duration: "April 2014 - March 2015"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend",
      progressPercentage: "80%"
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Database",
      progressPercentage: "70%"
    },
    {
      Stack: "Design",
      progressPercentage: "30%"
    },
    {
      Stack: "Git",
      progressPercentage: "90%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Senior MERN Stack Developer",
      company: "Suffescom Solutions",
      companylogo: require("./assets/images/suffescom.jpeg"),
      date: "November 2020 – Present",
      descBullets: [
        "Centralized prediction game using Serverless framework, Nodejs, AWS lambda, dynamoDB, Reactjs, Redux/Saga, Solidity, Web3/Ethers",
        "Build NFT projects using Nodejs/Express, Solidity, Reactjs, Redux/Saga, Web3/Ethers, Metamask",
        "Build e-commerce web apps using Reactjs, Redux/Saga, Nodejs/Express, MongoDB",
        "Worked on API’s for Food Delivery and Taxi App using Nodejs/Express, MongoDB",
        "Worked on admin panel of HLC (Company Product) Using Reactjs, Redux/Saga, Bootstrap"
      ]
    },
    {
      role: "MERN Stack Developer",
      company: "Immanent Solutions",
      companylogo: require("./assets/images/immanent.jpeg"),
      date: "September 2018 – November 2020",
      descBullets: [
        "Build front-end apps for several products using React, Redux/Thunk",
        "Maintain and contribute to backend app written in Express.js",
        "Building test cases for backend app using Mocha/Chai library",
        "Build native apps using ReactNative, Redux"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "Playground | Where Ideas Take Shape",
  projects: [
    {
      image: require("./assets/images/tickerlines.png"),
      projectName: "TickerLines",
      projectDesc:
        "It creates technical opportunities and solutions for traders and analysts of financial markets. The Wheel of 24 is made up of several different components; each one can be fully customised and has a specific purpose to allow access to all required information. (Under Development)",
      descBullets: [],
      footerLink: [
        {
          name: "Gann Wheel",
          url: "https://tickerlines-admin.suffescom.dev/gann-wheel"
        },
        {
          name: "Showcase",
          url: "/showcase/tickerlines.webm"
        }
      ]
    },
    {
      image: require("./assets/images/dws.png"),
      projectName: "The Wild West",
      projectDesc:
        "Centralized platform that allows users to speculate on the price movement of cryptocurrency pairs like BTC/USD within a short timeframe (typically 5 minutes)",
      footerLink: [
        {
          name: "Website",
          url: "https://prediction.suffescom.dev/"
        },
        {
          name: "Visit Admin panel",
          url: "https://prediction-admin.suffescom.dev/"
        }
      ]
    },
    {
      image: require("./assets/images/abid.png"),
      projectName: "Abid NFT Marketplace",
      projectDesc:
        "NFT marketplace where user can mint land and sell it on platform or can give on rent",
      footerLink: [
        {
          name: "Website",
          url: "https://abid-nftmarketplace.suffescom.dev/"
        },
        {
          name: "Lands Website",
          url: "https://abid-metaverse.suffescom.dev/"
        }
      ]
    },
    {
      image: require("./assets/images/thetastyplate.png"),
      projectName: "The Tasty Plate",
      projectDesc:
        "A meal preparation platform where user can buy meals based on nutritionally balanced and deliverd directly to door each week",
      descBullets: [],
      footerLink: [
        {
          name: "Website",
          url: "https://thetastyplate.com/"
        }
      ]
    },
    {
      image: require("./assets/images/fansroom.png"),
      projectName: "Fans Room",
      projectDesc:
        "Adult platform designed to connect content creators and fans in personalized way. Similar to platforms like OnlyFans. Creators can share content, including photos, videos, and live streams.",
      descBullets: [],
      footerLink: [
        {
          name: "Website",
          url: "https://fansroom.com/"
        }
      ]
    },
    {
      image: require("./assets/images/hlc.png"),
      projectName: "Hyperlocal Cloud Platform",
      projectDesc:
        "Software development platform specializing in creating on-demand mobile and web applications, with a focus on solutions to clients' specific needs",
      footerLink: [
        {
          name: "Business Website",
          url: "https://hyperlocalcloud.com/"
        }
      ]
    },
    {
      image: require("./assets/images/peitaxi.png"),
      projectName: "PEI Taxi",
      projectDesc: "",
      footerLink: [
        {
          name: "User App (Android)",
          url: "https://play.google.com/store/apps/details?id=bz.pie.rider&pli=1"
        },
        {
          name: "User App (App Store)",
          url: "https://apps.apple.com/us/app/pei-taxi/id1479673552"
        },
        {
          name: "Driver App (Android)",
          url: "https://play.google.com/store/apps/details?id=bz.pei.driver"
        },

        {
          name: "Driver App (App Store)",
          url: "https://apps.apple.com/us/app/pei-taxi-driver/id1517970069"
        }
      ]
    },
    {
      image: require("./assets/images/educify.png"),
      projectName: "Educify",
      projectDesc:
        "Educify is a global Educational Technology company focused on making education accessible to everyone in every subject possible and in all manner of ways; be it online, in-person, or as a course that is accessible anywhere in the world.",
      footerLink: [
        {
          name: "Website",
          url: "https://www.educify.org/"
        }
      ]
    },
    {
      image: require("./assets/images/talkie.png"),
      projectName: "Talkie",
      projectDesc:
        "Speaking a foreign language isn’t always easy. Talkie is an app that helps your students learn by doing Little but often. This app has three modules Admin, Teacher, Student",
      footerLink: [
        {
          name: "Website",
          url: "https://talkietheapp.com/"
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
      title: "",
      subtitle: "",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "",
      footerLink: [
        {
          name: "",
          url: ""
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "",
      title: "",
      description: ""
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
      title: "",
      subtitle: "",
      slides_url: "",
      event_url: ""
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [""],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-7658887533",
  email_address: "maninderrai7@gmail.com",
  profileImage: require("./assets/images/pp.png")
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
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
  isHireable,
  resumeSection
};
