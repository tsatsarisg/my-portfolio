import { Button } from "@radix-ui/themes";
import { Sun, Moon, X, Menu } from "lucide-react";

export function Nav({
  isDarkMode = false,
  setIsMenuOpen,
  isMenuOpen,
  activeSection,
  toggleTheme,
}: {
  isDarkMode?: boolean;
  setIsMenuOpen: (value: boolean) => void;
  isMenuOpen: boolean;
  activeSection: string;
  toggleTheme: () => void;
}) {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };
  return (
    <nav
      className={`fixed top-0 left-0 right-0 backdrop-blur-sm border-b z-50 transition-colors duration-300 ${
        isDarkMode
          ? "bg-gray-900/90 border-gray-700"
          : "bg-white/90 border-gray-200"
      }`}
    >
      <div className="max-w-4xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div
            className={`font-bold text-xl transition-colors duration-300 ${
              isDarkMode ? "text-white" : "text-gray-900"
            }`}
          >
            George Tsatsaris
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {[
              { id: "home", label: "Home" },
              { id: "about", label: "About" },
              { id: "skills", label: "Skills" },
              { id: "projects", label: "Projects" },
              { id: "experience", label: "Experience" },
              { id: "books", label: "Books" },
              { id: "contact", label: "Contact" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                  activeSection === item.id
                    ? "text-blue-600"
                    : isDarkMode
                    ? "text-gray-300"
                    : "text-gray-600"
                }`}
              >
                {item.label}
              </button>
            ))}

            {/* Theme Toggle */}
            <Button
              variant="outline"
              size="2"
              onClick={toggleTheme}
              className={`transition-colors duration-300 ${
                isDarkMode
                  ? "border-gray-600 hover:bg-gray-800"
                  : "border-gray-300 hover:bg-gray-100"
              }`}
            >
              {isDarkMode ? (
                <Sun className="w-4 h-4" />
              ) : (
                <Moon className="w-4 h-4" />
              )}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <Button
              variant="outline"
              size="2"
              onClick={toggleTheme}
              className={`transition-colors duration-300 ${
                isDarkMode
                  ? "border-gray-600 hover:bg-gray-800"
                  : "border-gray-300 hover:bg-gray-100"
              }`}
            >
              {isDarkMode ? (
                <Sun className="w-4 h-4" />
              ) : (
                <Moon className="w-4 h-4" />
              )}
            </Button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={isDarkMode ? "text-white" : "text-gray-900"}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div
            className={`md:hidden mt-4 py-4 border-t transition-colors duration-300 ${
              isDarkMode ? "border-gray-700" : "border-gray-200"
            }`}
          >
            <div className="flex flex-col space-y-4">
              {[
                { id: "home", label: "Home" },
                { id: "about", label: "About" },
                { id: "skills", label: "Skills" },
                { id: "projects", label: "Projects" },
                { id: "experience", label: "Experience" },
                { id: "blog", label: "Blog" },
                { id: "books", label: "Books" },
                { id: "contact", label: "Contact" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-left text-sm font-medium transition-colors hover:text-blue-600 ${
                    activeSection === item.id
                      ? "text-blue-600"
                      : isDarkMode
                      ? "text-gray-300"
                      : "text-gray-600"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
