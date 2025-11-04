import type {IMenuItem} from "../../types/menu.types.ts";

import '../../App.css'

import '../../index.css'

interface Props { items: IMenuItem[], title?: string }


export default function Menu({items,title}: Props) {

    return (
        <div className='text-white pl-2 '>


            {title && <div className='opacity-80 mr-30 text-xs font-medium uppercase mb-6'>{title}</div>}

        
            <ul className='ml-5'>

                {items.map((item) => (
<li key={item.name}>

                    <a className='flex gap-3 items-center mb-5 group pointer' href='#'>  {item.icon && <img className='group-hover:text-primary' src={item.icon} alt={item.name} width={24} height={24} />}

                        <span className='group-hover:text-[color:var(--color-primary)] duration-300 font-medium'>{item.name}

                    </span>

                </a>
</li>
    ))}

            </ul>

        </div>

    ) }