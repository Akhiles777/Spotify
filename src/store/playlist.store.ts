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


toggleTrackInPlaylist(playlistName: string, trackName: string){
          const playlist = this.playlist.find(p => p.name === playlistName)

      if(!playlist) return


if(playlist.tracks.includes(trackName)){
        playlist.tracks = playlist.tracks.filter(name => name !== trackName)


}
else{
    playlist.tracks.push(trackName)
}
        this.saveLocalStorage()
    }
    

isTrackInPlaylist(playlistName: string, trackName: string){
    const playlist = this.playlist.find(p => p.name === playlistName)
if(!playlist) return false

return playlist.tracks.includes(trackName)
    


}


}


export  const playlistStore = new PlaylistStore()