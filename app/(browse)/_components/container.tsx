'use client';

import { cn } from '@/lib/utils';
import { useSidebar } from '@/store/use-sidebar';
import { useEffect } from 'react';
import { useMediaQuery } from 'usehooks-ts';

export const Container = ({ children }: { children: React.ReactNode }) => {
  const matches = useMediaQuery('(max-width: 1024px)');
  const { collapse, onExpand, onCollapse } = useSidebar();

  useEffect(() => {
    if (matches) {
      onCollapse();
    } else onExpand();
  }, [matches, onCollapse, onExpand]);
  return (
    <div
      className={cn('flex-1', collapse ? 'ml-[70px]' : 'ml-[70px] lg:ml-60')}
    >
      {children}
    </div>
  );
};
