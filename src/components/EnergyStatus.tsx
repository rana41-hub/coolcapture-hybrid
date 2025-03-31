
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Sun, Wind, Battery, Lightbulb } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

const EnergyStatus = () => {
  return (
    <Card className="card-highlight">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg flex items-center">
          <Battery className="h-5 w-5 mr-2 text-eco-teal" />
          Energy Status
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {/* Current Power Source */}
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center mr-3">
                <Sun className="h-5 w-5 text-yellow-500" />
              </div>
              <div>
                <div className="text-sm font-medium">Solar Power</div>
                <div className="text-xs text-muted-foreground">Primary Source</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm font-medium">1.4 kW</div>
              <div className="text-xs text-green-500">+0.2 kW</div>
            </div>
          </div>
          
          <div className="h-px bg-border" />
          
          {/* Secondary Power Source */}
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mr-3">
                <Wind className="h-5 w-5 text-blue-500" />
              </div>
              <div>
                <div className="text-sm font-medium">Wind Power</div>
                <div className="text-xs text-muted-foreground">Secondary Source</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm font-medium">0.6 kW</div>
              <div className="text-xs text-red-500">-0.1 kW</div>
            </div>
          </div>
          
          <div className="h-px bg-border" />
          
          {/* Battery Status */}
          <div>
            <div className="flex justify-between items-center mb-1">
              <span className="text-sm">Battery Storage</span>
              <span className="text-sm font-medium">78%</span>
            </div>
            <Progress value={78} className="h-2" />
            <div className="flex justify-between mt-1">
              <span className="text-xs text-muted-foreground">12.5 kWh remaining</span>
              <span className="text-xs text-muted-foreground">~16 hours</span>
            </div>
          </div>
          
          <div className="h-px bg-border" />
          
          {/* Power Consumption */}
          <div>
            <div className="flex justify-between items-center mb-1">
              <div className="flex items-center">
                <Lightbulb className="h-4 w-4 mr-1 text-eco-teal" />
                <span className="text-sm">Current Consumption</span>
              </div>
              <span className="text-sm font-medium">0.8 kW</span>
            </div>
            <Progress value={40} className="h-2" />
            <div className="flex justify-between mt-1">
              <span className="text-xs text-muted-foreground">System Efficiency</span>
              <span className="text-xs text-green-500 font-medium">94%</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default EnergyStatus;
