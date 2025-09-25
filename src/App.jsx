
import Products from "./Products";
import CartItem from "./CartItem";
import { useState } from "react";
import { useEffect } from "react";







function App() {




const [products,setProducts]= useState([])
const [cartItem,setCartItem]=useState([]);
let [total,setTotal]=useState(0) 
const[search,setSearch]=useState('');

const filterProducts=products.filter((p)=>
 p.title.toLowerCase().includes(search.toLowerCase())

);



let getProducts=async()=>{
  const productsData=await fetch("https://68c7b1095d8d9f5147329e53.mockapi.io/cartitems/cartitems");
const productResult=await productsData.json()
  setProducts(productResult)
} ;
useEffect(() => {
  getProducts();
}, []);


let handleAddToCart = (product) =>{
    const isAlreadyInCart = cartItem.some((item) => item.id === product.id);

  if (isAlreadyInCart) {
    alert("Item already added to the cart");
    return; // Stop here, do not add again
  }
  setCartItem([...cartItem,product]);
  setTotal(total + parseInt(product.price) )

};
 const handleRemoveToCart = (item) => {
  setCartItem((prev) => prev.filter((i) => i.id !== item.id));
  setTotal((prev) => prev - parseInt(item.price));
};







  return (
    <div className="min-h-screen bg-[#AEDDFD] text-gray-900">
      <header className="border-b bg-[#9EEDF8]">
       
          
    
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
         <img src="/images/shopping-logo-removebg-preview.png" className="h-30"/>
          <h1 className="text-2xl font-bold tracking-tight"></h1>
       

  <div className="flex justify-end gap-10  ">
    <div className=" relative w-full max-w-md mx-auto flex items-center">
    <img src="/images/search.jpeg" className="w-6 h-6 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"/>
    <input type="text" id="searchInput" placeholder="Search products..." onChange={(e)=>setSearch(e.target.value)} className="bg-white w-100 h-10 pl-10 pr-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 "/>
    </div>
            <a href="#" className="bg-[#7B16D8] text-white px-7 py-5 ring-1 rounded-3xl hover:bg-[#7F7AF9]">Login</a>
            <a href="#" className="bg-[#7B16D8] text-white px-7 py-5 ring-1 rounded-3xl hover:bg-[#7F7AF9]">SignUp</a>
           
         </div>


        </div>
       
      </header>
      <main className="max-w-7xl mx-auto px-6 py-8 ">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 ">
          <section className="lg:col-span-3 space-y-6 ">
            <h2 className="text-xl font-semibold">Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ">
             {filterProducts.map((product) => (
    <Products
      key={product.id}                      
      product={product}
      handleAddToCart={handleAddToCart}
    />
  ))}
            </div>

          </section>
          <aside className="lg:col-span-1">
            <div className="sticky top-6 bg-white rounded-2xl shadow-sm ring-1 ring-gray-200 p-6 space-y-4">
              <div className="flex bg-[#D9D4F0] h-20  border  border-white p-4 ring-1 rounded-2xl">
               <img src="/images/cart.svg"/>
              <h2 className="text-4xl font-semibold text-gray-500 px-2 ">Cart</h2>
              </div>
              <span class="text-sm text-gray-500">
                <br></br>
                <span id="itemCount">{cartItem.length} </span>items

              </span>

            
            <ul id="cartList" className="divide-gray-200">
              {
                cartItem.map((item)=> {
                  return <CartItem item={item} handleRemoveToCart={handleRemoveToCart}/> 
                }   )}

             
             
             </ul>
             
             <div className="pt-2 flex items-center justify-between bg-[#B46BDE] px-6 py-7 rounded-xl">
              <span className="text-sm text-black font-bold-500">Subtotal</span>
              <span className="font-semibold">${total}</span>
             </div>
  
             </div>
          </aside>
        </div>
      </main>
    </div>




  );
}

export default App