import type { Property } from "@/types/propertyType";
import { response_helper_props } from "@/types/types";
import axios, { AxiosError } from "axios";

export const getAllProperty = async (
  page: number
): Promise<response_helper_props<Property>> => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/properties?page=${page}&rows=20`,
      { headers: { "Content-Type": "application/json" } }
    );

    console.log(response.data);
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error("Axios error:", error.response?.data || error.message);
      throw new Error(
        error.response?.data?.message || "Failed to fetch properties"
      );
    } else {
      console.error("Unexpected error:", error);
      throw new Error("Unexpected error occurred");
    }
  }
};
