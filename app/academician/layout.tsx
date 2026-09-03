import { AcademicianProfileProvider } from '@/components/academician/profile-provider';

export default function AcademicianLayout({ children }: { children: React.ReactNode }) {
  return <AcademicianProfileProvider>{children}</AcademicianProfileProvider>;
}
