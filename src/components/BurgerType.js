import styled from "styled-components";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";

const Container = styled.div`
  h1 {
    font-size: 4rem;
    color: white;
    text-align: center;
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

function BurgerType({ customBurger, setCustomBurger, nextPage }) {
  console.log(customBurger);
  return (
    <AnimatePresence exitBeforeEnter>
      <Container
        as={motion.div}
        exit={{ x: "100vw" }}
        initial={{ x: "-10vw", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
      >
        <motion.h1 initial={{ x: "-100vw" }} animate={{ x: 0 }}>
          Burger Type
        </motion.h1>
        <ul>
          {burgerTypes.map((type, id) => {
            return (
              <motion.li
                key={id}
                onClick={() => {
                  nextPage();
                  setCustomBurger({ ...customBurger, type: type });
                }}
                whileHover={{
                  scale: 1.2,
                  originX: 0,
                  color: "#6e3301",
                }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                {type}
              </motion.li>
            );
          })}
        </ul>
      </Container>
    </AnimatePresence>
  );
}

export default BurgerType;
