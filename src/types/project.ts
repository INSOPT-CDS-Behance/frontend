export interface ProjectData {
  id: number;
  writer: string;
  image: string;
  likeCount: number;
  viewCount: number;
}

export interface DetailData {
  id: number;
  writer: string;
  image: string;
  isLiked: true;
}
