'use client';

import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import PageLoader from '@/components/PageLoader';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2500);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <PageLoader />}
      </AnimatePresence>
      {!isLoading && (
        <>
          <Navigation />
          {children}
          <Footer />
        </>
      )}
    </>
  );
}
