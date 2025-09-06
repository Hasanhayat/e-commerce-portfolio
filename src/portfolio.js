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
  display:true,
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
      schoolName: "Virtual University of Pakistan",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQginUHQfF-rdmGu-IAn43MtSE4ObSSNKacPw&s",
      subHeader: "Bachelor in Business Administration",
      duration: "2021 - 2025",
      desc: "Pursuing BBA with focus on Digital Marketing and E-commerce Management",
      descBullets: [
        "Dean's List student with 3.8 GPA",
        "President of Digital Marketing Society"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "Paid Advertising (Google/Meta/YouTube)", 
      progressPercentage: "90%"
    },
    {
      Stack: "E-commerce & Shopify",
      progressPercentage: "85%"
    },
    {
      Stack: "SEO & Content Marketing",
      progressPercentage: "80%"
    },
    {
      Stack: "Email Marketing & Automation",
      progressPercentage: "75%"
    },
    {
      Stack: "Analytics & Data Analysis",
      progressPercentage: "85%"
    }
  ],
  displayCodersrank: false
};

// Work experience section

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Digital Marketing Manager",
      company: "Daraz (Alibaba Group)",
      companylogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOh1xKH1cU44ltpjqtQlrgkpgW4QNstg_F9g&s",
      date: "January 2024 – Present",
      desc: "Leading digital marketing initiatives for Pakistan's largest e-commerce platform",
      descBullets: [
        "Managing $50K+ monthly marketing budget across all channels",
        "Increased marketplace seller acquisition by 200%",
        "Optimized conversion rates resulting in 45% revenue growth"
      ]
    },
    {
      role: "E-commerce Marketing Specialist",
      company: "Careem",
      companylogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY6dj_Qce1ygmzf2e1R7mzN5Is2ASR9DYbdg&s",
      date: "June 2023 – December 2023",
      desc: "Managed digital marketing campaigns for Super App services",
      descBullets: [
        "Led successful marketing campaigns across 5 major cities",
        "Achieved 300% growth in app installations",
        "Optimized customer acquisition cost by 40%"
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
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReAdHI8Fcc4rD-nGaPR1skgF94seFG4LO-fw&s",
      projectName: "Sephora Pakistan Launch Campaign",
      projectDesc: "Led digital marketing strategy for Sephora's Pakistan market entry, achieving $1M+ in first-month sales through integrated marketing campaigns.",
      footerLink: [
        {
          name: "Campaign Details",
          url: "https://example.com/sephora-case-study"
        }
      ]
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSdZOl3G172H-Cq4KZZijztc9jvRG8ipxAqQ&s",
      projectName: "Nike Online Store Optimization",
      projectDesc: "Optimized Nike's Pakistan e-commerce store, resulting in 200% increase in online sales through targeted campaigns and UX improvements.",
      footerLink: [
        {
          name: "Project Overview",
          url: "https://example.com/nike-case-study"
        }
      ]
    },
    {
      image: "https://marketing-interactive-assets.b-cdn.net/article_images/foodpanda-hk-showcases-wide-variety-of-affordable-choices-with-new-campaign/1711421045_foodpanda%20hk%2050%20off.jpg",
      projectName: "Foodpanda Super App Campaign",
      projectDesc: "Executed multi-channel marketing strategy for Foodpanda's super app launch, achieving 500K+ downloads in first week.",
      footerLink: [
        {
          name: "Case Study",
          url: "https://example.com/foodpanda-case-study"
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
