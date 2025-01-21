import Image from "next/image"
import { notFound } from "next/navigation"
import { db } from "@/lib/db"
import { Button } from "@/components/ui/button"
import { ShoppingCart, Heart } from "lucide-react"

interface BookPageProps {
  params: {
    id: string
  }
}

export default async function BookPage({ params }: BookPageProps) {
  const book = await db.book.findUnique({
    where: {
      id: params.id,
    },
  })

  if (!book) {
    notFound()
  }

  return (
    <div className="container px-4 py-8 md:py-12">
      <div className="grid gap-8 md:grid-cols-2">
        <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
          <Image src={book.coverImage || "/placeholder.svg"} alt={book.title} fill className="object-cover" priority />
        </div>
        <div className="space-y-6">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold md:text-4xl">{book.title}</h1>
            <p className="text-xl text-muted-foreground">by {book.author}</p>
          </div>
          <div className="space-y-2">
            <p className="text-3xl font-bold">${book.price.toString()}</p>
            <p className="text-sm text-muted-foreground">
              {book.stock > 0 ? `${book.stock} in stock` : "Out of stock"}
            </p>
          </div>
          <div className="space-y-4">
            <div className="flex gap-4">
              <Button size="lg" className="flex-1">
                <ShoppingCart className="mr-2 h-5 w-5" />
                Add to Cart
              </Button>
              <Button size="lg" variant="outline">
                <Heart className="h-5 w-5" />
                <span className="sr-only">Add to Wishlist</span>
              </Button>
            </div>
          </div>
          <div className="space-y-4">
            <h2 className="text-xl font-bold">Description</h2>
            <p className="text-muted-foreground">{book.description}</p>
          </div>
          <div className="space-y-4">
            <h2 className="text-xl font-bold">Product Details</h2>
            <dl className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <dt className="font-medium">ISBN</dt>
                <dd className="text-muted-foreground">{book.isbn}</dd>
              </div>
              <div>
                <dt className="font-medium">Format</dt>
                <dd className="text-muted-foreground">Hardcover</dd>
              </div>
              <div>
                <dt className="font-medium">Publication Date</dt>
                <dd className="text-muted-foreground">{new Date(book.createdAt).toLocaleDateString()}</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  )
}

