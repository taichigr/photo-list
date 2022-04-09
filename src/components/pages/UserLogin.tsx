import { Box, Button, FormControl, FormHelperText, FormLabel, Input, Stack } from "@chakra-ui/react"
import React,{ useContext, useState } from "react"
import { Header } from "../organisms/layout/Header"
import { AccountUserContextType, AccountUserContext } from "../../providers/AccountUserProvider"
import { useNavigate } from "react-router-dom"

export const UserLogin = () => {
  const navigate = useNavigate();

  const { accountUser, setAccountUser } = useContext<AccountUserContextType>(AccountUserContext)
  const [username, setUsername] = useState('');
  const onChangeInput = (event:any) => setUsername(event.target.value)
  console.log(username)
  const onClickAddUsername = () => {
    if(username === "") return
    setAccountUser({username: username})
    navigate('/')
  }
  return (
    <>
      <Header />
      <Box 
        w={["100%", "80%", "40%"]} 
        mr="auto" 
        ml="auto"
        borderWidth={"1px"}
        p="10"
        borderRadius={"5px"}
      >
      <FormControl>
        <Stack spacing={4}>
          <FormLabel 
            fontSize={"20px"} 
            textAlign={"center"} 
            htmlFor='username'
            >
              username
          </FormLabel>
          <Input id='username' type='text' onChange={onChangeInput} />
          <Button onClick={onClickAddUsername}>送信</Button>
          <FormHelperText>
            instagramのビジネスアカウント名を入力してください。
          </FormHelperText>
          <FormHelperText>
            ビジネスアカウントではない方もビジネスアカウントに切り替えればご利用できます。
          </FormHelperText>
        </Stack>
        
      </FormControl>
        
      </Box>
    </>
  )
}