import { BrowserRouter, Routes, Route } from "react-router";
import Homepage from "./pages/Homepage";
import Productlistpage from "./pages/Productlistpage";
import Productdetailspage from "./pages/Productdetailspage";
import Checkoutpage from "./pages/Checkoutpage";
import Blogpage from "./pages/Blogpage";
import Contactpage from "./pages/Contactpage";
import Commonlayout from "./components/commonlayouts/Commonlayout";

function App() {
  return (        
    <Routes>
      <Route path="/" element={<Commonlayout />}>
        <Route path="/" element={<Homepage />} /> 
        <Route path="/product-list" element={<Productlistpage />} />
        <Route path="/product-details" element={<Productdetailspage />} />
        <Route path="/check-out" element={<Checkoutpage />} />
        <Route path="/blog" element={<Blogpage />} />
        <Route path="/contact" element={<Contactpage />} />
      </Route>
    </Routes>    
  )
}

export default App
