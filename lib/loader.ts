'use client';

// type ImageLoaderProps = {
//   src: string;
//   width: number;
//   quality?: number;
// };

// This loader function simply constructs the path with the basePath.
// It bypasses the `/_next/image` optimization endpoint.
// export default function customImageLoader({ src, width, quality }: ImageLoaderProps) {
//   // In a production environment, NEXT_PUBLIC_BASE_PATH would be set.
//   // We construct it manually here for clarity.
//   const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '/clientui';
//   return `${basePath}${src}?w=${width}&q=${quality || 75}`;
// }

// Simpler version for lib/loader.ts
export default function customImageLoader({ src }: { src: string }) {
  const basePath = '/clientui'; // Hardcode it since we know it
  return `${basePath}${src}`;
}