'use client'

import React from 'react'
import IKanji from '@/types/kanji'

interface IItemProps {
    item: IKanji
}

const FullCard:React.FC<IItemProps> = ({item}) => {
  return (
    <div>FullCard</div>
  )
}

export default FullCard