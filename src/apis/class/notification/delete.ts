import { req } from "../../axiosInstance";
import type { globalResponse } from "../../../models";

export const notificationDelete = {
  classNotificationDelete: async (
    class_id: number,
    notification_id: number
  ): Promise<globalResponse<object>> => {
    await req.delete(`/classes/${class_id}/notification/${notification_id}`);
    return {
      success: true,
      data: {},
    };
  },
};