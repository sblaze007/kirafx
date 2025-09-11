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
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-gray-200 font-medium">Trusted by 500+ investors</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-white">
                Expert Financial 
                <span className="text-cyan-300 block">Advisory Services</span>
              </h1>
              
              <p className="text-lg text-gray-200 max-w-xl font-medium">
                Maximize your investment potential with KiraFx's comprehensive financial advisory services. 
                From stock recommendations to portfolio management, we deliver results that matter.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="flex items-center space-x-2">
                <span>Start Investing</span>
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg">
                View Performance
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              <div>
                <div className="text-2xl font-bold text-cyan-300">25%</div>
                <div className="text-sm text-gray-200 font-medium">Avg. Annual Return</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-cyan-300">500+</div>
                <div className="text-sm text-gray-200 font-medium">Active Clients</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-cyan-300">$50M+</div>
                <div className="text-sm text-gray-200 font-medium">Assets Managed</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1640197618317-dc379a226fbe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjBhZHZpc29yJTIwdHJhZGluZyUyMGNoYXJ0c3xlbnwxfHx8fDE3NTczMDkxMzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Financial charts and analysis"
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-primary/10" />
            </div>
            
            {/* Floating Stats Card */}
            <div className="absolute -bottom-6 -left-6 glass rounded-xl p-4 shadow-2xl">
              <div className="text-sm text-gray-200 font-medium">This Month</div>
              <div className="text-lg font-semibold text-emerald-300">+12.5% ROI</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}