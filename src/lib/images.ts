// Auto-import all images from src/images/
const imageModules = import.meta.glob('../images/*.{jpg,jpeg,png,webp,avif}', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>

export const allImages: string[] = Object.values(imageModules)

// Specific photos — fallback to first available image if not found
const find = (name: string) =>
  Object.entries(imageModules).find(([k]) => k.includes(name))?.[1] ?? allImages[0]

export const groomPhoto = find('groom')
export const bridePhoto = find('bride')
export const heroPhoto = find('couple') ?? find('hero') ?? allImages[0]

// Gallery photos exclude the cover photo (couple.jpg)
export const galleryPhotos: string[] = Object.entries(imageModules)
  .filter(([k]) => !k.includes('couple.'))
  .map(([, url]) => url)
