import type {PropsWithChildren} from 'react';


import RigthSidebar from "./rigth-sidebar/rigth-sidebar.tsx";
import {LeftSidebar} from "./left-sidebar/left-sidebar.tsx";
import { AudioPlayer } from '../elements/player/AudioPlayer.tsx';

export default function Layout({children}: PropsWithChildren<PropsWithChildren>) {

    return (
     <div className=''>
           <div className='min-h-screen h-full grid  grid-cols-[1fr_4fr_1.2fr]'>

<LeftSidebar/>

        <main className='py-6 px-2 '>
            {children}
        </main>



   <RigthSidebar/>
   </div>


   <AudioPlayer/>
   
    </div>

    )
}