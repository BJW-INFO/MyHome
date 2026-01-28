export interface RoutersProps {
  path: string;
  label: string;
  children?: { path: string; label: string }[];
}

export const routers: RoutersProps[] = [
  {
    path: '/real',
    label: "👤 REAL",
  },
  {
    path: '/loa',
    label: '🎮 Lost Ark',
    children: [
      { path: '/event', label: '🎉 EVENT' },
      { path: '/daily', label: '🚶 DAILY' },
      { path: '/weekly', label: '📅 WEEKLY' },
    ],
  },
  {
    path: '/maple',
    label: '🍁 Maple Story',
    children: [
      { path: '/event', label: '🎉 EVENT' },
      { path: '/daily', label: '🚶 DAILY' },
      { path: '/weekly', label: '📅 WEEKLY' },
    ],
  },
]