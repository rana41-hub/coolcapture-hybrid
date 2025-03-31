
import React from 'react';
import { Thermometer, Cloud } from 'lucide-react';

const StatusIndicator = () => {
  return (
    <div className="flex items-center bg-eco-aqua-600/50 rounded-full px-3 py-1 text-sm text-white">
      <Thermometer size={16} className="mr-1 text-eco-blue-light" />
      <span>24°C</span>
      <span className="mx-1">|</span>
      <Cloud size={16} className="mr-1 text-eco-green-light" />
      <span>420ppm</span>
    </div>
  );
};

export default StatusIndicator;
