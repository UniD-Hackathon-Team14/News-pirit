import React, { useEffect, useState, useCallback } from "react";
import styles from ".././../../styles/Newsletter.module.css";
import html2canvas from "html2canvas";

import jsPDF from "jspdf";
import styled from "styled-components";
export const Template = ({ printData }) => {
  const printDocument = async () => {
    //1.html을 들고와서 canvas화
    const canvas = await html2canvas(document.getElementById("divToPrint"));
    //2.이미지화
    const imageFile = canvas.toDataURL("image/png");
    //3.pdf준비
    const doc = new jsPDF("p", "mm", "a4");
    //pdf 가로 세로 사이즈
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();

    //이미지의 길이와 pdf의 가로길이가 다르므로 이미지 길이를 기준으로 비율을 구함
    const widthRatio = pageWidth / canvas.width;
    //비율에 따른 이미지 높이
    const customHeight = canvas.height * widthRatio;
    //pdf에 1장에 대한 이미지 추가
    doc.addImage(imageFile, "png", 0, 0, pageWidth, customHeight);
    //doc.addImage(imgData, 'PNG', margin, position, imgWidth, imgHeight);
    //감소하면서 남은 길이 변수
    let heightLeft = customHeight;
    //증가하면서 이미지 자를 위치 변수
    let heightAdd = -pageHeight;

    // 한 페이지 이상일 경우
    while (heightLeft >= pageHeight) {
      //pdf페이지 추가
      doc.addPage();
      //남은 이미지를 추가
      doc.addImage(imageFile, "png", 0, heightAdd, pageWidth, customHeight);
      //남은길이
      heightLeft -= pageHeight;
      //남은높이
      heightAdd -= pageHeight;
    }
    //문서저장
    doc.save("filename" + new Date().getTime() + ".pdf");
  };

  return (
    <Container id="divToPrint" src={"/img/newsBackground.png"}>
      <div className={styles.headerTitle}>
        <p>2021.11.5~2021.11.7</p>
        <h1>유니드신문</h1>
      </div>
      <div className={styles.headerInfo}>
        <div>A1</div>

        <div>2021년 11월 15일 생성</div>
      </div>
      {printData.length > 0 &&
        printData.map((item) => (
          <div className={styles.content}>
            <div className={styles.imageContent}>
              <h3 style={{ fontSize: "1.4rem" }}>
                {item.date} / {item.category}
              </h3>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                {item.image_list.map((img) => (
                  <div
                    style={{
                      fontSize: "1.2rem",
                      width: "12rem",
                      display: "flex",
                      flexDirection: "column",
                      fontSize: "1.4rem",
                      overflow: "hideen",
                      whiteSpace: "no-wrap",
                      textOverflow: "ellipsis",
                    }}
                  >
                    <div> {img.question}</div>
                    <img
                      style={{ width: "12rem", height: "12rem" }}
                      src={img.image}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
    </Container>
  );
};

const Container = styled.div`
  position: relative;

  width: 100%;
  height: 100vh;

  overflow: scroll;

  border-radius: 0.5rem;
  background: url(${(props) => props.src}) center center / cover;

  display: flex;
  flex-direction: column;
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
