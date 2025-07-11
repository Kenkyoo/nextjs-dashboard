import Image from "next/image";
import { lusitana } from "@/app/ui/fonts";
import Search from "@/app/ui/search";
import { FormattedCustomersTable } from "@/app/lib/definitions";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default async function CustomersTable({
  customers,
}: {
  customers: FormattedCustomersTable[];
}) {
  return (
    <div className="flex flex-col justify-center align-items-center gap-4 px-4 py-2">
      <h1
        className={`${lusitana.className} my-2 text-xl md:text-2xl text-center`}
      >
        Customers
      </h1>
      <Search placeholder="Search customers..." />
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Invoice</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {customers.map((customer) => (
            <TableRow key={customer.id}>
              <TableCell className="font-medium">
                <Image
                  src={customer.image_url}
                  className="mr-2 rounded-full"
                  width={28}
                  height={28}
                  alt={`${customer.name}'s profile picture`}
                />
              </TableCell>
              <TableCell>{customer.name}</TableCell>
              <TableCell>{customer.email}</TableCell>
              <TableCell>{customer.total_invoices}</TableCell>
              <TableCell>{customer.total_pending}</TableCell>
              <TableCell> {customer.total_paid}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
