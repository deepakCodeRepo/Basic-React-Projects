import { Link, useRouteError } from "react-router-dom";
import Wrapper from "../wrappers/ErrorPage";
import errorImg from "../assets/not-found.svg";

type ErrorType = {
  date: string;
  status: number;
};

const Error = () => {
  const error = useRouteError() as ErrorType;
  //   console.log(error);

  if (error.status === 404) {
    return (
      <Wrapper>
        <div>
          <img src={errorImg} alt="not found" />
          <h3>Ohh!</h3>
          <p>We can't find the page you are looking for</p>
          <Link to="/">Back Home</Link>
        </div>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <h3>something went wrong</h3>
    </Wrapper>
  );
};

export default Error;
