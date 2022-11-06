import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { Items, Audio } from "../common";

const ContentsHistory = ({
  checkList,
  setCheckList,
  datas,
  type,
  filterData,
}) => {
  const makeNewsLetter = () => {
    const filterData = datas.filter((el) => checkList.includes(el));
  };
  console.log(type);
  console.log(datas);
  return (
    <>
      {type == "audio" ? (
        <>
          <Audio datas={datas} category={filterData.category.value} />
        </>
      ) : (
        datas.length > 0 &&
        datas.map((item, idx) => (
          <>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <input
                  type="checkBox"
                  checked={checkList.includes(idx)}
                  onChange={
                    checkList.includes(idx)
                      ? () =>
                          setCheckList(checkList.filter((el, id) => id != idx))
                      : () => setCheckList(checkList.concat(idx))
                  }
                  style={{ height: "2rem" }}
                />
                <div style={{
                  padding: "5px",
                  margin: "5px",
                }}>
                  <Text>{item.date}</Text>
                </div>
              <Text>{item.category}</Text>
              
             </div>
             </div>
            <Items datas={item.image_list} category={item.category} />
          </>
        ))
      )}
    </>
  );
};

export default ContentsHistory;

const Text = styled.div`
  display: block;
  font-family: Roboto;
  font-size: ${(props) => (props.isSmall ? "1.6rem" : "1.8rem")};
  font-weight: 700;
  letter-spacing: -0.035rem;
  color: ${(props) =>
    props.isGray
      ? ({ theme }) => theme.colors.gray_3
      : ({ theme }) => theme.colors.black};

  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

const ContentCntnr = styled.div`
  position: fixed;
  z-index: 4;

  top: 18.8rem;
  @media screen and (min-width: 480px) {
    width: 480px;
  }
  @media screen and (max-width: 480px) {
    width: 100%;
    left: 0;
  }
  padding: 1.1rem 2rem;

  height: 6.4rem;
  background-color: ${({ theme }) => theme.colors.white};
  /* box-shadow: 0 1rem 1rem rgba(255, 255, 255, 1); */

  display: flex;
  flex-direction: row;
`;

const ContentsBtnCntr = styled.div`
  width: 100%;
  display: flex;
  background: #f4f4f4;
  border-radius: 4px;
  padding: 0.2rem;
`;

const ContentBtn = styled.div`
  ${(props) =>
    props.isClicked
      ? css`
          background-color: white;
          color: ${({ theme }) => theme.colors.black};
        `
      : css`
          color: ${({ theme }) => theme.colors.gray_2};
        `};

  width: 50%;
  height: 3.8rem;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 1.4rem;
  font-weight: 700;
`;
