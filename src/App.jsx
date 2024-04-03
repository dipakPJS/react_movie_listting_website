import Navbar from "./componets/Navbar/Navbar";
 import { Outlet } from "react-router-dom"
import { AuthContextProvider } from "./Context/AuthContext";
 
export default function App() {
  return (
   <>
    <AuthContextProvider>
    <Navbar />
    <Outlet />
    </AuthContextProvider>
   </>
  )
}