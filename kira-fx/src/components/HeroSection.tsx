import { ArrowForwardOutlined, StarOutlined } from "@mui/icons-material";
import KiraButton from "../atoms/KiraButton";
import KiraText from "../atoms/KiraText";
import { Grid } from "@mui/material";
import { fontStyle } from "../utils/AppFonts";

export function HeroSection() {
  return (
    <section id="home" className="pt-24 pb-16 relative overflow-hidden">
      <Grid sx={{ display: "flex", justifyContent: "space-around" }}>
        <Grid>
          <Grid sx={{ display: "flex", gap: 1 }}>
            <div>
              {[...Array(5)].map((_, i) => (
                <StarOutlined
                  key={i}
                  sx={{ color: "#facc15", height: 18, width: 18 }}
                />
              ))}
            </div>
            <KiraText
              text="Trusted by 500+ investors"
              color="white"
              size={14}
              weight={fontStyle.bold}
            />
          </Grid>
        </Grid>
        <Grid>
          <Grid sx={{ height: 500, width: 728, borderRadius: "10px" }}>
            <img
              src="https://images.unsplash.com/photo-1640197618317-dc379a226fbe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjBhZHZpc29yJTIwdHJhZGluZyUyMGNoYXJ0c3xlbnwxfHx8fDE3NTczMDkxMzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Financial charts and analysis"
              style={{
                height: "100%",
                width: "100%",
                objectFit: "cover",
                borderRadius: 10,
              }}
            />
          </Grid>
        </Grid>
      </Grid>
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-black/10 to-black/20" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-sm"></div>

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

            <div className="flex flex-col sm:flex-row gap-4">
              <KiraButton
                text="Start Investing"
                size={14}
                endIcon={<ArrowForwardOutlined />}
              />
              <KiraButton
                size={14}
                text="View Performance"
                variant="outlined"
              />
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              <div>
                <div className="text-2xl font-bold text-cyan-300">25%</div>
                <div className="text-sm text-gray-200 font-medium">
                  Avg. Annual Return
                </div>
              </div>
              <div>
                <div className="text-2xl font-bold text-cyan-300">500+</div>
                <div className="text-sm text-gray-200 font-medium">
                  Active Clients
                </div>
              </div>
              <div>
                <div className="text-2xl font-bold text-cyan-300">$50M+</div>
                <div className="text-sm text-gray-200 font-medium">
                  Assets Managed
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
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
