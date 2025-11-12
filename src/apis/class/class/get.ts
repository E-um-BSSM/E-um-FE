import { req } from "../../axiosInstance";
import type { classResponse, globalResponse } from "../../../models";

export const classGet = {
  classSingleSearch: async (class_id: number): Promise<globalResponse<classResponse>> => {
    const response = await req.get(`/classes/search/${class_id}`);
    return response.data;
  },
};
