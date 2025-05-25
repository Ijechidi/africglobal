import Link from "next/link"

interface LogoProps {
  className?: string
}

export function Logo({ className }: LogoProps) {
  return (
    <Link href="/" className={className}>
      <h1 className="text-2xl font-bold text-green-500">AfriGlobal</h1>
    </Link>
  )
}
