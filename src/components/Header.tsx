
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { useState } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-crypto-purple/20">
      <div className="container mx-auto flex items-center justify-between h-16 px-4 md:px-6">
        <Link to="/" className="flex items-center space-x-2">
          <div className="relative">
            <div className="w-8 h-8 rounded-md bg-gradient-to-r from-crypto-purple to-crypto-blue flex items-center justify-center animate-pulse">
              <span className="font-bold text-xl text-white">X</span>
            </div>
            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-crypto-green rounded-full border-2 border-background"></div>
          </div>
          <span className="font-bold text-xl bg-gradient-to-r from-crypto-purple to-crypto-blue text-transparent bg-clip-text">
            XYZ
          </span>
        </Link>
        
        {isMobile ? (
          <Button variant="ghost" size="icon" onClick={toggleMobileMenu}>
            <Menu className="h-6 w-6" />
          </Button>
        ) : (
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
              Home
            </Link>
            <Link to="/bundles" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
              Bundles
            </Link>
            <Link to="/volume-tools" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
              Volume Tools
            </Link>
            <Link to="/dashboard" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
              Dashboard
            </Link>
          </nav>
        )}
        
        <div className="hidden md:flex items-center space-x-4">
          <Button 
            variant="outline" 
            className="hidden md:flex border-crypto-purple/50 text-crypto-purple hover:bg-crypto-purple/10 hover:text-crypto-purple/90"
          >
            Connect Wallet
          </Button>
          <Button 
            className="bg-gradient-to-r from-crypto-purple to-crypto-blue hover:opacity-90"
          >
            Launch App
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobile && mobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-b border-crypto-purple/20">
          <nav className="container mx-auto py-4 px-4 flex flex-col space-y-4">
            <Link 
              to="/" 
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/bundles" 
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Bundles
            </Link>
            <Link 
              to="/volume-tools" 
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Volume Tools
            </Link>
            <Link 
              to="/dashboard" 
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Dashboard
            </Link>
            
            <div className="flex flex-col space-y-3 pt-2">
              <Button 
                variant="outline" 
                className="w-full border-crypto-purple/50 text-crypto-purple hover:bg-crypto-purple/10 hover:text-crypto-purple/90"
              >
                Connect Wallet
              </Button>
              <Button 
                className="w-full bg-gradient-to-r from-crypto-purple to-crypto-blue hover:opacity-90"
              >
                Launch App
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
