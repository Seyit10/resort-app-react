import { SearchState } from "@/Pages/SearchPage";
import { ResortSearchResponse, ResortType } from "@/types";
import { useQuery } from "react-query";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const useGetResort = (resortId?: string) => {
  const getResortByIdRequest = async (): Promise<ResortType> => {
    const response = await fetch(`${API_BASE_URL}/api/resort/${resortId}`);

    if (!response.ok) {
      throw new Error("Resort fail");
    }

    return response.json();
  };

  const { data: resort, isLoading } = useQuery(
    "fetchResort",
    getResortByIdRequest,
    {
      enabled: !!resortId,
    }
  );

  return { resort, isLoading };
};

export const useSearchResorts = (searchState: SearchState, city?: string) => {
  const params = new URLSearchParams();
  params.set("searchQuery", searchState.searchQuery);
  params.set("page", searchState.page.toString());

  const createSearchRequest = async (): Promise<ResortSearchResponse> => {
    const response = await fetch(
      `${API_BASE_URL}/api/resort/search/${city}?${params.toString()}`
    );

    if (!response.ok) {
      throw new Error("resort getirilemedi");
    }

    return response.json();
  };

  const { data: results, isLoading } = useQuery(
    ["searchResorts",city,   searchState],
    createSearchRequest,
    { enabled: !!city }
  );

  return {
    results,
    isLoading,
  };
};
