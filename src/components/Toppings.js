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
  }
`;

function Toppings({ customBurger, setCustomBurger }) {
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
            <li
              key={id}
              onClick={() => {
                setCustomBurger({
                  ...customBurger,
                  toppings: [...customBurger.toppings, item],
                });
              }}
            >
              {item}
            </li>
          );
        })}
      </ul>
      <p>{customBurger.type}</p>
      <h3>{customBurger.toppings}</h3>
    </Container>
  );
}

export default Toppings;
