import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../../../utils/react-query/axios";
import { Category } from "../newsInterface";
import { queryKeys } from "../../../utils/react-query/keys";

async function getCategory(): Promise<Category[]> {
  const { data } = await axiosInstance.get("news/categories/");
  return data;
}

export function useCategory(): Category[] {
  const fallback: Category[] | undefined = [];
  const { data = fallback } = useQuery([queryKeys.category], getCategory);
  return data;
}
