import { req } from "../../axiosInstance";
import type { globalResponse } from "../../../models";

export const classDelete = {
  classDelete: async (class_id: number): Promise<globalResponse<object>> => {
    await req.delete(`/classes/${class_id}`);
    return {
      success: true,
      data: {},
    };
  },
};
