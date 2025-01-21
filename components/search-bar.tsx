"use client"

import { Search } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

const genres = ["Fiction", "Non-Fiction", "Mystery", "Science Fiction", "Romance", "Biography", "History", "Self-Help"]

export function SearchBar() {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState("")
  const router = useRouter()

  return (
    <div className="relative w-full max-w-2xl">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button variant="outline" role="combobox" aria-expanded={open} className="w-full justify-start text-base">
            <Search className="mr-2 h-4 w-4" />
            {value ? value : "Search books by title, author, or genre..."}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-full p-0" align="start">
          <Command>
            <CommandInput placeholder="Type to search..." />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup heading="Suggested Genres">
                {genres.map((genre) => (
                  <CommandItem
                    key={genre}
                    onSelect={(currentValue) => {
                      setValue(currentValue)
                      setOpen(false)
                      router.push(`/books?genre=${currentValue.toLowerCase()}`)
                    }}
                  >
                    {genre}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  )
}

