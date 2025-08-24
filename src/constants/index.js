export const myProjects = [
  {
    id: 1,
    title: "Online Chess Game",
    description:
      "An interactive online chess game with real-time multiplayer support and a clean UI, enhancing competitive gameplay experience.",
    subDescription: [
      "Implemented real-time gameplay using Socket.io and Node.js.",
      "Designed a responsive interface with React and Tailwind CSS.",
      "Ensured smooth synchronization across players with WebSockets.",
      "Deployed with Render for seamless accessibility.",
    ],
    href: "https://checkmate-app-hh80.onrender.com",
    logo: "",
    image: "/assets/projects/chess.png",
    tags: [
      { id: 1, name: "React", path: "/assets/logos/react.svg" },
      { id: 2, name: "Node.js", path: "/assets/logos/nodejs.svg" },
      { id: 3, name: "Socket.io", path: "/assets/logos/Socket-io.svg" },
      { id: 4, name: "TailwindCSS", path: "/assets/logos/tailwindcss.svg" },
    ],
  },
  {
    id: 2,
    title: "TrackSphere - Real-Time Device Mapping",
    description:
      "A WebSocket-powered tracking system using Leaflet, Socket.io, and Node.js to handle 10,000+ updates/min with 50ms latency.",
    subDescription: [
      "Implemented live device location tracking using Leaflet maps.",
      "Achieved ultra-low latency (50ms) updates with WebSockets.",
      "Designed a scalable backend with Node.js and Express.",
      "Optimized frontend rendering to handle 10,000+ updates/min.",
    ],
    href: "https://tracksphere-4gxu.onrender.com/",
    logo: "",
    image: "/assets/projects/Tracksphere.png",
    tags: [
      { id: 1, name: "Leaflet", path: "/assets/logos/leaflet.jpg" },
      { id: 2, name: "Socket.io", path: "/assets/logos/Socket-io.svg" },
      { id: 3, name: "Node.js", path: "/assets/logos/nodejs.svg" },
      { id: 4, name: "Express", path: "/assets/logos/express.svg" },
    ],
  },
  {
    id: 3,
    title: "Blend - Personalized Dashboard",
    description:
      "A personalized dashboard with drag-and-drop feeds, dark/light mode, and dynamic news integration.",
    subDescription: [
      "Built with Next.js, Redux, and Tailwind CSS.",
      "Integrated NewsAPI with debounced search functionality.",
      "Implemented drag-and-drop customizable feeds.",
      "Added Framer Motion animations for seamless UX.",
    ],
    href: "https://blend--projects.vercel.app/",
    logo: "",
    image: "/assets/projects/blend.png",
    tags: [
      { id: 1, name: "Next.js", path: "/assets/logos/nextjs.svg" },
      { id: 2, name: "Redux", path: "/assets/logos/redux.svg" },
      { id: 3, name: "TailwindCSS", path: "/assets/logos/tailwindcss.svg" },
      { id: 4, name: "Framer Motion", path: "/assets/logos/motion.svg" },
    ],
  },
 {
  id: 4,
  title: "Full Stack MERN AI Image Generation App",
  description:
    "A prompt-based AI image generator with gallery, downloads, and sharing—built on the MERN stack with a modern UI.",
  subDescription: [
    "Implemented text-to-image generation with a model API, prompt history, and seed controls.",
    "Built a responsive React UI with protected routes, credits/usage, and toast feedback.",
    "Created a gallery with infinite scroll, search, favorites, and per-image detail view.",
    "Stored images and metadata, supporting share/download and copy prompt.",
  ],
  href: "",            // live URL if deployed
  logo: "",
  image: "/assets/projects/AI-gen.png",
  tags: [
    { id: 1, name: "MongoDB", path: "/assets/logos/mongodb.svg" },
    { id: 2, name: "Express.js", path: "/assets/logos/express.svg" },
    { id: 3, name: "React", path: "/assets/logos/react.svg" },
    { id: 4, name: "Node.js", path: "/assets/logos/nodejs.svg" },
    { id: 6, name: "Auth", path: "/assets/logos/auth0.svg" }
  ],
},
    {
    id: 5,
    title: "Full Stack MERN Dashboard App",
    description:
      "A full-stack MERN application with CRUD, authentication, charts, and modern UI using Refine.",
    subDescription: [
      "Built with Node.js, Express.js, MongoDB, and React.js (MERN stack).",
      "Implemented secure authentication with Google Auth.",
      "Developed CRUD operations with refine for fast feature delivery.",
      "Integrated Material UI for modern material design components.",
      "Transformed a Figma design into a fully functioning app.",
      "Optimized media with Cloudinary storage and image compression.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/Dashboard.png",
    tags: [
      { id: 1, name: "MongoDB", path: "/assets/logos/mongodb.svg" },
      { id: 2, name: "Express.js", path: "/assets/logos/express.svg" },
      { id: 3, name: "React", path: "/assets/logos/react.svg" },
      { id: 4, name: "Node.js", path: "/assets/logos/nodejs.svg" },
      { id: 5, name: "Material UI", path: "/assets/logos/mui.svg" },
    ],
  },
  {
    id: 6,
    title: "Stride - Full Stack eCommerce App",
    description:
      "A full-stack eCommerce application built with Next.js, PostgreSQL, and Devin AI integration.",
    subDescription: [
      "Developed with Next.js for server-side rendering and dynamic UI.",
      "Used PostgreSQL as the primary database for scalability.",
      "Implemented product catalog, cart, checkout, and payment flow.",
      "Integrated Devin AI for intelligent search and recommendations.",
      "Styled with Tailwind CSS for responsive design.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/stride.png",
    tags: [
      { id: 1, name: "Next.js", path: "/assets/logos/nextjs.svg" },
      { id: 2, name: "PostgreSQL", path: "/assets/logos/PostgreSQL.svg" },
      { id: 3, name: "TailwindCSS", path: "/assets/logos/tailwindcss.svg" },
    ],
  },
  
];

export const experiences = [
  {
    title: "Software Development Intern",
    job: "CFEES-DRDO, Delhi",
    date: "July 2024 – September 2024",
    contents: [
      "Designed and developed full-stack systems (Inventory & Complaint Management) used by 500+ employees with PHP & MySQL, reducing manual effort by 40%.",
      "Enhanced reliability by adding notifications, query indexing, and access controls.",
      "Contributed to 10+ peer code reviews and improved CI/CD pipeline efficiency by 25%.",
    ],
  },
  {
    title: "Data Analyst Intern",
    job: "Afame Technologies, Bengaluru (Remote)",
    date: "March 2024 – April 2024",
    contents: [
      "Built interactive Power BI dashboards and sales monitoring systems, improving efficiency by 30%.",
      "Developed ML pipelines in Python (pandas, scikit-learn) achieving 85% prediction accuracy.",
      "Enhanced model performance by 20% through feature engineering and optimization.",
    ],
  },
  {
    title: "Data Science Intern",
    job: "Rinex.AI, Bengaluru (Remote)",
    date: "September 2023 – October 2023",
    contents: [
      "Developed predictive models with Python & SQL on 10K+ data points.",
      "Optimized Logistic Regression and Random Forest models to achieve 85% accuracy.",
      "Improved forecast precision by 25%, enabling better decision-making.",
    ],
  },
];

export const mySocials = [
  {
    name: "GitHub",
    href: "https://github.com/txnishq28",
    icon: "/assets/socials/github.png",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/tanishq-tiwari-0193702b9/",
    icon: "/assets/socials/linkedin.svg",
  },
  {
    name: "LeetCode",
    href: "https://leetcode.com/u/tanishqtiwari_28/",
    icon: "/assets/socials/Leetcode.png",
  },
  {
    name: "Email",
    href: "mailto:tanishq.tiwari2812@gmail.com",
    icon: "/assets/socials/email.png",
  },
];

