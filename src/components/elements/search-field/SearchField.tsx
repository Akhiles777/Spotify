import { useState, useEffect } from "react"

import { useDebounce } from "@/hooks/useDebounce"

import type { ChangeEvent } from "react";


import { Search } from "lucide-react";

interface Props{
    searchTerm: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export function SearchField({searchTerm, onChange }: Props) {

  const debouncedValueText = useDebounce(searchTerm, 500)

  useEffect(() => {
    console.log("Запрос отправлен:", debouncedValueText)
  }, [debouncedValueText])

  return (
    <div>
      
      <label className='flex items-center mb-4 mt-2 gap-3 group'>
        <Search className='opacity-30.  group-focus-within:opacity-100 duration-150'/>
        <input
          value={searchTerm}
          onChange={onChange}
          type='search'
          placeholder='Search for songs, artists, etc...'
          className='bg-transparent w-200 h-7.5 outline-none pl-2 group-focus-within:border-primary duration-150 border rounded-lg border-transparent'
        />
      </label>

    </div>
  )
}
