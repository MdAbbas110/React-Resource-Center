import { atom, selector } from 'recoil';
import axios from 'axios';

export const notification = atom({
  key: 'notification',
  default: selector({
    key: 'notificationSelector',
    get: async () => {
      try {
        const res = await axios.get(
          'https://sum-server.100xdevs.com/notifications'
        );
        return res.data;
      } catch (error) {
        console.log(error);
        return null;
      }
    },
  }),
});

export const sumUpAll = selector({
  key: 'sumUpAll',
  get: ({ get }) => {
    const allNotifications = get(notification);
    return (
      allNotifications.network +
      allNotifications.message +
      allNotifications.notifications +
      allNotifications.jobs
    );
  },
});
