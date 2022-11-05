import styled, { css } from "styled-components";
import React from "react";
import { Template } from "../newsLetter/Template";

const Modal = ({ setIsOpen, onClick, printData }) => {
  console.log(printData);
  return (
    <>
      <Background onClick={() => setIsOpen(false)} />
      <ModalContainer>
        <Template printData={printData} />
      </ModalContainer>
      <BottomBtn onClick={onClick}>추출</BottomBtn>
    </>
  );
};

export default Modal;

const Background = styled.div`
  position: fixed;
  top: 0;
  z-index: 10;
  overflow: hidden;

  @media screen and (min-width: 480px) {
    width: 480px;
  }
  @media screen and (max-width: 480px) {
    width: 100vw;
    left: 0;
  }

  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
`;

const ModalContainer = styled.div`
  position: fixed;
  z-index: 11;
  overflow: scroll;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  @media screen and (min-width: 480px) {
    width: 432px;
  }
  @media screen and (max-width: 480px) {
    width: 90%;
  }

  height: 80%;
  padding-bottom: 5.4rem;
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.colors.white};

  display: flex;
  flex-direction: column;
`;
const Wrapper = styled.div`
  width: 100%;
  margin-top: 5.4rem;
`;

const Text = styled.div`
  width: 100%;
  margin-bottom: 0.5rem;
  white-space: pre-wrap;
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

const SubText = styled.div`
  width: 100%;
  margin-bottom: 3rem;
  white-space: pre-wrap;
  word-break: break-all;
  font-size: 1.2rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.black};
`;
const BottomBtn = styled.div`
  position: fixed;
  z-index: 12;
  bottom: 10%;
  @media screen and (min-width: 480px) {
    width: 432px;
  }
  @media screen and (max-width: 480px) {
    width: 90%;
  }
  border-radius: 0 0 0.5rem 0.5rem;
  height: 7.5rem;
  background-color: ${({ theme }) => theme.colors.black};

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 1.8rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.white};
`;

const CtgCntnr = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const CodyList = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-items: center;
  justify-content: center;
  column-gap: 0.5rem;
`;

const GoodsCntnr = styled.div`
  width: 100%;
  margin-bottom: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const CartBtn = styled.img`
  position: relative;
  z-index: 2;
  top: -4rem;
  margin-right: 1rem;
  width: 3rem;
  height: 3rem;
  border-radius: 1.5rem;
  box-shadow: 0 0.3rem 0.6rem rgba(0, 0, 0, 0.1);
`;

const Image = styled.div`
  background: url(${(props) => props.src}) center center / cover;
  background-color: ${({ theme }) => theme.colors.gray_7};

  @media screen and (min-width: 480px) {
    width: ${`calc(216px - 0.28rem);`};
    height: ${`calc(255.27px - 0.28rem);`};
  }
  @media screen and (max-width: 480px) {
    width: ${`calc(45vw - 0.28rem);`};
    height: ${`calc(53.18vw - 0.28rem);`};
  }
`;
const MyClothIcon = styled.div`
  position: absolute;
  width: 2.8rem;
  height: 2.8rem;
  background-color: ${({ theme }) => theme.colors.navy};
  color: white;
  font-size: 0.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
`;
const TextCntr = styled.div`
  @media screen and (min-width: 480px) {
    width: ${`calc(216px - 0.25rem);`};
  }
  @media screen and (max-width: 480px) {
    width: ${`calc(45vw - 0.25rem);`};
  }
  height: 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
  justify-content: center;
  padding: 1.5rem;
  padding-top: 0.5rem;
  padding-bottom: 0rem;
`;

const GoodsTextCntr = styled.div`
  width: 100%;
  height: 2rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 0.5rem;
`;

const Btn = styled.div`
  position: fixed;
  z-index: 11;
  bottom: 0;

  @media screen and (min-width: 480px) {
    width: 480px;
  }
  @media screen and (max-width: 480px) {
    width: 100%;
  }

  height: 7.5rem;
  background-color: ${({ theme }) => theme.colors.black};
  box-shadow: ${(props) =>
    props.isShow ? "0 -0.5rem 1rem 0.2rem rgba(0, 0, 0, 0.3)" : "none"};

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 1.8rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.white};
`;

const Line = styled.div`
  margin-top: 1rem;
  border-bottom: ${(props) =>
    props.isLast ? "none" : props.isTwo ? "none" : "1rem solid  #F4F4F4"};
  width: 100%;
`;

const CodiTip = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  line-height: 2rem;
  margin-left: 3rem;
  margin-top: 2.2rem;
  margin-bottom: 2rem;
  font-family: Roboto;
  font-size: ${(props) => (props.isSmall ? "1.2rem" : "1.4rem")};
  letter-spacing: -0.035rem;
  color: ${({ theme }) => theme.colors.black};
`;
