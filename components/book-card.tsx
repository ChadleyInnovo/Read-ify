import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

interface BookCardProps {
  id: string
  title: string
  author: string
  price: number
  coverImage: string
  description: string
}

export function BookCard({ id, title, author, price, coverImage, description }: BookCardProps) {
  return (
    <Card className="flex flex-col overflow-hidden transition-all hover:shadow-lg">
      <Link href={`/books/${id}`} className="relative aspect-[3/4] overflow-hidden">
        <Image
          src={coverImage || "/placeholder.svg"}
          alt={`Cover of ${title}`}
          className="object-cover transition-transform hover:scale-105"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </Link>
      <CardHeader className="flex-1">
        <CardTitle className="line-clamp-2">{title}</CardTitle>
        <CardDescription>{author}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-2xl font-bold">${price.toFixed(2)}</p>
      </CardContent>
      <CardFooter className="flex gap-2">
        <Button className="w-full">Add to Cart</Button>
        <Button variant="outline" size="icon">
          ♥<span className="sr-only">Add to Wishlist</span>
        </Button>
      </CardFooter>
    </Card>
  )
}

