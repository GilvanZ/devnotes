'use client'
import React, { useState } from 'react'
import Input from '@/components/input/Input'
import Card from "@/components/card/Card"
import { Infos } from './data/info'
import { ArrowRight, ArrowLeft, Minus } from 'lucide-react';
import InfoCard from '@/components/infoCard/InfoCard'

export default function Home() {
  //showing only car per page
  const [page, setPage] = useState(0)
  const perPage = 5
  const currentInfo = Infos.slice(page*perPage,(page +1)*perPage)

  //sending card props to infoCard
  const[selected,setSelected] = useState<any>(null)
  const handleSelect= (item:any) =>{
    setSelected(item)
  }

      //autocomplete
    const[search, setSearch]=useState('')
    const resultSearch = search? Infos.filter(i=> i.descricao.toLocaleLowerCase().includes(search.toLocaleLowerCase())):currentInfo
  return (
    <section className="flex flex-col  bg-[url('/bg/bg.jpg')] bg-no-repeat bg-cover overflow-x-hidden">
      <div id='header' className="flex flex-col h-64 overflow-x-hidden bg-gradient-to-r from-blue-400 to-purple-300 shadow-2xs-black shadow-lg shadow-zinc-700/50">
        <div className="flex-1 flex items-end justify-center pb-4">
          <h1 className='sm:text-4xl font-sans'>What are you looking for?</h1>
        </div>
        <div id='search' className='flex flex-1 justify-center p-4'>
          <Input onChange={setSearch}/>
        </div>
      </div>
      
      <div id='body' className='pt-10 flex justify-center gap-10 overflow-hidden h-80' >
          {resultSearch.map(i=>(
          <Card 
          key={i.id} 
          theme={i.theme} 
          image={i.image}
          onClick={()=> handleSelect(i)}
          />

        ))}
        
      </div>
      <div className='flex justify-center gap-15 pb-10'>

        {page===0 ? <button className='shadow-lg bg-white/10 rounded-xl backdrop-blur-[2px] border border-white/30 flex flex-col'
        ><Minus/></button> : <button className='shadow-lg bg-white/10 rounded-xl backdrop-blur-[2px] border border-white/30 flex flex-col hover:scale-150 duration-300 cursor-pointer'
        onClick={() => {
        setPage(page - 1)
        setSelected(null)
          }}
        ><ArrowLeft/></button>}

        {(page+1)*perPage >= Infos.length ? <button className='shadow-lg bg-white/10 rounded-xl backdrop-blur-[2px] border border-white/30 flex flex-col'
        ><Minus/></button> : <button className='shadow-lg bg-white/10 rounded-xl backdrop-blur-[2px] border border-white/30 flex flex-col hover:scale-150 duration-300 cursor-pointer'
        onClick={() => {
        setPage(page + 1)
        setSelected(null)
          }}
        ><ArrowRight/></button>}

      </div>
          <div className='h-200 text-4xl whitespace-pre-wrap'>
          {selected &&(
            <InfoCard 
            theme={selected.theme} 
            image={selected.image} 
            descricao={selected.descricao}
            infoImage={selected.infoImg}
            />
          )}
      </div>
      
    </section>
  )
}
