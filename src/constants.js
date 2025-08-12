// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import intellijLogo from './assets/tech_logo/intellij.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';

// Experience Section Logo's
import swocLogo from './assets/company_logo/swoc.jpeg';


// Project Section Logo's
import jobportalLogo from './assets/work_logo/jobportal.png';
import ecomLogo from './assets/work_logo/ecom.png';

// Education Section Logo's
import mmitLogo from './assets/education_logo/mmit.png';
import svrdLogo from './assets/education_logo/svrd.png';
import sppuLogo from './assets/education_logo/sppu.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Springboot', logo: springbootLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'IntelliJ', logo: intellijLogo },
      { name: 'Postman', logo: postmanLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: swocLogo,
      role: "Web Development Intern",
      company: "Social Winter of Code",
      date: "Jan 2024 - Mar 2024",
      desc: "Completed a Web Development Internship, gaining hands-on experience in HTML, CSS, and JavaScript.Designed and developed basic, responsive web pages, improving skills in front-end development and web design.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
      ],
    },
  ];
  
  export const education = [
    {
      id: 0,
      img: mmitLogo,
      school: "Marathwada Mitra Mandal’s Institute of Technology, Pune",
      date: "Jan 2021 - July 2025",
      grade: "8.76 CGPA",
      degree: "B.E. in Computer Engineering",
    },
    {
      id: 1,
      img: sppuLogo,
      school: "Pragnya Junior College of Arts, Commerce & Science, Pune",
      date: "Jan 2019 - Feb 2020",
      grade: "67.38%",
      degree: "HSC (XII) - Computer Science",
    },
    {
      id: 2,
      img: svrdLogo,
      school: "Swami Vivekanand Rashtriya Dnyanpeeth, Jalgaon Jamod, Buldhana, Maharashtra",
      date: "Jan 2017 - March 2018",
      grade: "94.6%",
      degree: "SSC (X) - Science",
    },
   
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Job Portal WebApp",
      description:"Developed a full-stack Job Portal Web Application using Spring Boot for the backend and React for the frontend.The application allows users to add new job listings and view all posted jobs. Implemented Spring Data JPA to interact with a relational database for storing job details. Designed and exposed RESTful APIs to enable seamless communication between the frontend and backend. Ensured a responsive user interface and efficient data flow across the application layers. This project showcases strong integration of modern Java backend technologies with a dynamic React frontend.",
      image: jobportalLogo,
      tags: ["Spring-Web", "MVC Architecture","REST API", "Spring JPA", "React"],
      github: "https://github.com/RushikeshGonge/Job-Portal-Web-Application",
      // webapp: "https://githubprofiledetective.netlify.app/",
    },
    {
      id: 1,
      title: "E-Com: Web-Based e-com application",
      description:"Developed a full-stack e-commerce web application using Spring Boot (backend) and React with Vite (frontend), featuring product CRUD operations, category-based browsing (Mobiles, Laptops, Fashion, Accessories), and a dynamic search function. Integrated secure database connectivity with RESTful APIs to manage product data efficiently and built a responsive, user-friendly interface for seamless shopping across devices.",
      image: ecomLogo,
      tags: ["Spring Web", "Java", "JSP", "React JS", "Vite", "Bootstrap", "MVC Architecture", "Embeded Tomcat"],
      github: "https://github.com/RushikeshGonge/E-com-WebApp",
      // webapp: "https://csprep.netlify.app/",
    },
  ];  