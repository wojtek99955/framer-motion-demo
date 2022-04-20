import GlobalStyle from "./assets/globalStyle/globalStyle";
import styled from "styled-components";
import { useState } from "react";
import Page from "./components/Page";
import Header from "./components/Header";
import { motion } from "framer-motion";

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

const PagesContainer = styled.div`
  width: 700px;
  height: 600px;
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
      <Section
        as={motion.section}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <PagesContainer>
          <Page page={page} nextPage={nextPage} previousPage={previousPage} />
        </PagesContainer>
        {page === 0 ? (
          <motion.button
            whileHover={{
              scale: [1, 1.2, 1],
              transition: { yoyo: Infinity, duration: 0.6 },
            }}
            onClick={nextPage}
          >
            Next Step
          </motion.button>
        ) : null}
        {page > 0 ? (
          <BtnsContainer>
            <motion.button whileHover={{ scale: 1.2 }} onClick={previousPage}>
              Prev
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.2 }}
              onClick={nextPage}
              disabled={page === 4 ? true : false}
            >
              Next
            </motion.button>
          </BtnsContainer>
        ) : null}
      </Section>
    </>
  );
}

export default App;
