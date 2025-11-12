import { req } from "../../axiosInstance";
import type { classNotificationRequest, classNotificationResponse, globalResponse } from "../../../models";

export const notificationPost = {
  classNotificationRegister: async (
    class_id: number,
    body: classNotificationRequest
  ): Promise<globalResponse<classNotificationResponse>> => {
    const response = await req.post(`/classes/${class_id}/notification`, body);
    return response.data;
  },
};