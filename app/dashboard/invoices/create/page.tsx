import { fetchCustomers } from "@/app/lib/data";
import Form from "@/app/ui/invoices/create-form";
import Breadcrumbs from "@/app/ui/invoices/breadcrumbs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Invoice",
};

export default async function Page() {
  const customers = await fetchCustomers();

  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-4 p-6 md:p-10">
      <div className="w-full max-w-sm md:max-w-3xl">
        <Breadcrumbs
          breadcrumbs={[
            { label: "Invoices", href: "/dashboard/invoices" },
            {
              label: "Create Invoice",
              href: "/dashboard/invoices/create",
              active: true,
            },
          ]}
        />
        <Form customers={customers} />
      </div>
    </div>
  );
}
