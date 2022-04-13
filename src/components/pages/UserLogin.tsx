import { Box, Button, FormControl, FormHelperText, FormLabel, Input, Stack } from "@chakra-ui/react"
import React,{ ChangeEvent, KeyboardEvent, useContext, useState } from "react"
import { Header } from "../organisms/layout/Header"
import { AccountUserContextType, AccountUserContext } from "../../providers/AccountUserProvider"
import { useNavigate } from "react-router-dom"

export const UserLogin = () => {
  const navigate = useNavigate();

  const { accountUser, setAccountUser } = useContext<AccountUserContextType>(AccountUserContext);
  console.log(accountUser);
  const [inputname, setInputname] = useState('');
  const [isComposed, setIsComposed] = useState(false);


  const onChangeInput = (event: ChangeEvent<HTMLInputElement> ) => setInputname(event.target.value);
  console.log(accountUser?.username);
  const onClickAddUsername = () => {
    console.log('発火')
    if(inputname === "") return;
    setAccountUser({username: inputname});
    navigate('/');
  }

  const onKeyDownEnter = (e:KeyboardEvent) => {
    if(isComposed) return;
    if (!(e.target instanceof HTMLInputElement)) {
      return;
    }
    const uName = e.target.value;
    if(uName === "") return;
    if(e.key === 'Enter') {
      setAccountUser({username: inputname});
      navigate('/');
      setInputname('');
      e.preventDefault();
    }
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
          <Input 
            id='username' 
            type='text' 
            onChange={onChangeInput} 
            onCompositionStart={() => { setIsComposed(true) }}
            onCompositionEnd={() => { setIsComposed(false) }}
            onKeyDown={onKeyDownEnter}
            value={inputname}
          />
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