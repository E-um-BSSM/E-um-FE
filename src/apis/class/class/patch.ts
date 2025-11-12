import { req } from "../../axiosInstance";
import type { classRequest, classResponse, globalResponse } from "../../../models";

export const classPatch = {
  classUpdate: async (class_id: number, body: classRequest): Promise<globalResponse<classResponse>> => {
    const response = await req.patch(`/classes/${class_id}`, body);
    return response.data;
  },
};
