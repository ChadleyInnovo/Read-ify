import { BookCard } from "@/components/book-card"

interface FeaturedSectionProps {
  title: string
  books: Array<{
    id: string
    title: string
    author: string
    price: number
    coverImage: string
    description: string
  }>
}

export function FeaturedSection({ title, books }: FeaturedSectionProps) {
  return (
    <section className="py-8">
      <h2 className="mb-6 text-3xl font-bold">{title}</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {books.map((book) => (
          <BookCard key={book.id} {...book} />
        ))}
      </div>
    </section>
  )
}

