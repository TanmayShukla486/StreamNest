import Image from 'next/image';
import React from 'react';

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full flex flex-col gap-2 items-center justify-center">
      <div>
        <Image
          className="rounded-full border-2 border-white"
          src={'/logo.png'}
          alt="logo"
          width={125}
          height={125}
        />
      </div>
      {children}
    </div>
  );
};

export default AuthLayout;
