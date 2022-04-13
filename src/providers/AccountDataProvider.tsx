import React,{ createContext, Dispatch, FC, ReactNode, SetStateAction, useState } from "react";
import { TargetAccountData } from "../types/api/acount";


export const AccountDataContext = createContext({} as AccountDataContextType);

export type AccountDataContextType = {
  accountData: TargetAccountData | null;
  setAccountData: Dispatch<SetStateAction<TargetAccountData| {
    business_discovery: {
      id: '',
      followers_count: 0,
      media_count: 0,
      ig_id: 0,
      media: {
        data: [
          {
            caption: "",
            media_url: "",
            media_type: "",
            like_count: 0,
            comments_count: 0,
            timestamp: "",
            thumbnail_url: "",
            id: "",
          }
        ]
      }
    },
    id: ""
  }>>;
};

type Props = {
  children: ReactNode
}

export const AccountDataPrivider: FC<Props> = (props) => {
  const { children } = props;
  const [ accountData, setAccountData ] = useState<TargetAccountData>({
    business_discovery: {
      id: '',
      followers_count: 0,
      media_count: 0,
      ig_id: 0,
      media: {
        data: [
          {
            caption: "",
            media_url: "",
            media_type: "",
            like_count: 0,
            comments_count: 0,
            timestamp: "",
            thumbnail_url: "",
            id: "",
          }
        ]
      }
    },
    id: ""
  });

  // useEffect(() => {
  //   setAccountData({username: '太郎'})
  // },[]);

  console.log(accountData);

  return (
    <AccountDataContext.Provider value={{ accountData, setAccountData }}>
      {children}
    </AccountDataContext.Provider>
  )
}