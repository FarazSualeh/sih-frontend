'use client';

import LayoutAcademician from '@/components/academician/layout-academician';
import SkillAnalytics from '@/components/academician/skill-analytics';
import { skillsMaster } from '@/lib/mock-data/academician';

export default function AnalyticsPage() {
  return (
    <LayoutAcademician>
      <div className="space-y-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold">Skill Analytics</h2>
          <p className="text-sm text-slate-500 mt-1">Current proficiency distribution across departments</p>
        </div>
        <SkillAnalytics skills={skillsMaster} />
      </div>
    </LayoutAcademician>
  );
}

