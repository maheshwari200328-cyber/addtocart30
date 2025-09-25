
function CartItem({ item, handleRemoveToCart }) {
  return (
    <div>

      <li className="py-3 flex items-center justify-between gap-3">
        <div>
          <p className="font-medium leading-tight"> {item.title}</p>
          <p className="text-sm text-gray-500"> Qty 1.₹{item.price}</p>

        </div>
        <button
          onClick={() => {
            handleRemoveToCart(item);
          }}
          className="remove-item shrink-0 inline-flex h-8 w-8 items-center
                     justify-center rounded-full text-gray-500 hover:bg-gray-100"
                     aria-label="Remove"
        >&times;
        </button>
      </li>
    </div>
  );
}
export default CartItem;