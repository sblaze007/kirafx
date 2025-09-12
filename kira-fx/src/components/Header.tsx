import { Button } from "./ui/button";
import { Menu, X, TrendingUp } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header
      className="fixed top-0 left-0 right-0 glass backdrop-blur-md border-b border-border z-50"
      style={{
        background:
          "linear-gradient(105deg, #009ffd 0%, #7b2ff7 40%, #ff0080 70%, #ff6a00 100%",
      }}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="/"
            className="text-white hover:text-cyan-300 transition-colors font-medium"
          >
            <div
              className="flex items-center space-x-2"
              style={{ cursor: "pointer" }}
            >
              <div className="bg-primary text-primary-foreground p-2 rounded-lg shadow-lg">
                <img
                  alt="logo"
                  src="/icon2.jpg"
                  style={{
                    backgroundColor: "transparent",
                    width: "44px",
                    height: "44px",
                  }}
                />
              </div>
              <span className="text-xl font-semibold text-white">KiraFx</span>
            </div>
          </a>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-white hover:text-cyan-300 transition-colors font-medium"
            >
              Home
            </a>
            <a
              href="#services"
              className="text-white hover:text-cyan-300 transition-colors font-medium"
            >
              Services
            </a>
            <a
              href="#performance"
              className="text-white hover:text-cyan-300 transition-colors font-medium"
            >
              Performance
            </a>
            <a
              href="#about"
              className="text-white hover:text-cyan-300 transition-colors font-medium"
            >
              About
            </a>
            <a
              href="#contact"
              className="text-white hover:text-cyan-300 transition-colors font-medium"
            >
              Contact
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button>Get Started</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              <a
                href="#home"
                className="text-white hover:text-cyan-300 transition-colors font-medium"
              >
                Home
              </a>
              <a
                href="#services"
                className="text-white hover:text-cyan-300 transition-colors font-medium"
              >
                Services
              </a>
              <a
                href="#performance"
                className="text-white hover:text-cyan-300 transition-colors font-medium"
              >
                Performance
              </a>
              <a
                href="#about"
                className="text-white hover:text-cyan-300 transition-colors font-medium"
              >
                About
              </a>
              <a
                href="#contact"
                className="text-white hover:text-cyan-300 transition-colors font-medium"
              >
                Contact
              </a>
              <Button className="w-full mt-4">Get Started</Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
