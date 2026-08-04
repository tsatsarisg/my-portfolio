export interface Course {
  title: string;
  instructor: string;
  description: string;
  category: string;
  duration: number;
  status: "Completed" | "In Progress" | "Not Started";
}

export interface Book {
  title: string;
  author: string;
  description: string;
  category: string;
  rating: number;
  pages: number;
  isbn: string;
}

export interface Project {
  title: string;
  tagline: string;
  description: string;
  tech: string[];
  github: string | null; // null = private repository
}

export const projects: Project[] = [
  {
    title: "Agent Harness",
    tagline: "A mini agent runtime built to survive production",
    description:
      "The infrastructure layer around an LLM loop. Every model turn and tool call is a checkpointed, durable step backed by DBOS and Postgres — kill the process mid-run and it resumes where it stopped. A typed event log streams to a live inspector UI, privileged tools suspend the workflow until a human approves, and a supervisor mode fans out parallel read-only investigators.",
    tech: ["TypeScript", "DBOS", "PostgreSQL", "WebSockets", "React"],
    github: "https://github.com/tsatsarisg/agent-harness",
  },
  {
    title: "Toolwright",
    tagline: "A terminal AI agent built from first principles",
    description:
      "A general-purpose coding agent with no agent framework behind it — a custom streaming tool-calling loop on the Vercel AI SDK with an Ink terminal UI. Tiered approval gates anything with side effects, sessions persist to disk and resume, token-budget compaction keeps long conversations in context, and behaviour is regression-tested with single- and multi-turn evals.",
    tech: ["TypeScript", "Node.js", "Vercel AI SDK", "Ink", "Laminar"],
    github: "https://github.com/tsatsarisg/toolwright",
  },
  {
    title: "Auth Server",
    tagline: "A production-reference authentication service",
    description:
      "JWT authentication with refresh-token rotation and reuse detection, built as two bounded contexts — Identity and Authentication — whose one-way dependency is machine-enforced with lint rules. Every use case is a CQRS vertical slice, persistence swaps between Postgres and Mongo behind ports, and the key trade-offs are recorded as ADRs.",
    tech: ["NestJS", "TypeScript", "PostgreSQL", "MongoDB", "JWT"],
    github: "https://github.com/tsatsarisg/auth-server",
  },
  {
    title: "go-fit",
    tagline: "A production-shaped Go backend",
    description:
      "An HTTP service for users and workouts that shows what pragmatic Go looks like: bounded contexts with ports and adapters, typed IDs, a real auth model, graceful shutdown, embedded SQL migrations, structured logging, a multi-stage container build, and CI that gates merges.",
    tech: ["Go", "PostgreSQL", "Docker", "GitHub Actions"],
    github: "https://github.com/tsatsarisg/go-fit",
  },
  {
    title: "Soccer Tournaments",
    tagline: "A modular monolith in .NET 10",
    description:
      "An API for tournaments, teams, players, matches, and standings. Three bounded contexts live as separate class libraries with their own DbContexts and never reference each other — cross-module calls go through ports implemented in a thin composition-root host. Vertical slices with CQS and Result-typed commands throughout, paired with a Next.js web client.",
    tech: ["C#", ".NET 10", "EF Core", "PostgreSQL", "Next.js"],
    github: null,
  },
  {
    title: "Agrohands",
    tagline: "A job platform for agricultural work",
    description:
      "A full-stack platform connecting farm employers with seasonal workers — job postings, worker profiles, search and pagination, JWT auth. The Express backend applies CQRS, DDD, and the result pattern; the React front end and the whole system run containerized end to end.",
    tech: ["TypeScript", "Express", "React", "MongoDB", "Docker"],
    github: null,
  },
];

