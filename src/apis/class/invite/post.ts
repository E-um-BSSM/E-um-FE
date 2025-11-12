import { req } from "../../axiosInstance";
import type { globalResponse } from "../../../models";

export const invitePOST = {
  classInviteCodeCreate: async (class_id: number): Promise<globalResponse<object>> => {
    await req.post(`/classes/${class_id}/invite`);
    return {
      success: true,
      data: {},
    };
  },
};
