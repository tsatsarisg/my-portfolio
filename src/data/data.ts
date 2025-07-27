export const courses = [
  {
    title: "The Complete JavaScript Course 2024: From Zero to Expert!",
    instructor: "Jonas Schmedtmann",
    description:
      "A comprehensive course covering modern JavaScript from basics to advanced concepts including ES6+, asynchronous programming, and real-world projects.",
    category: "Programming",
    duration: 28,
    status: "Completed",
  },
  {
    title: "React - The Complete Guide 2023 (incl. React Router & Redux)",
    instructor: "Maximilian Schwarzmüller",
    description:
      "Master React, Redux, and React Router with hands-on projects, hooks, context API, and modern best practices.",
    category: "Frontend",
    duration: 40,
    status: "Completed",
  },
  {
    title: "MongoDB - The Complete Developer's Guide",
    instructor: "Maximilian Schwarzmüller",
    description:
      "Learn MongoDB from scratch, including CRUD, aggregation, performance optimization, and integrating with Node.js.",
    category: "Database",
    duration: 16,
    status: "In Progress",
  },
  {
    title: "Docker & Kubernetes: The Practical Guide",
    instructor: "Maximilian Schwarzmüller",
    description:
      "Learn containerization and orchestration using Docker and Kubernetes through real-world deployment scenarios.",
    category: "DevOps",
    duration: 20,
    status: "In Progress",
  },
  {
    title: "NestJS: The Complete Developer's Guide",
    instructor: "Stephen Grider",
    description:
      "Learn to build scalable, maintainable backend applications using NestJS and TypeScript.",
    category: "Backend",
    duration: 15,
    status: "Completed",
  },
  {
    title: "Understanding TypeScript",
    instructor: "Maximilian Schwarzmüller",
    description:
      "Learn TypeScript from the ground up and apply it to both frontend and backend JavaScript development.",
    category: "Programming",
    duration: 15,
    status: "Completed",
  },
  {
    title: "Git & GitHub - The Practical Guide",
    instructor: "Maximilian Schwarzmüller",
    description:
      "Learn version control using Git and GitHub with practical workflows, branching, merging, and CI/CD integration.",
    category: "DevOps",
    duration: 6,
    status: "Completed",
  },
  {
    title: "Clean Code",
    instructor: "Academind",
    description:
      "Covers clean coding principles, refactoring techniques, and best practices for writing maintainable software.",
    category: "Programming",
    duration: 5,
    status: "Completed",
  },
  {
    title: "C# .NET Core 8",
    instructor: "Tim Corey",
    description:
      "A hands-on course teaching C# with .NET Core 8, covering APIs, MVC, and modern development patterns.",
    category: "Backend",
    duration: 20,
    status: "Completed",
  },

  {
    title: "Spring Boot 3, Spring 6 & Hibernate for Beginners",
    instructor: "Chad Darby",
    description:
      "Build Java enterprise applications with Spring Boot 3, Spring 6, and Hibernate using practical examples.",
    category: "Backend",
    duration: 30,
    status: "Completed",
  },

  {
    title: "Go: The Complete Developer's Guide",
    instructor: "Maximilian Schwarzmüller",
    description:
      "Master Go (Golang) programming, including concurrency patterns, building APIs, and cloud-native development.",
    category: "Backend",
    duration: 18,
    status: "Not Started",
  },

  {
    title: "Microservices with Node JS and React",
    instructor: "Stephen Grider",
    description:
      "Build and deploy a microservices architecture with Node.js, React, Kubernetes, and Docker.",
    category: "Architecture",
    duration: 30,
    status: "In Progress",
  },
];

