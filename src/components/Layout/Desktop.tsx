'use client'
import React from 'react'
import styled from 'styled-components'
import { IChildrenProps } from '@/types/props'
import Navbar from '@/components/Navbar/LateralNavbar'

const Desktop:React.FC<IChildrenProps> = ({children}) => {
  return (
    <Container>
      <Content>
        <NavContainer><Navbar/></NavContainer>
        <BodyContainer>{children}</BodyContainer>
      </Content>
    </Container>
  )
}

export default Desktop

const Container = styled.section`
  width: 100vw;
  height: 100vh;
`

const Content = styled.section`
  display: flex;
  flex-direction: row;
`

const NavContainer = styled.section`
  width: 300px;
  height: 100vh;
`

const BodyContainer = styled.section`
  	width: 100%;
`


