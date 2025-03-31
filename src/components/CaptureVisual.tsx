
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Cloud, Recycle, Wind, Leaf } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

const CaptureVisual = () => {
  return (
    <Card className="card-highlight bg-gradient-to-br from-white to-green-50 dark:from-eco-charcoal dark:to-eco-green/20 border overflow-hidden">
      <CardHeader>
        <CardTitle className="text-lg flex items-center">
          <Cloud className="h-5 w-5 mr-2 text-eco-green" />
          CO₂ Capture Status
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="relative h-[280px] w-full">
          {/* Background elements */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 w-64 h-64 rounded-full border-4 border-dashed border-eco-green/20 animate-spin-slow"></div>
          <div className="absolute top-4 left-1/2 -translate-x-1/2 w-52 h-52 rounded-full border-4 border-dashed border-eco-green/30 animate-spin-slow" style={{ animationDirection: 'reverse' }}></div>
          
          {/* Central capture unit */}
          <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 bg-white dark:bg-slate-800 rounded-lg shadow-lg flex flex-col items-center justify-center z-10">
            <Cloud className="h-10 w-10 text-eco-green animate-pulse-slow" />
            <span className="text-xs font-medium mt-2">CO₂ Capture</span>
            <span className="text-xs text-eco-green font-bold">Active</span>
          </div>
          
          {/* CO2 capture visualization */}
          <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-36 h-36 rounded-full">
            <div className="absolute w-full h-full rounded-full bg-eco-green/10 animate-ripple"></div>
            <div className="absolute w-full h-full rounded-full bg-eco-green/10 animate-ripple" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute w-full h-full rounded-full bg-eco-green/10 animate-ripple" style={{ animationDelay: '1s' }}></div>
          </div>
          
          {/* Process indicators */}
          <div className="absolute top-[30%] left-[20%] flex items-center bg-white dark:bg-slate-800 px-3 py-1 rounded-full shadow-md border border-eco-green/30 animate-float">
            <Wind className="h-4 w-4 mr-1 text-eco-green" />
            <span className="text-xs">Air Filtration</span>
          </div>
          
          <div className="absolute top-[60%] left-[20%] flex items-center bg-white dark:bg-slate-800 px-3 py-1 rounded-full shadow-md border border-eco-green/30 animate-float" style={{ animationDelay: '0.5s' }}>
            <Cloud className="h-4 w-4 mr-1 text-eco-green" />
            <span className="text-xs">CO₂ Extraction</span>
          </div>
          
          <div className="absolute top-[45%] left-[75%] flex items-center bg-white dark:bg-slate-800 px-3 py-1 rounded-full shadow-md border border-eco-green/30 animate-float" style={{ animationDelay: '1s' }}>
            <Recycle className="h-4 w-4 mr-1 text-eco-green" />
            <span className="text-xs">Conversion</span>
          </div>
          
          {/* CO2 levels */}
          <div className="absolute bottom-12 left-0 right-0 flex flex-col px-6">
            <div className="flex justify-between items-center mb-1">
              <span className="text-xs text-muted-foreground">Ambient CO₂</span>
              <span className="text-xs font-medium">415 ppm</span>
            </div>
            <Progress value={42} className="h-2 bg-eco-green/20" />
          </div>
          
          <div className="absolute bottom-4 left-0 right-0 flex flex-col px-6">
            <div className="flex justify-between items-center mb-1">
              <span className="text-xs text-muted-foreground">Captured CO₂</span>
              <span className="text-xs font-medium">2.4 kg today</span>
            </div>
            <Progress value={60} className="h-2" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CaptureVisual;
