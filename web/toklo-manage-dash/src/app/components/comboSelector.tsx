"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { useAppSeleactor } from "../hooks/redux"
import { Tversion } from "@/lib/types"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Input } from "@/components/ui/input"

const frameworks = [
  {
    value: "next.js",
    label: "Next.js",
  },
  {
    value: "sveltekit",
    label: "SvelteKit",
  },
  {
    value: "nuxt.js",
    label: "Nuxt.js",
  },
  {
    value: "remix",
    label: "Remix",
  },
  {
    value: "astro",
    label: "Astro",
  },
]

type Props ={
  selectTable: Tversion[] 
  setData: React.Dispatch<React.SetStateAction<string[]>>
}

export function Combobox({selectTable, setData}: Props) {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("");
  const [search, setsearch] = React.useState("");

  console.log(selectTable);
  

  return (
    <Popover  open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between"
        >
          {value
            ?'Version'+ ' '+ selectTable.find((item) => item.version === value)?.version
            : "Select framework..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0">
        <Command>
          <Input className="border-none outline-none focus:border-none" onChange={(e) =>setValue(e.target.value)} placeholder="Search the version..." />
          <ScrollArea className="h-[300px]">
          <CommandGroup>

              {selectTable?.filter(item => search? item.version.toLowerCase() === search.toLowerCase(): item ).map((item, i) =>  (
                  // <p key={i.toString()}> {item.label} {item.version} </p>
                  <div
                  className={`flex gap-3  items-center mb-2 py-2 cursor-pointer ${value == item.version? 'bg-emerald-500/15':'bg-slate-50'}`}
                    key={i.toString()}
                    onClick={() => {
                      setValue(item.version);
                      setData(item.items)
                      setOpen(false);
                    }}
                    // value={item.label}
                    // onSelect={(currentValue) => {
                    //   setValue(currentValue === value ? "" : currentValue)
                    //   setOpen(false)
                    // }}
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4 ml-3",
                        value === item.version ? "opacity-100" : "opacity-0"
                      )}
                    />
                    <p className="">Version <span className="ml-4 font-bold" > {item.version} </span> </p>
                    
                  </div>
                )
                
              )}

          </CommandGroup>
            </ScrollArea>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
