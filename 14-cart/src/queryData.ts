import axios from "axios";
import { useQuery } from "react-query";

const URL: string = "https://www.course-api.com/react-useReducer-cart-project";

const useCustomQuery = () => {
  const { isLoading, data, isError, error } = useQuery({
    queryKey: ["cartList"],
    queryFn: async () => {
      const { data } = await axios.get(URL);
      return data;
    },
  });
  return { isLoading, data, isError, error };
};

export default useCustomQuery;
