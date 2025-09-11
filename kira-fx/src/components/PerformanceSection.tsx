import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from "recharts";
import { TrendingUp, TrendingDown, Activity, Target } from "lucide-react";

const portfolioData = [
  { month: "Jan", portfolio: 10000, market: 10000 },
  { month: "Feb", portfolio: 12500, market: 10200 },
  { month: "Mar", portfolio: 11800, market: 9800 },
  { month: "Apr", portfolio: 15200, market: 11000 },
  { month: "May", portfolio: 14800, market: 10800 },
  { month: "Jun", portfolio: 18500, market: 12200 },
  { month: "Jul", portfolio: 17900, market: 11800 },
  { month: "Aug", portfolio: 21200, market: 13000 },
  { month: "Sep", portfolio: 22800, market: 12800 },
  { month: "Oct", portfolio: 25500, market: 14200 },
  { month: "Nov", portfolio: 27200, market: 14800 },
  { month: "Dec", portfolio: 31500, market: 15000 }
];

const assetAllocation = [
  { name: "Stocks", value: 60, color: "#8884d8" },
  { name: "Bonds", value: 25, color: "#82ca9d" },
  { name: "Forex", value: 10, color: "#ffc658" },
  { name: "Cash", value: 5, color: "#ff7300" }
];

const topPerformers = [
  { symbol: "AAPL", return: 45.2, invested: 25000 },
  { symbol: "TSLA", return: 38.7, invested: 18000 },
  { symbol: "MSFT", return: 32.1, invested: 22000 },
  { symbol: "NVDA", return: 28.9, invested: 15000 },
  { symbol: "EUR/USD", return: 15.3, invested: 8000 }
];

export function PerformanceSection() {
  return (
    <section id="performance" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-white">Performance Reports</h2>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto font-medium">
            Track record of consistent outperformance across different market conditions
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <Card className="glass border-0">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-200 font-medium">Total Return</p>
                  <p className="text-2xl font-bold text-green-400">+215%</p>
                </div>
                <TrendingUp className="h-8 w-8 text-green-400" />
              </div>
            </CardContent>
          </Card>

          <Card className="glass border-0">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-200 font-medium">Win Rate</p>
                  <p className="text-2xl font-bold text-cyan-400">78.5%</p>
                </div>
                <Target className="h-8 w-8 text-cyan-400" />
              </div>
            </CardContent>
          </Card>

          <Card className="glass border-0">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-200 font-medium">Max Drawdown</p>
                  <p className="text-2xl font-bold text-rose-400">-8.2%</p>
                </div>
                <TrendingDown className="h-8 w-8 text-rose-400" />
              </div>
            </CardContent>
          </Card>

          <Card className="glass border-0">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-200 font-medium">Sharpe Ratio</p>
                  <p className="text-2xl font-bold text-purple-400">2.45</p>
                </div>
                <Activity className="h-8 w-8 text-purple-400" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Portfolio Performance Chart */}
          <Card className="glass border-0">
            <CardHeader>
              <CardTitle className="text-white">Portfolio vs Market Performance</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={portfolioData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip formatter={(value: number) => [`$${value.toLocaleString()}`, ""]} />
                  <Line 
                    type="monotone" 
                    dataKey="portfolio" 
                    stroke="#8884d8" 
                    strokeWidth={3}
                    name="KiraFx Portfolio"
                  />
                  <Line 
                    type="monotone" 
                    dataKey="market" 
                    stroke="#82ca9d" 
                    strokeWidth={2}
                    strokeDasharray="5 5"
                    name="Market Index"
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Asset Allocation */}
          <Card className="glass border-0">
            <CardHeader>
              <CardTitle className="text-white">Asset Allocation</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={assetAllocation}
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, value }) => `${name} ${value}%`}
                  >
                    {assetAllocation.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Top Performers */}
        <Card className="glass border-0">
          <CardHeader>
            <CardTitle className="text-white">Top Performing Investments (YTD)</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={topPerformers}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="symbol" />
                <YAxis />
                <Tooltip 
                  formatter={(value: number, name: string) => {
                    if (name === "return") return [`${value}%`, "Return"];
                    return [`$${value.toLocaleString()}`, "Invested"];
                  }}
                />
                <Bar dataKey="return" fill="#8884d8" name="return" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Performance Note */}
        <div className="mt-12 text-center">
          <div className="bg-black/30 border border-white/20 rounded-xl p-6 max-w-3xl mx-auto">
            <p className="text-sm text-gray-200 font-medium">
              *Past performance is not indicative of future results. All investments carry risk of loss. 
              Performance data is based on actual client portfolios managed by KiraFx from January 2024 to December 2024.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}