import React, { useEffect, useState, useCallback } from "react";
import styles from '../styles/Newsletter.module.css'

export default function Newsletter() {
  return <div className={styles.container}>
        <div className={styles.headerTitle}>
            <p>2021.11.5~2021.11.7</p>
            <h1>유니드신문</h1>
        </div>
        <div className={styles.headerInfo}>
            <p>A1</p>
            <p>2021년 11월 15일 생성</p>
        </div>
        <div className={styles.content}>
            <div className={styles.imageContent}>
                <h2>00월 00일 직장에서 이슈 발생</h2>
                <div className={styles.imgContentBody}>
                    이미지
                </div>
            </div>
            <div className={styles.voiceContent}>
                <h2>00월 00일 학교에서 이슈 발생</h2>
                <div className={styles.voiceContentBody}>
                    <p>설명 글</p>
                    <button>시험시작</button>
                    <button>일시정지</button>
                </div>
            </div>
        </div>
    </div>;
}
