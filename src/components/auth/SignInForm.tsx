import React, { useState } from "react";
import { Eye, EyeOff, Mail, User, Lock, Loader2 } from "lucide-react";
import SitBrainLogo from "../../assets/navbar/sitbrain_logo.svg";
import { Navigate, useNavigate } from "react-router-dom";

interface FormErrors {
  username?: string;
  password?: string;
  general?: string;
}

const SignInForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isMicrosoftLoading, setIsMicrosoftLoading] = useState(false);
  const navigate = useNavigate();

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.username.trim()) {
      newErrors.username = "Username is required";
    } else if (formData.username.includes("@")) {
      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.username)) {
        newErrors.username = "Please enter a valid email address";
      }
    } else {
      // Student ID validation (assuming 11 digits starting with 68)
      const studentIdRegex = /^68\d{9}$/;
      if (!studentIdRegex.test(formData.username)) {
        newErrors.username = "Please enter a valid student ID (68xxxxxxxxx)";
      }
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear specific field error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    if (!validateForm()) {
      return;
    }
    navigate("/home");
    // setIsLoading(true);
    // try {
    //   // Simulate API call
    //   await new Promise((resolve) => setTimeout(resolve, 2000));
    //   console.log("Sign in with:", formData);
    //   // Handle successful sign in (redirect, etc.)
    // } catch (error: any) {
    //   setErrors({
    //     general: error.message || "An error occurred during sign in",
    //   });
    // } finally {
    //   setIsLoading(false);
    // }
  };

  const handleMicrosoftSignIn = async () => {
    setIsMicrosoftLoading(true);
    try {
      // Simulate Microsoft OAuth
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log("Microsoft sign in");
      // Handle successful Microsoft sign in
    } catch (error: any) {
      setErrors({
        general: error.message || "Microsoft sign in failed",
      });
    } finally {
      setIsMicrosoftLoading(false);
    }
  };

  return (
    //bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900
    <div className="min-h-screen bg-gray-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 min-h-screen pt-20 flex items-center justify-center px-6">
        <div className="w-full max-w-lg">
          {/* Logo and branding */}
          <div className="text-center mb-4">
            {/* <div className="w-16 h-16 flex items-center justify-center mx-auto">
              <img
                src={SitBrainLogo}
                alt="SIT Brain Logo"
                className="h-full w-full object-contain"
              />
            </div> */}
            <div className="w-24 h-24 rounded-2xl flex items-center justify-center mx-auto shadow-2xl mb-2 shadow-purple-500/25 relative">
              <img 
                src={SitBrainLogo} 
                alt="SIT Brain Logo" 
                className="w-20 h-20 object-contain"
              />
              <div className="absolute inset-0 rounded-2xl blur-xl opacity-50 animate-pulse"></div>
            </div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-2">
              Welcome
            </h1>
            <p className="text-gray-400">
              Sign in to continue your learning journey
            </p>
          </div>

          {/* Sign in card */}
          <div className="relative group mb-8">
            {/* bg-gradient-to-r from-purple-500/20 to-blue-500/20 */}
            <div className="absolute inset-0 rounded-2xl blur-xl opacity-75"></div>
            <div className="relative bg-white/10 backdrop-blur-xl rounded-2xl py-8 px-12 border border-white/20 shadow-2xl">
              {/* General Error */}
              {errors.general && (
                <div className="mb-6 p-4 bg-red-500/20 border border-red-500/30 rounded-xl backdrop-blur-sm">
                  <p className="text-red-300 text-sm">{errors.general}</p>
                </div>
              )}

              {/* Form */}
              <div className="space-y-3">
                {/* Username Field */}
                <div>
                  <label
                    htmlFor="username"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Student ID or Email
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      {formData.username.includes("@") ? (
                        <Mail className="h-5 w-5 text-gray-700" />
                      ) : (
                        <User className="h-5 w-5 text-gray-700" />
                      )}
                    </div>
                    <input
                      type="text"
                      id="username"
                      name="username"
                      value={formData.username}
                      onChange={handleInputChange}
                      placeholder="68xxxxxxxxx or name@kmutt.ac.th"
                      className={`w-full pl-10 pr-4 py-3 bg-white/5 border rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400 backdrop-blur-sm transition-all duration-200 ${
                        errors.username
                          ? "border-red-500/50"
                          : "border-white/20 hover:border-white/30"
                      }`}
                      disabled={isLoading}
                    />
                  </div>
                  {errors.username && (
                    <p className="mt-2 text-sm text-red-400">
                      {errors.username}
                    </p>
                  )}
                </div>

                {/* Password Field */}
                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Password
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Lock className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type={showPassword ? "text" : "password"}
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      placeholder="Enter your password"
                      className={`w-full pl-10 pr-12 py-3 bg-white/5 border rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400 backdrop-blur-sm transition-all duration-200 ${
                        errors.password
                          ? "border-red-500/50"
                          : "border-white/20 hover:border-white/30"
                      }`}
                      disabled={isLoading}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-300 transition-colors"
                    >
                      {showPassword ? (
                        <EyeOff className="h-5 w-5" />
                      ) : (
                        <Eye className="h-5 w-5" />
                      )}
                    </button>
                  </div>
                  {errors.password && (
                    <p className="mt-2 text-sm text-red-400">
                      {errors.password}
                    </p>
                  )}
                </div>

                {/* Sign In Button */}
                <div className="pt-2">
                  <button
                    onClick={handleSubmit}
                    disabled={isLoading}
                    className="w-full py-3 px-4 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 disabled:from-gray-600 disabled:to-gray-600 disabled:cursor-not-allowed text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 hover:scale-[1.02] flex items-center justify-center gap-2"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="animate-spin h-5 w-5" />
                        Signing in...
                      </>
                    ) : (
                      "Sign In"
                    )}
                  </button>
                </div>

                {/* Divider */}
                <div className="flex items-center my-2">
                  <div className="flex-grow border-t border-white/20"></div>
                  <span className="mx-4 text-sm text-gray-400">
                    Or continue with
                  </span>
                  <div className="flex-grow border-t border-white/20"></div>
                </div>

                {/* Microsoft Account Button */}
                <button
                  onClick={handleMicrosoftSignIn}
                  disabled={isMicrosoftLoading}
                  className="w-full py-3 px-4 bg-white/10 hover:bg-white/20 disabled:bg-gray-600/50 disabled:cursor-not-allowed text-gray-700 font-semibold rounded-xl border border-gray-400 hover:border-gray-200 flex items-center justify-center gap-3 transition-all duration-300 backdrop-blur-sm hover:scale-[1.02]"
                >
                  {isMicrosoftLoading ? (
                    <>
                      <Loader2 className="animate-spin h-5 w-5" />
                      Connecting...
                    </>
                  ) : (
                    <>
                      <svg
                        className="w-5 h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 23 23"
                      >
                        <path fill="#f3f3f3" d="M0 0h23v23H0z" />
                        <path fill="#f35325" d="M1 1h10v10H1z" />
                        <path fill="#81bc06" d="M12 1h10v10H12z" />
                        <path fill="#05a6f0" d="M1 12h10v10H1z" />
                        <path fill="#ffba08" d="M12 12h10v10H12z" />
                      </svg>
                      Microsoft Account
                    </>
                  )}
                </button>

                {/* Additional links */}
                {/* <div className="mt-6 text-center">
                  <button className="text-gray-400 hover:text-gray-300 text-sm transition-colors">
                    Forgot your password?
                  </button>
                </div> */}
              </div>
            </div>

            {/* Footer text */}
            {/* <div className="mt-8 text-center">
              <p className="text-gray-400 text-sm">
                Don't have an account?{" "}
                <button className="text-purple-400 hover:text-purple-300 font-medium transition-colors">
                  Contact your administrator
                </button>
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInForm;
