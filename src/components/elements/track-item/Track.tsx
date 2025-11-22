import { observer } from 'mobx-react-lite'
import { Ellipsis, Heart, X } from 'lucide-react'
import type { ITrack } from '../../../types/track.types'

import TrackInfo from '../../ui/track-info/TrackInfo'

import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import { transformDuration } from '@/utils/transform-duration'
import { favoriteStore } from '@/store/favorite-store'
import { playerStore } from '@/store/store'


import PlaylistBar from './Playlist-bar'



// activate utc plugin so dayjs.unix(...).utc() works and utc is actually used
dayjs.extend(utc)

interface Props {
  track: ITrack
}

const Track = observer(({ track }: Props) => {
  return (
    <div className='border-b border-white/10 py-7 flex justify-between items-center last:border-0'>

      {/*Track info*/}
      <TrackInfo
        track={track}
        title={track.name}
        subTitle={transformDuration(track.duration)}
      />



        {playerStore.currentTrack?.name === track.name && (
          <button
            onClick={() => {
              playerStore.resetTrack()
                } }
            className='mr-8'
          >
            <X className='text-primary opacity-30 w-8 h-8  hover:opacity-100  duration-300' />
          </button>
        )}  

  

      <div>
        <button
          onClick={() => {
            favoriteStore.toggleFavorite(track.name)
          }}
          className='mr-8'
        >
          <Heart
            className='text-(--color-primary) hover:opacity-100 opacity-85 duration-300'
            fill={
                 favoriteStore.favoritesName.includes(track.name)
                ? 'var(--color-primary)'
                : 'none'
            }
          />


        </button>



        <button>
       <PlaylistBar />
        </button>

      </div>

    </div>
  )
})

export default Track
