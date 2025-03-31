
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-crypto-dark border-t border-crypto-purple/20 py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1 space-y-4">
            <div className="flex items-center space-x-2">
              <div className="relative">
                <div className="w-8 h-8 rounded-md bg-gradient-to-r from-crypto-purple to-crypto-blue flex items-center justify-center">
                  <span className="font-bold text-xl text-white">X</span>
                </div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-crypto-green rounded-full border-2 border-crypto-dark"></div>
              </div>
              <span className="font-bold text-xl bg-gradient-to-r from-crypto-purple to-crypto-blue text-transparent bg-clip-text">
                XYZ
              </span>
            </div>
            
            <p className="text-sm text-foreground/70">
              The ultimate platform for memecoin bundling and volume enhancement, designed for crypto enthusiasts.
            </p>
            
            <div className="flex space-x-4">
              {['twitter', 'discord', 'telegram', 'github'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-8 h-8 rounded-md bg-white/5 flex items-center justify-center hover:bg-crypto-purple/20 transition-colors"
                >
                  <span className="sr-only">{social}</span>
                  <div className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-medium text-sm">Products</h4>
            <ul className="space-y-2">
              {['Bundle Creator', 'Volume Tools', 'Dashboard', 'Analytics', 'API'].map((item) => (
                <li key={item}>
                  <Link to="/" className="text-sm text-foreground/70 hover:text-foreground transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-medium text-sm">Resources</h4>
            <ul className="space-y-2">
              {['Documentation', 'Guides', 'Tutorials', 'Blog', 'Support'].map((item) => (
                <li key={item}>
                  <Link to="/" className="text-sm text-foreground/70 hover:text-foreground transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-medium text-sm">Legal</h4>
            <ul className="space-y-2">
              {['Terms of Service', 'Privacy Policy', 'Disclaimer', 'Risk Disclosure'].map((item) => (
                <li key={item}>
                  <Link to="/" className="text-sm text-foreground/70 hover:text-foreground transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-foreground/50">
            © 2023 XYZ. All rights reserved.
          </p>
          
          <p className="text-sm text-foreground/50">
            Cryptocurrencies are volatile. Trade at your own risk.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
