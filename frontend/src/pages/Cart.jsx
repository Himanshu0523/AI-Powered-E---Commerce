import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  removeFromCart,
  increaseQty,
  decreaseQty,
} from "../store/cartSlice";

export default function Cart() {
  const { items } = useSelector((state) => state.cart || { items: [] });
  const dispatch = useDispatch();

  const subtotal = items?.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  ) || 0;
  
  const shipping = items?.length > 0 ? (subtotal > 150 ? 0 : 15.00) : 0;
  const tax = subtotal * 0.08; // Assuming 8% tax
  const total = subtotal + shipping + tax;

  if (!items || items.length === 0) {
    return (
      <div className="bg-gray-50 min-h-screen pt-24 pb-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-16">
          <div className="inline-flex items-center justify-center w-24 h-24 mb-6 rounded-full bg-gray-200 text-gray-400">
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
          </div>
          <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Your cart is empty</h2>
          <p className="text-gray-500 mb-8 max-w-md mx-auto">
            Looks like you haven't added anything to your cart yet. Discover our premium collection and find something you'll love.
          </p>
          <Link 
            to="/products"
            className="inline-block px-8 py-4 bg-gray-900 text-white rounded-xl font-medium hover:bg-gray-800 transition transform hover:-translate-y-0.5 shadow-lg shadow-gray-300"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen pt-12 pb-24">
      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <nav className="flex items-center text-sm text-gray-500 font-medium">
          <Link to="/" className="hover:text-gray-900 transition">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/products" className="hover:text-gray-900 transition">Products</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">Cart</span>
        </nav>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl lg:text-4xl font-extrabold text-gray-900 tracking-tight mb-10">Shopping Cart</h1>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Cart Items List */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              {/* Header row for larger screens */}
              <div className="hidden sm:grid sm:grid-cols-12 gap-4 px-8 py-5 bg-gray-50 border-b border-gray-100 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                <div className="sm:col-span-6">Product</div>
                <div className="sm:col-span-3 text-center">Quantity</div>
                <div className="sm:col-span-3 text-right">Total</div>
              </div>

              {/* Items */}
              <ul className="divide-y divide-gray-100">
                {items.map((item) => (
                  <li key={item._id} className="p-6 sm:p-8 hover:bg-gray-50 transition duration-150">
                    <div className="flex flex-col sm:grid sm:grid-cols-12 gap-6 items-center">
                      
                      {/* Product Details */}
                      <div className="w-full sm:col-span-6 flex items-center space-x-6">
                        <div className="relative w-24 h-24 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                          <img 
                            src={item.image || "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"} 
                            alt={item.name} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex flex-col">
                          <Link to={`/products/${item._id}`} className="text-lg font-bold text-gray-900 hover:underline mb-1">
                            {item.name}
                          </Link>
                          {/* Placeholder for variant logic if exists */}
                          <div className="text-sm text-gray-500 mb-2">Variant: Standard</div>
                          <button 
                            onClick={() => dispatch(removeFromCart(item._id))}
                            className="text-sm text-red-500 hover:text-red-700 font-medium text-left transition flex items-center group"
                          >
                            <svg className="w-4 h-4 mr-1 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                            Remove
                          </button>
                        </div>
                      </div>

                      {/* Quantity Selector */}
                      <div className="w-full sm:w-auto sm:col-span-3 flex justify-between sm:justify-center items-center mt-4 sm:mt-0">
                        <span className="sm:hidden text-gray-500 font-medium text-sm">Quantity:</span>
                        <div className="flex items-center border border-gray-300 rounded-lg bg-white">
                          <button 
                            onClick={() => dispatch(decreaseQty(item._id))}
                            className="p-2 text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded-l-lg transition"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4"/></svg>
                          </button>
                          <span className="w-10 text-center font-medium text-gray-900">{item.quantity}</span>
                          <button 
                            onClick={() => dispatch(increaseQty(item._id))}
                            className="p-2 text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded-r-lg transition"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"/></svg>
                          </button>
                        </div>
                      </div>

                      {/* Total Price for Item */}
                      <div className="w-full sm:w-auto sm:col-span-3 flex justify-between sm:justify-end items-center mt-2 sm:mt-0">
                        <span className="sm:hidden text-gray-500 font-medium text-sm">Total:</span>
                        <span className="text-lg font-bold text-gray-900">${(item.price * item.quantity).toFixed(2)}</span>
                      </div>

                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 sticky top-24">
              <h2 className="text-xl font-bold text-gray-900 mb-6 pb-4 border-b border-gray-100">Order Summary</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span className="font-medium text-gray-900">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span className="font-medium text-gray-900">{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span>
                </div>
                {shipping > 0 && (
                  <div className="text-xs text-blue-600 bg-blue-50 p-2 rounded-lg">
                    Add ${(150 - subtotal).toFixed(2)} more for free shipping!
                  </div>
                )}
                <div className="flex justify-between text-gray-600">
                  <span>Tax (8%)</span>
                  <span className="font-medium text-gray-900">${tax.toFixed(2)}</span>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-4 mb-8">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-gray-900">Total</span>
                  <span className="text-2xl font-extrabold text-gray-900">${total.toFixed(2)}</span>
                </div>
              </div>

              <Link to="/checkout" className="w-full bg-gray-900 text-white py-4 rounded-xl flex items-center justify-center space-x-2 hover:bg-gray-800 transition transform hover:-translate-y-0.5 shadow-lg shadow-gray-200 mb-6">
                <span className="font-semibold text-lg">Proceed to Checkout</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
              </Link>
              
              <div className="flex justify-center flex-col items-center space-y-3 pt-6 border-t border-gray-100">
                <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">Secure Checkout</p>
                <div className="flex space-x-2">
                  <div className="w-10 h-6 bg-gray-200 rounded flex items-center justify-center text-[10px] font-bold text-gray-500">VISA</div>
                  <div className="w-10 h-6 bg-gray-200 rounded flex items-center justify-center text-[10px] font-bold text-gray-500">MC</div>
                  <div className="w-10 h-6 bg-gray-200 rounded flex items-center justify-center text-[10px] font-bold text-gray-500">AMEX</div>
                  <div className="w-10 h-6 bg-gray-200 rounded flex items-center justify-center text-[10px] font-bold text-gray-500">PAYPAL</div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}