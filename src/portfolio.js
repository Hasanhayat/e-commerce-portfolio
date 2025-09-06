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
  username: "Hassan Hayat",
  title: "Hi all, I'm Hassan",
  subTitle: emoji(
    "Results-driven Digital Marketing & E-commerce Specialist with expertise in PPC advertising, SEO, social media marketing, and Shopify development. Experienced in managing successful marketing campaigns across Google, Meta, and YouTube platforms while building profitable e-commerce stores."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1UOrbOqqFSr6nAZQm2tUlllLm2fuQ9rUk/view?usp=sharing",
  displayGreeting: true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/hasanhayat",
  linkedin: "https://www.linkedin.com/in/hasanhayat",
  gmail: "hassanhayat0012@gmail.com",
  // gitlab: "https://gitlab.com/",
  facebook: "https://www.facebook.com/100072923311863",
  instagram: "https://www.instagram.com/h_hassan.hayat/",
  // medium: "https://medium.com/@",
  stackoverflow: "https://stackoverflow.com/users/29532743/hassan-hayat",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "FULL-STACK DIGITAL MARKETER & E-COMMERCE EXPERT WHO LOVES DATA-DRIVEN GROWTH",
  skills: [
    emoji("⚡ Create and optimize high-converting marketing campaigns across multiple platforms"),
    emoji("⚡ Design and develop profitable Shopify stores with optimized sales funnels"),
    emoji("⚡ Implement data-driven marketing strategies using analytics and market research")
  ],

  softwareSkills: [
    {skillName: "Google Ads", fontAwesomeClassname: "fab fa-google"},
    {skillName: "Meta Ads", fontAwesomeClassname: "fab fa-facebook"},
    {skillName: "YouTube Ads", fontAwesomeClassname: "fab fa-youtube"},
    {skillName: "Shopify", fontAwesomeClassname: "fab fa-shopify"},
    {skillName: "SEO", fontAwesomeClassname: "fas fa-search"},
    {skillName: "Email Marketing", fontAwesomeClassname: "fas fa-envelope"},
    {skillName: "Analytics", fontAwesomeClassname: "fas fa-chart-line"},
    {skillName: "Social Media", fontAwesomeClassname: "fas fa-hashtag"},
    {skillName: "Content Marketing", fontAwesomeClassname: "fas fa-pen"},
    {skillName: "WordPress", fontAwesomeClassname: "fab fa-wordpress"},
    {skillName: "Mailchimp", fontAwesomeClassname: "fas fa-mail-bulk"},
    {skillName: "Canva", fontAwesomeClassname: "fas fa-palette"},
    {skillName: "Hootsuite", fontAwesomeClassname: "fas fa-stream"},
    {skillName: "Google Analytics", fontAwesomeClassname: "fas fa-chart-bar"},
    {skillName: "Conversion Optimization", fontAwesomeClassname: "fas fa-funnel-dollar"}
  ],
  display: true
};

// Education Section

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "SMIT (Saylani Mass IT Training)",
      logo: require("./assets/images/smitLogo.png"),
      subHeader: "Digital Marketing & E-commerce Certification",
      duration: "September 2023 - March 2024",
      desc: "Completed comprehensive training in digital marketing strategies, e-commerce management, and online advertising platforms.",
      descBullets: [
        "Top performer in PPC campaign management",
        "Created multiple successful e-commerce case studies"
      ]
    },
    {
      schoolName: "Ghazali Model School",
      logo: require("./assets/images/ghazaliLogo.png"), // Replace this with your actual school logo if available
      subHeader: "Matriculation - Science Group",
      duration: "April 2021 - April 2023",
      desc: "Completed matriculation with a strong foundation in science and mathematics. Achieved 76% marks and developed an early interest in computer science and technology.",
      descBullets: [
        "Focused on Physics, Chemistry and Computer",
        "Participated in school tech fairs and science exhibitions"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "60%"
    },
    {
      Stack: "Programming",
      progressPercentage: "75%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Digital Marketing Specialist",
      company: "SMIT (Saylani Mass IT Training)",
      companylogo: require("./assets/images/smitLogo.png"),
      date: "September 2023 – March 2025",
      desc: "Led digital marketing campaigns and e-commerce projects as part of intensive practical training.",
      descBullets: [
        "Managed Google Ads campaigns with 200% ROI improvement",
        "Created and optimized Meta Ads for local businesses",
        "Developed and implemented SEO strategies for e-commerce clients"
      ]
    },
    {
      role: "Freelance Digital Marketing Consultant",
      company: "Self-employed",
      companylogo: require("./assets/images/freelancerLogo.png"),
      date: "April 2024 – Present",
      desc: "Provide comprehensive digital marketing and e-commerce solutions to international clients.",
      descBullets: [
        "Managed $10K+ monthly ad spend across Google and Meta platforms",
        "Built and optimized Shopify stores with 150% average revenue growth",
        "Implemented email marketing campaigns with 25% conversion rates"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SUCCESSFUL MARKETING CAMPAIGNS AND E-COMMERCE STORES I'VE DEVELOPED",
  projects: [
    {
      image: require("./assets/images/smitLogo.png"),
      projectName: "Fashion Boutique E-commerce Success",
      projectDesc: "Built and marketed a Shopify store achieving $50K monthly revenue through targeted ads and email marketing campaigns.",
      footerLink: [
        {
          name: "View Store",
          url: "https://fashion-boutique.myshopify.com/"
        },
        {
          name: "Case Study",
          url: "https://example.com/case-study"
        }
      ]
    },
    {
      image: require("./assets/images/smitLogo.png"),
      projectName: "Beauty Brand Marketing Campaign",
      projectDesc: "Led a successful multi-channel marketing campaign increasing sales by 300% through Google, Meta, and influencer marketing.",
      footerLink: [
        {
          name: "Campaign Results",
          url: "https://example.com/beauty-campaign"
        }
      ]
    },
    {
      image: require("./assets/images/smitLogo.png"),
      projectName: "Tech Startup Growth Strategy",
      projectDesc: "Developed and executed digital marketing strategy for a tech startup, achieving 10K+ leads through content marketing and PPC.",
      footerLink: [
        {
          name: "Growth Study",
          url: "https://example.com/tech-growth"
        }
      ]
    }
  ],
  display: true
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
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
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
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com//why-react-is-the-best-",
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
      slides_url: "https://bit.ly/",
      event_url: "https://www.facebook.com/events"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: ["https://anchor.fm/codevcast/embed/episodes/"],
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
  number: "+92-3395001230",
  email_address: "hassanhayat0012@gmail.com"
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
