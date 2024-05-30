'use client';
import { Button } from '@/components/ui/button';
import { useSidebar } from '@/store/use-sidebar';
import { Hint } from '@/components/hint';
import { ArrowLeftFromLine, ArrowRightFromLine } from 'lucide-react';
import React from 'react';

const Toggle = () => {
  const { collapse, onExpand, onCollapse } = useSidebar();
  const onToggle = () => {
    if (collapse) onExpand();
    else onCollapse();
  };
  const label = collapse ? 'Expand' : 'Collapse';
  return (
    <div className="transition">
      {collapse && (
        <div className="hidden lg:flex w-full items-center justify-center pt-4 mb-4">
          <Hint
            label={label}
            side="right"
            asChild
          >
            <Button
              onClick={onToggle}
              variant={'ghost'}
              className="h-auto p-2"
            >
              <ArrowRightFromLine className="h-4 w-4" />
            </Button>
          </Hint>
        </div>
      )}
      {!collapse && (
        <div className="p-3 pl-6 pt-3 mb-2 flex items-center w-full justify-between">
          <p>For you</p>
          <Hint
            label={label}
            side="right"
            asChild
          >
            <Button
              onClick={onToggle}
              className="h-auto p2-ml-auto transition"
              variant={'ghost'}
            >
              <ArrowLeftFromLine className="h-4 w-4" />
            </Button>
          </Hint>
        </div>
      )}
    </div>
  );
};

export default Toggle;
