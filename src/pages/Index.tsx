
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import BundleCreator from '@/components/BundleCreator';
import VolumeTools from '@/components/VolumeTools';
import DashboardPreview from '@/components/DashboardPreview';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-grow">
        <Hero />
        <BundleCreator />
        <VolumeTools />
        <DashboardPreview />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
