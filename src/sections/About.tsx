import { Card, CardContent } from "@/components/ui/card";

export function About() {
  return (
    <section
      id="about"
      className="px-6 py-16 bg-gray-50 dark:bg-gray-800"
    >
      <div className="container mx-auto">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg mb-6 text-gray-600 dark:text-gray-300">
                I hold a B.Sc. in Informatics from AUEB and work as a full-stack
                engineer. Combining professional experience with a solid
                academic foundation, I apply clean code principles,
                Domain-Driven Design (DDD), Ports and Adapters architecture, and
                rigorous testing practices to deliver high-quality, scalable,
                and maintainable solutions.
              </p>
            </div>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Quick Facts</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>Informatics Degree</li>
                  <li>4 Years Experience</li>
                  <li>Based in Athens, GRE</li>
                  <li>200+ MRS Delivered</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
