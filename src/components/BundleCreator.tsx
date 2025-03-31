
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const BundleCreator = () => {
  return (
    <section className="py-16 md:py-24 relative">
      <div className="absolute inset-0 grid-bg opacity-20 z-0"></div>
      <div className="container relative z-10">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Create Your <span className="bg-gradient-to-r from-crypto-purple to-crypto-blue text-transparent bg-clip-text">Memecoin Bundle</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl">
            Combine multiple memecoins into a single bundle for easier management and enhanced performance.
          </p>
        </div>

        <Card className="crypto-card overflow-hidden">
          <Tabs defaultValue="basic" className="w-full">
            <div className="border-b border-border/50">
              <div className="container px-4 py-2">
                <TabsList className="bg-crypto-dark grid w-full grid-cols-3 h-11">
                  <TabsTrigger value="basic">Basic Bundle</TabsTrigger>
                  <TabsTrigger value="advanced">Advanced Bundle</TabsTrigger>
                  <TabsTrigger value="pro">Pro Bundle</TabsTrigger>
                </TabsList>
              </div>
            </div>
            
            <CardContent className="p-6">
              <TabsContent value="basic" className="space-y-6 mt-0">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Bundle Name</label>
                        <input 
                          type="text" 
                          placeholder="My Awesome Bundle" 
                          className="w-full bg-background border border-crypto-purple/20 rounded-md py-2 px-3"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Investment Amount (ETH)</label>
                        <input 
                          type="text" 
                          placeholder="0.5" 
                          className="w-full bg-background border border-crypto-purple/20 rounded-md py-2 px-3"
                        />
                      </div>
                      
                      <div>
                        <label className="text-sm font-medium">Select Memecoins</label>
                        <div className="grid grid-cols-2 gap-2 mt-2">
                          {["DOGE", "SHIB", "PEPE", "FLOKI"].map((coin) => (
                            <div 
                              key={coin}
                              className="flex items-center space-x-2 border border-crypto-purple/20 rounded-md p-2 cursor-pointer hover:bg-crypto-purple/10"
                            >
                              <div className="w-6 h-6 rounded-full bg-gradient-to-r from-crypto-purple to-crypto-blue"></div>
                              <span className="text-sm font-medium">{coin}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col">
                    <h4 className="font-medium mb-4">Bundle Preview</h4>
                    <div className="flex-grow crypto-card p-4 flex flex-col">
                      <div className="flex-grow space-y-4">
                        <div className="h-40 rounded-md bg-crypto-dark flex items-center justify-center">
                          <p className="text-foreground/50 text-sm">Bundle visualization will appear here</p>
                        </div>
                        
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-sm text-foreground/70">Estimated APY</span>
                            <span className="font-medium text-crypto-green">+128%</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-foreground/70">Potential Return</span>
                            <span className="font-medium text-crypto-green">+0.64 ETH</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-foreground/70">Volume Impact</span>
                            <span className="font-medium text-crypto-blue">High</span>
                          </div>
                        </div>
                      </div>
                      
                      <Button className="w-full crypto-button mt-4">
                        Create Bundle
                      </Button>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="advanced" className="mt-0">
                <div className="flex items-center justify-center py-20">
                  <div className="text-center">
                    <h3 className="font-medium text-xl mb-2">Advanced Bundling</h3>
                    <p className="text-foreground/70 mb-4">
                      Create complex bundles with customizable allocations and auto-rebalancing.
                    </p>
                    <Button className="crypto-button">
                      Upgrade to Advanced
                    </Button>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="pro" className="mt-0">
                <div className="flex items-center justify-center py-20">
                  <div className="text-center">
                    <h3 className="font-medium text-xl mb-2">Pro Bundling</h3>
                    <p className="text-foreground/70 mb-4">
                      Access institutional-grade bundling with AI-powered allocation and volume boosting.
                    </p>
                    <Button className="crypto-button">
                      Upgrade to Pro
                    </Button>
                  </div>
                </div>
              </TabsContent>
            </CardContent>
          </Tabs>
        </Card>
      </div>
    </section>
  );
};

export default BundleCreator;
