import type {IArtist} from "./artist.types";

export interface  ITrack {
    name: string;
    file: string;
    artists: IArtist;
    duration: number
}