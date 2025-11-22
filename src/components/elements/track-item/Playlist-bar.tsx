import { playlistStore } from "@/store/playlist.store";

import CustomMenu from "@/components/ui/custom-menu/CustomMenu.tsx";

import { Ellipsis, X } from "lucide-react";
import { useState } from "react";



export default function PlaylistBar(){


const [isShow, setIsShow] = useState(false)

    return(
        
   
        <div>

<button onClick={() => {
    setIsShow(prev => !prev)
    console.log(isShow)
}} >

{isShow ? <X className='mr-4 opacity-30 duration-300 hover:opacity-100' /> : <Ellipsis className='mr-4 opacity-30 duration-300 hover:opacity-100' />}

    </button>

    {isShow ? 
<details name="g">

<summary>Плейлисты</summary>

    {playlistStore.playlist.map(playlist => (
       <button onClick={() => {
        { playlist.tracks.push('new track') 
       }
    
    console.log(playlist.tracks)
    }
    } 
       
       
       className="flex items-center gap-1.5 mt-5  bg-zinc-700/30 p-2 rounded-md duration-300 transition-colors hover:bg-zinc-700/50 px-3"> <option  key={playlist.name} value={playlist.name}>{playlist.name}</option></button>
    ))}
</details> : null}



{isShow && (

    <CustomMenu>

<>
</>

        </CustomMenu>
    
)}
    </div>
    )
}