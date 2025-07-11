import { PencilIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { deleteInvoice } from "@/app/lib/actions";
import { Button } from "@/components/ui/button";

export function CreateInvoice() {
  return (
    <Link href="/dashboard/invoices/create">
      <div className="flex gap-2 items-center">
        <PlusIcon className="h-5 md:ml-4" />
        <Button>Create Invoice</Button>
      </div>
    </Link>
  );
}

export function UpdateInvoice({ id }: { id: string }) {
  return (
    <Link href={`/dashboard/invoices/${id}/edit`}>
      <Button>
        <PencilIcon className="w-5" />
      </Button>
    </Link>
  );
}

export function DeleteInvoice({ id }: { id: string }) {
  const deleteInvoiceWithId = deleteInvoice.bind(null, id);

  return (
    <form action={deleteInvoiceWithId}>
      <Button type="submit">
        <TrashIcon className="w-5" />
      </Button>
    </form>
  );
}
