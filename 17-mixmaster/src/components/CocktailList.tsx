import styled from "styled-components";
import { type DrinksType } from "../pages/Landing";
import CocktailCard from "./CocktailCard";
import { useOutletContext } from "react-router-dom";

const CocktailList = ({ drinks }: { drinks: DrinksType[] }) => {
  const globalOutletData = useOutletContext();
  // console.log(globalOutletData);

  if (!drinks) {
    return (
      <h4 style={{ textAlign: "center" }}>No matching cocktails found...</h4>
    );
  }

  return (
    <Wrapper>
      {drinks.map((drink) => {
        return <CocktailCard key={drink.idDrink} {...drink} />;
      })}
    </Wrapper>
  );
};

export default CocktailList;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
`;
