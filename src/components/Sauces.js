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

function Sauces({ customBurger, setCustomBurger, nextPage }) {
  const sauces = ["Ketchup", "Mayonnaise", "Dijonnaise", "Sriracha", "Garlic"];
  return (
    <Container>
      <h1>Choose Sauce</h1>
      <ul>
        {sauces.map((sauce, id) => {
          return (
            <motion.li
              onClick={() => {
                nextPage();
                setCustomBurger({ ...customBurger, sauce: sauce });
              }}
              key={id}
              whileHover={{
                scale: 1.2,
                originX: 0,
                color: "#6e3301",
              }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              {sauce}
            </motion.li>
          );
        })}
      </ul>
    </Container>
  );
}

export default Sauces;
