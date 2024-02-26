import { get } from './http';

export type User = {
  id: number;
  name: string;
  credits: number;
  avatarUrl: string;
};

export const getUser = async () => {
  const users = await get<User[]>('/users');
  return users[0];
};
