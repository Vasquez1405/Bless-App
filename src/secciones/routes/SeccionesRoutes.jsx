import { Navigate, Route, Routes } from "react-router-dom"
import { Navbar, Inicio, Hombres, Mujeres, Niños } from '../'

export const SeccionesRoutes = () => {
    return (
        <>
            <Navbar />

            <div className='container'>
                <Routes>
                    <Route path="inicio" element={<Inicio />} />
                    <Route path="hombres" element={<Hombres />} />
                    <Route path="mujeres" element={<Mujeres />} />
                    <Route path="niños" element={<Niños />} />
                    <Route path="/" element={<Navigate to="/inicio" />} />
                </Routes>
            </div>
        </>
    )
}
