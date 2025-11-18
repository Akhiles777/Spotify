
import Menu from "@/components/layout/Menu";

import { PagesConfig } from "@/config/pages.config";

import { playlistStore } from "@/store/playlist.store";

import CustomMenu from "@/components/ui/custom-menu/CustomMenu.tsx";

import { Cross, Ellipsis, Minus, Plus, X } from "lucide-react";

import cn from 'classnames';

import { useState } from "react";
import type { ITrack } from "@/types/track.types";




interface Props{
    track: ITrack
}

export default function SidebarPlaylist({track}: Props){


const [value, setValue] = useState('')


const [isShow, setIsShow] = useState(false)

    return(

<div>
        <button onClick={() => {
    setIsShow(prev => !prev)
    console.log(isShow)}}>
        <Ellipsis className="opacity-30 duration-300 hover:opacity-100"/>
      


    </button>

{isShow && (

<CustomMenu>
   

{playlistStore.playlist.map(playlists => {
    const isAdded = playlistStore.isTrackInPlaylist(
        playlists.name,
        track.name
    )


    return (
        <button key={playlists.name} className="w-full text-left px-4 py-2 hover:bg-white/10" 

        onClick={() => {

            playlistStore.toggleTrackInPlaylist(playlists.name,  track.name )



        }}>

<span className={cn('transition-opacity duration-300', isAdded ? 'opacity-100' : 'opacity-60')}></span>
        </button>
    )
})}


<hr className="my-2 border-white/20"/>


</CustomMenu>

)}
    </div>
)
}