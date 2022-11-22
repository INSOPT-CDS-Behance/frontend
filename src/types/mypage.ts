export interface MoodBoardData {
  id: number;
  title: string;
  category: string;
  lock: boolean;
  profileNum: number;
  project: {
    id: number;
    image: string;
  }[];
}
