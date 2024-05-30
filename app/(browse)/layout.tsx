import React from 'react';
import { Navbar } from './_components/navbar';
import { Sidebar } from './_components/sidebar';

const BrowseLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <div className="flex h-full pt-[61px]">
        <Sidebar />
        {children}
      </div>
    </>
  );
};

export default BrowseLayout;
