export type ExperienceCard = {
  review: string;
  imgPath: string;
  logoPath: string;
  title: string;
  date: string;
  responsibilities: string[];
};
// export const expCards: ExperienceCard[] = [
//   {
//     review:
//       "Adrian brought creativity and technical expertise to the team, significantly improving our frontend performance. His work has been invaluable in delivering faster experiences.",
//     imgPath: "/github-light.svg",
//     logoPath: "/react.svg",
//     title: "Frontend Developer",
//     date: "January 2023 - Present",
//     responsibilities: [
//       "Developed and maintained user-facing features for the Hostinger website.",
//       "Collaborated closely with UI/UX designers to ensure seamless user experiences.",
//       "Optimized web applications for maximum speed and scalability.",
//     ],
//   },
//   {
//     review:
//       "Adrian’s contributions to Docker's web applications have been outstanding. He approaches challenges with a problem-solving mindset.",
//     imgPath: "/github-light.svg",
//     logoPath: "/react.svg",
//     title: "Full Stack Developer",
//     date: "June 2020 - December 2023",
//     responsibilities: [
//       "Led the development of Docker's web applications, focusing on scalability.",
//       "Worked with backend engineers to integrate APIs seamlessly with the frontend.",
//       "Contributed to open-source projects that were used with the Docker ecosystem.",
//     ],
//   },
//   {
//     review:
//       "Adrian’s work on Appwrite’s mobile app brought a high level of quality and efficiency. He delivered solutions that enhanced our mobile experience & meet our product goals.",
//     imgPath: "/github-light.svg",
//     logoPath: "/react.svg",
//     title: "React Native Developer",
//     date: "March 2019 - May 2020",
//     responsibilities: [
//       "Built cross-platform mobile apps using React Native, integrating with Appwrite's backend services.",
//       "Improved app performance and user experience through code optimization and testing.",
//       "Coordinated with the product team to implement features based on feedback.",
//     ],
//   },
// ];

// export const expCards: ExperienceCard[] = [
//   {
//     review:
//       "Krishna has shown excellent problem-solving abilities and strong ownership in frontend development. His work on building responsive interfaces and optimizing performance significantly enhanced user experience.",
//     imgPath: "/github-light.svg",
//     logoPath: "/react.svg",
//     title: "Software Engineer",
//     date: "July 2023 - Present",
//     responsibilities: [
//       "Building responsive and scalable web interfaces using React.js, Next.js, and TypeScript.",
//       "Collaborating with UI/UX teams to convert Figma designs into pixel-perfect and accessible UI.",
//       "Implementing reusable components, theme systems, dark mode, and design consistency using Material UI.",
//       "Improving app performance using lazy loading, memoization, and API optimization strategies.",
//       "Actively working on personal projects like aexyn_studio (web builder) and AI image generation apps.",
//     ],
//   },
//   {
//     review:
//       "Krishna demonstrated quick learning and strong fundamentals during his training, gaining hands-on experience in frontend and basic backend development.",
//     imgPath: "/github-light.svg",
//     logoPath: "/typescript.svg",
//     title: "Software Trainee",
//     date: "January 2023 – June 2023",
//     responsibilities: [
//       "Trained in JavaScript, TypeScript, React.js, Git, API integration, and web development fundamentals.",
//       "Built mini-projects to understand component architecture, props, state management, and hooks.",
//       "Learned REST API integration using Fetch, Axios, and handled form validations using Formik and Yup.",
//       "Collaborated in small team projects to follow proper folder structure and professional coding practices.",
//     ],
//   },
//   {
//     review:
//       "Krishna showcased strong full-stack learning capabilities during his trainee period, especially in building complete MERN stack applications with authentication and database integration.",
//     imgPath: "/github-light.svg",
//     logoPath: "/nodejs.svg",
//     title: "Full Stack Trainee",
//     date: "September 2022 – December 2022",
//     responsibilities: [
//       "Built full-stack apps using Node.js, Express.js, MongoDB, and React.js including JWT-based authentication.",
//       "Designed and consumed REST APIs for user authentication, task management, and data handling.",
//       "Worked with MongoDB and Mongoose for schema design, CRUD operations, and performance improvements.",
//       "Deployed applications on Render and Netlify, integrating frontend and backend successfully.",
//       "Developed the PathShala ed-tech platform prototype using MERN stack and demonstrated functional UI.",
//     ],
//   },
// ];

