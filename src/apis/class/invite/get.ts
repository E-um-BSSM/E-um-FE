import { req } from "../../axiosInstance";
import type { globalResponse } from "../../../models";

export const inviteGet = {
  classInviteCodeGet: async (class_id: number): Promise<globalResponse<{ class_code: number }>> => {
    const response = await req.get(`/classes/${class_id}/invite`);
    return response.data;
  },
};
