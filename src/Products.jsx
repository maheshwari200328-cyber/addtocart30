function Products({product,handleAddToCart}) {
    return (
        <article className="bg-red rounded-2xl shadow-sm ring-1 ring-gray-200 overflow-hidden flex-col">
            <div className="aspect-square bg-gray-100 grid place-content-center text-gray-300">
                <img className="aspect-square bg-gray-100 grid place-content-center text-gray-400"
                src={product.imgUrl} alt=""/>

            </div>
            <div className="p-4 grow flex flex-col gap-3">
                <div>
                    <h3 className="font-medium">{product.title}</h3>
                    <p className="text-sm text-gray-500">{product.description}</p>
                </div>
                <div className="mt-auto flex items-center justify-between">
                    <span className="font-semibold">${product.price}</span>
                    <button 
                    onClick={()=>
                        handleAddToCart(product)} className="  add-t0-cart inline-flex items-center gap-2 rounded-xl border border-black px-3 text-sm  hover:bg-gray-600   hover:text-white hover:shadow-md transition cursor-pointer">
                        Add to cart</button>
                </div>
            </div>



        </article>
    );
}
export default Products;