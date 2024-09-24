/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file
// 포트폴리오 색바꾸기

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation 애니메이션위해 파일 이름 바꾸기

// Splash Screen 화면효과

const splashScreen = {
  enabled: true, // set false to disable splash screen 효과 끄고 싶으면 false
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation 화면 효과 시간 조정
};

// Summary And Greeting Section 요약과 소개

const illustration = {
  animated: true // Set to false to use static SVG 정적 파일 사용하려면 false
};

const greeting = {
  username: "JuriOh",
  title: "안녕하십니까 저는 신입 백엔드 개발자 오주리입니다.",
  subTitle: emoji(
    "원래 아이들을 가르치는 유치원 교사였던 저는 사람들과 함께 일하며 그 안에서 배움이 일어나고 성장하고 싶은 열망으로 가득차있었습니다. 우연히 지인으로부터 제가 추구하던 직업군과 유사한 개발자에 대해 알게되었습니다. 처음 java를 배우면서 그 어느때보다도 흥미를 느꼈던 저는 개발자에 대한 확실한 꿈을 가지게 되었습니다. 학원을 등록해 프로젝트를 3개 진행하며 자격증을 2개 취득하였고, 수료 후에는 더욱 깊은 학습을 원해 방송통신대학교 컴퓨터과학과에 편입하였습니다. 시작이 남들보다 늦은 만큼 열심히 배움을 이어가기 위해 최선을 다하고 있습니다."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button 버튼 숨기고 싶으면 empty set 아래에서 false
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Jurioh0603",
  mail: "julioh0603@naver.com",
  velog: "https://velog.io/@julioh0603/posts",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Skill Set",
  subTitle: "배움이 즐거운 백엔드 개발자",
  skills: [
    emoji("⚡ 전자정부 표준프레임워크와 라이브러리인 Spring, java를 다룰 수 있습니다."),
    emoji("⚡ mysql, oracle을 이용해 sql을 다룰 수 있습니다."),
    emoji("⚡ 학습을 통해 습득하고 프로젝트 통해 활용해 본 기술입니다.")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon 아이콘 보려면 적합한 Font Awesome Classname를 설정해
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-brands fa-java"
    },
    {
      skillName: "servlet and jsp",
      fontAwesomeClassname: "fab fa-brands fa-java"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "spring",
      fontAwesomeClassname: "fas fa-solid fa-leaf fa-sm"
    },
    {
      skillName: "spring boot",
      fontAwesomeClassname: "fas fa-solid fa-leaf fa-sm"
    },
    {
      skillName: "mybatis",
      fontAwesomeClassname: "fas fa-sharp fa-solid fa-dove fa-sm"
    },
    {
      skillName: "spring data jpa",
      fontAwesomeClassname: "fas fa-database fa-sm"
    },
    {
      skillName: "jquery",
      fontAwesomeClassname: "fas fa-solid fa-rss fa-rotate-180 fa-sm"
    },
    {
      skillName: "mysql",
      fontAwesomeClassname: "fas fa-database fa-sm"
    },
    {
      skillName: "oracle",
      fontAwesomeClassname: "fas fa-database fa-sm"
    },
    {
      skillName: "intelliJ",
      fontAwesomeClassname: "fas fa-solid fa-code fa-xs"
    },
    {
      skillName: "eclipse",
      fontAwesomeClassname: "fas fa-solid fa-code fa-xs"
    },
    {
      skillName: "spring tool suite",
      fontAwesomeClassname: "fas fa-solid fa-code fa-xs"
    },
    {
      skillName: "apache tomcat",
      fontAwesomeClassname: "fas fa-solid fa-server fa-sm"
    },
    {
      skillName: "gradle",
      fontAwesomeClassname: "fas fa-solid fa-republican fa-sm"
    },
    {
      skillName: "erd cloud",
      fontAwesomeClassname: "fas fa-solid fa-cloud fa-sm"
    },
    {
      skillName: "github",
      fontAwesomeClassname: "fab fa-brands fa-github"
    },
    {
      skillName: "figma",
      fontAwesomeClassname: "fab fa-brands fa-figma fa-sm"
    },
    {
      skillName: "bootstrap",
      fontAwesomeClassname: "fab fa-brands fa-bootstrap"
    },
    {
      skillName: "aws s3",
      fontAwesomeClassname: "fab fa-aws fa-sm"
    },
    {
      skillName: "windows",
      fontAwesomeClassname: "fab fa-brands fa-windows fa-sm"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "방송통신대학교",
      subHeader: "컴퓨터과학과",
      duration: "2024.08 ~ 현재",
      desc: "편입하여 3학년 재학중"
    },
    {
      schoolName: "배화여자대학교",
      subHeader: "유아교육학과",
      duration: "2020.03 ~ 2021.02"
    },
    {
      schoolName: "용인송담대학교",
      subHeader: "유아교육과",
      duration: "2016.03 ~ 2019.02"
    }
  ],
  educations: [
    {
      schoolName: "김영한의 Spring, JPA 로드맵",
      subHeader: "인프런",
      duration: "2024.07 ~ 현재",
      desc: "Spring Boot, SpringMVC, JPA, JPA 성능 최적화, 스프링 데이터 JPA, HTTP 지식"
    },
    {
      schoolName: "[K-Digital Training] 데이터 융합 JAVA 응용 S/W 개발자 기업 채용 연계 과정",
      subHeader: "중앙정보기술인재개발원",
      duration: "2024.01 ~ 2024.07",
      desc: "java, sql, html, css, javascript, jsp, spring, spring boot, mybatis, jpa를 학습"
    }
  ],
  certificates: [
    {
      schoolName: "정보처리기사",
      subHeader: "한국산업인력공단",
      duration: "2024.09.10",
    },
    {
      schoolName: "SQLD",
      subHeader: "한국데이터산업진흥원",
      duration: "2024.07.28"
    }
  ],
  awards: [
    {
      schoolName: "Take Eat (포장 전문 음식 주문 플랫폼)",
      subHeader: "최우수상",
      duration: "중앙정보기술인재개발원",
      desc: "프로젝트의 주제선정, 구현기술, 팀워크 및 문제해결 능력, 완성도와 상용가능성에서 우수한 성적 달성"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: false, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Facebook",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "June 2018 – Present",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      role: "Front-End Developer",
      company: "Quora",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "May 2017 – May 2018",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      role: "Software Engineer Intern",
      company: "Airbnb",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "Jan 2015 – Sep 2015",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
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
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/dokkyLogo.png"),
      projectName: "DOKKY",
      projectDesc: "학원 수강생들간의 의사소통이 가능한 커뮤니티 플랫폼",
      footerLink: [
        {
          name: "github",
          url: "https://github.com/Jurioh0603/DOKKY.git"
        },
        {
          name: "show More",
          url: "http://"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/triplanLogo.png"),
      projectName: "여정",
      projectDesc: "여행 정보를 얻고, 실시간 채팅으로 사용자들과 소통하며, 여행 일정을 계획하고 공유하는 플랫폼",
      footerLink: [
        {
          name: "github",
          url: "https://github.com/Jurioh0603/planner.git"
        },
        {
          name: "show More",
          url: "http://nextu.se/"
        }
      ]
    },
    {
      image: require("./assets/images/takeatLogo.png"),
      projectName: "Take Eat",
      projectDesc: "간편하게 포장주문, 빠른 픽업, 편리한 점주의 가게 등록 기능을 제공하는 음식 주문 플랫폼",
      footerLink: [
        {
          name: "github",
          url: "https://github.com/pickpong/takeeat.git"
        },
        {
          name: "show More",
          url: "http://nextu.se/"
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
    "저의 성장을 도와주는 공부 기록장입니다.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://velog.io/@julioh0603/%EC%8A%A4%ED%94%84%EB%A7%81-%EA%B0%9D%EC%B2%B4-%EC%A7%80%ED%96%A5-%EC%9B%90%EB%A6%AC-%EC%A0%81%EC%9A%A9",
      title: "스프링 - 객체 지향 원리 적용",
      description:
        "개요 이전에 만들었던 할인 정책을 확장해보자 주문시 VIP 회원 1,000원 할인 -> VIP 회원 10% 할인으로 변경할 예정이다. 개발 RateDiscountPolicy 퍼센트 할인율을 제공하는 로직을 추가로 작성한다. 이를 테스트 해본다. 테스트 방법은 생략"
    },
    {
      url: "https://velog.io/@julioh0603/%EC%BD%94%ED%85%8C-%EC%A0%91%EB%AF%B8%EC%82%AC%EC%9D%B8%EC%A7%80-%ED%99%95%EC%9D%B8%ED%95%98%EA%B8%B0",
      title: "코테 - 접미사인지 확인하기",
      description:
        "❓ 문제 이해하기 주어진 my_string의 접미사중 주어진 is_suffix가 있다면 1을 반환 그렇지 않으면 0을 반환하는 문제이다. 🔑 풀이 이전과 비슷하게 for문을 통해 String 변수에 접미사를 하나씩 저장하면서 if문을 통해 조건에 참인지 거짓인지 확인을 한다. 이때 참이면 answer에 1을 저장하고 break를 통해 반복문을 종료하여 성능을 조금이라도 향상시켜보고자 하였다."
    }
  ],
  display: true // Set false to hide this section, defaults to true
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
  number: "010-3359-4329",
  email_address: "julioh0603@naver.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
