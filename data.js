// Week 4 JavaScript Portfolio Project - Data Organization
// Students will learn to organize their portfolio data using JavaScript objects and arrays

// TODO: Fill in your personal information
const portfolio = {
  // Personal information object
  owner: {
    name: "Henrik Alexander Zabel", // TODO: Add your name
    title: "Mr.", // TODO: Add your professional title
    email: "henrikzabel@berkeley.edu", // TODO: Add your email
    location: "Berkeley, CA", // TODO: Add your location
    bio: "I am a passionate web developer with a strong foundation in JavaScript and a keen interest in creating innovative solutions.", // TODO: Add your bio
  },

  // Skills as an array
  skills: [
    "Piano", // TODO: Replace with your actual skills
    "HTML", // TODO: Add more skills
    "CSS", // TODO: Add more skills
    "JavaScript", // TODO: Add more skills
    "SQL", // TODO: Students should have at least 5 skills
    // TODO: Add more skills - aim for 5-7 skills total
  ],

  // Projects as array of objects
  projects: [
    {
      title: "INFO 253 Portfolio Project", // TODO: Add your project title
      description: "Project with JavaScript",
      technologies: ["HTML", "CSS", "JavaScript"], // Array of technologies used
      completionDate: "2025-08-15", // When you completed it
      featured: true, // Is this a featured project?
    },
    {
      title: "Personal Website",
      description: "A personal website showcasing my work and skills.",
      technologies: ["HTML", "CSS", "JavaScript", "Figma"],
      completionDate: "2025-09-01",
      featured: false,
    },
    // TODO: Add more projects during class
  ],

  // Contact and availability information
  availability: {
    freelance: true, // TODO: Set to true if available for freelance work
    fullTime: false, // TODO: Set to true if seeking full-time position
    partTime: true, // TODO: Set to true if available for part-time work
  },
};

// Let's explore our data structure in the console
console.log("=== PORTFOLIO DATA EXPLORER ===");
console.log("Full portfolio object:", portfolio);

// TODO: During class, we'll add more console.log() statements to explore the data
// Examples students will try:
console.log("Owner name:", portfolio.owner.name);
console.log("First skill:", portfolio.skills[0]);
console.log("Number of projects:", portfolio.projects.length);

// TODO: Students will learn to access nested properties
console.log("Email:", portfolio.owner.email);
console.log("Second project:", portfolio.projects[1]);
console.log("Available for freelance?", portfolio.availability.freelance);

// TODO: Students will create summary strings using template literals
let summary = `${portfolio.owner.name} is a ${portfolio.owner.title} with ${portfolio.skills.length} skills.`;
console.log("Summary:", summary);
