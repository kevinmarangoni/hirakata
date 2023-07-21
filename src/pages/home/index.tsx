import React from 'react'

interface Props {
  children: React.ReactNode
}

const Index:React.FC<Props> = ({children}) => {
  return (
    <div>index</div>
  )
}

export default Index