import { Route, Routes } from "react-router-dom"
import Game from "./pages/Game"
import Home from "./pages/Home"
import Nav from "./components/Nav"
import "./App.css"

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </>
  )
}

export default App
