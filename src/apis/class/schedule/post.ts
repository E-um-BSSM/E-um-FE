import { req } from "../../axiosInstance";
import type { classScheduleRequset, globalResponse } from "../../../models";

export const schedulePost = {
  classScheduleRegister: async (
    class_id: number,
    body: classScheduleRequset
  ): Promise<globalResponse<{ schedule_id: number }>> => {
    const response = await req.post(`/classes/${class_id}/schedules`, body);
    return response.data;
  },
};