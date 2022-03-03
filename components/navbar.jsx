import NextLink from 'next/link';
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';

import ThemeToggleButton from './theme-toggle-button';
import Logo from './logo';

const LinkItem = ({ href, path, children }) => {
  const active = path === href;
  const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900');

  return (
    <NextLink passHref href={href}>
      <Link
        bg={active ? 'glassTeal' : undefined}
        color={active ? '#202023' : inactiveColor}
        p={2}>
        {children}
      </Link>
    </NextLink>
  );
};

const Navbar = props => {
  const { path } = props;

  return (
    <Box
      as="nav"
      bg={useColorModeValue('#ffffff40', '#20202380')}
      position="fixed"
      style={{ backdropFilter: 'blur(10px)' }}
      w="100%"
      zIndex={1}
      {...props}>
      <Container
        align="center"
        display="flex"
        justify="space-between"
        maxW="container.md"
        p={2}
        wrap="wrap">
        <Flex align="center" mr={5}>
          <Heading as="h1" letterSpacing={'tighter'} size="lg">
            <Logo />
          </Heading>
        </Flex>
        <Stack
          alignItems="center"
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          flexGrow={1}
          mt={{ base: 4, nmd: 0 }}
          width={{ base: 'full', md: 'auto' }}>
          <LinkItem href="/works" path={path}>
            Works
          </LinkItem>
          <LinkItem href="/posts" path={path}>
            Posts
          </LinkItem>
          <LinkItem
            alignItems="center"
            display="inline-flex"
            href="https://github.com/jefftarira/jefftarira-homepage"
            path={path}
            pl={2}
            style={{ gap: 4 }}
            target="_blank">
            Source
          </LinkItem>
        </Stack>

        <Box align="right" flex={1}>
          <ThemeToggleButton />
          <Box display={{ base: 'inline-block', md: 'none' }} ml={2}>
            <Menu>
              <MenuButton
                arial-label="Options"
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
              />
              <MenuList>
                <NextLink passHref href="/">
                  <MenuItem as={Link}>About</MenuItem>
                </NextLink>
                <NextLink passHref href="/works">
                  <MenuItem as={Link}>Works</MenuItem>
                </NextLink>
                <NextLink passHref href="/posts">
                  <MenuItem as={Link}>Post</MenuItem>
                </NextLink>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Navbar;
