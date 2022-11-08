import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./Components/Header";
import { CharacterInfo } from "./pages/Character";
import { FilmDetails } from "./pages/Details";
import { Home } from "./pages/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="film/:id" element={<FilmDetails />} />
        <Route path='character/:id' element={<CharacterInfo />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
