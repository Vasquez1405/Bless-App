import { Route, Routes } from 'react-router-dom'
import { LoginPage, RegisterPage } from '../auth'
import { SeccionesRoutes } from '../secciones'
import { PublicRoute } from './PublicRoute'
import { PrivateRoute } from './PrivateRoute'

export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path="login" element={
                    <PublicRoute>
                        <LoginPage />
                    </PublicRoute>
                } />

                <Route path="register" element={
                    <PublicRoute>
                        <RegisterPage />
                    </PublicRoute>
                } />


                <Route path="/*" element={
                    <PrivateRoute>
                        <SeccionesRoutes />
                    </PrivateRoute>
                } />

                {/* <Route path="login" element={<LoginPage />} /> */}
                {/* <Route path="register" element={<RegisterPage />} /> */}
                {/* <Route path="/*" element={<SeccionesRoutes />} /> */}
            </Routes>
        </>
    )
}
