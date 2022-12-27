export function Profile() {
  return <h1>Profile</h1>;
}

import axios from "axios";
import { useQuery, useQueryClient } from "@tanstack/react-query";

const fetchSites = async (email: string) => {
  const response = await axios.get(`api/users/${email}`);
  return response;
};

const useSites = (email: string) => {
  return useQuery(["sites", email], () => fetchSites(email));
};

export { useSites };
