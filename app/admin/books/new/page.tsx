import { BookForm } from "@/components/book-form"
import type { BookFormValues } from "@/components/book-form"

async function createBook(data: BookFormValues) {
  // In a real app, this would save to a database
  console.log("Creating book:", data)
}

export default function NewBookPage() {
  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Add New Book</h1>
        <p className="text-muted-foreground">Add a new book to your store</p>
      </div>

      <div className="mx-auto max-w-2xl">
        <BookForm onSubmit={createBook} />
      </div>
    </div>
  )
}

