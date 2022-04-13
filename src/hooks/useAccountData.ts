import axios from "axios"
import React, { useCallback, useContext, useState } from "react"
import { useNavigate } from "react-router-dom";

import { TargetAccountData, TargetMediaData } from "../types/api/acount";
import { AccountDataContext, AccountDataContextType } from "../providers/AccountDataProvider";

// const { getAccountData, accountData } = useAccountData();
// useEffect(() => {
//   getAccountData(accountUser?.username)
// }, []);

const { REACT_APP_INSTAGRAM_BUSINESSACCOUNT, REACT_APP_ACCESS_TOKEN } = process.env;

export const useAccountData = () => {
  const navigate = useNavigate();

  const { accountData, setAccountData } = useContext<AccountDataContextType>(AccountDataContext);


  const getAccountData = useCallback((username) => {
    const instagramBusinessAccount = REACT_APP_INSTAGRAM_BUSINESSACCOUNT
    const targetAccountName = username
    const accessToken = REACT_APP_ACCESS_TOKEN

    // thumbnail_urlをとってこれない
    const getAccountDataUrl = `https://graph.facebook.com/v12.0/${instagramBusinessAccount}?fields=business_discovery.username(${targetAccountName}){id,followers_count,media_count,ig_id,media{caption,media_url,media_type,like_count,comments_count,timestamp,id}}&access_token=${accessToken}`;

    console.log(getAccountDataUrl)



    axios
      .get<TargetAccountData>(getAccountDataUrl)
      .then((res) => {
        setAccountData(res.data)
        console.log(res.data)
      }).catch(() => navigate('/userlogin'))
  }, []);

  // const addPhoto = useCallback(() => {
  //   const 
  // }, [])
  return { getAccountData }
}