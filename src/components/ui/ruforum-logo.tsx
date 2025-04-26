import React from 'react';
import { cn } from '@/lib/utils';
import { MapPin } from 'lucide-react';

interface RuforumLogoProps {
  className?: string;
  variant?: 'default' | 'sidebar';
}

export function RuforumLogo({ className, variant = 'default' }: RuforumLogoProps) {
  if (variant === 'sidebar') {
    return (
      <div className={cn("flex items-center font-bold text-xl text-white py-4", className)}>
        <span className="bg-amber-500 rounded-full p-1 mr-2">
          <MapPin className="h-4 w-4 text-[#4d1c00]" />
        </span>
        RUFORUM MEL
      </div>
    );
  }
  
  return (
    <div className={cn("flex flex-col items-center", className)}>
      <div className="flex items-center mb-1">
        <span className="text-amber-600 font-bold text-xl mr-1">RU</span>
        <span className="text-[#8b4513] font-bold text-xl">FORUM</span>
      </div>
      <div className="relative">
        <MapPin className="h-8 w-8 text-amber-500" />
        <div className="absolute inset-0 bg-[#8b4513] rounded-full w-5 h-5 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-10" />
      </div>
    </div>
  );
}