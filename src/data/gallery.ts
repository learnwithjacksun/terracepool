/** Images in public/gallery — adjust `BUILDING_COUNT` to rebalance sections. */
export type GalleryKind = "building" | "renovation";

export interface GalleryItem {
  id: string;
  src: string;
  kind: GalleryKind;
}

/** img1.jpeg … img48.jpeg */
const TOTAL_IMAGES = 48;
/** First N images → “building”; remainder → “renovation”. */
const BUILDING_COUNT = 24;

function buildItems(): GalleryItem[] {
  const items: GalleryItem[] = [];
  for (let i = 1; i <= TOTAL_IMAGES; i++) {
    items.push({
      id: `gallery-img-${i}`,
      src: `/gallery/img${i}.jpeg`,
      kind: i <= BUILDING_COUNT ? "building" : "renovation",
    });
  }
  return items;
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
