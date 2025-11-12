import { req } from "../../axiosInstance";
import type { globalResponse } from "../../../models/index";

export const assignmentDELETE = {
  assignmentDelete: async (class_id: number, assignment_id: number): Promise<globalResponse<object>> => {
    await req.delete(`/classes/${class_id}/assignments/${assignment_id}`);
    return {
      success: true,
      data: {},
    };
  },

  assignmentSubmitDelete: async (
    class_id: number,
    assignment_id: number,
    user_id: string,
  ): Promise<globalResponse<object>> => {
    await req.delete(`/classes/${class_id}/assignments/${assignment_id}/${user_id}`);
    return {
      success: true,
      data: {},
    };
  },
};
