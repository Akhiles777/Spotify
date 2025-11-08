import {makeAutoObservable} from "mobx";
import type { ITrack } from "../types/track.types";
import { TRACKS } from "@/data/tracks.data";

class MusicPlayerStore {

    isPlaying:boolean = false;
    currentTrack: ITrack | null = TRACKS[0];
    volume: number = 85;
    currentTime: number = 0;
    progress: number = 0;

    constructor() {
        makeAutoObservable(this);
    }


    setTrack(track: ITrack | null ){
        this.currentTrack = track;
    }
 
    togglePlayPause(){
        this.isPlaying = !this.isPlaying;
    }



  seek(time: number){
    this.currentTime = time;
    this.progress = (time / (this.currentTrack?.duration || 1)) * 100;
}


setVolume(volume: number){
    this.volume = volume;

}
}


export const  playerStore = new MusicPlayerStore();
