import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container grid gap-8 px-4 py-8 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4">
          <h3 className="text-lg font-bold">About Readify</h3>
          <p className="text-sm text-muted-foreground">
            Discover your next favorite book at Readify. We offer a wide selection of books across all genres.
          </p>
        </div>
        <div className="space-y-4">
          <h3 className="text-lg font-bold">Quick Links</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>
              <Link href="/about" className="hover:text-primary">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-primary">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/faq" className="hover:text-primary">
                FAQ
              </Link>
            </li>
            <li>
              <Link href="/shipping" className="hover:text-primary">
                Shipping Information
              </Link>
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <h3 className="text-lg font-bold">Customer Service</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>
              <Link href="/returns" className="hover:text-primary">
                Returns Policy
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:text-primary">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-primary">
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <h3 className="text-lg font-bold">Connect With Us</h3>
          <div className="flex space-x-4">
            <Link href="#" className="text-muted-foreground hover:text-primary">
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary">
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
          </div>
          <div className="space-y-2 text-sm text-muted-foreground">
            <p>Subscribe to our newsletter</p>
            <form className="flex gap-2">
              <input type="email" placeholder="Enter your email" className="w-full rounded-md border px-3 py-2" />
              <button className="rounded-md bg-primary px-4 py-2 text-primary-foreground">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
      <div className="border-t">
        <div className="container flex flex-col items-center gap-2 px-4 py-6 text-center text-sm text-muted-foreground md:flex-row md:justify-between md:text-left">
          <p>© 2024 Readify. All rights reserved.</p>
          <p>
            Made with ♥ by{" "}
            <Link href="#" className="font-medium underline underline-offset-4">
              Readify Team
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}

