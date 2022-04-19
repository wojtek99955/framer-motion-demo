import styled from "styled-components";
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

    &:hover {
      color: #6e3301;
    }
  }
`;

function Sauces({ customBurger, setCustomBurger }) {
  const sauces = ["Ketchup", "Mayonnaise", "Dijonnaise", "Sriracha", "Garlic"];
  return (
    <Container>
      <h1>Choose Sauce</h1>
      <ul>
        {sauces.map((sauce, id) => {
          return (
            <li
              onClick={() => {
                setCustomBurger({ ...customBurger, sauce: sauce });
              }}
              key={id}
            >
              {sauce}
            </li>
          );
        })}
      </ul>
    </Container>
  );
}

export default Sauces;
