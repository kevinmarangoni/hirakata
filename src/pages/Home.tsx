'use client'

import React,{useEffect, useState} from 'react'
import IKanji from '@/types/kanji'
import ApiMethods from '@utils/api'


const Home:React.FC = () => {
  const [hasFetch, setHasFetch] = useState<boolean>(false)
  const [data, setData] = useState<Array<IKanji>>([])

  const fetchData = async () =>{
    const response = await ApiMethods.getTyped(['Seion'])
    if(response?.status === 200){
      setData(response?.data)
      setHasFetch(true)
      return
    }
  }

  useEffect(()=>{
    fetchData()
  },[])
  
  return (
    <>
      {(data.length > 0) ? 
        <>
          {data.map((item: IKanji)=>{
            return (
              <p key={item.id}>{item.hiragana} = {item.romaji}</p>
            )
          })}
        </>
      :
        <>
          Carregando
        </>
      }
    </>
  )
}

export default Home