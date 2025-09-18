import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Award, Users, TrendingUp, Shield } from "lucide-react";

const achievements = [
  {
    icon: Award,
    title: "Industry Recognition",
    description: "NISM and NCFM certified professionals",
  },
  {
    icon: Users,
    title: "Client Satisfaction",
    description: "98% client retention rate",
  },
  {
    icon: TrendingUp,
    title: "Consistent Performance",
    description: "Outperformed market for 5 consecutive months",
  },
  {
    icon: Shield,
    title: "Regulatory Compliance",
    description: "NSE Registered and regulated",
  },
];

const team = [
  {
    name: "Satvik Jain",
    role: "Chief Executive Officer",
    experience: "4+ years",
    specialization: "Intraday & Forex Trading",
  },
  {
    name: "Neeraj Jain",
    role: "Equity Research Analyst",
    experience: "4+ years",
    specialization: "Swing Trading & Investment",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/5 to-transparent" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-white">
            Why Choose KiraFx?
          </h2>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto font-medium">
            Through our discretionary and quantitative proprietary trading and
            investing strategies, models and methods, we aim to provide our
            users with powerful research and insights assisting them in their
            wealth creation journey.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-white">
                Expert Financial Guidance Since 2021
              </h3>
              <p className="text-gray-200 mb-6 font-medium">
                KiraFx was founded with a simple mission: to democratize access
                to professional-grade financial advisory services. Our team of
                seasoned professionals combines decades of market experience
                with cutting-edge technology to deliver superior investment
                outcomes.
              </p>
              <p className="text-gray-200 font-medium">
                We believe that every investor deserves access to
                institutional-quality research, portfolio management, and
                personalized advice. That's why we've built a comprehensive
                platform that serves both individual investors and institutions
                alike.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="bg-cyan-500/20 text-cyan-300 p-2 rounded-lg border border-cyan-400/30">
                    <achievement.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-sm text-white">
                      {achievement.title}
                    </h4>
                    <p className="text-xs text-gray-200">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <ImageWithFallback
                src="icon2.jpg"
                alt="KiraFx team in office"
                style={{ width: "100%", height: "500px" }}
              />
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold mb-4 text-white">
              Meet Our Expert Team
            </h3>
            <p className="text-lg text-gray-200 max-w-2xl mx-auto font-medium">
              We are a group of super humans who have the vision to simplify
              stock trading and investing for everyone. We are your forever
              wealth partners.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 margin">
            {team.map((member, index) => (
              <Card key={index} className="glass border-0 text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-cyan-500/20 rounded-full mx-auto mb-4 flex items-center justify-center border border-cyan-400/30">
                    <span className="text-cyan-300 font-semibold text-lg">
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <h4 className="font-semibold mb-1 text-white">
                    {member.name}
                  </h4>
                  <p className="text-sm text-gray-200 mb-2">{member.role}</p>
                  <div className="flex justify-center space-x-2 mb-3">
                    <Badge
                      variant="secondary"
                      className="text-xs bg-white/10 text-white border-white/20"
                    >
                      {member.experience}
                    </Badge>
                    <Badge
                      variant="outline"
                      className="text-xs border-cyan-400/50 text-cyan-300"
                    >
                      {member.specialization}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="text-center">
          <h3 className="text-xl font-bold mb-6 text-white">
            Regulatory Compliance & Certifications
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            <Badge
              variant="outline"
              className="px-4 py-2 border-white/30 text-white"
            >
              NSE Registered
            </Badge>
            <Badge
              variant="outline"
              className="px-4 py-2 border-white/30 text-white"
            >
              NISM Certified
            </Badge>
            <Badge
              variant="outline"
              className="px-4 py-2 border-white/30 text-white"
            >
              NCFM Certified
            </Badge>
            <Badge
              variant="outline"
              className="px-4 py-2 border-white/30 text-white"
            >
              CFA Institute
            </Badge>
            <Badge
              variant="outline"
              className="px-4 py-2 border-white/30 text-white"
            >
              CFX Certified
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
}
