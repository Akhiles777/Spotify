import type { ReactNode } from "react";


interface Props{
    children: ReactNode
}



export default function CustomMenu({children}:Props){




    return (
        <div className="w-48 top-170 mr-20 h-10 fade-in
         bg-zinc-700/30 p-1 rounded-md absolute  z-10 "
         >

            {children}
         
        </div>
    )
}