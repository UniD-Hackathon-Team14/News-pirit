import React, { useEffect, useState, useCallback } from "react";
import styles from '../../../styles/Navigator.module.css';
import Router, { useRouter } from 'next/router';

export default function Navigator() {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <div
        className={styles.tab}
        onClick={() => {router.push('/')}}
      >
        <img src='/img/home.png'></img>
          홈
      </div>
      <div
        className={styles.tab}
        onClick={() => {router.push('/category')}}
      >
        <img src='/img/pencil.png'></img>
        취재일기
      </div>
      <div
        className={styles.tab}
        onClick={() => {router.push('/history')}}
      >
        <img src='/img/history.png'></img>
        히스토리
      </div>
      <div
        className={styles.tab + ' ' + styles.rb}
        onClick={() => {router.push('/newsletter')}}
      >
        <img src='/img/grid.png'></img>
        뉴스레터
      </div>
    </div>
  );
}
