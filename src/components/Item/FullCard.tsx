'use client'

import React, { useState } from 'react'
import IKanji from '@/types/kanji'
import styled from 'styled-components'

interface IItemProps {
    item: IKanji
}

const FullCard:React.FC<IItemProps> = ({item}) => {
  const [isBack, setIsBack] = useState<boolean>(false);

  return (
    <Container onClick={() => {setIsBack(!isBack)}}>
      <Content>
        <Side>
          {!isBack ? (
            <>
              <CharacterContainer>
                <h2>hiragana</h2>
                <p>{item.hiragana}</p>
              </CharacterContainer>
              <CharacterContainer>
                <h2>katakana</h2>
                <p>{item.katakana}</p>
              </CharacterContainer>
            </>
          ) : (
            <RomajiContainer>
              <h2>romaji</h2>
              <p>{item.romaji}</p>
            </RomajiContainer>
          )}
        </Side>
      </Content>
    </Container>
  );
}

export default FullCard

const Container = styled.div`
  cursor: pointer;
  border-radius: 5px;
  border: 1px solid green;
  display: flex;
  min-width: 141px;
  justify-content: center;
  align-items: center;
`

const Content = styled.div`
  margin: 5px;
`

const Side = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  align-items: space-between;
  height: 85px;
`

const CharacterContainer = styled.div`
  *{
    text-align: center;
  }
  h2{
    font-weight: 400;
    font-size: 14px;
  }
  p{
    font-weight: 600;
    font-size: 40px;
    line-height: 65px;
  }
`

const RomajiContainer = styled.div`
  *{
    text-align: center;
  }
  h2{
    font-weight: 400;
    font-size: 14px;
  }
  p{
    font-weight: 600;
    font-size: 40px;
    line-height: 65px;
  }
  width: 130px;
`