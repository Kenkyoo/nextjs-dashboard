"use client";

import { CustomerField } from "@/app/lib/definitions";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { createInvoice, State } from "@/app/lib/actions";
import { useActionState } from "react";

export default function Form({ customers }: { customers: CustomerField[] }) {
  const initialState: State = { message: null, errors: {} };
  const [state, formAction] = useActionState(createInvoice, initialState);

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Login to your account</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
      </CardHeader>
      <form action={formAction}>
        <CardContent className="flex flex-col justify-center items-align-center gap-4">
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select a customer" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Customers</SelectLabel>
                {customers.map((customer) => (
                  <SelectItem key={customer.id} value={customer.id}>
                    {" "}
                    {customer.name}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
          <div id="customer-error" aria-live="polite" aria-atomic="true">
            {state.errors?.customerId &&
              state.errors.customerId.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>
          <Input
            id="amount"
            name="amount"
            type="number"
            step="0.01"
            placeholder="Enter USD amount"
            aria-describedby="amount-error"
          />
          <div id="amount-error" aria-live="polite" aria-atomic="true">
            {state.errors?.amount &&
              state.errors.amount.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>
          <fieldset>
            <legend className="text-center text-sm font-medium">
              Set the invoice status
            </legend>
            <div className="flex justify-start items-align-center gap-4 p-4">
              <div className="flex gap-4">
                <Label htmlFor="pending">Pending</Label>
                <Input
                  id="pending"
                  name="status"
                  type="radio"
                  value="pending"
                />
              </div>
              <div className="flex gap-4">
                <Input id="paid" name="status" type="radio" value="paid" />
                <Label htmlFor="paid">Paid</Label>
              </div>
            </div>
            <div id="status-error" aria-live="polite" aria-atomic="true">
              {state.errors?.status &&
                state.errors.status.map((error: string) => (
                  <p className="mt-2 text-sm text-red-500" key={error}>
                    {error}
                  </p>
                ))}
            </div>
          </fieldset>

          <div aria-live="polite" aria-atomic="true">
            {state.message ? (
              <p className="mt-2 text-sm text-red-500">{state.message}</p>
            ) : null}
          </div>
        </CardContent>
        <CardFooter className="flex-col gap-2">
          <div className="mt-6 flex justify-end gap-4">
            <Link
              href="/dashboard/invoices"
              className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
            >
              Cancel
            </Link>
            <Button type="submit">Create Invoice</Button>
          </div>
        </CardFooter>
      </form>
    </Card>
  );
}
