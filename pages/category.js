import React, { useEffect, useState, useCallback } from "react";
import styles from '../styles/Category.module.css';
import Navigator from '../src/components/common/navigator';
import { useRouter } from 'next/router';

export default function Category() {
  const router = useRouter();
  function handleClick(query) {
    router.push({
      pathname: '/write',
      query: { category: query },
    });
  }

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>
        <span>오늘의 헤드라인</span>
        <img src='/img/starts.png'></img>
      </h1>
      <div className={styles.container}>
        <div
          className={styles.categorybox}
          onClick={() => {handleClick('학업')}}
          style={{'backgroundImage': "url('/img/Rectangle 690.svg')"}}
        >
          <h1>학업</h1>
        </div>
        <div
          className={styles.categorybox}
          onClick={() => {handleClick('직장')}}
          style={{'backgroundImage': "url('/img/Rectangle 692.svg')"}}
        >
          <h1>직장</h1>
        </div>
        <div
          className={styles.categorybox}
          onClick={() => {handleClick('취미')}}
          style={{'backgroundImage': "url('/img/Rectangle 694.svg')"}}
        >
          <h1>취미</h1>
        </div>
        <div
          className={styles.categorybox}
          onClick={() => {handleClick('부캐')}}
          style={{'backgroundImage': "url('/img/Rectangle 695.svg')"}}
        >
          <h1>부캐</h1>
        </div>
      </div>
      <Navigator></Navigator>
    </div>
  );
}
