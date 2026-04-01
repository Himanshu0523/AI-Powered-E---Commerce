import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";

export default function ProductCard({ product }) {
  const dispatch = useDispatch();

  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col group border border-gray-100">
      <div className="relative aspect-square overflow-hidden bg-gray-50 flex items-center justify-center p-4">
        {/* Placeholder for product image since no image URL might be available */}
        {product.image ? (
          <img src={product.image} alt={product.name} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" />
        ) : (
          <div className="w-full h-full bg-gray-200 rounded-xl flex items-center justify-center text-gray-400 group-hover:scale-105 transition-transform duration-500">
            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
          </div>
        )}
        <div className="absolute top-2 right-2">
          <span className="bg-white/90 backdrop-blur-sm text-xs font-bold px-2 py-1 rounded-full shadow-sm text-gray-700">New</span>
        </div>
      </div>
      
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold text-gray-900 mb-1 line-clamp-1">{product.name}</h3>
        {product.description && (
          <p className="text-sm text-gray-500 mb-4 line-clamp-2">{product.description}</p>
        )}
        
        <div className="mt-auto flex items-center justify-between">
          <p className="text-xl font-bold text-indigo-600">₹{product.price}</p>
          <button 
            onClick={() => dispatch(addToCart(product))}
            className="bg-indigo-600 hover:bg-indigo-700 text-white p-2 text-sm rounded-full shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-none"
            title="Add to Cart"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
          </button>
        </div>
      </div>
    </div>
  );
}