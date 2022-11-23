/* eslint-disable simple-import-sort/imports */
import axios from 'axios';

import { EditMoodBoard } from '../../types/mypage';

import { reqAPI } from '.';

export const getMoodBoard = async () => {
  return reqAPI.get(`/moodboard`);
};

export const patchMoodBoard = async (ChangedDataBody: EditMoodBoard) => {
  return axios.patch(`${process.env.REACT_APP_IP}moodboard`, ChangedDataBody);
};
