import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./Components/Homepage/Homepage";
import FormProducts from "./Components/FormProducts/FormProducts";
import PageProducts from "./Components/PageProducts/PageProducts";
import ProductDetail from "./Components/ProductDetail/ProductDetail";
import UserProfile from "./Components/UserProfile/UserProfile";
import Admin from "./Components/Admin/Admin";
import EditProduct from "./Components/Admin/EditProduct";
import CartAlt from "./Components/Cart/CartAlt";
import Favorites from "./Components/Favorites/Favorites";
import ProductDetailAlt from "./Components/ProductDetail/ProductDetailsAlt";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/form" element={<FormProducts />} />
          <Route path="/products" element={<PageProducts />} />
          <Route path="/product/:id" element={<ProductDetailAlt />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/admin/*" element={<Admin />} />
          <Route path="/cart/*" element={<CartAlt />} />
          <Route path="/admin/editproduct/:id" element={<EditProduct />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
