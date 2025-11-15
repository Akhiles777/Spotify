import { playerStore } from "@/store/store";
import { useRef } from "react";

export function useAudioPlayer() {
      const audioref = useRef<HTMLAudioElement>(null);
      
      const togglePlayPause = () => {
        if (!audioref.current) return;
        
        if (audioref.current.paused) {
            playerStore.isPlaying = true;
            audioref.current.play();
            
        } else {
               playerStore.isPlaying = false;
             audioref.current.pause();
        }
    }
    

const onSeek = (time: number) => {
    if (!audioref.current) return;
    audioref.current.currentTime = time;
    playerStore.seek(time);
}

const changeTrack = (type: 'prev' | 'next') => {
    playerStore.changeTrack(type);
     if(audioref.current && playerStore.isPlaying   ) {
        audioref.current.play();
        playerStore.isPlaying = false;
     }

    }


const setVolume = (volume: number) => {
    if (!audioref.current) return;
    audioref.current.volume = volume / 100;
    playerStore.setVolume(volume);
}

   return{audioref, togglePlayPause, onSeek, changeTrack, setVolume};
}