export const books = [
  {
    title: "Refactoring",
    author: "Martin Fowler",
    description:
      "Explains how to improve existing codebases by incrementally refactoring without introducing bugs.",
    category: "Programming",
    rating: 4,
    status: "Read",
    dateRead: "2023-05-15",
    pages: 448,
    isbn: "978-0134757599",
    keyTakeaways: [
      "Refactoring improves design and readability",
      "Small changes reduce risk",
      "Tests are critical during refactoring",
    ],
    review:
      "An essential reference when dealing with legacy code. Examples are highly practical.",
  },
  {
    title: "Clean Code",
    author: "Robert C. Martin",
    description:
      "A handbook of agile software craftsmanship that teaches how to write code that is easy to read, understand, and maintain.",
    category: "Programming",
    rating: 5,
    status: "Read",
    dateRead: "2023-01-15",
    pages: 464,
    isbn: "978-0132350884",
    keyTakeaways: [
      "Meaningful names make code self-documenting",
      "Functions should be small and do one thing well",
      "Comments should explain why, not what",
      "Clean code is written by someone who cares",
    ],
    review:
      "Essential reading for any developer. Uncle Bob's principles have fundamentally changed how I approach writing code.",
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt, David Thomas",
    description:
      "A classic book offering practical advice for programmers to continuously improve their skills and adaptability.",
    category: "Programming",
    rating: 5,
    status: "Read",
    dateRead: "2023-03-10",
    pages: 352,
    isbn: "978-0135957059",
    keyTakeaways: [
      "Care about your craft",
      "Think critically and communicate clearly",
      "Automate repetitive tasks",
      "Invest in your knowledge portfolio",
    ],
    review:
      "A timeless guide full of wisdom. Every developer should revisit it periodically.",
  },

  {
    title: "Domain-Driven Design",
    author: "Eric Evans",
    description:
      "Explores how to tackle complex software by aligning code with domain knowledge through models and ubiquitous language.",
    category: "Architecture",
    rating: 5,
    status: "Read",
    dateRead: "2023-10-10",
    pages: 560,
    isbn: "978-0321125217",
    keyTakeaways: [
      "Focus on the domain, not just technology",
      "Use a ubiquitous language",
      "Bounded contexts simplify complexity",
    ],
    review:
      "The go-to book for understanding complex software systems. Dense but worth it.",
  },
  {
    title: "Head First Design Patterns",
    author: "Eric Freeman, Elisabeth Robson",
    description:
      "An engaging introduction to design patterns using a visually rich, conversational style.",
    category: "Design Patterns",
    rating: 4,
    status: "Read",
    dateRead: "2024-01-15",
    pages: 694,
    isbn: "978-1492078005",
    keyTakeaways: [
      "Patterns solve recurring problems in software design",
      "Composition over inheritance",
      "Encapsulation improves flexibility",
    ],
    review: "Fun and practical. Ideal for developers new to design patterns.",
  },

  {
    title: "Test Driven Development: By Example",
    author: "Kent Beck",
    description:
      "Introduces TDD by demonstrating how writing tests first leads to cleaner, more reliable code.",
    category: "Testing",
    rating: 4,
    status: "Read",
    dateRead: "2023-04-15",
    pages: 220,
    isbn: "978-0321146534",
    keyTakeaways: [
      "Write tests before code",
      "Refactor in small steps",
      "Tests provide confidence for changes",
    ],
    review:
      "Clear, concise, and practical. TDD becomes approachable after this book.",
  },
  {
    title: "Implementing Domain-Driven Design",
    author: "Vaughn Vernon",
    description:
      "A practical guide to applying Domain-Driven Design principles with real-world examples and modern practices.",
    category: "Architecture",
    rating: 4,
    status: "Read",
    dateRead: "2024-08-15",
    pages: 656,
    isbn: "978-0321834577",
    keyTakeaways: [
      "DDD is both a design and collaboration approach",
      "Strategic design helps manage complexity",
    ],
    review:
      "Great for translating theory into practice. Complements Evans’ original work.",
  },

  {
    title: "Strategic Monoliths and Microservices",
    author: "Vaughn Vernon, Tomasz Jaskula",
    description:
      "Explores how to evolve software architectures intentionally, using monoliths and microservices strategically.",
    category: "Architecture",
    rating: 4,
    status: "Read",
    dateRead: "2025-01-15",
    pages: 400,
    isbn: "978-0137355467",
    keyTakeaways: [
      "Not every system needs microservices",
      "Architectural decisions should align with business goals",
    ],
    review:
      "A fresh perspective on choosing the right architecture for the right context.",
  },
  {
    title: "Clean Architecture",
    author: "Robert C. Martin",
    description:
      "Guidelines on structuring software so that it is independent of frameworks, UI, databases, and external agents.",
    category: "Architecture",
    rating: 5,
    status: "Read",
    dateRead: "2023-05-01",
    pages: 432,
    isbn: "978-0134494169",
    keyTakeaways: [
      "Separation of concerns is key",
      "Dependency inversion keeps systems flexible",
      "Architectures should be testable and maintainable",
    ],
    review:
      "A must-read for architects. Bridges design principles with practical patterns.",
  },
  {
    title: "Scrum: The Art of Doing Twice the Work in Half the Time",
    author: "Jeff Sutherland",
    description:
      "A look into the Scrum methodology, showing how it can dramatically increase productivity and team collaboration.",
    category: "Agile",
    rating: 4,
    status: "Read",
    dateRead: "2023-02-10",
    pages: 256,
    isbn: "978-0385346450",
    keyTakeaways: [
      "Scrum empowers teams to deliver faster",
      "Frequent feedback improves outcomes",
    ],
    review:
      "Great insights into agile thinking beyond just processes. Highly recommended.",
  },
  {
    title: "Elegant Objects",
    author: "Yegor Bugayenko",
    description:
      "Challenges conventional OOP practices and promotes a more elegant, object-oriented approach.",
    category: "Object-Oriented Design",
    rating: 3,
    status: "Read",
    dateRead: "2025-02-10",
    pages: 268,
    isbn: "978-1519166915",
    keyTakeaways: [
      "Avoid getters and setters",
      "Objects should encapsulate behavior, not just data",
    ],
    review:
      "Controversial but thought-provoking. Forces you to question common practices.",
  },
  {
    title: "Patterns of Enterprise Application Architecture",
    author: "Martin Fowler",
    description:
      "Catalogues patterns used in enterprise applications to address common architectural challenges.",
    category: "Architecture",
    rating: 5,
    status: "Read",
    dateRead: "2024-12-15",
    pages: 533,
    isbn: "978-0321127420",
    keyTakeaways: [
      "Patterns provide reusable solutions",
      "Layered architecture improves scalability",
    ],
    review:
      "The definitive reference for enterprise-level software design patterns.",
  },
  {
    title: "Node.js Design Patterns",
    author: "Mario Casciaro, Luciano Mammino",
    description:
      "Shows how to write scalable and maintainable Node.js applications using proven design patterns.",
    category: "Backend",
    rating: 4,
    status: "In Progress",
    dateRead: null,
    pages: 520,
    isbn: "978-1839214110",
    keyTakeaways: [
      "Patterns improve code quality in Node.js",
      "Use async patterns to handle concurrency",
    ],
    review:
      "Excellent for advanced Node.js developers looking to improve structure and scalability.",
  },
];
