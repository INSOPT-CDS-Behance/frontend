export interface ContentPrivewData {
  profileImg: string;
  name: string;
  recommandCount: number;
  visibleCount: number;
}

export interface CategoryList {
  id: number;
  text: string;
  color?: string;
  imgSrc?: string;
}
