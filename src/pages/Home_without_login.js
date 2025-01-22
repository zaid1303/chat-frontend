import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "../components/Navbar";

const Home_without_login = () => {
    const token = localStorage.getItem('token');
    const navigate = useNavigate();

    useEffect(() => {
        if (token) {
            navigate('/chat');
        }
    }, [token, navigate]);

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <div className="container mx-auto px-4 md:px-6 lg:px-8 flex-grow">
                <div className="w-full flex justify-center my-4">
                    <img 
                        src="./frontimage.jpg" 
                        alt="Welcome" 
                        className="w-full md:w-4/5 lg:w-3/4 h-[300px] sm:h-[400px] md:h-[450px] object-contain rounded-lg shadow-lg"
                    />
                </div>
                
                <div className="space-y-6 py-6">
                    <div className="text-center">
                        <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold leading-tight">
                            Welcome to Our Real-Time Chat Application!
                        </h1>
                    </div>

                    <div className="text-center max-w-3xl mx-auto">
                        <p className="text-lg md:text-xl font-semibold mt-3 px-4">
                            Start your journey by signing up or logging in. Dive into conversations 
                            and experience smooth, real-time communication.
                        </p>
                    </div>

                    <div className="text-center mt-8">
                        <h3 className="text-2xl md:text-3xl font-bold">
                            Ready to Chat?
                        </h3>
                    </div>

                    <div className="text-center max-w-2xl mx-auto mb-8">
                        <p className="text-lg md:text-xl font-semibold px-4">
                            Sign up or log in to begin your conversation with our server.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home_without_login;