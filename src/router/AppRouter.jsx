import { Route, Routes } from 'react-router-dom'
import { LoginPage, RegisterPage } from '../auth'
import { SeccionesRoutes } from '../secciones'

export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path="login" element={<LoginPage />} />
                <Route path="register" element={<RegisterPage />} />
                <Route path="/*" element={<SeccionesRoutes />} />
            </Routes>
        </>
    )
}
