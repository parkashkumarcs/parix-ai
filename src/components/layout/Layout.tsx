import type { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-dark-500 mesh-bg">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

