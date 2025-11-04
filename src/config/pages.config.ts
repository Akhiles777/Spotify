 export  class PagesConfig {

    static HOME: string = '/';
    static DISCOVER: string = '/discover';
    static RADIO: string = '/radio';
    static LIBRARY: string = '/library';
    static MADE_FOR_YOU: '/made-for-yout';
    static RECENTLY_PLAYED: '/recently-played';
    static LIKED_SONGS: '/liked-songs';



    static PLAYLIST(id: string){
        return 'playlist' + (id ? `/${id}` : '')
    }

    static ALBUMS(id: string){
        return '/album'   + (id ? `/${id}` : '')
    }

    static ARTIST(id: string){
        return '/artist/'   + (id ? `/${id}` : '')
    }

     static PODCASTS(id: string){
         return '/podcasts/' + (id ? `/${id}` : '')
     }



}

