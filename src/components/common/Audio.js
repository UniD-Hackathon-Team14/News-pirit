import styled from "styled-components";
import React, { useState } from "react";
import { useRouter } from "next/router";

/* PageItemDetail 동일한 컴포넌트 */
const Audio = ({
  datas,
  category,
  userID,
  isLogin,
  setIsModalOpen,
  preference,
  setPreference,
}) => {
  const router = useRouter();

  const [showID, setShowID] = useState([]);

  return (
    <>
      <ItemList>
        {datas?.length > 0 &&
          datas.map((item) => (
            <Background>
              <Text>{item.created_at.slice(0, 10)}</Text>
              <TextCenter>
                {" "}
                {item.question}({category})
              </TextCenter>
              <GoodsCntnr
                onMouseEnter={() => setShowID(() => [item.id])}
                onMouseLeave={() => setShowID(() => [])}
              >
                <AudioItem controls src={item.audio} />
              </GoodsCntnr>
            </Background>
          ))}
      </ItemList>
    </>
  );
};
export default Audio;

const ItemList = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-items: center;
  justify-content: center;
  column-gap: 0.5rem;
`;

const GoodsCntnr = styled.div`
  @media screen and (min-width: 480px) {
    width: ${`calc(240px - 3.28rem);`};
    height: ${`calc(240px - 3.28rem);`};
  }
  @media screen and (max-width: 480px) {
    width: ${`calc(50vw - 3.28rem);`};
    height: ${`calc(50vw - 3.28rem);`};
  }
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const AudioItem = styled.audio`
  @media screen and (min-width: 480px) {
    width: ${`calc(240px - 3.28rem);`};
  }
  @media screen and (max-width: 480px) {
    width: ${`calc(50vw - 3.28rem);`};
  }
`;

const Background = styled.div`
  @media screen and (min-width: 480px) {
    width: ${`calc(240px - 3.28rem);`};
  }
  @media screen and (max-width: 480px) {
    width: ${`calc(50vw - 3.28rem);`};
  }
  background: url(/img/audio.png) center center / contain no-repeat;
  width: 139px;
`;

const ItemHover = styled.div`
  @media screen and (min-width: 480px) {
    width: ${`calc(240px - 0.28rem);`};
    height: ${`calc(240px - 0.28rem);`};
  }
  @media screen and (max-width: 480px) {
    width: ${`calc(50vw - 0.28rem);`};
    height: ${`calc(50vw - 0.28rem);`};
  }

  position: absolute;
  display: flex;
  flex-direction: column;
  z-index: 2;
  border-radius: 0.5rem;

  background-color: rgba(0, 0, 0, 0.6);

  display: ${(props) => (props.isClick ? "flex" : "none")};
  align-items: center;
  justify-content: center;
`;

const ItemText = styled.div`
  width: 80%;
  height: 1.5rem;
  font-size: 1.2rem;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 1rem;

  font-size: 1.2rem;
  letter-spacing: -0.035rem;
  color: ${({ theme }) => theme.colors.white};
`;

const Text = styled.div`
  @media screen and (min-width: 480px) {
    width: ${`calc(240px - 3.28rem);`};
  }
  @media screen and (max-width: 480px) {
    width: ${`calc(50vw - 3.28rem);`};
  }
  font-size: 1.4rem;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

const TextCenter = styled.div`
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 25px;
  align-items: center;
  text-align: center;
`;
