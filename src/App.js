import GlobalStyle from "./assets/globalStyle/globalStyle";
import styled from "styled-components";
import { useState } from "react";
import Page from "./components/Page";
import Header from "./components/Header";

const Section = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  button {
    border: none;
    padding: 1rem 1.5rem;
    font-size: 1.5rem;
    display: block;
    margin: auto;
    border-radius: 12px;
    font-weight: 600;
    cursor: pointer;
  }
`;

const BtnsContainer = styled.div`
  display: flex;
  gap: 2rem;
`;

function App() {
  const [page, setPage] = useState(0);
  const nextPage = () => {
    setPage((prev) => prev + 1);
  };
  const previousPage = () => {
    setPage((prev) => prev - 1);
  };
  return (
    <>
      <GlobalStyle />
      <Header />
      <Section>
        <Page page={page} nextPage={nextPage} previousPage={previousPage} />
        {page === 0 ? <button onClick={nextPage}>Next Step</button> : null}
        {page > 0 ? (
          <BtnsContainer>
            <button onClick={previousPage}>Prev</button>
            <button onClick={nextPage} disabled={page === 4 ? true : false}>
              Next
            </button>
          </BtnsContainer>
        ) : null}
      </Section>
    </>
  );
}

export default App;
