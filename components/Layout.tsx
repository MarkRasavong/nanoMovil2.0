import React from 'react';
import Footer from './Footer/Footer';
import MetaHeader from './MetaHeader';
import Navbar from './Navbar/Navbar';

interface LayoutProps {
  children: React.ReactNode
};

const Layout = ({children} :LayoutProps) => (
  <React.Fragment>
    <MetaHeader />
    <Navbar />
    <main>
      {children}
    </main>
    <Footer />
  </React.Fragment>
);

export default Layout;