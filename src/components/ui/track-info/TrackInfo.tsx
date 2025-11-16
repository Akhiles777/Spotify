import { playerStore } from "@/store/store"
import type { ITrack } from "@/types/track.types"

import { CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

import { observer } from "mobx-react-lite"
import { Pause, Play } from "lucide-react"

interface Props {
  image?: string
  title: string
  subTitle: string
  track?: ITrack
}

export const TrackInfo = observer(({ track, subTitle, title, image }: Props) => {
  const isActive = playerStore.currentTrack?.name === track?.name

  return (
    <div className='flex items-center gap-3'>
      <div>
        {track ? (
          <button className="block relative group" onClick={() => {
            if(!isActive){
            playerStore.setTrack(track)
          }
          playerStore.togglePlayPause()
          }}>
            {isActive && (
              <div className="w-12 h-12">
                <CircularProgressbar
                  className="absolute"
                  styles={{
                    trail: { stroke: '#2E3235' },
                    path: { stroke: 'var(--color-primary)', transition: 'stroke-dashoffset' }
                  }}
                  strokeWidth={7}
                  value={playerStore.progress}
                />
                   
            
                    </div>
            
            )}


 <button className="absolute inset-0 flex items-center
  justify-center group-hover:opacity-100 
 opacity-0 duration-300 text-primary"

 
 >
  {!isActive ? (<Play/>): playerStore.isPlaying ? (<Pause/>): (<Play/>)}
 
 </button>


     {isActive ? (
       <img
                src={image || "/preview.jpg"}
                className="w-12 h-12 rounded-full m-1.5"
                alt={title}
              />
            ) : (
            <img
                src="/preview.jpg"
                className="w-12 h-12  rounded-full m-1.5"
                alt="preview"
              />
            )}
          </button>
        

        ):   (
          <img
            src="/preview.jpg"
            className="w-12 h-12 rounded-full m-1.5"
            alt="preview"
          />
        )} 
      </div>

      <div>
        <div className='text-white text-lg font-medium'>{title}</div>
        <div className='opacity-65'>{subTitle}</div>
      </div>
    </div>
  )
})

export default TrackInfo
