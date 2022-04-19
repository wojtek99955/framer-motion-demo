import { motion } from "framer-motion";
import styled from "styled-components";

const StyledHeader = styled.header`
  border-bottom: 1px solid white;
  position: fixed;
  width: 100%;
  padding: 1.5rem 0;
  h2 {
    color: white;
    margin-left: 1rem;
  }
`;
function Header() {
  return (
    <StyledHeader>
      <motion.h2 initial={{ y: -300 }} animate={{ y: 0 }}>
        Premium Burgers
      </motion.h2>
    </StyledHeader>
  );
}

export default Header;
