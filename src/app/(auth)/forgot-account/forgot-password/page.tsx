"use client";

import { useState } from "react";
import { forgetPassword } from "@/lib/auth/auth-client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";


export default function ForgotPasswordPage() {
  const params = useSearchParams();
  const emailFromQuery = params.get("email") || "";
  const [email, setEmail] = useState(emailFromQuery);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    

    const { error } = await forgetPassword({
      email,
      redirectTo: `http://localhost:3000/reset-password`, // This page will be created next
    });

    if (error) {
      setMessage("Something went wrong. Please try again.");
    } else {
      setMessage("Check your email for the reset link.");
    }
    setEmail("");
  };

  return (
    // <form
    //   onSubmit={handleSubmit}
    //   className="p-6 max-w-md mx-auto space-y-4 container"
    // >
    //   <h1 className="text-xl font-bold">Forgot Password?</h1>
    //   <Input
    //     type="email"
    //     required
    //     value={email}
    //     placeholder="Your email"
    //     onChange={(e) => setEmail(e.target.value)}
    //     className="w-full border p-2"
    //   />
    //   <div className="grid grid-cols-3 gap-2">
    //     <Button type="submit">Send Reset Link</Button>
    //     <Button asChild variant={"outline"}>
    //       <Link href="/sign-in">Sign In</Link>
    //     </Button>
    //   </div>
    //   {message && <p>{message}</p>}
    // </form>
    <section className="grow flex items-center justify-center p-4">
      <Card className="w-full max-w-md mx-auto p-6 space-y-4">
        <CardHeader>
          <CardTitle className="text-xl font-semibold">
            Forgot Password?
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Button type="submit" className="w-full">
              Send Reset Link
            </Button>
            {message && <p>{message}</p>}
          </form>
        </CardContent>
      </Card>

    </section>
  );
}