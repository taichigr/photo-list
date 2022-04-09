import { Box, Flex, Image, Link } from "@chakra-ui/react";

export const CardHeader = () => {
  return (
    <>
      <Flex 
        h="60px" 
        lineHeight={"60px"} 
        alignItems="center" 
        borderBottomWidth={"1px"}
        pr="4px"
        pl="16px"
        pt="14px"
        pb="16px"
      >
        <Flex
          h="60px" 
          lineHeight={"60px"} 
          alignItems="center"
        >
          <Box>
            <Image 
              src="https://source.unsplash.com/random" 
              boxSize="32px"
              borderRadius="full"
            />
          </Box>
          <Box w="133px" ml="14px">
            <Box>
              <Link>taichi_nishiguchi</Link>
            </Box>
          </Box>
          {/* <Flex h="60px" 
                lineHeight={"60px"} 
                alignItems="center"
          >
            <Box><Box>・</Box></Box>
            <Button bg="#fafafa" pl="0" pr="0" >フォロー</Button>
          </Flex>
          <Button lineHeight={'60px'} >・</Button> */}
        </Flex>
        
      </Flex>
    </>
  );
}