'use client'

import React,{useEffect, useState} from 'react'
import { IKanji } from '@types/kanji.d'
import ApiMethods from '@utils/api'


const Home:React.FC = () => {
  const [hasFetch, setHasFetch] = useState<boolean>(false)
  const [data, setData] = useState<Array<IKanji>>([])

  const fetchData = async () =>{
    const response = await ApiMethods.getAll()
    if(response?.status === 200){
      setData(response?.data)
      return
    }
  }

  useEffect(()=>{
    if(hasFetch){
      fetchData()
    }
  },[hasFetch])
  
  return (
    <>
      {

      }
    </>
  )
}

export default Home