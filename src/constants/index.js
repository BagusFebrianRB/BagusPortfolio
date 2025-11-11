import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `Bachelor’s degree in Informatics Engineering from Institut Teknologi Sepuluh Nopember (ITS). Experienced in developing web applications using React.js, Laravel, Node.js, and managing PostgreSQL/MySQL databases. Skilled in building REST APIs, responsive interfaces, and collaborative development with Git. Seeking a Web Developer role to create efficient and scalable applications.`;

export const ABOUT_TEXT = `I’m a web developer who enjoys transforming ideas into interactive and efficient web applications. I’m passionate about clean design, intuitive user experiences, and writing maintainable code. My main focus is on building responsive, scalable, and performance-oriented systems using React.js, Node.js, and modern web technologies. Outside of coding, I love learning new frameworks, exploring design trends, and continuously improving my technical and creative skills.`;

export const EXPERIENCES = [
  {
    year: "2024",
    role: "Intern Full Stack Developer",
    company: "Private Gaming Room",
    description: `Translated user needs into technical requirements for system development. Developed a web application using React and PostgreSQL. Prepared technical documentation and testing reports as project deliverables.`,
    technologies: ["Javascript", "React.js", "Express.js", "PostgreSQL"],
  },
  {
    year: "2023 - 2024",
    role: "Intern Frontend Developer",
    company: "Leap English and Digital Surabaya",
    description: `Developed front-end web applications using the CodeIgniter framework, designed intuitive user interfaces with Figma, and collaborated with cross-functional teams throughout the development process.`,
    technologies: ["CodeIgniter", "Figma", "PHP", "mySQL"],
  },
  {
    year: "2022 - 2023",
    role: "International Affairs Division Staff",
    company: "BEM FTEIC ITS",
    description: `Served as a bridge between divisions to coordinate and fulfill design needs across the organization. Responsible for managing and producing various design materials to support organizational activities. Also served as the Project Leader for the Advance Media Schooling event, overseeing the planning, execution, and creative direction of the program.`,
    technologies: ["Figma", "Adobe Illustrator"],
  },
];

export const PROJECTS = [
  {
    title: "Portfolio Website",
    image: project1,
    description:
      "A personal portfolio website showcasing my projects, skills, and experiences, designed with a clean and responsive layout using modern web technologies.",
    technologies: ["React", "Tailwind", "Javascript", "Framer Motion"],
    github: "https://github.com/BagusFebrianRB/BagusPortfolio.git",
  },
  {
    title: "Room Reservation Website",
    image: project2,
    description:
      "A web-based application for managing room reservations, allowing users to check availability, make bookings, and view schedules in real time.",
    technologies: ["React", "Express.Js", "PostgreSQL"],
    github: "https://github.com/BagusFebrianRB/room_reservation.git",
  },
  {
    title: "Weather App",
    image: project3,
    description:
      "A Weather App for gather information about the weather in many city. Use the API from the WeatherAPI.",
    technologies: ["React", "Javascript", "WeatherAPI"],
    github: "https://github.com/BagusFebrianRB/weatherApp.git",
  },
  {
    title: "Stock Price Prediction Model using LSTM-GRU",
    image: project4,
    description:
      "Developed a deep learning model for predicting stock prices in the Indonesia Stock Exchange using a hybrid LSTM-GRU architecture.",
    technologies: ["Python", "TensorFlow", "Pandas", "Matplotlib"],
    github: "https://github.com/BagusFebrianRB/LSTM-GRU.git",
  },
];

export const CONTACT = {
  address: "Tuban, Jawa Timur",
  phoneNo: "+6281545618672 ",
  email: "bagusfebrian67@gmail.com",
};
