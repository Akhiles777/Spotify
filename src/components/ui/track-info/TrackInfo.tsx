import { playerStore } from "@/store/store"
import type { ITrack } from "@/types/track.types"

import { CircularProgressbar } from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css"

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

  const handleClick = () => {
    if (!isActive && track) {
      playerStore.setTrack(track)
    }
    playerStore.togglePlayPause()
  }

  return (


    <div className="flex items-center gap-3 ">
      {track ? (
        <button
          className="relative w-12 h-12 group"
          onClick={handleClick}
        >
          {/* Progressbar */}
          {isActive && (
            <div className="absolute inset-0">
              <CircularProgressbar
                className="absolute"
                styles={{
                  trail: { stroke: "#2E3235" },
                  path: {
                    stroke: "var(--color-primary)",
                    transition: "stroke-dashoffset",
                  },
                }}
                strokeWidth={5}
                value={playerStore.progress}
              />
            </div>
          )}

          {/* Play/Pause Overlay */}
          <div
            className="
              absolute inset-0 flex items-center justify-center
          
              duration-300 text-primary
              z-20
            "
          >
            {!isActive ? <Play className="opacity-0 hover:opacity-100 duration-300" /> : playerStore.isPlaying ? <Pause /> : <Play className="opacity-0 hover:opacity-100 duration-300" />}
          </div>

     

         <img
            src={image || "/preview.jpg"}
            className="w-12 h-12 rounded-full  relative z-10"
            alt={title}
          />




        </button>
      ) : ( 
        <img
          src="/preview.jpg"
          className="w-12 h-12 rounded-full "
          alt="preview"
        />
      )}

      <div>
        <div className="text-white text-lg font-medium">{} {title}</div>
        <div className="opacity-65">{subTitle}</div>
      </div>
    </div>
  )
})

export default TrackInfo
