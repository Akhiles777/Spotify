import TrackInfo from "../../ui/track-info/TrackInfo";

import { musicPlayerStore } from "../../../store/store";

export function AudioPlayer () {
    
    return (
    <div className=''>
        
      <TrackInfo title={musicPlayerStore.currentTrack?.name} subTitle={musicPlayerStore.currentTrack?.artists} image={undefined}/>

    </div>
    )
}