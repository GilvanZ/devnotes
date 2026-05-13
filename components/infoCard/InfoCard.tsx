
import Card from "../card/Card"

interface infoCardProps{
    theme:string;
    image?:string;
    descricao?:string;
    infoImage?:string;
}


export default function InfoCard({theme, image, descricao, infoImage}:infoCardProps) {
  return (
      <div className='flex flex-1 p-10 '>
        <div className='shadow-lg bg-white/15 rounded-xl backdrop-blur-[2px] border border-white/30 flex flex-1 hover:scale-102 duration-300 h-180 flex-col p-5 gap-5'>
          <h1 className='flex text-6xl pb-8 justify-center'>
            {theme}
          </h1>
          <div className='flex h-full gap-5'>
            <div className='flex-1'>
              {descricao}
            </div>
            <div className=' flex-1 rounded-4xl overflow-hidden h-140 shadow-lg border-white/30'>
              <img className='w-full h-full object-cover' src={infoImage}/>
            </div>
          </div>
        </div>
      </div>
  )
}
