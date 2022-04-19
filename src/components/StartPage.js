import styled from "styled-components";
import burger from "../assets/img/burger.png";
import { motion } from "framer-motion";

const Main = styled.main`
  h1 {
    text-align: center;
    font-size: 4rem;
    margin-bottom: 2.5rem;
    color: white;
  }
  img {
    margin: auto;
    display: block;
    margin-bottom: 3rem;
  }
`;

function StartPage() {
  return (
    <Main>
      <motion.img animate={{ y: 100 }} src={burger} alt="burger" />
      <h1>Create Your Burger</h1>
    </Main>
  );
}

export default StartPage;
