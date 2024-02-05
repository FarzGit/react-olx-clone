
import Navbar from "./Components/Navbar/Navbar"
import SubNavBar from "./Components/subNavBar/subNavBar"
import Products from "./Components/products/products"


function Layout(){

    return(
        <>
        
        <Navbar/> 
       <SubNavBar/> 
      <div className="w-full flex justify-center">
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
    </div> 
        
        
        </>
    )
}

export default Layout
