import { useState } from "react";
import { FaArrowCircleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!formData.email || !formData.password) {
      setError("Please fill in all required fields.");
      return;
    }

    // Submit login credentials to your API
    console.log("Login Submitted:", formData);
  };

  return (
    <section className="bg-center bg-cover bg-no-repeat md:bg-[url('https://i.pinimg.com/1200x/bc/eb/2a/bceb2ab8f67dac92e31bab47da59c946.jpg')] min-h-screen w-full  py-16 px-6 sm:px-12 lg:px-24 flex items-center justify-center">
      <div className="w-full max-w-md  border max-md:bg-white/30 border-gray-100 rounded-lg p-4 sm:p-8 shadow-sm">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-6">
          <span className="inline-block  text-orange-400 border border-orange-200/60 text-xs font-semibold uppercase tracking-widest px-3.5 py-1.5 rounded-full mb-3">
            Welcome Back
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight max-md:text-gray-900 text-white">
            Sign In To Account
          </h1>
          <p className="text-xs sm:text-sm text-white max-md:text-gray-400 mt-1">
            Access your orders, saved items, and personalized account details.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {error && (
            <div className="bg-red-50 border border-red-200 text-white text-xs rounded-xl p-3 font-medium text-center">
              {error}
            </div>
          )}

          {/* Email Address */}
          <div className="flex flex-col gap-1">
            <label
              htmlFor="email"
              className="text-xs font-bold uppercase tracking-wider text-white"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="john@example.com"
              className="w-full bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-400 focus:outline-none focus:border-orange-500 transition-colors"
            />
          </div>

          {/* Password */}
          <div className="flex flex-col gap-1">
            <label
              htmlFor="password"
              className="text-xs font-bold uppercase tracking-wider text-white"
            >
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                required
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                className="w-full bg-white border border-gray-200 rounded-xl pl-4 pr-10 py-2.5 text-sm text-gray-400 focus:outline-none focus:border-orange-500 transition-colors"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  {showPassword ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.036 12.322a10.12 10.12 0 01-1.121-1.42 1.002 1.002 0 010-1.803C2.208 8.01 6.242 4.5 12 4.5c5.758 0 9.792 3.51 11.085 4.599.378.318.378.985 0 1.303-1.293 1.09-5.327 4.598-11.085 4.598-1.92 0-3.69-.39-5.236-1.078M12 15a3 3 0 100-6 3 3 0 000 6z"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="flex items-center justify-between pt-1">
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="rememberMe"
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleChange}
                className="w-4 h-4 rounded border-gray-300 text-orange-500 focus:ring-orange-500"
              />
              <label
                htmlFor="rememberMe"
                className="text-xs text-white font-medium select-none"
              >
                Remember me
              </label>
            </div>
            <a
              href="#"
              className="text-xs text-orange-500 font-semibold hover:underline"
            >
              Forgot password?
            </a>
          </div>

          {/* Submit Button */}
          <Link
            type="submit"
            className="mt-2 w-full text-center bg-orange-500 hover:bg-orange-600 text-white font-semibold text-xs uppercase tracking-wider py-3.5 rounded-lg shadow-md shadow-orange-500/20 transition-all duration-200 active:scale-105"
          >
            Sign In
          </Link>

          {/* New User Link */}
          <p className="text-xs text-center text-gray-600 mt-3">
            Don't have an account?{" "}
            <Link
              to={"/register"}
              className="font-bold text-orange-500 hover:underline"
            >
              Create Account
            </Link>
          </p>
        </form>
         <Link to={'/'} className="flex gap-1 items-center max-md:text-black text-white group  hover:text-orange-600 duration-200 transition-transform"><FaArrowCircleLeft className="text-white max-md:text-black group-hover:-translate-x-0.5 group-hover:text-orange-400" size={'30'}/>Back Home</Link>
      </div>
    </section>
  );
};

export default Login;
