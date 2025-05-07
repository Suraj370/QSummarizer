import { auth } from '@/lib/auth/auth';
import { headers } from 'next/headers';
import React from 'react'

async function Dashboard() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  return (
    <div>
           {session && (
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-center mb-8">
              Welcome Back!
            </h2>
            <p className="text-center text-lg">
              You are logged in as {session.user.email}
            </p>
          </div>
        )}
    </div>
  )
}

export default Dashboard