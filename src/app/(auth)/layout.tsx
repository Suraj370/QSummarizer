import React from "react";

function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col  justify-center items-center min-h-screen bg-gray-100">
    {children}
    </div>
  );
}

export default layout;
