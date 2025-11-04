interface Props{
    image?:string
    title: string
    subTitle: string
}



export default function TrackInfo ({title,subTitle}: Props) {

return (


<div className='flex items-center gap-3'>

          

        
  <div className='w-10 h-10 bg-(--color-primary)/80 rounded-full'/>

        <div>

<div className='text-white text-lg font-medium'>{title}</div>
<div className='opacity-65'>{subTitle}</div>

        </div>
    </div>
)

}
