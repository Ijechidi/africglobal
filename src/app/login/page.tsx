"use client";

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowRight } from "lucide-react"
import { FaGoogle } from "react-icons/fa"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { login, signInWithGoogle } from "@/utils/auth";

export default function LoginPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      await login(formData.email, formData.password);
      router.push("/"); // Redirect to home page after successful login
    } catch (err: any) {
      setError(err.message || "An error occurred during login");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setError(null);
    setLoading(true);
    try {
      await signInWithGoogle();
      // Supabase OAuth handles redirection, so no need to push to router here
    } catch (err: any) {
      setError(err.message || "An error occurred during Google sign in");
      setLoading(false);
    }
  };


  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Left side - Form */}
      <div className="flex-1 flex flex-col items-center justify-center p-6 md:p-10 lg:p-16">
        <div className="w-full max-w-md">
          {/* Logo */}
          <div className="mb-8 text-center">
            <h1 className="text-2xl font-bold text-green-500">AfriGlobal</h1>
          </div>

          {/* Form Title */}
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Log In</h2>

           {/* Error Message */}
           {error && (
            <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg">
              {error}
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">

            <div className="space-y-2">
              <label htmlFor="email" className="text-gray-700">
                Email
              </label>
              <Input 
                id="email" 
                name="email"
                type="email" 
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter email address" 
                className="w-full" 
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="password" className="text-gray-700">
                Password
              </label>
              <div className="relative">
                <Input 
                  id="password" 
                  name="password"
                  type="password" 
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter password" 
                  className="w-full pr-10" 
                  required
                />
                 {/* Icon for password visibility - can be added here if needed */}
              </div>
            </div>

            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="remember" 
                  name="remember"
                  checked={formData.remember}
                  onCheckedChange={(checked) => 
                    setFormData(prev => ({ ...prev, remember: checked as boolean }))
                  }
                />
                <label htmlFor="remember" className="text-gray-700">
                  Remember me
                </label>
              </div>
              <Link href="#" className="text-green-500 hover:underline">
                Forgot Password
              </Link>
            </div>

            <Button 
              type="submit" 
              className="w-full rounded-xl bg-green-500 hover:bg-green-600"
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login"}
            </Button>

            <Button 
              type="button"
              variant="outline" 
              className="w-full rounded-xl flex items-center justify-center gap-2"
              onClick={handleGoogleSignIn}
              disabled={loading}
            >
              <FaGoogle/>
              Sign In with Google
            </Button>
          </form>

          <div className="mt-6 text-center text-sm">
            Don't have an account?{" "}
            <Link href="/sign-up" className="text-green-500 hover:underline">
              Create account
            </Link>
          </div>
        </div>
      </div>

      {/* Right side - Image and Text */}
      <div className="flex-1 relative hidden md:block">
        <Image
          src="/images/login_pic.png"
          alt="Agricultural scene"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30 flex flex-col justify-end p-10 text-white">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">Invest in the Future of Farming</h2>
          <p className="text-lg mb-8">Fund sustainable projects and grow your wealth responsibly</p>
          <div className="flex justify-end">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 border-0"
            >
              <ArrowRight className="h-5 w-5 text-white" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
