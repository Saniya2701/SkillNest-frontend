import { apiConnector } from "../apiConnector";

export const getAllCategories = async () => {
  try {
    const response = await apiConnector(
      "GET",
      "/api/v1/course/showAllCategories"   // adjust if your route differs
    );

    return response?.data?.data;
  } catch (error) {
    console.log("GET ALL CATEGORIES API ERROR", error);
  }
};