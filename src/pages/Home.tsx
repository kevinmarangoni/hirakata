"use client";

import React, { useEffect, useState } from "react";
import IKanji from "@/types/kanji";
import ApiMethods from "@utils/api";
import FullCard from "@/components/Item/FullCard";
import styled from "styled-components";

const Home: React.FC = () => {
  const [hasFetch, setHasFetch] = useState<boolean>(false);
  const [data, setData] = useState<Array<IKanji>>([]);

  const fetchData = async () => {
    //const response = await ApiMethods.getTyped(["Seion"]);
    const response = await ApiMethods.getRandom();
    if (response?.status === 200) {
      setData(response?.data);
      setHasFetch(true);
      return;
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Container>
        <Content>
          {data.length > 0 ? (
            <>
              {data.map((item: IKanji) => {
                return <FullCard item={item} key={item.id} />;
              })}
            </>
          ) : (
            <>Carregando</>
          )}
        </Content>
      </Container>
    </>
  );
};

export default Home;

const Container = styled.section`
  padding: 10px;
`;

const Content = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  align-items: center;
`;
