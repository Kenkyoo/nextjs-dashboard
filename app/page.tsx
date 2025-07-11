import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import React from "react";
import Link from "next/link";

const Page = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-2xl">
        <Badge className="bg-gradient-to-br via-70% from-primary via-muted/30 to-primary rounded-full py-1 border-none">
          Just released v1.0.0
        </Badge>
        <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl md:leading-[1.2] font-bold">
          Nextjs Dashboard
        </h1>
        <p className="mt-6 text-[17px] md:text-lg">
          Explore a dashboard, ready to preview and show data. Streamline your
          customers and invoices with easy-to-implement examples.
        </p>
        <div className="mt-12 flex items-center justify-center gap-4">
          <Button size="lg" className="rounded-full text-base">
            <Link href="/login">Get Started</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Page;
