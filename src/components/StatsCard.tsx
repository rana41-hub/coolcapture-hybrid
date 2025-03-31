
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface StatsCardProps {
  title: string;
  value: string | number;
  description?: string;
  icon: React.ReactNode;
  trend?: 'up' | 'down' | 'neutral';
  trendValue?: string;
  className?: string;
}

const StatsCard = ({ 
  title, 
  value, 
  description, 
  icon, 
  trend, 
  trendValue,
  className 
}: StatsCardProps) => {
  return (
    <Card className={cn("overflow-hidden card-highlight", className)}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <div className="h-8 w-8 rounded-full flex items-center justify-center bg-muted text-primary">
          {icon}
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        {description && (
          <p className="text-xs text-muted-foreground mt-1">{description}</p>
        )}
        {trend && trendValue && (
          <div className="flex items-center mt-2">
            <div className={cn(
              "h-4 w-4 mr-1 rounded-full flex items-center justify-center",
              trend === 'up' ? 'text-green-500' : 
              trend === 'down' ? 'text-red-500' : 
              'text-yellow-500'
            )}>
              {trend === 'up' && (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up"><path d="m5 12 7-7 7 7"/><path d="M12 19V5"/></svg>
              )}
              {trend === 'down' && (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-down"><path d="M12 5v14"/><path d="m19 12-7 7-7-7"/></svg>
              )}
            </div>
            <span className={cn(
              "text-xs font-medium",
              trend === 'up' ? 'text-green-500' : 
              trend === 'down' ? 'text-red-500' : 
              'text-yellow-500'
            )}>
              {trendValue}
            </span>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default StatsCard;
