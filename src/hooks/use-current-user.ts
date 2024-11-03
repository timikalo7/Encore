import { useSession } from "next-auth/react";

export const useCurrentUser = () => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return { user: null, isLoading: true, error: null };
  }

  if (status === "unauthenticated") {
    return { user: null, isLoading: false, error: "Not authenticated" };
  }

  return {
    user: session?.user || null,
    isLoading: false,
    error: null,
  };
};
