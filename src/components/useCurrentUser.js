import { useQuery } from "@tanstack/react-query";
import { getUserProfile } from "../api/auth";

const useCurrentUser = () => {
  const fetchUser = async () => {
    const token = localStorage.getItem("accessToken");
    const data = await getUserProfile(token);
    return data;
  };

  return useQuery({
    queryKey: ["user"],
    queryFn: fetchUser,
  });
};

export default useCurrentUser;
