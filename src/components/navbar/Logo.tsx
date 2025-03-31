
import React from 'react';
import { Leaf, Cloud } from 'lucide-react';

const Logo = () => {
  return (
    <div className="flex items-center space-x-2">
      <div className="relative">
        <Cloud className="h-8 w-8 text-eco-blue absolute opacity-70" />
        <Leaf className="h-8 w-8 text-eco-green relative left-1 top-1" />
      </div>
      <h1 className="text-xl font-bold tracking-tight">
        <span className="text-eco-green-light">Eco</span>
        <span className="text-eco-blue-light">Capture</span>
      </h1>
    </div>
  );
};

export default Logo;
