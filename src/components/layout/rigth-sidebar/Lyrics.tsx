import styles from './Lyrics.module.scss'

import {Play} from 'lucide-react'

export default function Lyrics(){
    return (
        <div className={styles.lyrics}>


            <div className='text-[color:var(--color-primary)]'> [ Verse 1 ]</div>

            <p>It might not be the right time</p>
            <p> I might not be the right one</p>
            <p> But there's something about us I want to say</p>
                <Play fill='var(--color-primary)' className={styles.icon} size={10}/>
                        <p className={styles.active}>

                                'Cause there's something between us anyway
                        </p>
            <div className='text-[color:var(--color-primary)]'> [ Verse 2 ]</div>
            <p> I might not be the right one</p>
            <p> It might not be the right time</p>
            <p> But there's something about us I've got to do</p>
            <p> Some kind of secret I will share with you</p>

            <div className='text-[color:var(--color-primary)]'> [ Refrain ]</div>
            <p> I need you more than anything in my life</p>
            <p>I want you more than anything in my life</p>
            <p> Some kind of secret I will share with come me</p>


        </div>
    )
}


