import axios from "axios";
import { useLoaderData, LoaderFunctionArgs } from "react-router-dom";
import CocktailList from "../components/CocktailList";
import SearchForm from "../components/SearchForm";
import { QueryClient, useQuery } from "@tanstack/react-query";

export type DrinksType = {
  idDrink: string;
  strDrink: string;
  strCategory: string;
  strAlcoholic: string;
  strGlass: string;
  strDrinkThumb: string;
  strIngredient1: string;
  strIngredient2?: string;
  strIngredient3?: string;
  strIngredient4?: string;
  strIngredient5?: string;
  strIngredient6?: string;
  strIngredient7?: string;
  strIngredient8?: string;
  strIngredient9?: string;
  strIngredient10?: string;
  strInstructions: string;
};

const cocktailSearchUrl: string =
  "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const searchCocktailsQuery = (searchTerm: string) => {
  return {
    queryKey: ["search", searchTerm || "all"],
    queryFn: async () => {
      const response = await axios.get(`${cocktailSearchUrl}${searchTerm}`);
      return response.data.drinks;
    },
  };
};

export const loader =
  (queryClient: QueryClient) =>
  async ({
    request,
  }: LoaderFunctionArgs): Promise<{
    searchTerm: string;
  }> => {
    // console.log(request);
    const url = new URL(request.url);
    // console.log(url);
    const searchTerm = url.searchParams.get("search") || "";

    await queryClient.ensureQueryData(searchCocktailsQuery(searchTerm));

    return { searchTerm };
  };

const Landing = () => {
  const { searchTerm } = useLoaderData() as {
    searchTerm: string;
  };
  // console.log(drinks);
  // console.log(searchTerm);

  const { data: drinks } = useQuery(searchCocktailsQuery(searchTerm));

  return (
    <>
      <SearchForm searchTerm={searchTerm} />
      <CocktailList drinks={drinks} />
    </>
  );
};

export default Landing;
