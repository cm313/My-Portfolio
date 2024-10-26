import project1 from "../assets/projects/Ecommerce.png";
import project2 from "../assets/projects/foo.png";
import project3 from "../assets/projects/clone.png";


export const TITLE_CONTENT = `I am a passionate frontend developer with a strong foundation in creating dynamic and responsive web applications. Eager to bring creative solutions to real-world challenges, I am actively seeking opportunities to contribute and grow in front-end development roles.`;

export const ABOUT_TEXT = `I am Chanda Chandra Mahesh, I have completed my Bachelor of Technology in the Stream of Computer Science and Engineering at JNTUH University College Of Enigneering Manthani. I am Proficient in Core Java, RDBMS, SQL, HTML, CSS, Tailwind CSS, JavaScript, ReactJS, Jest, Redux, GIT, GitHub.  My journey of learning web development began with a deep curiosity for how things work, and it has evolved into a habit where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies.`;


export const PROJECTS = [
  {
    title: "ShopEascy Online E-Commerce Website",
    image: project1,
    description:
      `Developed a E-Commerce web application enabling users to browse products, add items to the cart, manage
 the cart, choose delivery options, and track orders. Utilized HTML, CSS Grid, and Flexbox for creating a responsive and visually appealing user interface. Implemented JavaScript modules, AJAX, async/await and promises for efficient data fetching and content
 updates. Applied the MVC (Model View Controller) architecture to maintain clean and modular code.
 Enhanced user experience with DOM manipulation and event handling for interactive and real-time updates`,
    technologies: ["HTML", "CSS","JavaScript"],
  },
  {
    title: "Food Order Online",
    image: project2,
    description:
      `Developed a responsive Food Ordering Web application using React by integrating Swiggy’s API to display
 real-time restaurant data. Utilized React Hooks and Redux for state updates, state management, improving application performance
 and scalability. Implemented React Router for seamless navigation between functional components, restaurants and detailed
 views of menu items and categories. Optimized performance through lazy loading and adhered to the Single Page Application for cleaner, more
 maintainable code. Conducted unit testing with Jest, ensuring code quality and reliability.
`,
    technologies: ["ReactJS","Redux", "Jest"],
  },
  {
    title: "YouTube UI Clone",
    image: project3,
    description:
      `Developed a YouTube clone UI using HTML, CSS to replicate the layout and design of the popular
 video-sharing platform. Implemented responsive design principles to ensure compatibility across various devices and screen sizes.
 Incorporated key features such as video thumbnails, search bar, navigation menu, and video player interface to
 mimic the functionality of the original platform`,
    technologies: ["HTML", "CSS",],
  },
];

export const CONTACT = {
  address: "Issipet(Vig), Mogullapally(Mdl), Jayashankar(Dist), Telangana, India",
  phoneNo: "(+91) 8688787737",
  email: "chandachandramahesh@gmail.com",
};
