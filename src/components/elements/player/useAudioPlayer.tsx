import { playerStore } from "@/store/store";
import { useRef } from "react";

export function useAudioPlayer() {
      const audioref = useRef<HTMLAudioElement>(null);
      

      const togglePlayPause = () => {
        if (!audioref.current) return;
        
        if (audioref.current.paused) {
            audioref.current.play();
         playerStore.togglePlayPause();
        } else {
             audioref.current.pause();
        }
    }


const onSeek = (time: number) => {
    if (!audioref.current) return;
    audioref.current.currentTime = time;
    playerStore.seek(time);
}

   return{audioref, togglePlayPause, onSeek};
}
