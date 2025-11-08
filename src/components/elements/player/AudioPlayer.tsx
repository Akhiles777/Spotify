import TrackInfo from "../../ui/track-info/TrackInfo";

import  {playerStore} from "@/store/store";


import { useAudioPlayer } from "./useAudioPlayer";
import { SkipBack, Volume, Volume1, Volume2,Pause,Play, SkipForward   } from "lucide-react";



import { ProgressBar } from "@/components/ui/progress/ProgressBar";




export function AudioPlayer () {


  const {audioref, togglePlayPause} = useAudioPlayer();

  if(!playerStore.currentTrack){
    return null
  }




    return (
    <div className='w-full  bg-(--color-player-bg)  py-5 px-10 grid grid-cols-[1fr_5.8fr]    border-t border-white/10  bottom-0 left-0 '>
        
      <TrackInfo title={playerStore.currentTrack?.name || ''} subTitle={playerStore.currentTrack?.artists.name|| ''} image={undefined}/>
<audio ref={audioref} src={playerStore.currentTrack.file} onTimeUpdate={(e) => (playerStore.currentTime = (e.target as HTMLAudioElement).currentTime)} />


<div className="grid grid-cols-[1fr_8.5fr_3fr] items-center gap-6"> 

  <div className="flex items-center gap-2.5">
    <button>
      <SkipBack  size={20} className='text-primary'/>
    </button>

      <button className="rounded-full bg-linear-to-r from-[#3C3D41] to-[#1f2026] p-3.5 border-white/10 cursor-pointer border-solid group transition-transform duration-300 hover:scale-108 will-change-transform  hover:shadow'">
     {playerStore.isPlaying ? <Pause className='text-primary bg-secondary'/> : <Play size={20} className='text-primary)'/>}
    </button>


      <button>
      <SkipForward size={20} className='text-primary'/>
    </button>
  </div>


{/* Progress Bar */}


<ProgressBar
currentValue={playerStore.currentTime}
value={playerStore.currentTrack.duration}
progress={playerStore.progress}
onSeek={(time:number) => playerStore.seek(time)}
isTextDispalayed 
/>

<div className="pl-8 max-w-36  grid grid-cols-[1fr_9fr] gap-3 items-center">

  {playerStore.volume === 0 ? (<Volume/>) :playerStore .volume < 50  ?  (<Volume1 className='text-(--color-primary)'/>) : (<Volume2 className='text-(--color-primary)'/>)}


<ProgressBar
currentValue={playerStore.volume}
value={100}
progress={playerStore.volume}
onSeek={(value:number) => playerStore.setVolume(value)}
isThumbDisplayed = {false}
/>


</div>

</div>
    </div>
    )
}