import { playerStore } from "@/store/store"
import type { ITrack } from "@/types/track.types"

import { CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

interface Props {
  image?: string
  title: string
  subTitle: string
  track?: ITrack
}

export default function TrackInfo ({ track, subTitle, title, image }: Props){
  const isActive = playerStore.currentTrack?.name === track?.name

  return (
    <div className='flex items-center gap-3'>
      
      <div>
        {track ? (
          <button onClick={() => playerStore.setTrack(track)}>
            {isActive ? (
              <div className="w-12 h-12">
                <CircularProgressbar value={66} />
              </div>
            ) : (
              <img
                src={image || "/preview.jpg"}
                className="w-12 h-12 rounded-full"
                alt={title}
              />
            )}
          </button>
        ) : (
          <img
            src="/preview.jpg"
            className="w-12 h-12 rounded-full"
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
}
