import { Box, Center, Flex, Image, Link, Text } from "@chakra-ui/react"
import { useAccountData } from "../../hooks/useAccountData"
import { CardHeader } from "../molecules/CardHeader"
import { Header } from "../organisms/layout/Header"

import { useLocation, useNavigate } from 'react-router-dom'
import { useContext, useEffect } from "react"
import { TargetMediaData } from "../../types/api/acount"
import { AccountUserContext, AccountUserContextType } from "../../providers/AccountUserProvider"
import { AccountDataContext, AccountDataContextType } from "../../providers/AccountDataProvider"


export const Detail = () => {
  const navigate = useNavigate()
  const { accountUser } = useContext<AccountUserContextType>(AccountUserContext);
  const { accountData } = useContext<AccountDataContextType>(AccountDataContext);

  console.log(accountUser);
  console.log(accountData);




  const { getAccountData } = useAccountData();
  useEffect(() => {
    getAccountData(accountUser?.username)
  }, []);
  useEffect(() => getAccountData(accountUser?.username), []);
  const search = useLocation().search;
  const query = new URLSearchParams(search);
  const targetData: TargetMediaData | undefined = accountData?.business_discovery.media.data.find(account => account.id === query.get('id'))

  console.log(targetData)
  return (
    <>
    <Header />
        <Box>
          <Center as="div">
            {/* カード */}
            <Box p={{base: 0, xl: 5}}>
              <Box borderWidth="1px" borderRadius="1px">
                {/* カードのヘッダー */}
                <Box display={{sm: 'block', md: 'none' ,xl: 'none'}}>
                  <CardHeader />
                </Box>
                {/* カードのボディ */}
                <Box w={ ['100%', 778, 778, 860] } display={{md: "flex", xl: "flex"}}>
                {/* imagebox */}
                  <Box as="div" w={ ['100%', 443, 443, 523] } >
                    <Image 
                          boxSize="100%"
                          src={typeof targetData?.thumbnail_url !== 'undefined' ? targetData.thumbnail_url: targetData?.media_url}
                          
                    />
                  </Box>

                  {/* captionbox */}
                  <Box w={{md: 334,xl: 334}}>
                    <Box display={{base: "none", md: "block", xl: "block"}}>
                      <Box p="16px">
                        <Flex
                          h="60px" 
                          lineHeight={"60px"} 
                          alignItems="center"
                        >
                          <Link onClick={() => navigate('/')}>
                            <Box>
                              <Image 
                                src="https://source.unsplash.com/random" 
                                boxSize="32px"
                                borderRadius="full"
                              />
                            </Box>
                          </Link>
                          
                          <Box w="133px" ml="14px">
                            <Box>
                              <Link onClick={() => navigate('/')}>Topに戻る</Link>
                            </Box>
                          </Box>
                        </Flex>
                      </Box>
                    </Box>
                    <Box p="16px">
                      <Text>
                          {targetData?.caption}
                      </Text>
                    </Box>
                    <Box p="16px">
                      <Text>
                          #tag #tagarea #note #book #vintage
                      </Text>
                    </Box>
                  </Box>        
                </Box>
              </Box>
            </Box>
            
          </Center>
        </Box>
    

            {/* パソコン・タブレット用のレイアウトを別で作っても良いかも */}
            {/* パソコン・タブレットの時で場合わけしてこれらを表示 */}

    {/* <Center>
      <Flex w={ ['100%', 778, 778, 935] } display={{ md: 'none', lg: 'flex'}}>
          imagebox
        <Box as="div" w={ ['100%', 778, 778, 935] } >
          <Image boxSize="100%"
                  src="https://source.unsplash.com/random" 
          />
        </Box>
          captionbox
        <Box w={{xl: 334}}>
          <Text>
            テクストテクストテクストテクストテクストテクストテクストテクストテクストテクストテクストテクストテクストテクストテクストテクストテクストテクストテクストテクストテクストテクストテクストテクストテクストテクストテクストテクスト
          </Text>
        </Box>        
      </Flex>
    </Center> */}
    
    </>
  )
}