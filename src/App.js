import './App.css';
import {  
  BrowserRouter as Router,  
  Routes,  
  Route,  
  //Link  
}   
from 'react-router-dom';  
import Browse from "./Browse.js";
import Cart from "./Cart.js";
import Confirmation from "./Confirmation.js"

    

function App() {
   return (
      <Router>
         <NavBar />
         <Routes>
            <Route path="/" element={<Browse />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/Confirmation" element={<Confirmation />} />
         </Routes>
      </Router>         
  );
}

function NavBar() {
   return (
     <nav class="navbar navbar-expand-lg navbar-light bg-light">
       <a class="navbar-brand" href="#">Assignment Two Shop</a>
       <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
         <span class="navbar-toggler-icon"></span>
       </button>
       <div class="collapse navbar-collapse" id="navbarNavDropdown">
         <ul class="navbar-nav">
           <li class="nav-item active">
             <a class="nav-link" href="http://localhost:3000/">Browse</a>
           </li>
           <li class="nav-item">
             <a class="nav-link" href="http://localhost:3000/Cart">Cart</a>
           </li>
         </ul>
       </div>
     </nav>
   );
 }

export default App;
