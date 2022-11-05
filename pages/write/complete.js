import React, { useEffect, useState, useCallback } from "react";
import styles from '../../styles/Complete.module.css';

export default function Complete() {
  return (
    <div className={styles.wrapper}>
        <h2 className={styles.subtitle}>인터뷰에 응해주셔서 감사합니다.</h2>
        <h1 className={styles.title}>
          <span>성현님의</span>
          <span>오늘 하루에 대한</span>
          <span>취재가 완료되었습니다.</span>
        </h1>
        <div className={styles.buttons}>
          <div>
            추가 인터뷰 하기
          </div>
          <div>
            취재파일 확인하기
          </div>
          <div>
            뉴스레터 보러가기
          </div>
        </div>
    </div>
  );
}
