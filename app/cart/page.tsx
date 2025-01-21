"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Minus, Plus, Trash2 } from "lucide-react"
import { useState } from "react"

interface CartItem {
  id: string
  title: string
  author: string
  price: number
  quantity: number
  coverImage: string
}

// This would come from your cart state management
const initialItems: CartItem[] = [
  {
    id: "1",
    title: "The Midnight Library",
    author: "Matt Haig",
    price: 24.99,
    quantity: 1,
    coverImage: "/placeholder.svg",
  },
  {
    id: "2",
    title: "Atomic Habits",
    author: "James Clear",
    price: 19.99,
    quantity: 2,
    coverImage: "/placeholder.svg",
  },
]

export default function CartPage() {
  const [items, setItems] = useState<CartItem[]>(initialItems)

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return
    setItems(items.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item)))
  }

  const removeItem = (id: string) => {
    setItems(items.filter((item) => item.id !== id))
  }

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = 5.99
  const total = subtotal + shipping

  return (
    <div className="container px-4 py-8 md:py-12">
      <h1 className="mb-8 text-3xl font-bold">Shopping Cart</h1>
      {items.length > 0 ? (
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="space-y-4">
              {items.map((item) => (
                <div key={item.id} className="flex gap-4 rounded-lg border p-4">
                  <div className="relative aspect-square h-24 overflow-hidden rounded-md">
                    <Image src={item.coverImage || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                  </div>
                  <div className="flex flex-1 flex-col justify-between">
                    <div className="space-y-1">
                      <Link href={`/books/${item.id}`} className="font-medium hover:underline">
                        {item.title}
                      </Link>
                      <p className="text-sm text-muted-foreground">by {item.author}</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                          <Minus className="h-4 w-4" />
                          <span className="sr-only">Decrease quantity</span>
                        </Button>
                        <Input
                          type="number"
                          min="1"
                          value={item.quantity}
                          onChange={(e) => updateQuantity(item.id, Number.parseInt(e.target.value))}
                          className="w-16 text-center"
                        />
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          <Plus className="h-4 w-4" />
                          <span className="sr-only">Increase quantity</span>
                        </Button>
                      </div>
                      <div className="flex items-center gap-4">
                        <p className="font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                        <Button variant="ghost" size="icon" onClick={() => removeItem(item.id)}>
                          <Trash2 className="h-4 w-4" />
                          <span className="sr-only">Remove item</span>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-4 rounded-lg border p-6">
            <h2 className="text-xl font-bold">Order Summary</h2>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Shipping</span>
                <span>${shipping.toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-medium">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
            <Button className="w-full">Proceed to Checkout</Button>
          </div>
        </div>
      ) : (
        <div className="text-center">
          <p className="mb-4 text-muted-foreground">Your cart is empty</p>
          <Link href="/books">
            <Button>Continue Shopping</Button>
          </Link>
        </div>
      )}
    </div>
  )
}

