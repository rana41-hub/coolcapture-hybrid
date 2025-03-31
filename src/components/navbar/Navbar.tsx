
import React from 'react';
import Logo from './Logo';
import NavLinks from './NavLinks';
import StatusIndicator from './StatusIndicator';
import ActionButtons from './ActionButtons';

const Navbar = () => {
  return (
    <header className="w-full bg-eco-aqua-700/95 dark:bg-eco-charcoal/95 backdrop-blur-sm border-b border-eco-aqua-600/50 sticky top-0 z-50 text-white">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Logo />
        <NavLinks />
        <div className="flex items-center space-x-4">
          <StatusIndicator />
          <ActionButtons />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
