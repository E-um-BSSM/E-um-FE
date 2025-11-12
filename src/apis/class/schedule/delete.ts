import { req } from "../../axiosInstance";
import type { globalResponse } from "../../../models";

export const scheduleDelete = {
  classScheduleDelete: async (
    class_id: number,
    schedule_id: number
  ): Promise<globalResponse<object>> => {
    await req.delete(`/classes/${class_id}/schedules/${schedule_id}`);
    return {
      success: true,
      data: {},
    };
  },
};