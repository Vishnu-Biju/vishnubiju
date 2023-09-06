import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  express,
  mUI,
  logo,
  brototype,
  atmos,
  Enigmamart,
  Gericht,
  portfolioreact,
  Cara,
  OpenAI,
  portfolio,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "front-end Developer",
    icon: backend,
  },
  {
    title: "mern stack developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "material UI",
    icon: mUI,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "express",
    icon: express,
  },

];

const experiences = [
  {
    title: "Web Developer",
    company_name: "Freelance",
    icon: logo,
    iconBg: "#383E56",
    date: "Aug 2022 - oct 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback.",
    ],
  },
  {
    title: "Mern Stack Developer",
    company_name: "BrotoType",
    icon: brototype,
    iconBg: "#050816",
    date: "Oct 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js,node.js,express.js,mongoDB and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Atmos-solution",
    icon: atmos,
    iconBg: "#383E56",
    date: "Jan 2023 - April 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Enigma-Mart",
    description:
      "This e-commerce app allows users to purchase laptops online. It features a user-friendly interface with login, search, and filtering options. Users can add laptops to their cart, choose payment methods including credit card and cash on delivery, and track their order status.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "node.js & express.js",
        color: "blue-text-gradient",
      },
      {
        name: "antd & material UI",
        color: "pink-text-gradient",
      },
    ],
    image: Enigmamart,
    source_code_link: "https://github.com/Vishnu-Biju/mern-e-commerce-project",
  },
  {
    name: "Gericht",
    description:
      "This restaurant website serves as a platform to showcase the restaurant's new menu items and provide information about their talented chefs. It also highlights today's deals and offers. The site offers an engaging user experience with visually appealing menus, chef profiles, enticing visitors to explore the restaurant's offerings.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "figma",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: Gericht,
    source_code_link: "https://github.com/Vishnu-Biju/Restaurant-site",
  },
  {
    name: " GPT-3 OpenAI",
    description:
      "GPT-3 OpenAI is a React-based front page that effectively showcases the specifications and latest features of GPT-3. It offers an engaging and interactive platform to explore the capabilities of GPT-3. This project serves as a comprehensive resource for users to understand the advancements of GPT-3 in a visually appealing manner.",
    tags: [
      {
        name: "react.js",
        color: "blue-text-gradient",
      },
      {
        name: "react-icons",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: OpenAI,
    source_code_link: "https://github.com/Vishnu-Biju/GPT-3",
  },
  {
    name: "Portfolio",
    description:
      "A This personal portfolio project utilizes Web3 technology along with React Three to create an immersive experience. It incorporates animations and 3D objects to showcase the user's skills, information, and experience in a visually engaging manner. The portfolio serves as a dynamic representation of the user's abilities, providing an interactive and unique way to present their professional profile.",
    tags: [
      {
        name: "React-three",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "animation",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/Vishnu-Biju/web-three-portfolio",
  },
  {
    name: "Cara",
    description:
      "This front-end design project involves creating a visually appealing cloth shopping e-commerce application using HTML, CSS, and JavaScript. The design will focus on providing a user-friendly interface for browsing and selecting clothing items. It will incorporate responsive layouts, attractive styling, and interactive elements to enhance the shopping experience.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "html5",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: Cara,
    source_code_link: "https://github.com/Vishnu-Biju/E-commercial-website-",
  },
  {
    name: "portfolio-react",
    description:
      "This personal portfolio project, developed with React and animations, presents a visually captivating showcase of skills, information, and experience. Through dynamic and interactive elements, it highlights the user's expertise and achievements. The portfolio offers a compelling platform for visitors to explore the user's profile and gain a comprehensive understanding of their capabilities.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "scss",
        color: "green-text-gradient",
      },
      {
        name: "animations",
        color: "pink-text-gradient",
      },
    ],
    image: portfolioreact,
    source_code_link: "https://github.com/Vishnu-Biju/portfolio",
  },
];

export { services, technologies, experiences, testimonials, projects };
