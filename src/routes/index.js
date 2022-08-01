import {
    Route,
    BrowserRouter,
    Routes
} from "react-router-dom"
import Home from "../pages/home"
import Navbar from "../components/navbar"

export default function AppRoutes(){

    return (
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path="/" element={
                    <Home/>
                }/>
                <Route path="/post" element={
                    <h1> Teste de Rota Post </h1>
                }/>
                
            </Routes>
             
        </BrowserRouter>
    )

}




