import { useQuery } from "@tanstack/react-query";
import useAxious from "./useAxious";

const useOparation = () => {
  const AxiousURL = useAxious();

  const { data: myBlogs = [],  } = useQuery({
    queryKey: ["myBlogs"],
    queryFn: async () => {
      const res = await AxiousURL.get(`/blogs`,{ withCredentials: true }); // ✅ match backend
      return res.data;
    },
  });

   const { data: myFeedBacks = [] } = useQuery({
  queryKey: ["myFeedBacks"],
  queryFn: async () => {
    const res = await AxiousURL.get(`/feedbacks`,{ withCredentials: true });
      return res.data 
  },
});

   

  return { myBlogs,myFeedBacks };
};

export default useOparation;
