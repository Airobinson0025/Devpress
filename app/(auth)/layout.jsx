import React from 'react';

const AuthLayout = ({ children }) => {
  return (
    <div className='flex items-center justify-center h-screen pt-16'>
      <div className="max-w-md">
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;