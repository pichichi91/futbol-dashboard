import styled from "styled-components"

import { BrowserRouter } from "react-router-dom";
import { Navbar, ContentWrapper } from "./components"

const App = () => {
  return (
    <BrowserRouter>
      <AppContainer>
        <Wrapper>
          <Navbar />
          <ContentWrapper />
        </Wrapper>
      </AppContainer>
    </BrowserRouter>
  );
}


const AppContainer = styled.div`
  height: 100%;
  min-height: 100vh;

`

const Wrapper = styled.div`
    padding-left: 100px;
    @media screen and (max-width: 600px) {
      padding-left: 0;
      }

`

export default App;
