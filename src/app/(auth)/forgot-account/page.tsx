"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { searchAccount } from "@/lib/actions";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ForgotAccountPage() {
  const [email, setEmail] = useState("");
  const router = useRouter();

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    const found = await searchAccount(email);
    if (found) {
      router.push(
        `/forgot-account/forgot-password?email=${encodeURIComponent(email)}`
      );
    } else {
      router.push("/sign-up");
    }
  };

  return (
    <section className="grow flex items-center justify-center p-4">

      <Card className="w-full max-w-md mx-auto p-6 space-y-4">
        <CardHeader>
          <CardTitle className="text-xl font-semibold">
            Find Your Account
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSearch} className="space-y-4">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Button type="submit" className="w-full">
              Search
            </Button>
          </form>
        </CardContent>
      </Card>
    </section>
  );
}
