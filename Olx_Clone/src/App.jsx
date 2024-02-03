
import AddProduct from "./Components/AddProduct/addProduct"
import Navbar from "./Components/Navbar/Navbar"
import ProductDtails from "./Components/ProductDetails/productDetails"
import Footer from "./Components/footer/footer"
import Login from "./Components/login/login"
import SignUp from "./Components/login/signUp"
import Products from "./Components/products/products"
import SubNavBar from "./Components/subNavBar/subNavBar"


function App() {
 

  return (
    <>
    <Navbar/>
    <SubNavBar/>
    {/* <div className="w-full flex justify-center">
    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:w-[75%] ">
      <Products/>
      <Products/>
      <Products/>
      <Products/>
      <Products/>
      <Products/>
      <Products/>
      <Products/>
      <Products/>
      <Products/>
    </div>
    </div> */}

    {/* <SignUp/> */}
    {/* <Login/> */}
    {/* <AddProduct/> */}

    <ProductDtails/>

    <Footer/>


    

    </>
  )
}

export default App
