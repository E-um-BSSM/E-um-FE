import { req } from "../../axiosInstance";
import type { globalResponse } from "../../../models";

export const joinDelete = {
  classJoinCancel: async (class_id: number): Promise<globalResponse<object>> => {
    await req.delete(`/classes/${class_id}/join`);
    return {
      success: true,
      data: {},
    };
  },
};
