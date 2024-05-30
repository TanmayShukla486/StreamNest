'use client';

import { cn } from '@/lib/utils';
import { useSidebar } from '@/store/use-sidebar';

export const Container = ({ children }: { children: React.ReactNode }) => {
  const { collapse, onExpand, onCollapse } = useSidebar();
  return (
    <div
      className={cn('flex-1', collapse ? 'ml-[70px]' : 'ml-[70px] lg:ml-60')}
    >
      {children}
    </div>
  );
};
