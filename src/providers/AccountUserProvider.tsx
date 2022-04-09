import React,{ createContext, Dispatch, SetStateAction, useState } from "react";


export const AccountUserContext = createContext({} as AccountUserContextType);


// type LoginUser = User & { isAdmin: boolean };

// export type LoginUserContextType = {
//   loginUser: LoginUser | null;
//   setLoginUser: Dispatch<SetStateAction<LoginUser | null>>;
// };

type AccountUser = {
  username: string
};
export type AccountUserContextType = {
  accountUser: AccountUser | null;
  setAccountUser: Dispatch<SetStateAction<AccountUser | {username: ""}>>;
};



// アカウントデータを保存。usernameをここで管理

// TODO データの受け取り管理がうまいこと言っていない！
export const AccountUserPrivider = (props:any) => {
  const { children } = props;
  const [ accountUser, setAccountUser ] = useState<AccountUser>({username: ""});

  // useEffect(() => {
  //   setAccountData({username: '太郎'})
  // },[]);
  console.log(accountUser);

  return (
    <AccountUserContext.Provider value={{ accountUser, setAccountUser }}>
      {children}
    </AccountUserContext.Provider>
  )
}