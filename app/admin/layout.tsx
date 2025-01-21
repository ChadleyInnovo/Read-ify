import { checkAuth, logout } from "@/lib/auth"
import { Button } from "@/components/ui/button"
import { LayoutDashboard, BookOpen, Users, ShoppingCart, Settings, LogOut } from "lucide-react"
import Link from "next/link"

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  await checkAuth()

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 border-r bg-muted/40">
        <div className="flex h-16 items-center border-b px-6">
          <h1 className="text-lg font-bold">Readify Admin</h1>
        </div>
        <nav className="space-y-1 p-4">
          <Link
            href="/admin"
            className="flex items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            <LayoutDashboard className="h-4 w-4" />
            Dashboard
          </Link>
          <Link
            href="/admin/books"
            className="flex items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            <BookOpen className="h-4 w-4" />
            Books
          </Link>
          <Link
            href="/admin/users"
            className="flex items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            <Users className="h-4 w-4" />
            Users
          </Link>
          <Link
            href="/admin/orders"
            className="flex items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            <ShoppingCart className="h-4 w-4" />
            Orders
          </Link>
          <Link
            href="/admin/settings"
            className="flex items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            <Settings className="h-4 w-4" />
            Settings
          </Link>
        </nav>
        <div className="absolute bottom-4 left-4 right-4">
          <form action={logout}>
            <Button variant="outline" className="w-full" size="sm">
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </Button>
          </form>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1">{children}</main>
    </div>
  )
}

