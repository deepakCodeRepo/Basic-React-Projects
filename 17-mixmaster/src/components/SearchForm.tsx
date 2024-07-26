import { Form, useNavigation } from "react-router-dom";
import styled from "styled-components";

const SearchForm = ({ searchTerm }: { searchTerm: string }) => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <Wrapper>
      <Form className="form">
        <input
          type="search"
          className="form-input"
          name="search"
          defaultValue={searchTerm}
        />
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "searching..." : "search"}
        </button>
      </Form>
    </Wrapper>
  );
};

export default SearchForm;

const Wrapper = styled.div`
  margin-bottom: 6rem;
  .form {
    display: grid;
    grid-template-columns: 1fr auto;
    width: 100%;
    max-width: var(--fixed-width);
    background: var(--white);
    border-radius: var(--borderRadius);
    box-shadow: var(--shadow-2);
    padding: 2rem 2.5rem;
    margin: 3rem auto;
  }
  .form-input {
    width: 100%;
    padding: 0.375rem 0.75rem;
    border-radius: var(--borderRadius);
    background: var(--backgroundColor);
    border: 1px solid var(--grey-200);
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
  }
  button {
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
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
  }
  button:hover {
    background: var(--primary-700);
    box-shadow: var(--shadow-3);
  }
`;
