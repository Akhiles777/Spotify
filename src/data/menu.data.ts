import {PagesConfig} from "../config/pages.config.ts";



export const MENU_ITEMS = [
    {
        icon: '/home.png',
        name: 'Home',
        link: PagesConfig.HOME,

    },
    {
        icon: '/dicover.png',
        name: 'Discover',
        link: PagesConfig.DISCOVER,

    },

    {
        icon: '/radio.png',
        name: 'Radio',
        link: PagesConfig.RADIO,
    },


]

export type TMenuItem = (typeof MENU_ITEMS)[number]

export const LIBRARY_MENU_ITEMS = [

    {name: 'Made For You', link: PagesConfig.MADE_FOR_YOU,icon: ''},
    {name: 'Recently Played', link: PagesConfig.RECENTLY_PLAYED,icon: ''},
    {name: 'Liked Songs', link: PagesConfig.LIKED_SONGS,icon: ''},

    {name: 'Playlist', link: PagesConfig.PLAYLIST('https://google.com'), icon:''},
    {name: 'Albums', link: PagesConfig.ALBUMS(''), icon:''},
    {name: 'Artists', link: PagesConfig.ARTIST(''), icon: ''},
    {name: 'Podcast', link: PagesConfig.PODCASTS(''),icon: ''}

]