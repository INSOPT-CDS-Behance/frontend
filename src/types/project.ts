export interface ProjectData {
  id: number;
  writer: string;
  image: string;
  likeCount: number;
  viewCount: number;
}
<<<<<<< HEAD
export interface PostProjectLike {
  projectId: number;
  userId: number;
}
export interface LikeStatus {
  status: number;
  success: boolean;
  message: string;
=======

export interface DetailData {
  id: number;
  writer: string;
  image: string;
  isLiked: true;
}

export interface Img {
  image: string;
>>>>>>> a61ffe0ab532044c73cfe89c480be3d79e363808
}
