import type {ITrack} from "../types/track.types";
import { ARTISTS } from "./artist.data";


export const TRACKS: ITrack[] = [
	{
		name: 'Nasheed 1',
		file: '/audio/nasheed-1.mp3',
		artists: ARTISTS[0],
		duration: 210,
	},
	{
		name: 'Nasheed 3',
		file: '/audio/nasheed-3.mp3',
		artists: ARTISTS[1],
		duration: 185,
	},
	{
		name: 'Nasheed 4',
		file: '/audio/nasheed-4.mp3',
		artists: ARTISTS[2],
		duration: 200,
	},
	{
		name: 'Nasheed 5',
		file: '/audio/nasheed-5.mp3',
		artists: ARTISTS[3],
		duration: 240,
	},
	{
		name: 'Nasheed 6',
		file: '/audio/nasheed-6.mp3',
		artists: ARTISTS[4],
		duration: 195,
	},
	{
		name: 'Nasheed 7',
		file: '/audio/nasheed-7.mp3',
		artists: ARTISTS[5],
		duration: 220,
	},
];
