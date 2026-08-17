import { useState } from "react";
import { Link } from "react-router-dom";
const Register = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

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

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (!formData.agreeTerms) {
      setError("Please accept the Terms of Service to continue.");
      return;
    }

    // Submit registration API call
    setIsSuccess(true);
  };

  return (
    <section className="w-full bg-center bg-cover bg-no-repeat md:bg-[url('https://i.pinimg.com/1200x/bc/eb/2a/bceb2ab8f67dac92e31bab47da59c946.jpg')] min-h-screen   py-16 px-6 sm:px-12 lg:px-24 flex items-center justify-center">
      <div className="w-full max-w-md max-md:bg-white/30  border border-gray-100 rounded-lg p-4 sm:p-8 shadow-sm">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-6">
          <span className="inline-block  text-orange-400 border border-orange-200/60 text-xs font-semibold uppercase tracking-widest px-3.5 py-1.5 rounded-full mb-3">
            Account
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-white max-md:text-gray-900">
            Create An Account
          </h1>
          <p className="text-xs sm:text-sm text-white max-md:text-gray-400 mt-1">
            Join us to track orders, earn rewards, and check out faster.
          </p>
        </div>

        {isSuccess ? (
          <div className="flex flex-col items-center text-center py-8 space-y-4">
            <div className="w-16 h-16 bg-orange-100 text-orange-400 rounded-full flex items-center justify-center">
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900">Welcome Aboard!</h3>
            <p className="text-xs sm:text-sm text-white max-md:text-gray-400 max-w-xs">
              Your account has been created successfully. You can now log in and
              start shopping.
            </p>
            <a
              href="#"
              className="mt-2 inline-block bg-orange-300 hover:bg-orange-400 text-white  font-semibold text-xs uppercase tracking-wider px-6 py-3 rounded-xl transition-all shadow-md shadow-orange-500/20"
            >
              Go to Login
            </a>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-300 text-xs rounded-xl p-3 font-medium text-center">
                {error}
              </div>
            )}

            {/* Full Name */}
            <div className="flex flex-col gap-1">
              <label
                htmlFor="fullName"
                className="text-xs font-bold uppercase tracking-wider text-white"
              >
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                required
                value={formData.fullName}
                onChange={handleChange}
                placeholder="John Doe"
                className="w-full bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-400 focus:outline-none focus:border-orange-400 transition-colors"
              />
            </div>

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
                className="w-full bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-400 focus:outline-none focus:border-orange-400 transition-colors"
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
                  className="w-full bg-white border border-gray-200 rounded-xl pl-4 pr-10 py-2.5 text-sm text-gray-400 focus:outline-none focus:border-orange-400 transition-colors"
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
                        d="M2.036 123c1.291 4.338 5.308 7.5 10.064 7.5 4.756 0 8.773-3.162 10.065-7.5C20.875 7.662 16.857 4.5 12 4.5c-4.756 0-8.773 3.162-10.064 7.5zM12 15a3 3 0 100-6 3 3 0 000 6z"
                      />
                    )}
                  </svg>
                </button>
              </div>
            </div>

            {/* Confirm Password */}
            <div className="flex flex-col gap-1">
              <label
                htmlFor="confirmPassword"
                className="text-xs font-bold uppercase tracking-wider text-gray-400"
              >
                Confirm Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                id="confirmPassword"
                name="confirmPassword"
                required
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="••••••••"
                className="w-full bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:border-orange-400 transition-colors"
              />
            </div>

            {/* Terms Agreement Checkbox */}
            <div className="flex items-start space-x-2.5 pt-1">
              <input
                type="checkbox"
                id="agreeTerms"
                name="agreeTerms"
                checked={formData.agreeTerms}
                onChange={handleChange}
                className="mt-0.5 w-4 h-4 rounded border-gray-300 text-orange-400 focus:ring-orange-600"
              />
              <label
                htmlFor="agreeTerms"
                className="text-xs text-gray-600 leading-tight"
              >
                I agree to the{" "}
                <a
                  href="#"
                  className="text-orange-400 font-semibold hover:underline"
                >
                  Terms of Service
                </a>{" "}
                and{" "}
                <a
                  href="#"
                  className="text-orange-400 font-semibold hover:underline"
                >
                  Privacy Policy
                </a>
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="mt-2 text-center w-full bg-orange-400 hover:bg-orange-500 text-white font-semibold text-xs uppercase tracking-wider py-3.5 rounded-xl shadow-md shadow-orange-500/20 transition-all duration-200 active:scale-105"
            >
              Sign Up
            </button>

            {/* Existing User Link */}
            <p className="text-xs text-center text-gray-600 mt-3">
              Already have an account?{" "}
              <Link
                to={"/login"}
                className="font-bold text-orange-400 hover:underline"
              >
                Sign In
              </Link>
            </p>
          </form>
        )}
      </div>
    </section>
  );
};

export default Register;
