import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Flags } from './Components/flags';
import { Detailed } from './detailpage';
import { useLocation } from 'react-router-dom';
function App() {
 
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Flags />}>
      </Route>
      <Route path="/detail" element={<Detailed />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App;