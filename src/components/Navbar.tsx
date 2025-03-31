
import React from 'react';
import { Leaf, Cloud, Thermometer } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Navbar = () => {
  return (
    <header className="w-full bg-white/90 dark:bg-eco-charcoal/90 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="relative">
            <Cloud className="h-8 w-8 text-eco-blue absolute opacity-70" />
            <Leaf className="h-8 w-8 text-eco-green relative left-1 top-1" />
          </div>
          <h1 className="text-xl font-bold tracking-tight">
            <span className="text-eco-green">Eco</span>
            <span className="text-eco-blue">Capture</span>
          </h1>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink href="#dashboard" active>Dashboard</NavLink>
          <NavLink href="#monitoring">Monitoring</NavLink>
          <NavLink href="#controls">Controls</NavLink>
          <NavLink href="#analytics">Analytics</NavLink>
          <NavLink href="#about">About</NavLink>
        </nav>
        
        <div className="flex items-center space-x-4">
          <div className="flex items-center bg-muted rounded-full px-3 py-1 text-sm text-muted-foreground">
            <Thermometer size={16} className="mr-1 text-eco-blue" />
            <span>24°C</span>
            <span className="mx-1">|</span>
            <Cloud size={16} className="mr-1 text-eco-green" />
            <span>420ppm</span>
          </div>
          
          <Button variant="outline" size="sm" className="hidden md:flex">
            Connect Device
          </Button>
          
          <Button className="bg-gradient-to-r from-eco-green to-eco-blue text-white border-0 hidden md:flex">
            Start Capture
          </Button>
          
          <Button variant="outline" size="icon" className="md:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
          </Button>
        </div>
      </div>
    </header>
  );
};

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  active?: boolean;
}

const NavLink = ({ href, children, active }: NavLinkProps) => {
  return (
    <a 
      href={href} 
      className={cn(
        "text-sm font-medium hover:text-eco-green transition-colors relative",
        active ? "text-eco-green" : "text-foreground"
      )}
    >
      {children}
      {active && (
        <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-eco-green to-eco-blue rounded-full" />
      )}
    </a>
  );
};

export default Navbar;
