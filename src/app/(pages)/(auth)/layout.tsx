import React from 'react'

function AuthLayout( {children}: {children: React.ReactNode}) {
  return (
    <div className=' min-h-screen flex flex-col bg-indigo-300'>
        {children}
    </div>
  )
}

export default AuthLayout