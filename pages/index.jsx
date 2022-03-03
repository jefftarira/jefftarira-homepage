import NextLink from 'next/link';
import {
  Button,
  Container,
  Box,
  Heading,
  Image,
  useColorModeValue,
} from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';

import Section from '../components/section';
import Paragraph from '../components/paragraph';
import { BioSection, BioYear } from '../components/bio';

const Page = () => {
  return (
    <Container>
      <Box
        align="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        borderRadius="lg"
        mb={6}
        mt={3}
        p={3}>
        Hello, I&apos;m full-stack developer based in Ecuador!
      </Box>
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Jefferson Tarira
          </Heading>
          <p>Digital Enthusiast ( Developer / Designer )</p>
        </Box>
        <Box
          align="center"
          flexShrink={0}
          ml={{ md: 6 }}
          mt={{ base: 4, md: 0 }}>
          <Image
            alt="Profile Image"
            borderColor="whiteAlpha.800"
            borderRadius="full"
            borderStyle="solid"
            borderWidth={2}
            display="inline-block"
            maxWidth="100px"
            src="/images/jeff.png"
          />
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          Jefferson is a full-stack developer based en Guayaquil with a passion
          for building digital services/stuff he wants. He has a knack for all
          things launching products, from planning and designing all the way to
          solving real-life problems with code.
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink passHref href="/works">
            <Button colorScheme="teal" rightIcon={<ChevronRightIcon />}>
              My portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>1989</BioYear>
          Born in Guayaquil, Ecuador.
        </BioSection>
        <BioSection>
          <BioYear>2012 to present</BioYear>
          Works as a Software engineer at Plastimet S.A.
        </BioSection>
        <BioSection>
          <BioYear>2019</BioYear>
          Completed a degree in computer systems engineering at the University
          of Guayaquil.
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>Music, Video Games, Mobile Tech, Code</Paragraph>
      </Section>
    </Container>
  );
};

export default Page;
