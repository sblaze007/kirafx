import { Button } from "./ui/button";
import { ArrowRight, Star } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function HeroSection() {
  return (
    <section id="home" className="pt-24 pb-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-black/10 to-black/20" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-sm">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <span className="text-gray-200 font-medium">
                  Trusted by 65+ investors
                </span>
              </div>

              <h1 className="text-4xl lg:text-6xl font-bold text-white">
                Expert Financial
                <span className="text-cyan-300 block">Advisory Services</span>
              </h1>

              <p className="text-lg text-gray-200 max-w-xl font-medium">
                Maximize your investment potential with KiraFx's comprehensive
                financial advisory services. From stock recommendations to
                portfolio management, we deliver results that matter.
              </p>
            </div>

            <div
              className="flex flex-col sm:flex-row gap-4"
              style={{ cursor: "pointer" }}
            >
              <a
                href="#contact"
                style={{ cursor: "pointer" }}
                className="text-white hover:text-cyan-300 transition-colors font-medium"
              >
                <button
                  className="flex items-center space-x-2"
                  style={{
                    cursor: "pointer",
                    backgroundColor: "#DD28C7",
                    padding: "8px 16px",
                    borderRadius: "8px",
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: "14px",
                  }}
                >
                  <span>Start Investing</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </a>
              <a
                href="#performance"
                style={{ cursor: "pointer" }}
                className="text-white hover:text-cyan-300 transition-colors font-medium"
              >
                <button
                  className="
    flex items-center space-x-2
    cursor-pointer 
    px-4 py-2 rounded-lg w-full
    justify-center text-sm
    border border-white
    hover:bg-secondary
  "
                  style={{
                    cursor: "pointer",
                    width: "100%",
                  }}
                >
                  View Performance
                </button>
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              <div>
                <div className="text-2xl font-bold text-cyan-300">37%</div>
                <div className="text-sm text-gray-200 font-medium">
                  Avg. Annual Return
                </div>
              </div>
              <div>
                <div className="text-2xl font-bold text-cyan-300">65+</div>
                <div className="text-sm text-gray-200 font-medium">
                  Active Clients
                </div>
              </div>
              <div>
                <div className="text-2xl font-bold text-cyan-300">$107K+</div>
                <div className="text-sm text-gray-200 font-medium">
                  Assets Managed
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="/hero-image.jpg"
                alt="Financial charts and analysis"
              />
              <div className="absolute inset-0 bg-primary/10" />
            </div>

            {/* Floating Stats Card */}
            <div className="absolute -bottom-6 -left-6 glass rounded-xl p-4 shadow-2xl">
              <div className="text-sm text-gray-200 font-medium">
                This Month
              </div>
              <div className="text-lg font-semibold text-emerald-300">
                +12.5% ROI
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
