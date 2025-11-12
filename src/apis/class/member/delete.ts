import { req } from "../../axiosInstance";
import type { globalResponse } from "../../../models";

export const memberDelete = {
  memberDisagree: async (
    class_id: number
  ): Promise<globalResponse<object>> => {
    await req.delete(`/classes/${class_id}/disagree`);
    return {
      success: true,
      data: {},
    };
  },
  memberKick: async (
    class_id: number
  ): Promise<globalResponse<object>> => {
    await req.delete(`/classes/${class_id}/members`);
    return {
      success: true,
      data: {},
    };
  },
};