export const expCards: ExperienceCard[] = [
  {
    review:
      "Riya has strong backend development skills and demonstrates ownership in building scalable server-side applications. Her work on APIs, real-time chat, and subscription workflows shows high professionalism and efficiency.",
    imgPath: "/github-light.svg",
    logoPath: "/nodejs.svg",
    title: "Software Engineer Intern",
    date: "Aug 2025 – Dec 2025",
    responsibilities: [
      "Developed backend features using Node.js, Express, TypeScript, and MongoDB, focusing on clean architecture and maintainable code.",
      "Implemented PetPalz platform modules: authentication, user management, real-time chat, and pet store management using JWT, Bcrypt, Socket.IO, Multer, and Joi validation.",
      "Optimized data handling and system performance with pagination, search, and filtering techniques.",
      "Built Guava Collections & Subscription modules with auto-sync favorites, subscription workflows, and backend preparation for payment integration.",
      "Collaborated with cross-functional teams to ensure API reliability and proper integration with frontend modules.",
    ],
  },
  {
    review:
      "Riya gained hands-on full-stack development experience during her internship, completing multiple web projects with focus on backend and responsive UI.",
    imgPath: "/github-light.svg",
    logoPath: "/typescript.svg",
    title: "Web Development Intern",
    date: "Jul 2024 – Aug 2024",
    responsibilities: [
      "Completed a 2-month intensive MERN stack training (MongoDB, Express.js, React.js, Node.js).",
      "Built multiple mini-projects focusing on RESTful APIs, authentication, and responsive UI design.",
      "Learned full-stack integration with proper folder structure, component architecture, and best coding practices.",
    ],
  },
];


export const icons = [
  "/email.svg",
  "/linkedin.png",
  "/github.svg",
  "/leetcode.png",
];
export const HeroIcons:{iconUrl:string, altText:string, link:string}[] = [
  {
    iconUrl: "/email.svg",
    altText: "Email Icon",
    link:"mailto:riyasharma.sde@gmail.com"
  },
  {
    iconUrl: "/linkedin.png",
    altText: "LinkedIn Icon",
    link:"https://www.linkedin.com/in/riya-sharma-0002a12aa/"
  },
  {
    iconUrl: "/github.svg",
    altText: "GitHub Icon",
    link:"https://github.com/riya-sharma17"
  },
  {
    iconUrl: "/leetcode.png",
    altText: "LeetCode Icon",
    link:"https://leetcode.com/u/riy_a_1_/"
  }
]
export const mobileIcons = [
  "/email-light.svg",
  "/linkedin-light.svg",
  "/github-light.svg",
  "/leetcode-light.svg",
];

export const projects = [
  {
    id: 1,
    title: "Pathshala - EdTech Learning Platform",
    des: "An interactive platform offering courses, resources, and community support for students to enhance their learning experience.",
    img: "/pathshala.png",
    iconLists: ["/re.svg", "/tail.svg", "/js.svg", "/nodejs.svg", "/mongodb-icon.svg"],
    link: "https://path-shala-khaki.vercel.app/",
  },
  {
    id: 2,
    title: "Collabrative Task Management",
    des: "A web application that enables teams to collaborate on tasks, track progress, and manage projects efficiently in real-time.",
    img: "/task.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/mongodb-icon.svg", "/nodejs.svg"],
    link: "https://task-management-4z6g.vercel.app/",
  },
  {
    id: 3,
    title: "Food Order App - Online Food Delivery Platform",
    des: "A user-friendly platform for browsing menus, placing orders, and tracking deliveries from local restaurants.",
    img: "/food.png",
    iconLists: ["/re.svg", "/tail.svg", "/js.svg", "/mongodb-icon.svg", "/nodejs.svg"],
    link: "https://fooddelivery-frontend-szy1.onrender.com",
  },
  {
    id: 4,
    title: "Amazon Clone - E-commerce Platform",
    des: "clone of amazon website with features like product browsing, searching, user authentication, and shopping cart functionality.",
    img: "/ss.png",
    iconLists: ["/tail.svg", "/re.svg", "/redux.png"],
    link: "https://amazon-roan-zeta.vercel.app/",
  },
];
