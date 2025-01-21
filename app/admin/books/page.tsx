import { Suspense } from "react"
import { db } from "@/lib/db"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Plus } from "lucide-react"
import Link from "next/link"
import Loading from "@/components/loading"
import ErrorBoundary from "@/components/error-boundary"

async function getBooks() {
  const books = await db.book.findMany({
    orderBy: {
      createdAt: "desc",
    },
  })
  return books
}

export default function BooksPage() {
  return (
    <div className="p-6">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-3xl font-bold">Books</h1>
        <Link href="/admin/books/new">
          <Button>
            <Plus className="mr-2 h-4 w-4" /> Add Book
          </Button>
        </Link>
      </div>

      <ErrorBoundary fallback={<div>Something went wrong</div>}>
        <Suspense fallback={<Loading />}>
          <BookList />
        </Suspense>
      </ErrorBoundary>
    </div>
  )
}

async function BookList() {
  const books = await getBooks()

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead>Author</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Stock</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {books.map((book) => (
            <TableRow key={book.id}>
              <TableCell className="font-medium">{book.title}</TableCell>
              <TableCell>{book.author}</TableCell>
              <TableCell>${book.price.toString()}</TableCell>
              <TableCell>{book.stock}</TableCell>
              <TableCell>{book.stock > 0 ? "In Stock" : "Out of Stock"}</TableCell>
              <TableCell className="text-right">
                <Link href={`/admin/books/${book.id}/edit`}>
                  <Button variant="outline" size="sm">
                    Edit
                  </Button>
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

