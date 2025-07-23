import { Button } from "@radix-ui/themes";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";

export function Hero({ isDarkMode = false }) {
  return (
    <section id="home" className="px-6 py-20 pt-32 max-w-4xl mx-auto">
      <div className="text-center space-y-6">
        <h1
          className={`text-5xl font-bold tracking-tight transition-colors duration-300 ${
            isDarkMode ? "text-white" : "text-gray-900"
          }`}
        >
          George Tsatsaris
        </h1>
        <p
          className={`text-xl max-w-2xl mx-auto transition-colors duration-300 ${
            isDarkMode ? "text-gray-300" : "text-gray-600"
          }`}
        >
          Full Stack Engineer
        </p>
        <div
          className={`flex items-center justify-center gap-2 transition-colors duration-300 ${
            isDarkMode ? "text-gray-400" : "text-gray-500"
          }`}
        >
          <MapPin className="w-4 h-4" />
          <span>Athens, GRE</span>
        </div>
        <div className="flex justify-center gap-4 pt-4">
          <a
            href="https://github.com/tsatsarisg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline">
              <Github className="w-4 h-4" />
            </Button>
          </a>
          <a
            href="https://www.linkedin.com/in/tsatsarisg/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline">
              <Linkedin className="w-4 h-4" />
            </Button>
          </a>
          <a
            href="mailto:tsatsarisgiorgos@gmail.com
"
          >
            <Button variant="outline">
              <Mail className="w-4 h-4" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
