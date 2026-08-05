import { Routes, Route } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import ProductDetails from "../pages/ProductDetails";
import Cart from "../pages/Cart";
import Wishlist from "../pages/Wishlist";
import Checkout from "../pages/Checkout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ForgotPassword from "../pages/ForgotPassword";
import Profile from "../pages/Profile";
import Orders from "../pages/Orders";
import Admin from "../pages/Admin";
import NotFound from "../pages/NotFound";
import ProtectedRoute from "../components/auth/ProtectedRoute";
function AppRoutes(){
return(
<Routes>
<Route path="/" element={<Layout/>}>
<Route index element={<Home/>}/>
<Route path="shop" element={<Shop/>}/>
<Route 
path="product/:id" 
element={<ProductDetails/>}
/>
<Route
path="cart"
element={
<ProtectedRoute>
<Cart/>
</ProtectedRoute>
}
/>
<Route
path="wishlist"
element={
<ProtectedRoute>
<Wishlist/>
</ProtectedRoute>
}
/>
<Route
path="checkout"
element={
<ProtectedRoute>
<Checkout/>
</ProtectedRoute>
}
/>
<Route
path="profile"
element={
<ProtectedRoute>
<Profile/>
</ProtectedRoute>
}
/>
<Route
path="orders"
element={
<ProtectedRoute>
<Orders/>
</ProtectedRoute>
}
/>
<Route
path="admin"
element={
<ProtectedRoute>
<Admin/>
</ProtectedRoute>
}
/>
<Route
path="login"
element={<Login/>}
/>
<Route
path="register"
element={<Register/>}
/>
<Route
path="forgot-password"
element={<ForgotPassword/>}
/>

<Route
path="*"
element={<NotFound/>}
/>

</Route>
</Routes>
)
}
export default AppRoutes;