import { atom } from 'recoil';

export const networkCount = atom({
  key: 'networkCount',
  default: 104,
});

export const jobsCount = atom({
  key: 'jobsCount',
  default: 0,
});

export const messageCount = atom({
  key: 'messageCount',
  default: 5,
});

export const notificationCount = atom({
  key: 'notificationCount',
  default: 17,
});
