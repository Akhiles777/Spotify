import {Search} from 'lucide-react'


export function SearchField() {
    return (
        <div>
            <label className='flex items-center gap-3 group'>
            <Search className='opacity-30 group-focus-within:opacity-100 duration-150'/>
            <input
                type='search'
                placeholder='Search for songs, artists, etc...'
              className='bg-transparent w-200 outline-none'
            />
            </label>
        </div>
    )
}