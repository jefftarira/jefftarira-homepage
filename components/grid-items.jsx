import NextLink from 'next/link';
import Image from 'next/image';
import { Box, Text, LinkBox, LinkOverlay } from '@chakra-ui/react';
import { Global } from '@emotion/react';

export const GridItem = ({ children, href, title, thumbnail }) => {
  return (
    <Box align="center" w="100%">
      <LinkBox cursor="pointer">
        <Image
          alt={title}
          className="grid-item-tumbnail"
          loading="lazy"
          placeholder="blur"
          src={thumbnail}
        />
        <LinkOverlay href={href} target="_blank">
          <Text mt={2}>{title}</Text>
        </LinkOverlay>
        <Text fontSize={14}>{children}</Text>
      </LinkBox>
    </Box>
  );
};

export const WorkGridItem = ({ children, id, title, thumbnail }) => {
  return (
    <Box align="center" w="100%">
      <NextLink passHref href={`/works/${id}`}>
        <LinkBox cursor="pinter">
          <Image
            alt={title}
            className="grid-item-thumbnail"
            placeholder="blur"
            src={thumbnail}
          />
          <LinkOverlay href={`/work/${id}`}>
            <Text fontSize={20} mt={2}>
              {title}
            </Text>
          </LinkOverlay>
          <Text fontSize={14}>{children}</Text>
        </LinkBox>
      </NextLink>
    </Box>
  );
};

export const GridItemStyle = () => {
  return (
    <Global
      styles={`
    .grid-item-thumbnail {
      border-radius: 12px;
    }
  `}
    />
  );
};
