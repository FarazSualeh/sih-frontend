'use client';

import React, { createContext, useContext, useState } from 'react';
import type { CompanyProfile } from '@/lib/types';
import {
  getStoredCompanyProfile,
  initialCompanyProfile,
  saveCompanyProfile,
} from '@/lib/mock-data/industry';

type IndustryProfileContextType = {
  profile: CompanyProfile;
  updateProfile: (updated: Partial<CompanyProfile>) => void;
  resetProfile: () => void;
  getCompanyInitials: (name: string) => string;
};

const IndustryProfileContext = createContext<IndustryProfileContextType | undefined>(undefined);

export function IndustryProfileProvider({ children }: { children: React.ReactNode }) {
  const [profile, setProfile] = useState<CompanyProfile>(() => getStoredCompanyProfile());

  const updateProfile = (updated: Partial<CompanyProfile>) => {
    setProfile((prev) => {
      const next = { ...prev, ...updated };
      saveCompanyProfile(next);
      return next;
    });
  };

  const resetProfile = () => {
    setProfile(initialCompanyProfile);
    saveCompanyProfile(initialCompanyProfile);
  };

  const getCompanyInitials = (name: string) => {
    if (!name) return 'TC';
    const parts = name.trim().split(' ');
    if (parts.length >= 2) return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
    return name.slice(0, 2).toUpperCase();
  };

  return (
    <IndustryProfileContext.Provider value={{ profile, updateProfile, resetProfile, getCompanyInitials }}>
      {children}
    </IndustryProfileContext.Provider>
  );
}

export function useIndustryProfile() {
  const context = useContext(IndustryProfileContext);
  if (!context) {
    throw new Error('useIndustryProfile must be used within an IndustryProfileProvider');
  }
  return context;
}

