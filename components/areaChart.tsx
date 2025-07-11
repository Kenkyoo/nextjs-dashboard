// app/components/chart-wrapper.tsx
import { fetchRevenue } from "@/app/lib/data";
import { ChartAreaInteractive } from "@/components/chart-area-interactive";

export async function AreaChart() {
  const revenue = await fetchRevenue();
  return <ChartAreaInteractive revenue={revenue} />;
}
