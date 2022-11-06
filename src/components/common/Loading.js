import styled, { css } from "styled-components";
import React, { useState, useEffect, useRef } from "react";
import lottie from "lottie-web";

const Loading = ({ style }) => {
  const loadingImg = useRef();
  const [isLottie, setIsLottie] = useState(false);
  useEffect(() => {
    if (!isLottie) {
      setIsLottie(true);
      lottie.loadAnimation({
        container: loadingImg.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: require("../../assets/lottie/signup_loading.json"),
      });
    }
  }, []);

  return (
    <>
      <div style={{ width: "8rem", height: "8rem" }} ref={loadingImg} />
      <div style={{ fontSize: "1.6rem", fontWeight: "600" }}>
        로딩 중입니다…
      </div>
    </>
  );
};

export default Loading;

const ModalContainer = styled.div`
  position: fixed;
  z-index: 11;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  @media screen and (min-width: 480px) {
    width: 432px;
  }
  @media screen and (max-width: 480px) {
    width: 90%;
  }

  padding: 2.4rem 2rem;
  padding-top: 3rem;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Text = styled.div`
  width: 100%;
  white-space: pre-wrap;
  word-break: break-all;
  text-align: center;
  color: ${({ theme }) => theme.colors.black};
  font-size: 1.6rem;
  font-weight: 600;
  line-height: 2.5rem;
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

const BtnContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: ${(props) => (props.isTwo ? "space-between" : "center")};
`;

const Btn = styled.div`
  ${(props) =>
    props.isBlack
      ? css`
          background-color: ${({ theme }) => theme.colors.black};
          color: ${({ theme }) => theme.colors.white};
          font-weight: 700;
        `
      : css`
          background-color: ${({ theme }) => theme.colors.white};
          border: 0.1rem solid ${({ theme }) => theme.colors.gray_1};
          color: ${({ theme }) => theme.colors.black};
        `};
  width: 47%;
  height: 4.8rem;
  border-radius: 0.3rem;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 1.4rem;
  font-weight: 400;
`;
