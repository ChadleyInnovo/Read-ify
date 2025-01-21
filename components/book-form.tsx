"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { UploadButton } from "@/lib/uploadthing"
import { useState } from "react"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"

const bookFormSchema = z.object({
  title: z.string().min(1, "Title is required"),
  author: z.string().min(1, "Author is required"),
  price: z.string().min(1, "Price is required"),
  description: z.string().min(1, "Description is required"),
  stock: z.string().min(1, "Stock is required"),
  isbn: z.string().min(1, "ISBN is required"),
  coverImage: z.string().min(1, "Cover image is required"),
})

export type BookFormValues = z.infer<typeof bookFormSchema>

interface BookFormProps {
  initialValues?: BookFormValues
  onSubmit: (data: BookFormValues) => Promise<void>
}

export function BookForm({ initialValues, onSubmit }: BookFormProps) {
  const [imageUrl, setImageUrl] = useState(initialValues?.coverImage || "")

  const form = useForm<BookFormValues>({
    resolver: zodResolver(bookFormSchema),
    defaultValues: initialValues || {
      title: "",
      author: "",
      price: "",
      description: "",
      stock: "",
      isbn: "",
      coverImage: "",
    },
  })

  async function handleSubmit(data: BookFormValues) {
    try {
      await onSubmit({ ...data, coverImage: imageUrl })
      toast({
        title: "Success",
        description: "Book has been saved successfully.",
      })
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      })
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
        <div className="space-y-4">
          <FormLabel>Cover Image</FormLabel>
          {imageUrl && (
            <div className="relative h-40 w-40">
              <Image src={imageUrl || "/placeholder.svg"} alt="Book cover" fill className="rounded-md object-cover" />
            </div>
          )}
          <UploadButton
            endpoint="imageUploader"
            onClientUploadComplete={(res) => {
              setImageUrl(res[0].url)
              form.setValue("coverImage", res[0].url)
              toast({
                title: "Success",
                description: "Image uploaded successfully",
              })
            }}
            onUploadError={(error: Error) => {
              toast({
                title: "Error",
                description: error.message,
                variant: "destructive",
              })
            }}
          />
        </div>

        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="Enter book title" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="author"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Author</FormLabel>
              <FormControl>
                <Input placeholder="Enter author name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid gap-4 md:grid-cols-3">
          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Price</FormLabel>
                <FormControl>
                  <Input type="number" step="0.01" placeholder="29.99" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="stock"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Stock</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="100" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="isbn"
            render={({ field }) => (
              <FormItem>
                <FormLabel>ISBN</FormLabel>
                <FormControl>
                  <Input placeholder="Enter ISBN" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea placeholder="Enter book description" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full md:w-auto">
          Save Book
        </Button>
      </form>
    </Form>
  )
}

