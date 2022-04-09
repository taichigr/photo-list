import { HamburgerIcon } from "@chakra-ui/icons";
import { Box, Button, Drawer, DrawerBody, DrawerOverlay, Flex, Heading, IconButton, Link, useDisclosure } from "@chakra-ui/react";
import { memo, ReactNode, VFC } from "react";
import { useNavigate } from "react-router-dom";

// type Props = {
//   children: ReactNode;
//   disabled?: boolean;
//   loading?: boolean;
//   onClick: () => void;
// };

export const Header: VFC = memo(() => {
  const navigate = useNavigate()
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        padding={{ base: 3, md: 5 }}
      >
        <Flex
          align="center"
          as="a"
          mr={8}
          _hover={{ cursor: "pointer" }}
          // onClick={}
        >
          <Heading as="h1" fontSize={{ base: "md", md: "lg" }}>
            <Link onClick={() => navigate('/')}>Chanstagram</Link>
          </Heading>
        </Flex>
        <Flex
          align="center"
          fontSize="sm"
          flexGrow={2}
          display={{ base: "none", md: "flex" }}
        >
          <Box pr={4}>
            <Link onClick={() => navigate('/')}>TOP</Link>
          </Box>
        </Flex>
        <IconButton 
          aria-label="メニューボタン"
          icon={<HamburgerIcon />}
          size="sm"
          variant="unstyled"
          display={{ base: "block", md: "none" }}
          onClick={onOpen}
        />
      </Flex>
      <Drawer 
        placement="left" 
        size="md" 
        onClose={onClose} 
        isOpen={isOpen}
        >
        <DrawerOverlay>
          <DrawerBody p={0} bg="gray.100">
            <Button w="100%" onClick={() => navigate('/')}>TOP</Button>
            {/* <Button w="100%">ユーザー一覧</Button>
            <Button w="100%">設定</Button> */}
          </DrawerBody>
        </DrawerOverlay>
      </Drawer>
    </>
  );
});
