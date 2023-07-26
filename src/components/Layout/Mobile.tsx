'use client'
import React from 'react'
import styled from 'styled-components'
import { IChildrenProps } from '@/types/props'
import Navbar from '@/components/Navbar/MobileNavbar'

const Mobile:React.FC<IChildrenProps> = ({children}) => {
  return (
    <Container>
      <Content>
        <NavContainer><Navbar/></NavContainer>
        <BodyContainer>{children}</BodyContainer>
      </Content>
    </Container>
  )
}

export default Mobile

const Container = styled.section`
  width: 100vw;
  height: 100vh;
`

const Content = styled.section`
  display: flex;
  flex-direction: column;
`

const NavContainer = styled.section`
  width: 100%;
  height: 100px;
`

const BodyContainer = styled.section`
  	width: 100%;
`
