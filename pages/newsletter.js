import React, { useEffect, useState, useCallback } from "react";
import styles from "../styles/Newsletter.module.css";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export default function Newsletter() {
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
    <div id="divToPrint" className={styles.divToPrint}>
        <div className={styles.container}>
          <div className={styles.headerTitle}>
            <div>
              <p>2021.11.5~2021.11.7</p>
              <button onClick={printDocument}>Print</button>
            </div>
            <h1>유니드신문</h1>
          </div>
          <div className={styles.headerInfo}>
            <p>2021년 11월 15일 생성</p>
          </div>
          <div className={styles.content}>
            <div className={styles.imageContent}>
              <h2>00월 00일 직장에서 이슈 발생</h2>
              <p>이날 OO님의 하루는 사진으로 기록되었습니다.</p>
              <div className={styles.imgContentBody}>
                <img src="https://image.msscdn.net/images/goods_img/20200814/1550594/1550594_5_500.jpg?t=20220816110932"></img>
                <img src="https://image.msscdn.net/images/goods_img/20200814/1550594/1550594_5_500.jpg?t=20220816110932"></img>
                <img src="https://image.msscdn.net/images/goods_img/20200814/1550594/1550594_5_500.jpg?t=20220816110932"></img>
              </div>
            </div>
            <div className={styles.voiceContent}>
              <h2>00월 00일 학교에서 이슈 발생</h2>
              <p>이날 OO님의 하루는 음성으로 기록되었습니다.</p>
              <div className={styles.voiceContentBody}>
                <button>돌아보기</button>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}
