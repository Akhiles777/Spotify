import Menu from "../Menu";

import { PagesConfig } from "@/config/pages.config";

import { playlistStore } from "@/store/playlist.store";

import CustomMenu from "@/components/ui/custom-menu/CustomMenu.tsx";

import { Cross, Minus, Plus, X } from "lucide-react";
import { useState } from "react";



export default function SidebarPlaylist(){


const [value, setValue] = useState('')


const [isShow, setIsShow] = useState(false)

    return(
    <Menu  items={
        playlistStore.playlist.map(playlist => 
            ({name: playlist.name, link: 
            PagesConfig.PLAYLIST(playlist.name)}) )}
              title='Playlist'>


<button onClick={() => {
    setIsShow(prev => !prev)
    console.log(isShow)
}} className="flex items-center gap-1.5 mt-5  bg-zinc-700/30 p-2 rounded-md duration-300 transition-colors hover:bg-zinc-700/50 px-3">

{isShow ? <X/> : <Plus/>}<span>New playlist</span>

    </button>

{isShow && (

    <CustomMenu>
    <input type="text" placeholder="Playlist name"
     value={value} onKeyDown={e => {if(e.key === 'Enter' && value.trim()) 
     {playlistStore.createPlaylist(value.trim()); setValue('');}}} 
     onChange={e => setValue(e.target.value)} className="
     border
      border-transparent
     transition-colors duration-300 rounded-xl
      focus:border-primary px-3 py-1.5 "

      />




</CustomMenu>

)}
    </Menu>
    )
}