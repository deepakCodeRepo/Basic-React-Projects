import styled from "styled-components";
import { type DrinksType } from "../pages/Landing";
import { Link } from "react-router-dom";

const CocktailCard = ({
  idDrink,
  strDrink,
  strAlcoholic,
  strGlass,
  strDrinkThumb,
}: DrinksType) => {
  return (
    <Wrapper>
      <div className="card">
        <img src={strDrinkThumb} alt={strDrink} />
        <div className="footer">
          <h4>{strDrink}</h4>
          <h5>{strGlass}</h5>
          <p>{strAlcoholic}</p>
          <Link to={`/cocktail/${idDrink}`} className="btn">
            details
          </Link>
        </div>
      </div>
    </Wrapper>
  );
};

export default CocktailCard;

const Wrapper = styled.article`
  .card {
    background: var(--white);
    box-shadow: var(--shadow-2);
    transition: var(--transition);
    display: grid;
    grid-template-rows: auto 1fr;
    border-radius: var(--borderRadius);
  }
  .card:hover {
    box-shadow: var(--shadow-4);
  }
  img {
    height: 15rem;
    width: 100%;
    object-fit: cover;
    display: block;
    border-top-left-radius: var(--borderRadius);
    border-top-right-radius: var(--borderRadius);
  }
  .footer {
    padding: 1.5rem;
    h4 {
      font-size: clamp(1rem, 2vw, 2rem);
      font-weight: 700;
      margin-bottom: 0.5rem;
      letter-spacing: var(--letterSpacing);
      line-height: 1;
      text-transform: capitalize;
    }
    h5 {
      font-size: clamp(0.875rem, 1.5vw, 1.5rem);
      font-weight: 400;
      letter-spacing: var(--letterSpacing);
      margin-bottom: 0.5rem;
      line-height: 1;
      text-transform: capitalize;
    }
    p {
      margin-bottom: 1rem;
      color: var(--grey-500);
    }
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
      text-decoration: none;
      display: inline-block;
    }
    .btn:hover {
      background: var(--primary-700);
      box-shadow: var(--shadow-3);
    }
  }
`;
