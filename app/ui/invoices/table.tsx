import Image from "next/image";
import { UpdateInvoice, DeleteInvoice } from "@/app/ui/invoices/buttons";
import InvoiceStatus from "@/app/ui/invoices/status";
import { formatDateToLocal, formatCurrency } from "@/app/lib/utils";
import { fetchFilteredInvoices } from "@/app/lib/data";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default async function InvoicesTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const invoices = await fetchFilteredInvoices(query, currentPage);

  return (
    <Table>
      <TableCaption>A list of your customers.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Invoice</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead>Date</TableHead>
          <TableHead className="text-right">Update</TableHead>
          <TableHead className="text-right">Delete</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices?.map((invoice) => (
          <TableRow key={invoice.id}>
            <TableCell className="font-medium">
              <Image
                src={invoice.image_url}
                className="mr-2 rounded-full"
                width={28}
                height={28}
                alt={`${invoice.name}'s profile picture`}
              />
            </TableCell>
            <TableCell>{invoice.name}</TableCell>
            <TableCell>{invoice.email}</TableCell>
            <TableCell>
              <InvoiceStatus status={invoice.status} />
            </TableCell>
            <TableCell>{formatCurrency(invoice.amount)}</TableCell>
            <TableCell>{formatDateToLocal(invoice.date)}</TableCell>

            <TableCell className="text-right">
              {" "}
              <UpdateInvoice id={invoice.id} />
            </TableCell>
            <TableCell className="text-right">
              {" "}
              <DeleteInvoice id={invoice.id} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
