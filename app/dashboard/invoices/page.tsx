import Pagination from "@/app/ui/invoices/pagination";
import Search from "@/app/ui/search";
import Table from "@/app/ui/invoices/table";
import { CreateInvoice } from "@/app/ui/invoices/buttons";
import { lusitana } from "@/app/ui/fonts";
import { fetchInvoicesPages } from "@/app/lib/data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Invoices",
};

export default async function Page(props: {
  searchParams?: Promise<{
    query?: string;
    page?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;

  const totalPages = await fetchInvoicesPages(query);

  return (
    <div className="flex flex-col justify-center align-items-center gap-4 px-4 py-2">
      <h1 className={`${lusitana.className} text-2xl text-center my-2`}>
        Invoices
      </h1>
      <Search placeholder="Search invoices..." />
      <CreateInvoice />
      <Table query={query} currentPage={currentPage} />
      <Pagination totalPages={totalPages} />
    </div>
  );
}
