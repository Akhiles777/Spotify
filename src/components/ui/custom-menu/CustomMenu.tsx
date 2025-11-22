import type { ReactNode } from "react";


interface Props{
    children: ReactNode
}



export default function CustomMenu({children}:Props){




    return (
        <div className=" "
         >

            {children}
         
         
        </div>
    )
}