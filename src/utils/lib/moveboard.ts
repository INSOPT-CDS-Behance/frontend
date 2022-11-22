import { reqAPI } from '.';

export const getMoodBoard = async () => {
  return reqAPI.get(`/moodboard`);
};
