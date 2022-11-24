/* eslint-disable simple-import-sort/imports */
import { EditMoodBoard } from '../../types/mypage';

import { reqAPI } from '.';

export const getMoodBoard = async () => {
  return reqAPI.get(`/moodboard`);
};
export const patchMoodBoard = async (ChangedDataBody: EditMoodBoard) => {
  return reqAPI.patch(`/moodboard`, ChangedDataBody);
};
