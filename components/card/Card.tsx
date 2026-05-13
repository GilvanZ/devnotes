'use client'

interface CardProps{
  theme:string
  image:string
  descricao:string
  infoImg:string
  onClick:(receivePropsOfClickedCard:CardProps) => void
}

export default function Card({theme,image, descricao,infoImg, onClick}:CardProps) {
  return (
    <div className='[perspective:1000px]'>
      <div className="bg-base-100 w-46 h-64 shadow-lg bg-white/10 rounded-xl backdrop-blur-[2px] border border-white/30 flex flex-col hover:scale-110 duration-300 cursor-pointer items-center"
      onClick={onClick}>
        <div className='w-full justify-center flex'>
          <img src={image} className='rounded-2xl w-64 h-32 object-contain flex pt-5 pb-5' />
        </div>
        <div className=' flex-1 pt-10 text-center text-shadow-zinc-300 w-full bg-white/25'>
          {theme}
        </div>
      </div>
    </div>
  )
}
