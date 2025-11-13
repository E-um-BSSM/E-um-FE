import { req } from "../../axiosInstance";
import type { assignmentSearchResponse, globalResponse } from "../../../models/index";

export const assignmentGET = {
  assignmentSearch: async (class_id: number): Promise<globalResponse<{ assignments: assignmentSearchResponse[] }>> => {
    const response = await req.get(`/classes/${class_id}/assignments`);
    const data = {
      assignments: response.data.data.assignments as assignmentSearchResponse[],
    };
    return {
      ...response.data,
      data,
    };
  },
};
