import { Route, BrowserRouter, Routes } from "react-router-dom";
import NavBar from "./components/navBar";
import Home from "./pages/home";

function App() {
  return (
    <BrowserRouter>

      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
