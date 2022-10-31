import { instance } from './client';
import { addUser, getAllUser } from './endpoint';
import { ILogin } from './types';
export const createUser = async (payload: ILogin) => {
  const data = {
    // username: 'lolol',
    role: '',
    ...payload,
  };
  const query = await instance.post(addUser, data);
  return query;
};

export const allUser = async () => {
  const { data } = await instance.get(getAllUser);
  return data;
};
