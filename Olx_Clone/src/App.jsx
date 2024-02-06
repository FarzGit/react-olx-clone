
import AddProduct from "./Components/AddProduct/addProduct"
import Navbar from "./Components/Navbar/Navbar"
import ProductDtails from "./Components/ProductDetails/productDetails"
import Footer from "./Components/footer/footer"
import Login from "./Components/login/login"
import SignUp from "./Components/login/signUp"
import Products from "./Components/products/products"
import SubNavBar from "./Components/subNavBar/subNavBar"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from "./layout"




function App() {

  


  return (
    <>
     

    {/* <Footer/>  */}

      <Router>
        <Routes>
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/" element={<Layout/>} />
          <Route path="/addProduct" element={<AddProduct/>}/>
          <Route path="/productDetails" element={<ProductDtails/>}/>
        </Routes>
      </Router>



    </>
  )
}

export default App
