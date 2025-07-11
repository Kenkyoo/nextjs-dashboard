import { AreaChart } from "@/components/areaChart";
import DataTable from "@/components/data-table";
import { SectionCards } from "@/components/section-cards";

export default function Page() {
  return (
    <div className="@container/main flex flex-1 flex-col gap-2">
      <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6 px-4">
        <SectionCards />
        <div className="px-4 lg:px-6">
          <AreaChart />
        </div>
        <DataTable />
      </div>
    </div>
  );
}
