import { NavLink, Routes, Route, Navigate } from "react-router-dom";
import Logo from './Image/Logo.jpg'
import ProductList from "./pages/Product/product-list";
import AddProduct from "./pages/Product/addProduct";

function App() {

  return (
    <div className="container">
      <div className="nav-scroller bg-body shadow-sm">
        <nav className="nav" aria-label="Secondary navigation">
          <img src={Logo} style={{ width: '100px' }} alt="miu logo" />
          <NavLink className="nav-link active" aria-current="page" to="/products">Products</NavLink>
          <NavLink className="nav-link" to="/add">Add</NavLink>
        </nav>
      </div>

      <Routes>
        <Route path="/products" element={<ProductList />}></Route>
        <Route path="/Add" element={<AddProduct />}></Route>
        <Route path='/' element={<Navigate to='/products' />}></Route>
      </Routes>
    </div>
  );
}

export default App;
