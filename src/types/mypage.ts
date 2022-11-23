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

export interface MoodBoardServerData {
  id: number;
  is_public: boolean;
  name: string;
  profile_count: number;
  project: {
    id: number;
    image: string;
  }[];
  subtitle: string;
  user_id?: number;
}
