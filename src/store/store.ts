import {makeAutoObservable} from "mobx";
import type { ITrack } from "../types/track.types";
import { TRACKS } from "@/data/tracks.data";

class MusicPlayerStore {

    isPlaying:boolean = false;
    currentTrack: ITrack | null = TRACKS[0];
    volume: number = 50;
    currentTime: number = 0;
    progress: number = 0;

    constructor() {
        makeAutoObservable(this);
    }

    play(track: ITrack){
      this.currentTrack = track;
      this.isPlaying = true;
      console.log(`Playing track:${track.name}`);
  }


  seek(time: number){

    this.currentTime = time;
    this.progress = (time / (this.currentTrack?.duration || 1)) * 100;
}
}


export const musicPlayerStore = new MusicPlayerStore();
