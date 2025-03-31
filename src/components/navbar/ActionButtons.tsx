
import React from 'react';
import { Button } from '@/components/ui/button';

const ActionButtons = () => {
  return (
    <>
      <Button 
        variant="outline" 
        size="sm" 
        className="hidden md:flex border-eco-aqua-900 bg-eco-charcoal/50 text-white hover:bg-eco-aqua-800/70"
      >
        Connect Device
      </Button>
      
      <Button className="bg-gradient-to-r from-eco-green to-eco-blue text-white border-0 hidden md:flex hover:from-eco-green-light hover:to-eco-blue-light">
        Start Capture
      </Button>
      
      <Button variant="outline" size="icon" className="md:hidden border-eco-aqua-300 text-white hover:bg-eco-aqua-600/50">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
      </Button>
    </>
  );
};

export default ActionButtons;
