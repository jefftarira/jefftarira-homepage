import { Container, Heading, SimpleGrid } from '@chakra-ui/react';

import Section from '../components/section';
import { WorkGridItem } from '../components/grid-items';
import thumbnailInkdrop from '../public/images/works/inkdrop_eyecatch.png';
import thumbWalknote from '../public/images/works/walknote_eyecatch.png';

const Works = () => {
  return (
    <Container>
      <Heading as="h3" fontSize={20} mb={4} p={3}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          {/* <WorkGridItem
            id="inkdrop"
            thumbnail={thumbnailInkdrop}
            title="Inkdrop">
            A markdown note-taking app with 100+ plugins, cross-platform and
            encrypted data sync support
          </WorkGridItem> */}
        </Section>
        <Section>
          {/* <WorkGridItem
            id="walknote"
            thumbnail={thumbWalknote}
            title="Walknote">
            Music recomendation app for iOS
          </WorkGridItem> */}
        </Section>
      </SimpleGrid>
    </Container>
  );
};

export default Works;
