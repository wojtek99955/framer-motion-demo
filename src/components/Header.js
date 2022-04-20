import { motion } from "framer-motion";
import styled from "styled-components";

const StyledHeader = styled.header`
  border-bottom: 1px solid white;
  position: fixed;
  width: 100%;
  display: flex;
  align-items: center;
  h2 {
    color: white;
    margin-left: 1rem;
  }

  svg {
    width: 50px;
    margin-left: 2rem;
  }
`;
const svgVariants = {
  from: {
    rotate: 120,
  },
  to: {
    rotate: 0,
    transition: { duration: 1 },
  },
};
const pathCircleVariants = {
  from: {
    opacity: 0,
    pathLength: 0,
  },
  to: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 0.7,
      ease: "easeInOut",
    },
  },
};
function Header() {
  return (
    <StyledHeader>
      <motion.svg
        variants={svgVariants}
        initial="from"
        animate="to"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        width="100"
        height="100"
      >
        <motion.path
          initial="from"
          animate="to"
          variants={pathCircleVariants}
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </motion.svg>
      <motion.h2 initial={{ y: -300 }} animate={{ y: 0 }}>
        Sunny Burgers
      </motion.h2>
    </StyledHeader>
  );
}

export default Header;
