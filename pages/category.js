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
          onClick={() => {handleClick('직장')}}
          style={{'background-image': "url('/img/Rectangle 690.svg')"}}
        >
          <h1>직장</h1>
        </div>
        <div
          className={styles.categorybox}
          onClick={() => {handleClick('친구')}}
          style={{'background-image': "url('/img/Rectangle 692.svg')"}}
        >
          <h1>학업</h1>
        </div>
        <div
          className={styles.categorybox}
          onClick={() => {handleClick('진로')}}
          style={{'background-image': "url('/img/Rectangle 694.svg')"}}
        >
          <h1>친구</h1>
        </div>
        <div
          className={styles.categorybox}
          onClick={() => {handleClick('학업')}}
          style={{'background-image': "url('/img/Rectangle 695.svg')"}}
        >
          <h1>가족</h1>
        </div>
      </div>
      <Navigator></Navigator>
    </div>
  );
}
