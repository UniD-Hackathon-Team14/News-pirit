import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { Items } from "../common";

const ContentsHistory = ({}) => {
  const datas = [
    {
      date: "2019-02-01",
      category: "직장",
      image: [
        {
          id: 1,
          image_main:
            "https://image.msscdn.net/images/goods_img/20220808/2703957/2703957_1_big.jpg?t=20221021141538",
        },
        {
          id: 2,
          image_main:
            "https://image.msscdn.net/images/goods_img/20220808/2703957/2703957_1_big.jpg?t=20221021141538",
        },
      ],
    },
    {
      date: "2019-02-01",
      category: "학업",

      image: [
        {
          id: 3,
          image_main:
            "https://image.msscdn.net/images/goods_img/20220808/2703957/2703957_1_big.jpg?t=20221021141538",
        },
        {
          id: 4,
          image_main:
            "https://image.msscdn.net/images/goods_img/20220808/2703957/2703957_1_big.jpg?t=20221021141538",
        },
      ],
    },
    {
      date: "2019-02-01",
      category: "학교",

      image: [
        {
          id: 5,
          image_main:
            "https://image.msscdn.net/images/goods_img/20220808/2703957/2703957_1_big.jpg?t=20221021141538",
        },
        {
          id: 6,
          image_main:
            "https://image.msscdn.net/images/goods_img/20220808/2703957/2703957_1_big.jpg?t=20221021141538",
        },
      ],
    },
    {
      date: "2019-02-01",
      category: "직장",
      image: [
        {
          id: 7,
          image_main:
            "https://image.msscdn.net/images/goods_img/20220808/2703957/2703957_1_big.jpg?t=20221021141538",
        },
        {
          id: 8,
          image_main:
            "https://image.msscdn.net/images/goods_img/20220808/2703957/2703957_1_big.jpg?t=20221021141538",
        },
      ],
    },
  ];
  return (
    <>
      {datas.map((item) => (
        <>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Text>{item.date}</Text>
            <Text>{item.category}</Text>
          </div>

          <Items datas={item.image} category={item.category} />
        </>
      ))}
    </>
  );
};

export default ContentsHistory;

const Text = styled.div`
  display: block;
  margin-bottom: 0.5rem;
  font-family: Roboto;
  font-size: ${(props) => (props.isSmall ? "1.2rem" : "1.4rem")};
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
