import { Navigate, Route, Routes } from "react-router"
import { KuyenPage } from "../pages/KuyenPage"

export const KuyenRoutes = () => {
  return (

    <Routes>

        <Route path="/" element={<KuyenPage/>} />

        <Route path="/*" element={<Navigate to="/" />} />

    </Routes>

)
}
