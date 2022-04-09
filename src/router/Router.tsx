import { BrowserRouter, Route, Routes } from "react-router-dom"


import { Index } from '../components/pages/Index'
import { Detail } from '../components/pages/Detail'
import { Page404 } from '../components/pages/Page404'
import { UserLogin } from "../components/pages/UserLogin"

export const Router = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/userlogin" element={<UserLogin />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/404" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
    
    </>
  )
}