import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";
import { fetchLatestInvoices } from "@/app/lib/data";

export default async function DataTable() {
  const latestInvoices = await fetchLatestInvoices();
  return (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Method</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {latestInvoices.map((invoice, i) => {
          return (
            <TableRow key={invoice.id}>
              <TableCell className="font-medium">
                <Image
                  src={invoice.image_url}
                  alt={`${invoice.name}'s profile picture`}
                  className="mr-4 rounded-full"
                  width={32}
                  height={32}
                />
              </TableCell>
              <TableCell>{invoice.name}</TableCell>
              <TableCell>{invoice.email}</TableCell>
              <TableCell className="text-right">{invoice.amount}</TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}
