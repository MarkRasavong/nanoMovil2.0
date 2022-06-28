import React from 'react';
import MetaHeader from './MetaHeader';

interface LayoutProps {
  children: React.ReactNode
};

const Layout = ({children} :LayoutProps) => (
  <React.Fragment>
    <MetaHeader />
    <main>
      {children}
    </main>
  </React.Fragment>
);

export default Layout;