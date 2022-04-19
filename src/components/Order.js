import styled from "styled-components";

const Container = styled.div`
  h1 {
    font-size: 4rem;
    color: white;
    text-align: center;
    margin-bottom: 2rem;
  }
`;

const OrderContainer = styled.div`
  background-color: white;
  padding: 4rem 2rem;
  border-radius: 10px;
  max-width: 600px;
  h2 {
    font-size: 2rem;
    margin: 2rem 0;
    text-align: center;
    color: #fc811b;
  }
  p {
    margin-bottom: 1rem;
    color: grey;
    font-size: 1.3rem;
  }
  button {
  }
`;

function Order({ customBurger }) {
  return (
    <Container>
      <h1>Your Order</h1>
      <OrderContainer>
        <h2>{customBurger.type}</h2>
        <p>Toppings: {customBurger.toppings.join(", ")}</p>
        <p>Sauce: {customBurger.sauce}</p>
        <button>Checkout</button>
      </OrderContainer>
    </Container>
  );
}

export default Order;
