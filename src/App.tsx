import './App.css'
import {SearchField} from "./components/elements/search-field/SearchField.tsx";
import {Play} from "lucide-react";
import Track from "./components/elements/track-item/Track.tsx";

import { TRACKS } from './data/tracks.data.ts';
import { useQueryState } from 'nuqs';
import { useMemo } from 'react';

function App() {

const [searchTerm, setSearchTerm] = useQueryState('q')

const filteredTracks = useMemo(()=> {
  if(!searchTerm) return TRACKS

return TRACKS.filter(track => track.name.toLowerCase().includes(searchTerm.toLowerCase()))

}, [searchTerm])



  return (
    <div className=''>
<SearchField searchTerm={searchTerm ?? ''} onChange={(e) => setSearchTerm(e.target.value)} />



      <div className='relative'>
        <img className='rounded-xl w-230 h-130' src={'/bunner.png'} alt={''}/>
        <div className='flex items-center justify-between   absolute bottom-6 left-0  w-full px-6'>
          <div>
            <h1 className='text-4xl font-semibold mb-[0.18rem] text-white'>
              Daft Punk
            </h1>
            <h2 className='text-(--color-primary) font-medium'>

USEDEBOUNCE ДОБАВИТЬ для работы с БД
              
              6.8m listeners
            </h2>
          </div>

          <button className='mr-15 rounded-full bg-linear-to-r from-[#2F3034] to-[#1f2026] p-4.5 border-(--color-player-bg) cursor-pointer border-solid duration-300 hover:-translate-y-0.5 hover:shadow'>
            <Play className=' text-(--color-primary)' fill='var(--color-primary)' size={21}/>
          </button>
        </div>
      </div>




      <div className="">
        {filteredTracks.map(track => <Track key={track.name} track={track} />)}
      </div>



      

    </div>
  );
}
export default App
