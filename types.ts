
import React from 'react';

export interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export interface FeatureProps {
  icon: string;
  label: string;
  color?: string;
}

export interface SocialLink {
  // Added React import to satisfy React.ReactNode type requirement
  icon: React.ReactNode;
  url: string;
  label: string;
}
