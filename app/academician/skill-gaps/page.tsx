'use client';

import LayoutAcademician from '@/components/academician/layout-academician';
import SkillGapInsights from '@/components/academician/skill-gap-insights';
import { skillGaps } from '@/lib/mock-data/academician';

export default function SkillGapsPage() {
  return (
    <LayoutAcademician>
      <div className="space-y-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold">Skill Gaps</h2>
          <p className="text-sm text-slate-500 mt-1">Critical gaps requiring intervention and upskilling</p>
        </div>
        <SkillGapInsights gaps={skillGaps.filter((gap) => gap.gap >= 10)} />
      </div>
    </LayoutAcademician>
  );
}

