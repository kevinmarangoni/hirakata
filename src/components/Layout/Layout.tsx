'use client'

import React from 'react'
import { IChildrenProps } from '@/types/props'

import { useWindowSize } from 'usehooks-ts'

import Desktop from '@/components/Layout/Desktop'
import Mobile from '@/components/Layout/Mobile'

const Layout:React.FC<IChildrenProps> = ({children}) => {
    const { width } = useWindowSize()
  return (
    <>
        {width > 768 ? <Desktop>{children}</Desktop> : <Mobile>{children}</Mobile>}
    </>
  )
}

export default Layout
