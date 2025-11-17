
import Menu from "@/components/layout/Menu";

import { PagesConfig } from "@/config/pages.config";

import { playlistStore } from "@/store/playlist.store";

import CustomMenu from "@/components/ui/custom-menu/CustomMenu.tsx";

import { Cross, Ellipsis, Minus, Plus, X } from "lucide-react";
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
   

</CustomMenu>

)}
    </div>
)
}