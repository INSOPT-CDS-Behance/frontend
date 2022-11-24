// eslint-disable-next-line import/order
import { PostProjectLike } from '../../types/project';
import { reqAPI } from '.';

export const getProject = async () => {
  return reqAPI.get(`/project`);
};

export const getProjectId = async (params: string) => {
  return reqAPI.get(`/project/${params}`);
};
export const postProjectLike = async (postProjectLikeBody: PostProjectLike) => {
  return reqAPI.post('/project/like', postProjectLikeBody);
};
