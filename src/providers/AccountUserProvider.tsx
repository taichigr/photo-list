import React,{ createContext, Dispatch, FC, ReactNode, SetStateAction, useState } from "react";


export const AccountUserContext = createContext({} as AccountUserContextType);


// type LoginUser = User & { isAdmin: boolean };

// export type LoginUserContextType = {
//   loginUser: LoginUser | null;
//   setLoginUser: Dispatch<SetStateAction<LoginUser | null>>;
// };

export type AccountUser = {
  username: string
};
export type AccountUserContextType = {
  accountUser: AccountUser | null;
  setAccountUser: Dispatch<SetStateAction<AccountUser | {username: ''}>>;
};



// アカウントデータを保存。usernameをここで管理
type Props = {
  children: ReactNode
}

// TODO データの受け取り管理がうまいこと言っていない！
export const AccountUserPrivider: FC<Props> = (props) => {
  const { children } = props;
  const [ accountUser, setAccountUser ] = useState<AccountUser>({username: ""});
  console.log(accountUser);

  return (
    <AccountUserContext.Provider value={{ accountUser, setAccountUser }}>
      {children}
    </AccountUserContext.Provider>
  )
}