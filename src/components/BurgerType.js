import styled from "styled-components";
import { motion } from "framer-motion";

const Container = styled.div`
  h1 {
    font-size: 3rem;
    color: white;
  }
  ul {
    margin: 2rem 0;
  }
  li {
    list-style-type: none;
    margin-bottom: 1rem;
    color: white;
  }
`;

const burgerTypes = [
  "Hamburger",
  "Cheeseburger",
  "Chcken Burger",
  "FishBurger",
  "Vege Burger",
  "BigBurger",
];

function BurgerType() {
  return (
    <Container>
      <h1>BurgerType</h1>
      <ul>
        {burgerTypes.map((type, id) => {
          return <li key={id}>{type}</li>;
        })}
      </ul>
    </Container>
  );
}

export default BurgerType;
