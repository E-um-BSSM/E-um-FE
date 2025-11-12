import { req } from "../../axiosInstance";
import type { assignmentResponse, globalResponse } from "../../../models/index";

export const assignmentGET = {
  assignmentSearch: async (class_id: number): Promise<globalResponse<{ classes: assignmentResponse[] }>> => {
    const response = await req.get(`/classes/${class_id}/assignments`);
    const data = {
      classes: response.data.data.classes as assignmentResponse[],
    };
    return {
      ...response.data,
      data,
    };
  },
};
