import { Search } from 'lucide-react';

interface InputProps{
  onChange:(value:string)=>void
}

export default function Input({onChange}:InputProps) {
  return (
    <div className="flex border-1 w-64 sm:w-90 sm:h-10 bg-white/50 rounded-xl backdrop-blur-[4px]  border-white/70"> 
      <input className='flex flex-1 outline-none bg-transparent text-center'
             onChange={(e)=>onChange(e.target.value)}
      ></input>
      
      <button>
        <Search className='h-full flex pr-2 cursor-pointer'/>
      </button>
      
    </div>
  )
}
