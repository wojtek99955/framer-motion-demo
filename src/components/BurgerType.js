import styled from "styled-components";
import { motion } from "framer-motion";

const Container = styled.div`
  h1 {
    font-size: 4rem;
    color: white;
  }
  ul {
    margin: 2rem 0;
  }
  li {
    list-style-type: none;
    margin-bottom: 1rem;
    color: white;
    font-size: 1.5rem;
    cursor: pointer;
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

function BurgerType({ customBurger, setCustomBurger }) {
  return (
    <Container>
      <h1>Burger Type</h1>
      <ul>
        {burgerTypes.map((type, id) => {
          return (
            <motion.li
              key={id}
              onClick={() => setCustomBurger({ ...customBurger, type: type })}
              whileHover={{ scale: 1.3, originX: 0 }}
            >
              {type}
            </motion.li>
          );
        })}
      </ul>
    </Container>
  );
}

export default BurgerType;
