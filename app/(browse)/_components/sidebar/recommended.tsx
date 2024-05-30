'use client';
import { useSidebar } from '@/store/use-sidebar';
import { User } from '@prisma/client';
import React from 'react';

interface RecommendedProps {
  data: User[];
}

const Recommended = ({ data }: RecommendedProps) => {
  const { collapse } = useSidebar((state) => state);
  const showLabel = !collapse && data.length > 0;
  return (
    <div>
      {showLabel && (
        <div className="pl-6 mb-4">
          <p className="text-sm text-muted-foreground">Recommended</p>
          <ul className="space-y-2 px-2">
            {data.map((user) => (
              <div key={user.id}>{user.username}</div>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Recommended;