export const courses: Course[] = [
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

export const books: Book[] = [
  {
    title: "Clean Code",
    author: "Robert C. Martin",
    description:
      "A handbook of agile software craftsmanship that teaches how to write code that is easy to read, understand, and maintain.",
    category: "Programming",
    rating: 5,
    pages: 464,
    isbn: "978-0132350884",
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt, David Thomas",
    description:
      "A classic book offering practical advice for programmers to continuously improve their skills and adaptability.",
    category: "Programming",
    rating: 5,
    pages: 352,
    isbn: "978-0135957059",
  },
  {
    title: "Refactoring",
    author: "Martin Fowler",
    description:
      "Explains how to improve existing codebases by incrementally refactoring without introducing bugs.",
    category: "Programming",
    rating: 4,
    pages: 448,
    isbn: "978-0134757599",
  },
  {
    title: "Clean Architecture",
    author: "Robert C. Martin",
    description:
      "Guidelines on structuring software so that it is independent of frameworks, UI, databases, and external agents.",
    category: "Architecture",
    rating: 5,
    pages: 432,
    isbn: "978-0134494169",
  },
  {
    title: "Domain-Driven Design",
    author: "Eric Evans",
    description:
      "Explores how to tackle complex software by aligning code with domain knowledge through models and ubiquitous language.",
    category: "Architecture",
    rating: 5,
    pages: 560,
    isbn: "978-0321125217",
  },
  {
    title: "Designing Data-Intensive Applications",
    author: "Martin Kleppmann",
    description:
      "A deep dive into the principles and trade-offs behind reliable, scalable, and maintainable data systems, covering storage, replication, partitioning, and distributed processing.",
    category: "Architecture",
    rating: 5,
    pages: 616,
    isbn: "978-1449373320",
  },
  {
    title: "Patterns of Enterprise Application Architecture",
    author: "Martin Fowler",
    description:
      "Catalogues patterns used in enterprise applications to address common architectural challenges.",
    category: "Architecture",
    rating: 5,
    pages: 533,
    isbn: "978-0321127420",
  },
  {
    title: "Software Architecture: The Hard Parts",
    author: "Neal Ford, Mark Richards, Pramod Sadalage, Zhamak Dehghani",
    description:
      "A guide to navigating the toughest trade-offs in modern distributed architectures, covering decomposition, data ownership, and architectural decision records.",
    category: "Architecture",
    rating: 4,
    pages: 460,
    isbn: "978-1492086895",
  },
  {
    title: "Implementing Domain-Driven Design",
    author: "Vaughn Vernon",
    description:
      "A practical guide to applying Domain-Driven Design principles with real-world examples and modern practices.",
    category: "Architecture",
    rating: 4,
    pages: 656,
    isbn: "978-0321834577",
  },
  {
    title: "Head First Design Patterns",
    author: "Eric Freeman, Elisabeth Robson",
    description:
      "An engaging introduction to design patterns using a visually rich, conversational style.",
    category: "Design Patterns",
    rating: 4,
    pages: 694,
    isbn: "978-1492078005",
  },
  {
    title: "Test Driven Development: By Example",
    author: "Kent Beck",
    description:
      "Introduces TDD by demonstrating how writing tests first leads to cleaner, more reliable code.",
    category: "Testing",
    rating: 4,
    pages: 220,
    isbn: "978-0321146534",
  },
  {
    title: "Strategic Monoliths and Microservices",
    author: "Vaughn Vernon, Tomasz Jaskula",
    description:
      "Explores how to evolve software architectures intentionally, using monoliths and microservices strategically.",
    category: "Architecture",
    rating: 4,
    pages: 400,
    isbn: "978-0137355467",
  },
  {
    title: "Node.js Design Patterns",
    author: "Mario Casciaro, Luciano Mammino",
    description:
      "Shows how to write scalable and maintainable Node.js applications using proven design patterns.",
    category: "Backend",
    rating: 4,
    pages: 520,
    isbn: "978-1839214110",
  },
  {
    title: "Scrum: The Art of Doing Twice the Work in Half the Time",
    author: "Jeff Sutherland",
    description:
      "A look into the Scrum methodology, showing how it can dramatically increase productivity and team collaboration.",
    category: "Agile",
    rating: 4,
    pages: 256,
    isbn: "978-0385346450",
  },
  {
    title: "Elegant Objects",
    author: "Yegor Bugayenko",
    description:
      "Challenges conventional OOP practices and promotes a more elegant, object-oriented approach.",
    category: "Object-Oriented Design",
    rating: 3,
    pages: 268,
    isbn: "978-1519166915",
  },
];
