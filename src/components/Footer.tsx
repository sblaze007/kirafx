import { TrendingUp, Mail, Phone, MapPin } from "lucide-react";
import { Separator } from "./ui/separator";

export function Footer() {
  return (
    <footer className="glass border-t-0 text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-primary text-primary-foreground p-2 rounded-lg shadow-lg">
                <img
                  alt="logo"
                  src="icon2.jpg"
                  style={{
                    backgroundColor: "transparent",
                    width: "44px",
                    height: "44px",
                  }}
                />
              </div>
              <span className="text-xl font-semibold text-white">KiraFx</span>
            </div>
            <p className="text-primary-foreground/80 text-sm">
              Professional financial advisory services designed to maximize your
              investment potential and secure your financial future.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>satvik.jain.cse@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+91 8279944904</span>
              </div>
              {/* <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>123 Financial District, NY</span>
              </div> */}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>
                <a className="hover:text-primary-foreground transition-colors">
                  Stock Recommendation
                </a>
              </li>
              <li>
                <a className="hover:text-primary-foreground transition-colors">
                  Portfolio Management
                </a>
              </li>
              <li>
                <a className="hover:text-primary-foreground transition-colors">
                  Account Handling
                </a>
              </li>
              <li>
                <a className="hover:text-primary-foreground transition-colors">
                  Long Term Investing
                </a>
              </li>
              <li>
                <a className="hover:text-primary-foreground transition-colors">
                  Forex Trading
                </a>
              </li>
              <li>
                <a className="hover:text-primary-foreground transition-colors">
                  One-on-One Calls
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          {/* <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>
                <a
                  href="#"
                  className="hover:text-primary-foreground transition-colors"
                >
                  Market Analysis
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-primary-foreground transition-colors"
                >
                  Performance Reports
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-primary-foreground transition-colors"
                >
                  Investment Guides
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-primary-foreground transition-colors"
                >
                  Risk Assessment
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-primary-foreground transition-colors"
                >
                  Educational Content
                </a>
              </li>
            </ul>
          </div> */}

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>
                <a
                  href="#about"
                  className="hover:text-primary-foreground transition-colors"
                >
                  About Us
                </a>
              </li>
              {/* <li>
                <a className="hover:text-primary-foreground transition-colors">
                  Our Team
                </a>
              </li> */}
              {/* <li>
                <a className="hover:text-primary-foreground transition-colors">
                  Careers
                </a>
              </li> */}
              <li>
                <a
                  href="#contact"
                  className="hover:text-primary-foreground transition-colors"
                >
                  Contact
                </a>
              </li>
              {/* <li>
                <a className="hover:text-primary-foreground transition-colors">
                  Blog
                </a>
              </li> */}
            </ul>
          </div>
        </div>

        <Separator className="bg-primary-foreground/20 mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-primary-foreground/80">
            © 2024 KiraFx. All rights reserved.
          </div>

          <div className="flex space-x-6 text-sm text-primary-foreground/80">
            <a className="hover:text-primary-foreground transition-colors">
              Privacy Policy
            </a>
            <a className="hover:text-primary-foreground transition-colors">
              Terms of Service
            </a>
            <a className="hover:text-primary-foreground transition-colors">
              Risk Disclosure
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-primary-foreground/20">
          <p className="text-xs text-primary-foreground/60 text-center">
            <strong>Risk Warning:</strong> Trading in financial instruments
            involves high risks including the risk of losing some, or all, of
            your investment amount, and may not be suitable for all investors.
            Past performance does not constitute or guarantee future
            performance. KiraFx is a registered investment advisor. All
            investments are subject to risk.
          </p>
        </div>
      </div>
    </footer>
  );
}
