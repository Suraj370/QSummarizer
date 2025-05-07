import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import React from "react";

function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Button className="fixed top-5 left-2 " variant={"outline"}>
        <Link href={"/"} className="flex items-center gap-2">
          <ChevronLeft className="h-2 w-2" />
          Back
        </Link>
      </Button>
      <div className="min-h-screen pt-20 flex flex-col">{children}</div>
    </div>
  );
}

export default layout;
