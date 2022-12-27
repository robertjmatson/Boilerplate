import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function queryErrorHandler(error: unknown): void {
  // error is type unknown because in js, anything can be an error (e.g. throw(5))
  const title =
    error instanceof Error ? error.message : "error connecting to server";
}
export const defaultQueryClientOptions = {
  queries: {
    onError: queryErrorHandler,
    staleTime: 600000, // 10 minutes
    cacheTime: 900000, // default cacheTime is 5 minutes; doesn't make sense for staleTime to exceed cacheTime
    refetchOnMount: false,
    refetchOnWindowFocus: true,
    refetchOnReconnect: true,
    retry: false,
  },
  mutations: {
    onError: queryErrorHandler,
  },
};

export const queryClient = new QueryClient({
  defaultOptions: defaultQueryClientOptions,
});
