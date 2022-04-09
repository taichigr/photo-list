import { memo, ReactNode, useContext, useEffect, useState, VFC } from "react";
import { Header } from "../organisms/layout/Header";

import { Box, Button, Center, Grid, Link,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  FormControl,
  FormLabel,
  Input,
  FormHelperText, } from '@chakra-ui/react'
import { PhotoCard } from "../organisms/user/PhotoCard";
import { useAccountData } from "../../hooks/useAccountData";
import { AccountUserContext, AccountUserContextType } from "../../providers/AccountUserProvider";
import { useNavigate } from "react-router-dom";

// type Props = {
//   children: ReactNode;
//   disabled?: boolean;
//   loading?: boolean;
//   onClick: () => void;
// };

export const Index: VFC = memo(() => {
  const navigate = useNavigate()
  // モーダル用
  const { isOpen, onOpen, onClose } = useDisclosure()

  const { accountUser, setAccountUser } = useContext<AccountUserContextType>(AccountUserContext)
  
  const { getAccountData, accountData } = useAccountData()
  useEffect(() => {
    getAccountData(accountUser?.username)
  }, [])



  
  return (
    <>
    {/* モーダル */}
    <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>add a photo</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            この中で写真を追加する処理。リロードしたら消えて欲しい
            <FormControl>
              <FormLabel htmlFor='photo'>Photo file</FormLabel>
              <Input id='photo' type='file' multiple />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} >
              add
            </Button>
            <Button variant='ghost' onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>




      <Header />
      <Box as="div" mr="auto" ml="auto" w={{ lg: "992px", xl: "992px"}} pb={3}>
        <Center>
          <Button onClick={onOpen}>add a photo</Button>
        </Center>
      </Box>
      <Box as="div" mr="auto" ml="auto" w={{ lg: "992px", xl: "992px"}}>
        <Grid 
          templateColumns='repeat(3, 1fr)' 
          gap={["2px", "28px"]} 
          p={[0, "20px"]} 
          borderTop="2px" borderColor="gray.200"
        >
          {accountData.business_discovery.media.data.map((postData) => (
            <Link 
              key={postData.id} 
              onClick={() => navigate(`/detail?id=${postData.id}`)}
              >
              <PhotoCard postData={postData} />
            </Link>
          ))}
        </Grid>
      </Box>
    </>
  );
});
