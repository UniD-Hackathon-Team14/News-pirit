import React, { useEffect, useState, useCallback } from "react";
import styles from "../../styles/Complete.module.css";
import ic_pencil from "../../src/assets/icons/ic-pencil.svg";
import ic_history from "../../src/assets/icons/ic-history.svg";
import ic_grid from "../../src/assets/icons/ic-grid.svg";

export default function Complete() {
  const router = useRouter();
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.subtitle}>인터뷰에 응해주셔서 감사합니다.</h2>
      <h1 className={styles.title}>
        성현님의 오늘 하루에 대한{"\n"}취재가 완료되었습니다.
      </h1>
      <div className={styles.buttons}>
        <div>
          <img src={ic_pencil} /> 추가 인터뷰 하기
        </div>
        <div>
          <img src={ic_history} />
          취재파일 확인하기
        </div>
        <div>
          <img src={ic_grid} />
          뉴스레터 보러가기
        </div>
      </div>
      <div className={styles.reporter}>
        <img src={"/img/ic-reporter.png"} />
      </div>
    </div>
  );
}
