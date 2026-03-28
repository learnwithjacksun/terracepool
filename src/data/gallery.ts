/** Images in public/gallery — add numbers here to skip files (they will not appear in the UI). */
const EXCLUDE_IMAGE_NUMBERS = new Set<number>([16, 25]);

export type GalleryKind = "building" | "renovation";

export interface GalleryItem {
  id: string;
  src: string;
  kind: GalleryKind;
}

/** Highest img index we consider (img1.jpeg … img{N}.jpeg). */
const TOTAL_IMAGES = 48;

function buildItems(): GalleryItem[] {
  const indices: number[] = [];
  for (let i = 1; i <= TOTAL_IMAGES; i++) {
    if (EXCLUDE_IMAGE_NUMBERS.has(i)) continue;
    indices.push(i);
  }

  const mid = Math.floor(indices.length / 2);

  return indices.map((i, idx) => ({
    id: `gallery-img-${i}`,
    src: `/gallery/img${i}.jpeg`,
    kind: idx < mid ? "building" : "renovation",
  }));
}

export const galleryItems = buildItems();

export const galleryBuilding = galleryItems.filter((i) => i.kind === "building");
export const galleryRenovation = galleryItems.filter((i) => i.kind === "renovation");

export interface GalleryVideoItem {
  id: string;
  src: string;
}

/** Short clips in public/gallery */
export const galleryVideos: GalleryVideoItem[] = [
  { id: "gallery-vid-1", src: "/gallery/vid1.mp4" },
  { id: "gallery-vid-2", src: "/gallery/vid2.mp4" },
  { id: "gallery-vid-3", src: "/gallery/vid3.mp4" },
];
