/* eslint-disable import/order */
import axios from 'axios';

import { PostProjectLike } from '../../types/project';
import { reqAPI } from '.';

export const getProject = async () => {
  return reqAPI.get(`/project`);
};

export const getProjectId = async (params: string) => {
  return reqAPI.get(`/project/${params}`);
};

export const postProjectLike = async (postProjectLikeBody: PostProjectLike) => {
  return axios.post(`${process.env.REACT_APP_IP}/project/like`, postProjectLikeBody);
};
