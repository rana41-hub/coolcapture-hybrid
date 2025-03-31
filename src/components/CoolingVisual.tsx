
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Wind, CloudRain, Thermometer, AirVent } from 'lucide-react';

const CoolingVisual = () => {
  return (
    <Card className="card-highlight bg-gradient-to-br from-white to-blue-50 dark:from-eco-charcoal dark:to-eco-blue/20 border overflow-hidden">
      <CardHeader>
        <CardTitle className="text-lg flex items-center">
          <Thermometer className="h-5 w-5 mr-2 text-eco-blue" />
          Cooling System Status
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="relative h-[280px] w-full">
          {/* Background elements */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 w-64 h-64 rounded-full border-4 border-dashed border-eco-blue/20 animate-spin-slow"></div>
          <div className="absolute top-4 left-1/2 -translate-x-1/2 w-52 h-52 rounded-full border-4 border-dashed border-eco-blue/30 animate-spin-slow" style={{ animationDirection: 'reverse' }}></div>
          
          {/* Central cooling unit */}
          <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 bg-white dark:bg-slate-800 rounded-lg shadow-lg flex flex-col items-center justify-center z-10">
            <AirVent className="h-10 w-10 text-eco-blue animate-pulse-slow" />
            <span className="text-xs font-medium mt-2">Hybrid Cooling</span>
            <span className="text-xs text-eco-blue font-bold">Active</span>
          </div>
          
          {/* Cool air flow visualization */}
          <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-36 h-36 rounded-full">
            <div className="absolute w-full h-full rounded-full bg-eco-blue/10 animate-ripple"></div>
            <div className="absolute w-full h-full rounded-full bg-eco-blue/10 animate-ripple" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute w-full h-full rounded-full bg-eco-blue/10 animate-ripple" style={{ animationDelay: '1s' }}></div>
          </div>
          
          {/* Technology indicators */}
          <div className="absolute top-[30%] left-[20%] flex items-center bg-white dark:bg-slate-800 px-3 py-1 rounded-full shadow-md border border-eco-blue/30 animate-float">
            <Wind className="h-4 w-4 mr-1 text-eco-blue" />
            <span className="text-xs">Radiative</span>
          </div>
          
          <div className="absolute top-[60%] left-[20%] flex items-center bg-white dark:bg-slate-800 px-3 py-1 rounded-full shadow-md border border-eco-blue/30 animate-float" style={{ animationDelay: '0.5s' }}>
            <CloudRain className="h-4 w-4 mr-1 text-eco-blue" />
            <span className="text-xs">Evaporative</span>
          </div>
          
          <div className="absolute top-[45%] left-[75%] flex items-center bg-white dark:bg-slate-800 px-3 py-1 rounded-full shadow-md border border-eco-blue/30 animate-float" style={{ animationDelay: '1s' }}>
            <Thermometer className="h-4 w-4 mr-1 text-eco-blue" />
            <span className="text-xs">Thermoelectric</span>
          </div>
          
          {/* Temperature indicators */}
          <div className="absolute bottom-4 left-8 text-xs font-medium flex flex-col items-center">
            <span className="text-red-500">33°C</span>
            <span className="text-xs text-muted-foreground">Ambient</span>
          </div>
          
          <div className="absolute bottom-4 right-8 text-xs font-medium flex flex-col items-center">
            <span className="text-eco-blue">24°C</span>
            <span className="text-xs text-muted-foreground">Cooled</span>
          </div>
          
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-sm font-medium text-eco-blue">
            -9°C Temperature Reduction
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CoolingVisual;
