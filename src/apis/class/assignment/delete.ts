import { req } from "../../axiosInstance";
import type { globalResponse } from "../../../models/index";

export const assignmentDELETE = {
  assignmentDelete: async (class_id: number, assignment_id: number): Promise<globalResponse<object>> => {
    await req.delete(`/classes/${class_id}/${assignment_id}`);
    return {
      success: true,
      data: {},
    };
  },

  assignmentSubmitDelete: async (class_id: number, assignment_id: number): Promise<globalResponse<object>> => {
    await req.delete(`/classes/${class_id}/${assignment_id}/submit`);
    return {
      success: true,
      data: {},
    };
  },
};
