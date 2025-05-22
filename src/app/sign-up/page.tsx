import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowRight } from "lucide-react"

export default function SignupPage() {
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
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Create Account</h2>

          {/* Form */}
          <form className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="fullName" className="text-gray-700">
                Full name
              </label>
              <Input id="fullName" placeholder="Full name" className="w-full" />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-gray-700">
                Email
              </label>
              <Input id="email" type="email" placeholder="Enter email address" className="w-full" />
            </div>

            <div className="space-y-2">
              <label htmlFor="password" className="text-gray-700">
                Password
              </label>
              <div className="relative">
                <Input id="password" type="password" placeholder="Enter new password" className="w-full pr-10" />
                <button type="button" className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="confirmPassword" className="text-gray-700">
                Confirm Password
              </label>
              <div className="relative">
                <Input
                  id="confirmPassword"
                  type="password"
                  placeholder="Confirm new password"
                  className="w-full pr-10"
                />
                <button type="button" className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <label htmlFor="terms" className="text-sm text-gray-700">
                I agree to the{" "}
                <Link href="#" className="text-green-500 hover:underline">
                  Terms & Conditions
                </Link>
              </label>
            </div>

            <Button type="submit" className="w-full rounded-xl bg-green-500 hover:bg-green-600">
              Create account
            </Button>

            <Button variant="outline" className="w-full rounded-xl flex items-center justify-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                <path
                  d="M12.545 10.239v3.821h5.445c-.712 2.315-2.647 3.972-5.445 3.972-3.332 0-6.033-2.701-6.033-6.032s2.701-6.032 6.033-6.032c1.498 0 2.866.549 3.921 1.453l2.814-2.814C17.503 2.988 15.139 2 12.545 2 7.021 2 2.543 6.477 2.543 12s4.478 10 10.002 10c8.396 0 10.249-7.85 9.426-11.748l-9.426-.013z"
                  fill="#4285F4"
                />
                <path
                  d="M12.545 10.239v3.821h5.445c-.712 2.315-2.647 3.972-5.445 3.972-3.332 0-6.033-2.701-6.033-6.032s2.701-6.032 6.033-6.032c1.498 0 2.866.549 3.921 1.453l2.814-2.814C17.503 2.988 15.139 2 12.545 2 7.021 2 2.543 6.477 2.543 12s4.478 10 10.002 10c8.396 0 10.249-7.85 9.426-11.748l-9.426-.013z"
                  fill="#34A853"
                  fillOpacity="0"
                />
                <path
                  d="M7.045 14.943l-2.813 2.812C5.825 19.059 8.138 20 12.545 20c3.241 0 5.95-1.074 7.942-2.904l-3.686-2.805c-1.024.748-2.489 1.202-4.256 1.202-2.798 0-4.733-1.657-5.445-3.972l-0.055.422z"
                  fill="#FBBC05"
                  fillOpacity="0"
                />
                <path
                  d="M12.545 7.968c1.259 0 2.389.433 3.276 1.277l2.485-2.485C16.715 5.318 14.8 4.5 12.545 4.5c-4.407 0-7.726 2.551-9.272 6.261l3.046 2.347c.73-2.199 2.753-3.761 5.226-3.761z"
                  fill="#EA4335"
                  fillOpacity="0"
                />
              </svg>
              Sign up with Google
            </Button>
          </form>

          <div className="mt-6 text-center text-sm">
            Already have an account?{" "}
            <Link href="#" className="text-green-500 hover:underline">
              Login
            </Link>
          </div>
        </div>
      </div>

      {/* Right side - Image and Text */}
      <div className="flex-1 relative hidden md:block">
        <Image
          src="/images/Carousel.png"
          alt="Agricultural tractor in a field at sunset"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30 flex flex-col justify-end p-10 text-white">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">Reach Global Buyers with Ease</h2>
          <p className="text-lg mb-8">Exporters, list your products and connect with buyers worldwide</p>
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
