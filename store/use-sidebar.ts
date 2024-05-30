import { create } from 'zustand';

interface SidebarVals {
  collapse: boolean;
  onExpand: () => void;
  onCollapse: () => void;
}

export const useSidebar = create<SidebarVals>((set) => ({
  collapse: true,
  onExpand: () => set(() => ({ collapse: false })),
  onCollapse: () => set(() => ({ collapse: true })),
}));
