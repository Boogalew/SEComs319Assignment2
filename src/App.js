import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Browse from "./Browse";
import Cart from "./Cart";
import Confirmation from "./Confirmation"

    

function App() {
   return (
      <BrowserRouter>
         <Routes>
            <Route path="/" element={Browse} />
            <Route path="/Cart" element={Cart} />
            <Route path="/Confirmation" element={Confirmation} />
         </Routes>
      </BrowserRouter>         
  );
}

export default App;
