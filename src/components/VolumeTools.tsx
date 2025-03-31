
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const VolumeTools = () => {
  const tools = [
    {
      name: "Auto Volume Booster",
      description: "Automated trading system that incrementally increases volume without affecting price too much.",
      icon: "⚡",
      popular: true,
    },
    {
      name: "Whale Simulator",
      description: "Create the appearance of whale activity through strategic trading patterns.",
      icon: "🐳",
      popular: false,
    },
    {
      name: "Social Amplifier",
      description: "Coordinate social media mentions timed with volume increases for maximum effect.",
      icon: "📣",
      popular: false,
    },
    {
      name: "Market Maker Pro",
      description: "Professional market making strategy to improve liquidity and trading volume.",
      icon: "📊",
      popular: true,
    },
    {
      name: "Viral Spread",
      description: "Create organic viral growth patterns by simulating community trading activity.",
      icon: "🔄",
      popular: false,
    },
    {
      name: "Hype Machine",
      description: "Coordinate news, social media, and trading activity for maximum FOMO.",
      icon: "🚀",
      popular: true,
    },
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Volume <span className="bg-gradient-to-r from-crypto-purple to-crypto-blue text-transparent bg-clip-text">Pumping Tools</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl">
            Use our specialized tools to increase trading volume and drive attention to your favorite memecoins.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool, index) => (
            <Card key={index} className="crypto-card relative overflow-hidden group">
              {tool.popular && (
                <div className="absolute top-0 right-0">
                  <div className="bg-crypto-purple text-xs font-bold text-white px-3 py-1 rounded-bl-md">
                    POPULAR
                  </div>
                </div>
              )}
              
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <div className="h-12 w-12 flex items-center justify-center text-2xl bg-crypto-dark rounded-md mb-3">
                    {tool.icon}
                  </div>
                </div>
                <CardTitle className="text-xl">{tool.name}</CardTitle>
                <CardDescription className="text-foreground/70">{tool.description}</CardDescription>
              </CardHeader>
              
              <CardContent>
                <Button 
                  className="w-full bg-crypto-dark hover:bg-crypto-dark/80 group-hover:bg-gradient-to-r group-hover:from-crypto-purple group-hover:to-crypto-blue transition-all duration-300"
                >
                  Access Tool
                </Button>
              </CardContent>
              
              <div className="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full bg-gradient-to-r from-crypto-purple to-crypto-blue transition-all duration-500"></div>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button className="crypto-button">
            Explore All Tools
          </Button>
        </div>
      </div>
    </section>
  );
};

export default VolumeTools;
