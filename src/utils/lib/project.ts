<<<<<<< HEAD
// eslint-disable-next-line import/order
import { PostProjectLike } from '../../types/project';
=======
>>>>>>> a61ffe0ab532044c73cfe89c480be3d79e363808
import { reqAPI } from '.';

export const getProject = async () => {
  return reqAPI.get(`/project`);
};

export const getProjectId = async (params: string) => {
  return reqAPI.get(`/project/${params}`);
};
<<<<<<< HEAD
export const postProjectLike = async (postProjectLikeBody: PostProjectLike) => {
  return reqAPI.post('/project/like', postProjectLikeBody);
};
=======
>>>>>>> a61ffe0ab532044c73cfe89c480be3d79e363808
