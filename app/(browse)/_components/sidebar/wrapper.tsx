'use client';
import { useSidebar } from '@/store/use-sidebar';
import { cn } from '@/lib/utils';

interface WrapperProps {
  children: React.ReactNode;
}

export const Wrapper = ({ children }: WrapperProps) => {
  const { collapse } = useSidebar((state) => state);

  return (
    <aside
      className={cn(
        'fixed left-0 flex flex-col w-60 h-full bg-[#2a0347] border-r-2 border-[#6d128e] z-50 transition',
        collapse && 'w-[70px]'
      )}
    >
      {children}
    </aside>
  );
};
