export interface ContentPrviewData {
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

export interface LikeStatus {
  status: number;
  success: boolean;
  message: string;
}
