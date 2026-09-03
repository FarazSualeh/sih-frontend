import { IndustryProfileProvider } from '@/components/industry/industry-profile-provider';

export default function IndustryLayout({ children }: { children: React.ReactNode }) {
  return <IndustryProfileProvider>{children}</IndustryProfileProvider>;
}
