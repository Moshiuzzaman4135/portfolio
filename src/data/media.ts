export interface MediaItem {
  id: string;
  type: 'image' | 'video';
  url: string;
  title: string;
  category: string;
}

export const mediaItems: MediaItem[] = [
  {
    id: '1',
    type: 'image',
    url: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'AI Architecture Diagram',
    category: 'Projects',
  },
  {
    id: '2',
    type: 'image',
    url: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Team Collaboration',
    category: 'Events',
  },
  {
    id: '3',
    type: 'image',
    url: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Conference Presentation',
    category: 'Events',
  },
  {
    id: '4',
    type: 'image',
    url: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'System Dashboard',
    category: 'Projects',
  },
  {
    id: '5',
    type: 'image',
    url: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Code Review Session',
    category: 'Personal',
  },
  {
    id: '6',
    type: 'image',
    url: 'https://images.pexels.com/photos/1181316/pexels-photo-1181316.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Technical Workshop',
    category: 'Events',
  },
];
