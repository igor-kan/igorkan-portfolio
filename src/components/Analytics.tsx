'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export const Analytics = () => {
  const pathname = usePathname();

  useEffect(() => {
    // Replace with your analytics tracking code
    console.log(`Page view: ${pathname}`);
  }, [pathname]);

  return null;
};
