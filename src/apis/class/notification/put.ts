import { req } from "../../axiosInstance";
import type { classNotificationRequest, classNotificationResponse, globalResponse } from "../../../models";

export const notificationPut = {
  classNotificationUpdate: async (
    class_id: number,
    notification_id: number,
    body: classNotificationRequest
  ): Promise<globalResponse<classNotificationResponse>> => {
    const response = await req.put(`/classes/${class_id}/notification/${notification_id}`, body);
    return response.data;
  },
};