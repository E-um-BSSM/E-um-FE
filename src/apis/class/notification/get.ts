import { req } from "../../axiosInstance";
import type { classNotificationResponse, globalResponse } from "../../../models";

export const notificationGET = {
  classNotificationSearch: async (
    class_id: number
  ): Promise<globalResponse<{ notifications: classNotificationResponse[] }>> => {
    const response = await req.get(`/classes/${class_id}/notification`);
    const data = {
      notifications: response.data.data.notifications as classNotificationResponse[],
    };
    return { ...response.data, data };
  },
};