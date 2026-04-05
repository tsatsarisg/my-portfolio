import Portfolio from "@/Portfolio";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "George Tsatsaris",
  jobTitle: "Founding Software Engineer",
  url: "https://tsatsarisg.github.io/my-portfolio",
  sameAs: [
    "https://github.com/tsatsarisg",
    "https://www.linkedin.com/in/tsatsarisg/",
  ],
  knowsAbout: [
    "Node.js",
    "TypeScript",
    "React",
    "Backend Architecture",
    "API Development",
    "Domain-Driven Design",
  ],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Athens University of Economics and Business (AUEB)",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Athens",
    addressCountry: "GR",
  },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Portfolio />
    </>
  );
}
