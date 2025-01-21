import { SearchBar } from "@/components/search-bar"
import { FeaturedSection } from "@/components/featured-section"

// Sample data - In a real app, this would come from an API
const featuredBooks = {
  bestsellers: [
    {
      id: "1",
      title: "The Midnight Library",
      author: "Matt Haig",
      price: 24.99,
      coverImage: "/placeholder.svg?height=400&width=300",
      description: "A novel about all the choices that go into a life well lived",
    },
    {
      id: "2",
      title: "Atomic Habits",
      author: "James Clear",
      price: 19.99,
      coverImage: "/placeholder.svg?height=400&width=300",
      description: "Tiny Changes, Remarkable Results",
    },
    {
      id: "3",
      title: "The Silent Patient",
      author: "Alex Michaelides",
      price: 22.99,
      coverImage: "/placeholder.svg?height=400&width=300",
      description: "A psychological thriller that will keep you guessing",
    },
    {
      id: "4",
      title: "Project Hail Mary",
      author: "Andy Weir",
      price: 26.99,
      coverImage: "/placeholder.svg?height=400&width=300",
      description: "A lone astronaut must save humanity from extinction",
    },
  ],
  newArrivals: [
    {
      id: "5",
      title: "Tomorrow, and Tomorrow, and Tomorrow",
      author: "Gabrielle Zevin",
      price: 27.99,
      coverImage: "/placeholder.svg?height=400&width=300",
      description: "A modern love story about friendship, creativity, and games",
    },
    {
      id: "6",
      title: "Lessons in Chemistry",
      author: "Bonnie Garmus",
      price: 25.99,
      coverImage: "/placeholder.svg?height=400&width=300",
      description: "A debut novel about a female chemist in the 1960s",
    },
    {
      id: "7",
      title: "Demon Copperhead",
      author: "Barbara Kingsolver",
      price: 28.99,
      coverImage: "/placeholder.svg?height=400&width=300",
      description: "A modern retelling of Charles Dickens's David Copperfield",
    },
    {
      id: "8",
      title: "Trust",
      author: "Hernan Diaz",
      price: 23.99,
      coverImage: "/placeholder.svg?height=400&width=300",
      description: "A novel about wealth, talent, and truth",
    },
  ],
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 mx-auto w-full max-w-5xl px-4 text-center text-white">
          <h1 className="mb-6 text-4xl font-bold sm:text-6xl">Discover Your Next Adventure</h1>
          <p className="mb-8 text-lg sm:text-xl">
            Explore thousands of books from bestselling authors and emerging voices
          </p>
          <SearchBar />
        </div>
      </section>

      {/* Featured Sections */}
      <div className="mx-auto w-full max-w-7xl px-4">
        <FeaturedSection title="Bestsellers" books={featuredBooks.bestsellers} />
        <FeaturedSection title="New Arrivals" books={featuredBooks.newArrivals} />
      </div>
    </main>
  )
}

