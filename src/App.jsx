import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Crew from "./pages/crew/crewmate"
import Create from "./pages/create/create"
import Gallery from "./pages/gallery/gallery"
import Page from "./pages/gallery/page"
import Edit from "./pages/gallery/edit"

import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Crew />} />
      <Route path="/create" element={<Create />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/crewmate/:crewmateId" element={<Page />} />
      <Route path="/edit/:crewmateId" element={<Edit />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
