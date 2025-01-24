import { Route, Routes } from "react-router"
import { KuyenRoutes } from "../kuyen/routes/KuyenRoutes"
import { AuthRoutes } from "../auth/routes/AuthRoutes"


export const AppRouter = () => {
  return (

    <Routes>
        <Route path="/" element={<KuyenRoutes/>} />

        <Route path="/auth/*" element={<AuthRoutes/>} />
    </Routes>
)
}
