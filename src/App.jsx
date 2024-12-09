import { Route, BrowserRouter, Routes } from "react-router-dom";
import NavBar from "./components/navBar";
import Home from "./pages/home";
import CountryDetails from "./pages/countryDetails";

function App() {
  return (
    <BrowserRouter>

      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/country/:name" element={<CountryDetails/> } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
