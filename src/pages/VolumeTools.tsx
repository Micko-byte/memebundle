
import React from 'react';
import Header from '@/components/Header';
import VolumeTools from '@/components/VolumeTools';
import Footer from '@/components/Footer';

const VolumeToolsPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-grow pt-24">
        <div className="container mx-auto px-4 md:px-6 py-8">
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-crypto-purple to-crypto-blue text-transparent bg-clip-text mb-6">
            Volume Pumping Tools
          </h1>
          <p className="text-lg text-foreground/80 mb-8">
            Use our specialized tools to increase trading volume and drive attention to your favorite memecoins.
          </p>
          
          <VolumeTools />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default VolumeToolsPage;
