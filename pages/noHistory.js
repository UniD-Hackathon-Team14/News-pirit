import React, { useEffect, useState, useCallback } from "react";
import styles from "../styles/NoHistory.module.css";
import Navigator from '../src/components/common/navigator';

export default function NoHistory() {
  return (
    <div className={styles.container}>
        <div className={styles.header}>
            <h1>취재파일 히스토리</h1>
        </div>
        <div className={styles.content}>
            <img src="../img/noHistoryImg.png"/>
            <p>아직 취재일기가 없어요</p>
            <p>기자회견을 진행하러 가볼까요?</p>
            <button>취재일기 작성하기</button>
        </div>
        <Navigator></Navigator>
    </div>
  );
}
