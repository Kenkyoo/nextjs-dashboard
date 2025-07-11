import { clsx } from "clsx";
import Link from "next/link";
import { SlashIcon } from "lucide-react";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

interface Breadcrumb {
  label: string;
  href: string;
  active?: boolean;
}

export default function Breadcrumbs({
  breadcrumbs,
}: {
  breadcrumbs: Breadcrumb[];
}) {
  return (
    <Breadcrumb className="my-2 py-2 mx-auto">
      <BreadcrumbList>
        {breadcrumbs.map((breadcrumb, index) => (
          <>
            <BreadcrumbItem
              key={breadcrumb.href}
              aria-current={breadcrumb.active}
              className={clsx(
                breadcrumb.active ? "text-base-900" : "text-base-500"
              )}
            >
              <BreadcrumbLink asChild>
                <Link href={breadcrumb.href}>{breadcrumb.label}</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <SlashIcon />
            </BreadcrumbSeparator>
          </>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
