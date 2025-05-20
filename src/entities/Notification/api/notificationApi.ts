import { rtkApi } from 'shared/api/rtkApi';
import { Notification } from '../model/types/notificationSchema';

const notificationsApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getNotificationsList: build.query<Notification[], string>({
      query: (userId: string) => ({
        url: '/notification',
        params: {
          userId,
        },
      }),
    }),
  }),
});

export const { useGetNotificationsListQuery: useGetNotifications } = notificationsApi;
