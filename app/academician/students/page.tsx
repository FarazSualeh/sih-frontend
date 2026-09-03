'use client';

import LayoutAcademician from '@/components/academician/layout-academician';
import StudentList from '@/components/academician/student-list';
import { students } from '@/lib/mock-data/academician';

export default function StudentsPage() {
  return (
    <LayoutAcademician>
      <div className="space-y-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold">Students</h2>
          <p className="text-sm text-slate-500 mt-1">Student readiness overview and assessment status</p>
        </div>
        <StudentList students={students} />
      </div>
    </LayoutAcademician>
  );
}

