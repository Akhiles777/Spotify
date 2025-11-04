import {LIBRARY_MENU_ITEMS, MENU_ITEMS} from "../../../data/menu.data.ts";


import Menu from "../Menu.tsx";


import '../../../index.css'


export function LeftSidebar() {

return <aside className='border-red-500 pl-4 py-5 text-center '>


    <Menu items={MENU_ITEMS} title=''/>


    <hr className='w-35 ml-5 my-3 border-white/5' />

    <Menu items={LIBRARY_MENU_ITEMS} title='Your Library'/>

    <hr className='w-35 my-3 ml-5 border-white/5'  />

    <Menu items={[]} title='Playlist'/>

</aside>

}