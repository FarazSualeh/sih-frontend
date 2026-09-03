'use client';

import React, { createContext, useContext, useMemo, useState } from 'react';
import type { ProfileData } from '@/lib/types';
import { getStoredProfile, saveProfile } from '@/lib/mock-data/academician';

type ProfileContextValue = {
  profile: ProfileData;
  setProfile: React.Dispatch<React.SetStateAction<ProfileData>>;
  updateProfile: (updates: Partial<ProfileData>) => void;
  saveProfileState: (nextProfile: ProfileData) => void;
  getInitials: (name: string) => string;
};

const ProfileContext = createContext<ProfileContextValue | undefined>(undefined);

export function AcademicianProfileProvider({ children }: { children: React.ReactNode }) {
  const [profile, setProfile] = useState<ProfileData>(() => getStoredProfile());

  const updateProfile = (updates: Partial<ProfileData>) => {
    setProfile((current) => ({ ...current, ...updates }));
  };

  const saveProfileState = (nextProfile: ProfileData) => {
    setProfile(nextProfile);
    saveProfile(nextProfile);
  };

  const getInitials = (name: string) => {
    if (!name || !name.trim()) return 'U';
    return (
      name
        .trim()
        .split(/\s+/)
        .slice(0, 2)
        .map((part) => part[0]?.toUpperCase() ?? '')
        .join('') || 'U'
    );
  };

  const value = useMemo(
    () => ({ profile, setProfile, updateProfile, saveProfileState, getInitials }),
    [profile]
  );

  return <ProfileContext.Provider value={value}>{children}</ProfileContext.Provider>;
}

export function useAcademicianProfile() {
  const context = useContext(ProfileContext);
  if (!context) {
    throw new Error('useAcademicianProfile must be used within an AcademicianProfileProvider');
  }
  return context;
}

