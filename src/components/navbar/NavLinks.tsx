
import React from 'react';
import { cn } from '@/lib/utils';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  active?: boolean;
}

export const NavLink = ({ href, children, active }: NavLinkProps) => {
  return (
    <a 
      href={href} 
      className={cn(
        "text-sm font-medium hover:text-eco-green-light transition-colors relative",
        active ? "text-eco-green-light" : "text-white"
      )}
    >
      {children}
      {active && (
        <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-eco-green-light to-eco-blue-light rounded-full" />
      )}
    </a>
  );
};

const NavLinks = () => {
  return (
    <nav className="hidden md:flex items-center space-x-8">
      <NavLink href="#dashboard" active>Dashboard</NavLink>
      <NavLink href="#monitoring">Monitoring</NavLink>
      <NavLink href="#controls">Controls</NavLink>
      <NavLink href="#analytics">Analytics</NavLink>
      <NavLink href="#about">About</NavLink>
    </nav>
  );
};

export default NavLinks;
