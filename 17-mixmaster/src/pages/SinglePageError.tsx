import { useRouteError } from "react-router-dom";

const SinglePageError = () => {
  const error = useRouteError() as { message: string };
  console.log(error);
  return <h3>{error.message}</h3>;
};

export default SinglePageError;
