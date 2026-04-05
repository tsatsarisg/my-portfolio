import { Button } from "@/components/ui/button";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { Mail, MapPin, ChevronDown } from "lucide-react";

export function Hero() {
  return (
    <section
      id="home"
      className="relative px-6 py-20 pt-32 min-h-[90vh] flex items-center justify-center"
    >
      {/* Subtle gradient background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto w-full">
        <div className="text-center space-y-6">
          <h1 className="text-[length:var(--font-size-display)] font-bold tracking-tight text-gray-900 dark:text-white">
            George Tsatsaris
          </h1>
          <div className="space-y-2">
            <p className="text-[length:var(--font-size-body-lg)] font-medium text-primary">
              Founding Software Engineer
            </p>
            <p className="text-lg max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
              Backend Architecture & API Development — Node.js, TypeScript, React
            </p>
          </div>
          <div className="flex items-center justify-center gap-2 text-gray-500 dark:text-gray-400">
            <MapPin className="w-4 h-4" />
            <span>Athens, GRE</span>
          </div>
          <div className="flex justify-center gap-4 pt-4">
            <a
              href="https://github.com/tsatsarisg"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
            >
              <Button variant="outline" size="icon">
                <GithubIcon className="w-4 h-4" />
              </Button>
            </a>
            <a
              href="https://www.linkedin.com/in/tsatsarisg/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
            >
              <Button variant="outline" size="icon">
                <LinkedinIcon className="w-4 h-4" />
              </Button>
            </a>
            <a href="mailto:tsatsarisgiorgos@gmail.com" aria-label="Send email">
              <Button variant="outline" size="icon">
                <Mail className="w-4 h-4" />
              </Button>
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-gray-400 dark:text-gray-500" />
        </div>
      </div>
    </section>
  );
}
