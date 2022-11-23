export interface ProjectData {
  id: number;
  writer: string;
  image: string;
  likeCount: number;
  viewCount: number;
  onClick(): void;
}

export interface DetailData {
  id: number;
  writer: string;
  image: string;
  isLiked: true;
}

export interface Img {
  image: string;
}
