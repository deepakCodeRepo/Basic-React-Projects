import axios from "axios";
import {
  Link,
  useLoaderData,
  LoaderFunctionArgs,
  Navigate,
} from "react-router-dom";
import { type DrinksType } from "../pages/Landing";
import styled from "styled-components";
import { QueryClient, useQuery } from "@tanstack/react-query";

const cocktailDetailsUrl: string =
  "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const singleCocktailQuery = (id: string) => {
  return {
    queryKey: ["cocktail", id],
    queryFn: async () => {
      const response = await axios.get(`${cocktailDetailsUrl}${id}`);
      return response.data.drinks;
    },
  };
};

export const loader =
  (queryClient: QueryClient) =>
  async (
    data: LoaderFunctionArgs
  ): Promise<{
    id: string;
  }> => {
    // console.log(data);
    const { id } = data.params;

    if (!id) {
      throw new Error("ID is not defined");
    }

    await queryClient.ensureQueryData(singleCocktailQuery(id));

    return { id };
  };

const Cocktail = () => {
  const { id } = useLoaderData() as {
    id: string;
  };
  // console.log(singleCocktailQuery(id));
  const { data: drinks } = useQuery<DrinksType[]>(singleCocktailQuery(id));
  console.log(drinks);

  //NOTE: if there is an error u can navigate to any page u want or return a custom error msg
  if (!drinks) return <Navigate to="/" />;
  // if (!drinks)
  // return (
  //   <h4 style={{ textAlign: "center", fontSize: "2rem", color: "red" }}>
  //       No matching cocktail found with this ID:{id}...
  //     </h4>
  //   );

  const {
    // idDrink,
    strDrink,
    strAlcoholic,
    strCategory,
    strGlass,
    strDrinkThumb,
    strInstructions,
  } = drinks[0];

  //NOTE: ingredients vary for each cocktail, so i wrote this code to fetch them and add commas to all except the last one
  const ingredients = Object.entries(drinks[0])
    .filter((drink) => {
      if (drink[0].includes("strIngredient") && drink[1] !== null) {
        return drink;
      }
    })
    .map((drink, index, array) => {
      if (index !== array.length - 1) {
        return drink[1].concat(",");
      }
      return drink[1];
    });

  return (
    <Wrapper>
      <header>
        <Link to="/" className="btn">
          back home
        </Link>
        <h3>{strDrink}</h3>
      </header>
      <div className="drink">
        <img src={strDrinkThumb} alt={strDrink} />
        <div className="drink-info">
          <p>
            <span className="drink-info-titles">Name :</span>
            {strDrink}
          </p>
          <p>
            <span className="drink-info-titles">category :</span>
            {strCategory}
          </p>
          <p>
            <span className="drink-info-titles">info :</span>
            {strAlcoholic}
          </p>
          <p>
            <span className="drink-info-titles">glass :</span>
            {strGlass}
          </p>
          <p>
            <span className="drink-info-titles">ingredients :</span>
            {ingredients.map((ingredient, index) => {
              return (
                <span key={index} className="ingredients">
                  {ingredient}{" "}
                </span>
              );
            })}
          </p>
          <p>
            <span className="drink-info-titles">instructions :</span>
            {strInstructions}
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

export default Cocktail;

const Wrapper = styled.div`
  header {
    text-align: center;
    margin-bottom: 3rem;
    .btn {
      cursor: pointer;
      color: var(--white);
      background: var(--primary-500);
      border: transparent;
      border-radius: var(--borderRadius);
      letter-spacing: var(--letterSpacing);
      padding: 0.375rem 0.75rem;
      box-shadow: var(--shadow-1);
      transition: var(--transition);
      text-transform: capitalize;
      display: inline-block;
      margin-bottom: 1rem;
      text-decoration: none;
    }
    .btn:hover {
      background: var(--primary-700);
      box-shadow: var(--shadow-3);
    }
    h3 {
      font-size: clamp(1.25rem, 2.5vw, 2.5rem);
      font-weight: 400;
      line-height: 1;
      text-transform: capitalize;
      letter-spacing: var(--letterSpacing);
    }
  }
  .drink {
    display: grid;
    grid-template-rows: 2fr 3fr;
    gap: 3rem;
    align-items: center;
  }
  img {
    width: 100%;
    display: block;
    object-fit: cover;
    border-radius: var(--borderRadius);
  }
  .drink-info {
    padding-top: 0;
  }
  .drink-info p {
    font-weight: 700;
    text-transform: capitalize;
    line-height: 2;
    margin-bottom: 1rem;
  }
  .drink-info-titles {
    margin-right: 0.5rem;
    background: var(--primary-300);
    padding: 0.25rem 0.5rem;
    border-radius: var(--borderRadius);
    color: var(--primary-700);
    letter-spacing: var(--letterSpacing);
  }
  .ingredients {
    display: inline-block;
    margin-right: 0.5rem;
  }
  @media (min-width: 768px) {
    .drink {
      grid-template-columns: 2fr 3fr;
      gap: 3rem;
    }
  }
`;
