
import React from 'react';
import Navbar from '@/components/Navbar';
import StatsCard from '@/components/StatsCard';
import CoolingVisual from '@/components/CoolingVisual';
import CaptureVisual from '@/components/CaptureVisual';
import EnergyStatus from '@/components/EnergyStatus';
import ControlPanel from '@/components/ControlPanel';
import { Cloud, Thermometer, Leaf, Recycle, Wind, Sun } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-eco-gray dark:bg-slate-900">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 py-6">
        <div className="mb-6">
          <h1 className="text-3xl font-bold tracking-tight">
            Hybrid Cooling & CO₂ Capture Dashboard
          </h1>
          <p className="text-muted-foreground mt-1">
            Monitor and control your sustainable climate solution
          </p>
        </div>
        
        {/* Stats Overview */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <StatsCard 
            title="Current Temperature" 
            value="24°C" 
            description="Indoor cooled temperature"
            icon={<Thermometer className="h-4 w-4" />}
            trend="down"
            trendValue="-9°C from ambient"
          />
          
          <StatsCard 
            title="CO₂ Concentration" 
            value="385 ppm" 
            description="Indoor air quality"
            icon={<Cloud className="h-4 w-4" />}
            trend="down"
            trendValue="-35 ppm from ambient"
          />
          
          <StatsCard 
            title="CO₂ Captured Today" 
            value="2.4 kg" 
            description="Carbon sequestered"
            icon={<Leaf className="h-4 w-4" />}
            trend="up"
            trendValue="+0.3 kg from yesterday"
          />
          
          <StatsCard 
            title="Energy Production" 
            value="2.0 kW" 
            description="Current renewable output"
            icon={<Sun className="h-4 w-4" />}
            trend="up"
            trendValue="+0.5 kW from 1h ago"
          />
        </div>
        
        {/* Main Visuals */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <CoolingVisual />
          <CaptureVisual />
        </div>
        
        {/* Controls and Energy Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <ControlPanel />
          <EnergyStatus />
        </div>
        
        {/* Environmental Impact */}
        <Card className="mb-6 card-highlight">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Recycle className="h-5 w-5 mr-2 text-eco-green" />
              Environmental Impact
            </CardTitle>
            <CardDescription>
              Your contribution to climate action
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-sm border border-border">
                <div className="flex items-center mb-2">
                  <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mr-2">
                    <Leaf className="h-4 w-4 text-green-500" />
                  </div>
                  <h3 className="font-medium">Carbon Impact</h3>
                </div>
                <p className="text-2xl font-bold text-eco-green">647 kg</p>
                <p className="text-xs text-muted-foreground">CO₂ captured this month</p>
                <p className="text-sm mt-2">Equivalent to planting 32 trees</p>
              </div>
              
              <div className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-sm border border-border">
                <div className="flex items-center mb-2">
                  <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mr-2">
                    <Thermometer className="h-4 w-4 text-blue-500" />
                  </div>
                  <h3 className="font-medium">Cooling Impact</h3>
                </div>
                <p className="text-2xl font-bold text-eco-blue">9°C</p>
                <p className="text-xs text-muted-foreground">Average temperature reduction</p>
                <p className="text-sm mt-2">150 kWh energy savings this month</p>
              </div>
              
              <div className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-sm border border-border">
                <div className="flex items-center mb-2">
                  <div className="w-8 h-8 rounded-full bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center mr-2">
                    <Sun className="h-4 w-4 text-yellow-500" />
                  </div>
                  <h3 className="font-medium">Energy Impact</h3>
                </div>
                <p className="text-2xl font-bold text-yellow-500">542 kWh</p>
                <p className="text-xs text-muted-foreground">Clean energy produced this month</p>
                <p className="text-sm mt-2">Offsetting 249 kg of CO₂ emissions</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        {/* About the System */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Wind className="h-5 w-5 mr-2 text-eco-teal" />
              About This System
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="prose prose-sm max-w-none dark:prose-invert">
              <p>
                The Hybrid Cooling & CO₂ Capture Machine is an innovative, sustainable system that simultaneously cools ambient air and captures CO₂ while utilizing renewable energy sources. This system addresses global warming and greenhouse gas emissions by integrating air cooling, carbon capture, and energy storage into a single hybrid unit.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                <div>
                  <h4 className="text-sm font-medium mb-2 flex items-center">
                    <Thermometer className="h-4 w-4 mr-1 text-eco-blue" />
                    Advanced Air Cooling
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Uses a combination of radiative cooling, evaporative cooling, and thermoelectric cooling to reduce ambient temperatures efficiently.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium mb-2 flex items-center">
                    <Cloud className="h-4 w-4 mr-1 text-eco-green" />
                    CO₂ Capture & Storage
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Utilizes direct air capture (DAC) technology to filter CO₂ from the air and store it for energy conversion or industrial reuse.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium mb-2 flex items-center">
                    <Sun className="h-4 w-4 mr-1 text-yellow-500" />
                    Renewable Energy Integration
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Powered by solar panels and wind turbines, making it a self-sustaining system with zero carbon emissions.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium mb-2 flex items-center">
                    <Leaf className="h-4 w-4 mr-1 text-eco-green" />
                    Energy Storage & Utilization
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Converts captured CO₂ into usable energy, such as synthetic fuels or battery storage, enhancing sustainability.
                  </p>
                </div>
              </div>
              
              <div className="flex justify-center mt-6">
                <Button className="bg-gradient-to-r from-eco-green to-eco-blue text-white">
                  Learn More About The Technology
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
      
      <footer className="bg-white dark:bg-slate-800 border-t border-border py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <div className="relative mr-2">
                <Cloud className="h-6 w-6 text-eco-blue absolute opacity-70" />
                <Leaf className="h-6 w-6 text-eco-green relative left-1 top-1" />
              </div>
              <span className="font-bold text-lg">
                <span className="text-eco-green">Eco</span>
                <span className="text-eco-blue">Capture</span>
              </span>
            </div>
            
            <div className="text-sm text-muted-foreground">
              © 2023 EcoCapture Technologies. Sustainable Climate Solutions.
            </div>
            
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Button variant="ghost" size="sm">
                Privacy
              </Button>
              <Button variant="ghost" size="sm">
                Terms
              </Button>
              <Button variant="ghost" size="sm">
                Contact
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
