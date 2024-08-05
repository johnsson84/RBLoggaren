// Stuff
import './RbloggarenApp.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Pages
import Startpage from './pages/startpage/Startpage'

function RbloggarenApp() {

  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Startpage />} />
        </Routes>
      </BrowserRouter>
    </main>
  )
}

export default RbloggarenApp
