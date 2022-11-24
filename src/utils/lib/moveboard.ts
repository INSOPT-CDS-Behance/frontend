import { reqAPI } from '.';

export const getMoveBoard = async () => {
  return reqAPI.get(`/moveboard`);
};
