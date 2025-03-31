import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { AirVent, Cloud, Sun, Wind, Thermometer, Leaf, Battery } from 'lucide-react';

const ControlPanel = () => {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">System Controls</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="cooling">
          <TabsList className="grid grid-cols-3 mb-4">
            <TabsTrigger value="cooling" className="flex items-center">
              <AirVent className="h-4 w-4 mr-2" />
              <span>Cooling</span>
            </TabsTrigger>
            <TabsTrigger value="capture" className="flex items-center">
              <Cloud className="h-4 w-4 mr-2" />
              <span>Capture</span>
            </TabsTrigger>
            <TabsTrigger value="energy" className="flex items-center">
              <Sun className="h-4 w-4 mr-2" />
              <span>Energy</span>
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="cooling" className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <AirVent className="h-5 w-5 mr-2 text-eco-blue" />
                <span className="font-medium">Cooling System</span>
              </div>
              <Switch checked={true} />
            </div>
            
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm flex items-center">
                    <Thermometer className="h-4 w-4 mr-1 text-eco-blue" />
                    Target Temperature
                  </label>
                  <span className="text-sm font-medium">24°C</span>
                </div>
                <Slider defaultValue={[24]} min={16} max={30} step={0.5} />
                <div className="flex justify-between mt-1 text-xs text-muted-foreground">
                  <span>16°C</span>
                  <span>30°C</span>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm flex items-center">
                    <Wind className="h-4 w-4 mr-1 text-eco-blue" />
                    Fan Speed
                  </label>
                  <span className="text-sm font-medium">Auto</span>
                </div>
                <Slider defaultValue={[75]} min={0} max={100} step={1} />
                <div className="flex justify-between mt-1 text-xs text-muted-foreground">
                  <span>Low</span>
                  <span>High</span>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-2 mt-2">
              <Button variant="outline" size="sm" className="text-xs h-8">
                Eco Mode
              </Button>
              <Button variant="outline" size="sm" className="text-xs h-8 bg-muted">
                Turbo Cool
              </Button>
            </div>
          </TabsContent>
          
          <TabsContent value="capture" className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Cloud className="h-5 w-5 mr-2 text-eco-green" />
                <span className="font-medium">CO₂ Capture</span>
              </div>
              <Switch checked={true} />
            </div>
            
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm flex items-center">
                    <Leaf className="h-4 w-4 mr-1 text-eco-green" />
                    Capture Intensity
                  </label>
                  <span className="text-sm font-medium">Optimal</span>
                </div>
                <Slider defaultValue={[60]} min={0} max={100} step={1} />
                <div className="flex justify-between mt-1 text-xs text-muted-foreground">
                  <span>Low</span>
                  <span>High</span>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm flex items-center">
                    <Wind className="h-4 w-4 mr-1 text-eco-green" />
                    Air Flow Rate
                  </label>
                  <span className="text-sm font-medium">Medium</span>
                </div>
                <Slider defaultValue={[50]} min={0} max={100} step={1} />
                <div className="flex justify-between mt-1 text-xs text-muted-foreground">
                  <span>Min</span>
                  <span>Max</span>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-2 mt-2">
              <Button variant="outline" size="sm" className="text-xs h-8 bg-muted">
                Night Mode
              </Button>
              <Button variant="outline" size="sm" className="text-xs h-8">
                Max Capture
              </Button>
            </div>
          </TabsContent>
          
          <TabsContent value="energy" className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Sun className="h-5 w-5 mr-2 text-yellow-500" />
                <span className="font-medium">Solar Priority</span>
              </div>
              <Switch checked={true} />
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Wind className="h-5 w-5 mr-2 text-blue-500" />
                <span className="font-medium">Wind Power</span>
              </div>
              <Switch checked={true} />
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Battery className="h-5 w-5 mr-2 text-eco-teal" />
                <span className="font-medium">Battery Backup</span>
              </div>
              <Switch checked={true} />
            </div>
            
            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm">Power Consumption Limit</label>
                <span className="text-sm font-medium">1.5 kW</span>
              </div>
              <Slider defaultValue={[75]} min={0} max={100} step={1} />
              <div className="flex justify-between mt-1 text-xs text-muted-foreground">
                <span>0.5 kW</span>
                <span>2.0 kW</span>
              </div>
            </div>
            
            <Button className="w-full mt-2 bg-gradient-to-r from-eco-green to-eco-blue text-white">
              Optimize Energy Usage
            </Button>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default ControlPanel;
