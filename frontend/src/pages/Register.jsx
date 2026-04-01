import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// Assuming registerUser is available in authSlice or authService
// import { registerUser } from "../services/authSlice";

export default function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            // const response = await registerUser({ name, email, password });
            console.log("Registration successful");
            navigate("/login");
        } catch (error) {
            console.error("Registration failed");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-white flex flex-row-reverse">
            {/* Right Image Section */}
            <div className="hidden lg:flex lg:w-1/2 relative">
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent z-10"></div>
                <img 
                    src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                    alt="Premium fashion style" 
                    className="object-cover w-full h-full"
                />
                <div className="absolute bottom-16 right-12 left-12 z-20 text-right">
                    <h2 className="text-4xl font-extrabold text-white leading-tight mb-4">Discover Your<br/>Signature Style</h2>
                    <p className="text-lg text-white/90 max-w-lg ml-auto">Sign up today and get 15% off your first order plus free shipping on all items.</p>
                </div>
                {/* Logo top right */}
                <Link to="/" className="absolute top-8 right-12 z-20 flex items-center space-x-2">
                    <span className="text-2xl font-bold text-white tracking-wide">HexaShop</span>
                    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                        <span className="text-gray-900 font-bold text-xl">H</span>
                    </div>
                </Link>
            </div>

            {/* Left Form Section */}
            <div className="flex-1 flex flex-col justify-center px-4 sm:px-6 lg:flex-none lg:w-1/2 xl:px-24 bg-white">
                <div className="mx-auto w-full max-w-sm lg:w-96">
                    <div className="lg:hidden flex items-center space-x-2 mb-12">
                        <div className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-xl">H</span>
                        </div>
                        <span className="text-2xl font-bold text-gray-900 tracking-wide">HexaShop</span>
                    </div>

                    <div>
                        <h2 className="text-3xl font-extrabold text-gray-900">Create an account</h2>
                        <p className="mt-2 text-sm text-gray-600">
                            Already have an account?{' '}
                            <Link to="/login" className="font-medium text-gray-900 hover:text-blue-600 transition underline decoration-2 decoration-gray-300 underline-offset-2">
                                Sign in here
                            </Link>
                        </p>
                    </div>

                    <div className="mt-8">
                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Full name</label>
                                <div className="mt-1">
                                    <input 
                                        type="text" 
                                        required 
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        className="appearance-none block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm transition"
                                        placeholder="John Doe"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">Email address</label>
                                <div className="mt-1">
                                    <input 
                                        type="email" 
                                        required 
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="appearance-none block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm transition"
                                        placeholder="you@example.com"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">Password</label>
                                <div className="mt-1">
                                    <input 
                                        type="password" 
                                        required 
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="appearance-none block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm transition"
                                        placeholder="••••••••"
                                    />
                                </div>
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-bold text-white bg-gray-900 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition transform hover:-translate-y-0.5 ${isLoading ? 'opacity-75 cursor-not-allowed transform-none hover:bg-gray-900' : ''}`}
                                >
                                    {isLoading ? (
                                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                    ) : (
                                        "Sign up"
                                    )}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
