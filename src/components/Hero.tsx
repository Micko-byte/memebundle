
import React from 'react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 grid-bg opacity-20 z-0"></div>
      <div className="absolute top-20 left-1/4 w-72 h-72 bg-crypto-purple/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-crypto-blue/20 rounded-full blur-3xl"></div>
      
      <div className="container relative z-10">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto space-y-6">
          <div className="inline-block bg-crypto-purple/10 backdrop-blur-sm px-4 py-1.5 rounded-full">
            <p className="text-sm font-medium text-crypto-purple">
              The Future of Memecoin Bundling
            </p>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold">
            Bundle & Pump <span className="bg-gradient-to-r from-crypto-purple to-crypto-blue text-transparent bg-clip-text">Memecoins</span> Like Never Before
          </h1>
          
          <p className="text-lg md:text-xl text-foreground/70 max-w-2xl">
            XYZ provides powerful tools to create custom memecoin bundles and drive massive volume.
            Maximize your gains with our advanced pumping strategies.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
            <Button className="crypto-button w-full sm:w-auto text-base">
              Create Your Bundle
            </Button>
            <Button variant="outline" className="w-full sm:w-auto text-base border-crypto-purple/50 text-crypto-purple hover:bg-crypto-purple/10">
              Explore Tools
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full pt-12">
            {[
              { value: "$24.5M+", label: "Total Volume" },
              { value: "14,280+", label: "Bundles Created" },
              { value: "86+", label: "Memecoins" },
              { value: "8,700+", label: "Active Users" },
            ].map((stat, index) => (
              <div key={index} className="flex flex-col items-center space-y-1">
                <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-crypto-purple to-crypto-blue text-transparent bg-clip-text">
                  {stat.value}
                </h3>
                <p className="text-sm text-foreground/70">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
