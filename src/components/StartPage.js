import styled from "styled-components";

const Section = styled.section`
  background-color: #fc811b;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Main = styled.main`
  h1 {
    text-align: center;
    font-size: 4rem;
    margin-bottom: 2.5rem;
    color: white;
  }
  button {
    border: none;
    padding: 1rem 1.5rem;
    font-size: 1.5rem;
    display: block;
    margin: auto;
    border-radius: 12px;
    font-weight: 600;
  }
`;

function StartPage() {
  return (
    <Section>
      <Main>
        <h1>Create Your Burger</h1>
        <button>Create Now</button>
      </Main>
    </Section>
  );
}

export default StartPage;
