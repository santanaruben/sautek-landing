import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export function Header() {
  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50 border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/images/sautek-logo.png" alt="Sautek Energy" width={160} height={50} className="h-10 w-auto" />
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          <Link href="#about" className="text-foreground hover:text-primary transition-colors">
            About
          </Link>
          <Link href="#services" className="text-foreground hover:text-primary transition-colors">
            Services
          </Link>
          <Link href="#sectors" className="text-foreground hover:text-primary transition-colors">
            Sectors
          </Link>
          <Link href="#contact" className="text-foreground hover:text-primary transition-colors">
            Contact
          </Link>
        </nav>

        <Button asChild className="bg-primary hover:bg-primary/90">
          <Link href="#contact">Get Quote</Link>
        </Button>
      </div>
    </header>
  )
}
