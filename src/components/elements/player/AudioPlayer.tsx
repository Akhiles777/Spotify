import TrackInfo from "../../ui/track-info/TrackInfo";

import { musicPlayerStore } from "../../../store/store";


import { SkipBack, Volume, Volume1, Volume2,Pause,Play, SkipForward   } from "lucide-react";

import { transformDuration } from "@/utils/transform-duration";



export function AudioPlayer () {


  if(!musicPlayerStore.currentTrack){
    return null
  }


    return (
    <div className='w-full  bg-(--color-player-bg)  py-5 px-10  grid grid-cols-[1fr_5.8fr] mt-2  border-t border-white/10 fixed bottom-0 left-0 '>
        
      <TrackInfo title={musicPlayerStore.currentTrack?.name || ''} subTitle={musicPlayerStore.currentTrack?.artists.name|| ''} image={undefined}/>




<div className="grid grid-cols-[1fr_2fr-1fr] gap-6 items-center">

  <div className="flex items-center gap-2.5">
    <button>
      <SkipBack  size={20} className='text-(--color-primary)'/>
    </button>

      <button className="rounded-full bg-linear-to-r from-[#3C3D41] to-[#1f2026] p-3.5 border-white/10 cursor-pointer border-solid group transition-transform duration-300 hover:scale-108 will-change-transform  hover:shadow'">
     {musicPlayerStore.isPlaying ? <Pause className='text-(--color-primary)'/> : <Play size={20} className='text-(--color-primary)'/>}
    </button>


      <button>
      <SkipForward size={20} className='text-(--color-primary)'/>
    </button>
  </div>


<div className="flex items-center gap-2">
 <span>00:00</span>

<div className="bg-white/20 w-full rounded relative  h-1">

<div className="absolute top-0 left-0 h-full rounded bg-gradient-to-r   from-[(--color-primary)] to-[(--color-secondary)] " style={{width: `${musicPlayerStore.progress}%`}}/>
    <input value={musicPlayerStore.currentTime} onChange={e => musicPlayerStore.seek(+e.target.value)} className="w-full h-1  pointer-events-auto  cursor-pointer" min={0} max={musicPlayerStore.currentTrack.duration} type="range" />

  </div>  

  <span className="text-white/50">{transformDuration(musicPlayerStore.currentTrack.duration)}</span>
</div>



<div>
  {musicPlayerStore.volume === 0 ? (<Volume/>) : musicPlayerStore.volume < 50  ?  (<Volume1 className='text-(--color-primary)'/>) : (<Volume2 className='text-(--color-primary)'/>)}




</div>

</div>
    </div>
    )
}