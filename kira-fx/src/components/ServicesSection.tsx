import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { TrendingUp, Briefcase, Shield, DollarSign, Phone, ArrowRight } from "lucide-react";

const services = [
  {
    icon: TrendingUp,
    title: "Stock Recommendation",
    description: "Data-driven stock picks based on comprehensive market analysis and technical indicators.",
    features: ["Technical Analysis", "Market Research", "Risk Assessment", "Entry/Exit Signals"],
    price: "Starting at $99/month"
  },
  {
    icon: Briefcase,
    title: "Portfolio Management",
    description: "Professional portfolio optimization and management to maximize your investment returns.",
    features: ["Asset Allocation", "Risk Management", "Rebalancing", "Performance Tracking"],
    price: "Starting at $299/month"
  },
  {
    icon: Shield,
    title: "Account Handling",
    description: "Complete account management services with dedicated support and monitoring.",
    features: ["Account Setup", "Trade Execution", "Documentation", "Compliance"],
    price: "Starting at $199/month"
  },
  {
    icon: DollarSign,
    title: "Forex Trading",
    description: "Expert forex trading strategies and signals for currency market opportunities.",
    features: ["Currency Analysis", "Trading Signals", "Risk Management", "Market Updates"],
    price: "Starting at $149/month"
  },
  {
    icon: Phone,
    title: "One-on-One Calls",
    description: "Personalized consultation sessions with our expert financial advisors.",
    features: ["Strategy Discussion", "Market Insights", "Q&A Sessions", "Custom Advice"],
    price: "$150/hour"
  }
];

export function ServicesSection() {
  return (
    <section id="services" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/5 to-transparent" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-white">Our Services</h2>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto font-medium">
            Comprehensive financial advisory services designed to help you achieve your investment goals
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="glass relative group hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:scale-105 border-0">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-cyan-500/20 text-cyan-300 p-3 rounded-lg border border-cyan-400/30">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <div className="text-sm font-medium text-cyan-300">{service.price}</div>
                </div>
                <CardTitle className="text-xl text-white">{service.title}</CardTitle>
                <CardDescription className="text-gray-200 font-medium">{service.description}</CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-200 font-medium">
                      <div className="w-1.5 h-1.5 bg-cyan-300 rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button className="w-full group-hover:bg-primary/90 transition-colors">
                  <span>Learn More</span>
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="glass rounded-2xl p-8 max-w-2xl mx-auto border-0">
            <h3 className="text-2xl font-bold mb-4 text-white">Ready to Get Started?</h3>
            <p className="text-gray-200 mb-6 font-medium">
              Schedule a free consultation to discuss your investment goals and find the right service for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">Schedule Consultation</Button>
              <Button variant="outline" size="lg">Compare Services</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}