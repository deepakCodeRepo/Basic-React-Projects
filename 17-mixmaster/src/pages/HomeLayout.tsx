import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../components/Navbar";
import styled from "styled-components";

const HomeLayout = () => {
  const navigation = useNavigation();
  // console.log(navigation);
  const isPageLoading = navigation.state === "loading";
  const globalOutletValue = "some value";

  return (
    <div>
      <Navbar />
      <Wrapper>
        {isPageLoading ? (
          <p style={{ textAlign: "center", fontSize: "4rem" }}>Loading...</p>
        ) : (
          <Outlet context={{ globalOutletValue }} />
        )}
      </Wrapper>
    </div>
  );
};

export default HomeLayout;

const Wrapper = styled.section`
  width: var(--view-width);
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 5rem 2rem;
`;
