import { makeAutoObservable } from "mobx";


class PlaylistStore{
    playlist: {name: string; tracks: string[] }[] = JSON.parse(localStorage.getItem('playlist') ||'[]')


    constructor(){
        makeAutoObservable(this)
    }



    private saveLocalStorage(){
        localStorage.setItem('playlist', JSON.stringify(this.playlist))
    }


    createPlaylist(name:string){
        if(this.playlist.find(playlist => playlist.name === name)) return
        this.playlist.push({name, tracks: []})

        console.log(this.playlist)
        this.saveLocalStorage()
    }






    addToPlaylist(playlistName: string, trackName: string){
        const playlist = this.playlist.find(p => p.name === playlistName)

        if(!playlist || playlist.tracks.includes(trackName)) return

        playlist.tracks.push(trackName)
               console.log(this.playlist)
        this.saveLocalStorage()
    }



}


export  const playlistStore = new PlaylistStore()