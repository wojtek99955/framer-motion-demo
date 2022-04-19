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

function Toppings({ customBurger, setCustomBurger, nextPage }) {
  const toppingss = [
    "tomato",
    "onion",
    "double cheese",
    "double meat",
    "cucumber",
    "becon",
    "double vegan meat",
  ];
  return (
    <Container>
      <h1>Choose Toppings</h1>
      <ul>
        {toppingss.map((item, id) => {
          return (
            <motion.li
              key={id}
              onClick={() => {
                nextPage();
                setCustomBurger({
                  ...customBurger,
                  toppings: [...customBurger.toppings, item],
                });
              }}
              whileHover={{
                scale: 1.2,
                originX: 0,
                color: "#6e3301",
              }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              {item}
            </motion.li>
          );
        })}
      </ul>
    </Container>
  );
}

export default Toppings;
