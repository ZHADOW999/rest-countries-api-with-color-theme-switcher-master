import { Route, BrowserRouter, Routes } from "react-router-dom";
import NavBar from "./components/navBar";
import Home from "./pages/home";
import CountryDetails from "./pages/countryDetails";

function App() {
  return (
    <BrowserRouter>

      <NavBar/>
      <main>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/country/:name" element={<CountryDetails/> } />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
