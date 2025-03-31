
import React from 'react';
import { Button } from "@/components/ui/button";

const DashboardPreview = () => {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-crypto-blue/20 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-crypto-purple/20 rounded-full blur-3xl -z-10"></div>
      
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex flex-col space-y-6 max-w-xl">
            <h2 className="text-3xl md:text-4xl font-bold">
              Track Your <span className="bg-gradient-to-r from-crypto-purple to-crypto-blue text-transparent bg-clip-text">Bundle Performance</span>
            </h2>
            
            <p className="text-lg text-foreground/70">
              Monitor all your memecoin bundles in one place with our powerful dashboard. Track volume, price movements, and social metrics in real-time.
            </p>
            
            <ul className="space-y-3">
              {[
                "Real-time bundle performance tracking",
                "Volume pumping activity monitoring",
                "Social sentiment analysis",
                "Auto-rebalancing notifications",
                "Profit/loss calculations",
              ].map((feature, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <div className="h-5 w-5 rounded-full bg-crypto-purple flex items-center justify-center">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 3L4.5 8.5L2 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            
            <div>
              <Button className="crypto-button">
                Launch Dashboard
              </Button>
            </div>
          </div>
          
          <div className="flex-1 w-full md:w-auto">
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-crypto-purple to-crypto-blue rounded-xl blur-sm opacity-70"></div>
              <div className="crypto-card relative p-4 md:p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="font-bold text-xl">Bundle Dashboard</h3>
                  <div className="flex space-x-2">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="w-3 h-3 rounded-full bg-crypto-purple/80"></div>
                    ))}
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { label: "Total Value", value: "3.45 ETH", change: "+12.3%" },
                      { label: "24h Volume", value: "1.28 ETH", change: "+18.7%" },
                      { label: "Active Bundles", value: "6", change: "+2" },
                    ].map((stat, index) => (
                      <div key={index} className="bg-crypto-dark rounded-lg p-3">
                        <p className="text-xs text-foreground/70 mb-1">{stat.label}</p>
                        <p className="font-bold text-lg">{stat.value}</p>
                        <p className="text-xs text-crypto-green">{stat.change}</p>
                      </div>
                    ))}
                  </div>
                  
                  <div className="h-40 bg-crypto-dark rounded-lg flex items-center justify-center">
                    <div className="text-foreground/50">Chart Visualization</div>
                  </div>
                  
                  <div className="bg-crypto-dark rounded-lg p-4">
                    <div className="flex justify-between items-center mb-3">
                      <h4 className="font-medium">Top Performing Bundles</h4>
                      <span className="text-xs text-foreground/70">View All</span>
                    </div>
                    
                    <div className="space-y-2">
                      {[
                        { name: "Doge Pack", return: "+45.6%", volume: "0.87 ETH" },
                        { name: "Pepe Combo", return: "+32.1%", volume: "0.56 ETH" },
                        { name: "Moon Rockets", return: "+21.4%", volume: "0.32 ETH" },
                      ].map((bundle, index) => (
                        <div key={index} className="flex items-center justify-between py-1.5 border-b border-white/10 last:border-0">
                          <div className="flex items-center space-x-2">
                            <div className="w-6 h-6 rounded-full bg-gradient-to-r from-crypto-purple to-crypto-blue"></div>
                            <span className="text-sm">{bundle.name}</span>
                          </div>
                          <div className="flex items-center space-x-4">
                            <span className="text-sm text-crypto-green">{bundle.return}</span>
                            <span className="text-sm text-foreground/70">{bundle.volume}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardPreview;
