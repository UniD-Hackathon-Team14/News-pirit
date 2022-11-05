import styled from "styled-components";
import React, { useState } from "react";
import { useRouter } from "next/router";

/* PageItemDetail 동일한 컴포넌트 */
const Items = ({
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
            <>
              <GoodsCntnr
                onMouseEnter={() => setShowID(() => [item.id])}
                onMouseLeave={() => setShowID(() => [])}
              >
                <Image
                  src={item.image_main}
                  onContextMenu={(e) => {
                    e.preventDefault();
                    return false;
                  }}
                  onDragStart={() => {
                    return false;
                  }}
                  onClick={() =>
                    router.push(
                      `/contents/purchase/${item.clothes_id}?contentsId=${router.query.id}`
                    )
                  }
                />
                <ItemHover
                  isClick={showID?.length > 0 && showID.includes(item.id)}
                >
                  <ItemText>
                    <Text>카테고리</Text>
                    <Text style={{ fontWeight: "bold" }}>{category}</Text>
                  </ItemText>
                </ItemHover>
              </GoodsCntnr>
            </>
          ))}
      </ItemList>
    </>
  );
};
export default Items;

const ItemList = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  align-items: center;
  justify-items: center;
  justify-content: center;
  column-gap: 0.5rem;
`;

const GoodsCntnr = styled.div`
  width: 100%;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Image = styled.div`
  background: url(${(props) => props.src}) center center / cover;
  background-color: ${({ theme }) => theme.colors.gray_7};

  @media screen and (min-width: 480px) {
    width: ${`calc(120px - 0.28rem);`};
    height: ${`calc(120px - 0.28rem);`};
  }
  @media screen and (max-width: 480px) {
    width: ${`calc(25vw - 0.28rem);`};
    height: ${`calc(25vw - 0.28rem);`};
  }
`;

const ItemHover = styled.div`
  @media screen and (min-width: 480px) {
    width: ${`calc(120px - 0.28rem);`};
    height: ${`calc(120px - 0.28rem);`};
  }
  @media screen and (max-width: 480px) {
    width: ${`calc(25vw - 0.28rem);`};
    height: ${`calc(25vw - 0.28rem);`};
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

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 1rem;

  font-size: 1.2rem;
  letter-spacing: -0.035rem;
  color: ${({ theme }) => theme.colors.white};
`;
const Text = styled.div`
  width: 100%;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;
