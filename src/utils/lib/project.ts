import { reqAPI } from '.';

export const getProject = async () => {
  return reqAPI.get(`/project`);
};

export const getProjectId = async (params: string) => {
  return reqAPI.get(`/project/${params}`);
};
