import axios from "axios"
import { useCallback, useState } from "react"
import { useNavigate } from "react-router-dom";


import { TargetAccountData, TargetMediaData } from "../types/api/acount"

const { REACT_APP_INSTAGRAM_BUSINESSACCOUNT, REACT_APP_ACCESS_TOKEN } = process.env;

export const useAccountData = () => {
  const navigate = useNavigate()
  const [accountData, setAccountData] = useState<TargetAccountData>({
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
  const getAccountData = useCallback((username) => {
    const instagramBusinessAccount = REACT_APP_INSTAGRAM_BUSINESSACCOUNT
    const targetAccountName = username
    const accessToken = REACT_APP_ACCESS_TOKEN

    axios
      .get<TargetAccountData>(`https://graph.facebook.com/v12.0/${instagramBusinessAccount}?fields=business_discovery.username(${targetAccountName}){id,followers_count,media_count,ig_id,media{caption,media_url,media_type,like_count,comments_count,timestamp,id}}&access_token=${accessToken}`)
      .then((res) => {
        setAccountData(res.data)
        console.log(res.data)
      }).catch(() => navigate('/userlogin'))
  }, []);

  // const addPhoto = useCallback(() => {
  //   const 
  // }, [])
  return { getAccountData, accountData }
}