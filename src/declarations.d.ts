declare module '@/components/ui/alert' {
    import React from 'react';
  
    export const Alert: React.FC<{ variant?: string; className?: string }>;
    export const AlertDescription: React.FC<{ children: React.ReactNode }>;
  }
  