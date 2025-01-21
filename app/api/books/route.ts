import { db } from "@/lib/db"
import { auth } from "@/lib/auth"
import { NextResponse } from "next/server"

export async function GET() {
  try {
    const books = await db.book.findMany({
      orderBy: {
        createdAt: "desc",
      },
    })

    return NextResponse.json(books)
  } catch (error) {
    return new NextResponse("Internal error", { status: 500 })
  }
}

export async function POST(req: Request) {
  try {
    const session = await auth()

    if (!session || session.user.role !== "ADMIN") {
      return new NextResponse("Unauthorized", { status: 401 })
    }

    const body = await req.json()

    const book = await db.book.create({
      data: {
        title: body.title,
        author: body.author,
        description: body.description,
        price: body.price,
        stock: Number.parseInt(body.stock),
        isbn: body.isbn,
        coverImage: body.coverImage,
      },
    })

    return NextResponse.json(book)
  } catch (error) {
    return new NextResponse("Internal error", { status: 500 })
  }
}

