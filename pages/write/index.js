import React, { useEffect, useState, useCallback } from "react";
import styles from '../../styles/Write.module.css';
import Navigator from '../../src/components/common/navigator';
import { useRouter } from 'next/router';

export default function Write() {
  const router = useRouter();
  const [date, setDate] = useState('');

  useEffect(() => {
    setDate(new Date().toLocaleDateString());
  }, []);

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>
        <span>{date}</span>
        <span>성현님 기자회견</span>
      </h1>
      <div className={styles.container}>
        <div
          className={styles.optionbox}
          onClick={() => {router.push('/write/images')}}
        >
          <img className={styles.img1} src='/img/photographer 1.svg'></img>
          사진 기록
        </div>
        <div
          className={styles.optionbox}
          onClick={() => {router.push('/write/record')}}
        >
          <img className={styles.img2} src='/img/dubbing 1.svg'></img>
          음성 기록
        </div>
      </div>
      <Navigator></Navigator>
    </div>
  );
}