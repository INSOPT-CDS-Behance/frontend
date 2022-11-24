<<<<<<< HEAD
export interface ContentPrviewData {
=======
export interface PreviewData {
>>>>>>> a61ffe0ab532044c73cfe89c480be3d79e363808
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

<<<<<<< HEAD
export interface LikeStatus {
  status: number;
  success: boolean;
  message: string;
=======
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
>>>>>>> a61ffe0ab532044c73cfe89c480be3d79e363808
}
