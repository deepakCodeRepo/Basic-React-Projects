import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useGlobalContext } from "./context";

type QueryDataType = {
  id: string;
  urls: { regular: string };
  alt_description: string;
};

const URL: string = `https://api.unsplash.com/search/photos?client_id=${
  import.meta.env.VITE_API_KEY
}`;

const Gallery = () => {
  const { searchText } = useGlobalContext();

  const { data, isLoading, isError, error } = useQuery<QueryDataType[], Error>({
    queryKey: ["images", searchText],
    queryFn: async (): Promise<QueryDataType[]> => {
      const response = await axios.get(`${URL}&query=${searchText}`);
      //   console.log(response.data);
      return response.data.results;
    },
  });

  if (isLoading) {
    return <h1 className="loading">Loading...</h1>;
  }

  if (data?.length === 0) {
    return <h1 className="not-found">No Results Found...</h1>;
  }
  //   console.log(data);

  if (isError) {
    let customError = "An Error has occurred";
    if (error instanceof Error) {
      customError = error.message;
    }
    return <h1 className="error">{customError}</h1>;
  }

  return (
    <section className="image-container">
      {data?.map((item) => {
        return (
          <img
            key={item?.id}
            src={item?.urls?.regular}
            alt={item?.alt_description}
            className="img"
          />
        );
      })}
    </section>
  );
};

export default Gallery;
