import { Route, Routes } from "react-router-dom"
import "./App.css"
import Game from "./pages/Game"
import Home from "./pages/Home"
import Auth from "./pages/Auth"
import Nav from "./components/Nav"

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<Game />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </>
  )
}

export default App
