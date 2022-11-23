export interface PreviewData {
  projectId: number;
  profileImg: string;
  name: string;
  recommandCount: number;
  visibleCount: number;
}

export interface CategoryList {
  id: number;
  title: string;
  color: string;
  imgSrc: string;
}

export interface DropboxList {
  id: number;
  title: string;
  src: string;
}

export interface ContentPrviewData {
  profileImg: string;
  name: string;
  recommandCount: number;
  visibleCount: number;
}

export interface ContentPreviewProps {
  contentPreviewData: PreviewData;
  isHomePage: boolean;
}

export interface ThumbnailProps {
  previewData: PreviewData;
}
