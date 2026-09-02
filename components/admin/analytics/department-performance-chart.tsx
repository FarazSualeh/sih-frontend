"use client";
import { Bar } from "react-chartjs-2";
import { BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Tooltip, type ChartData } from "chart.js";
ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);
export function DepartmentPerformanceChart({ points }: { points: { department: string; placement: number }[] }) {
  const data: ChartData<"bar"> = { labels: points.map((point) => point.department), datasets: [{ label: "Placement rate", data: points.map((point) => point.placement), backgroundColor: "#0ea5e9", borderRadius: 6, barThickness: 22 }] };
  return <Bar data={data} options={{ indexAxis: "y", responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false }, tooltip: { enabled: true, callbacks: { label: (context) => `${context.raw}% placed` } } }, scales: { x: { beginAtZero: true, max: 100, grid: { color: "#edf0f5" } }, y: { grid: { display: false } } } }} />;
}
