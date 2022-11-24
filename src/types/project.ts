export interface ProjectData {
  id: number;
  writer: string;
  image: string;
  likeCount: number;
  viewCount: number;
}
export interface PostProjectLike {
  projectId: number;
  userId: number;
}
