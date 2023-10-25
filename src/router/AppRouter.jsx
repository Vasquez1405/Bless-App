import { Route, Routes } from 'react-router-dom'
import { LoginPage } from '../auth'
import { SeccionesRoutes } from '../secciones'

export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path="login" element={<LoginPage />} />
                <Route path="/*" element={<SeccionesRoutes />} />
            </Routes>
        </>
    )
}
