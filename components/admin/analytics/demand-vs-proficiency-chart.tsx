"use client";
import { Bar } from "react-chartjs-2";
import { BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Tooltip, type ChartData } from "chart.js";
ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);
export function DemandVsProficiencyChart({ points }: { points: { skill: string; industryDemand: number; studentProficiency: number }[] }) {
  const data: ChartData<"bar"> = { labels: points.map((point) => point.skill), datasets: [{ label: "Industry demand", data: points.map((point) => point.industryDemand), backgroundColor: "#4f46e5", borderRadius: 5 }, { label: "Student proficiency", data: points.map((point) => point.studentProficiency), backgroundColor: "#f59e0b", borderRadius: 5 }] };
  return <Bar data={data} options={{ responsive: true, maintainAspectRatio: false, plugins: { legend: { position: "bottom", labels: { usePointStyle: true, boxWidth: 8 } }, tooltip: { enabled: true } }, scales: { y: { beginAtZero: true, max: 100, grid: { color: "#edf0f5" } }, x: { grid: { display: false } } } }} />;
}
