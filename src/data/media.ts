export interface MediaItem {
  id: string;
  type: 'image' | 'video';
  url: string;
  title: string;
  category: string;
}

const mediaModules = import.meta.glob('../media/**/*.{jpg,jpeg,png,webp,svg,mp4}', {
  eager: true,
  import: 'default',
}) as Record<string, string>;

const toTitleCase = (value: string) =>
  value
    .replace(/[-_]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/\b\w/g, (char) => char.toUpperCase());

export const mediaItems: MediaItem[] = Object.entries(mediaModules)
  .map(([path, url]) => {
    const normalized = path.replace('../media/', '');
    const [rawCategory, fileName] = normalized.split('/');
    const category = toTitleCase(rawCategory ?? 'Misc');
    const extension = fileName?.split('.').pop()?.toLowerCase() ?? '';
    const title = toTitleCase(fileName?.replace(`.${extension}`, '') ?? 'Media Item');

    return {
      id: normalized,
      type: extension === 'mp4' ? 'video' : 'image',
      url,
      title,
      category,
    } satisfies MediaItem;
  })
  .sort((a, b) => a.title.localeCompare(b.title));

export const mediaCategories = ['All', ...Array.from(new Set(mediaItems.map((item) => item.category)))];
