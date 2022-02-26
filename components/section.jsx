import { motion } from 'framer-motion';
import { chakra, shouldForwardProp } from '@chakra-ui/react';

const StyledDiv = chakra(motion.div, {
  shouldForwardProp: (prop) => {
    return shouldForwardProp(prop) || prop === 'transition';
  },
});

const Section = ({ children, delay = 0 }) => {
  return (
    <StyledDiv
      animate={{ y: 0, opacity: 1 }}
      initial={{ y: 10, opacity: 0 }}
      mb={6}
      transition={{ duration: 0.8, delay }}
    >
      {children}
    </StyledDiv>
  );
};

export default Section;
