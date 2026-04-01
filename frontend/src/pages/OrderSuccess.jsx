import { Link, useLocation } from "react-router-dom";

export default function OrderSuccess() {
  const location = useLocation();
  const order = location.state?.order;

  // Fallback if accessed directly without an order object
  if (!order) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">No order found</h1>
        <p className="text-gray-600 mb-8">It looks like you haven't placed an order yet.</p>
        <Link to="/products" className="px-6 py-3 bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition">
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-16 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-8">
          <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h1 className="text-4xl font-extrabold text-gray-900 mb-3 tracking-tight">Thank you for your order!</h1>
        <p className="text-lg text-gray-600 max-w-xl mx-auto">
          We've received your order <span className="font-bold text-gray-900">#{order.orderId}</span> and will begin processing it shortly. A confirmation email has been sent to {order.shippingAddress?.email || "your email address"}.
        </p>
      </div>

      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden text-left">
        <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-100">
          <div className="p-8 pb-6 md:pb-8">
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">Shipping Address</h3>
            <p className="font-medium text-gray-900">{order.shippingAddress?.firstName} {order.shippingAddress?.lastName}</p>
            <p className="text-gray-600 mt-1">{order.shippingAddress?.address}</p>
            <p className="text-gray-600">{order.shippingAddress?.city}, {order.shippingAddress?.zipCode}</p>
            <p className="text-gray-600 tracking-wide mt-2">{order.shippingAddress?.phone}</p>
          </div>
          <div className="p-8 pt-6 md:pt-8">
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">Order Summary</h3>
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-600">Total items:</span>
              <span className="font-medium text-gray-900">{order.items?.length || 0}</span>
            </div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-600">Date placed:</span>
              <span className="font-medium text-gray-900">{new Date(order.date).toLocaleDateString()}</span>
            </div>
            <div className="flex justify-between items-center pt-4 mt-4 border-t border-gray-100">
              <span className="text-gray-900 font-bold">Total Paid:</span>
              <span className="text-xl font-extrabold text-gray-900">${(order.totalAmount || 0).toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto mt-10 flex flex-col sm:flex-row justify-center gap-4">
        <Link to="/dashboard" className="w-full sm:w-auto px-8 py-4 bg-gray-900 text-white font-bold rounded-xl shadow-lg hover:bg-gray-800 transition text-center">
          View My Dashboard
        </Link>
        <Link to="/products" className="w-full sm:w-auto px-8 py-4 bg-white text-gray-900 font-bold border border-gray-300 rounded-xl hover:bg-gray-50 transition text-center">
          Continue Shopping
        </Link>
      </div>
    </div>
  );
}
