import React, { useEffect, useState, useCallback } from "react";
import styles from '../../styles/Images.module.css';
import { useRouter } from 'next/router';

export default function Images() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const endPoint = 4;
  return (
    <div>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>
          감정의<br/>
          셀프 기자회견
        </h1>
        <div className={styles.container}>
          <div className={styles.question}>
            Q{step + 1}. 오늘 기분은 어떠신가요?
          </div>
          <div className={styles.images}>
            <img height={180} src='/img/tree.jpeg'></img>
            <img height={180} src='/img/tree.jpeg'></img>
            <img height={180} src='/img/tree.jpeg'></img>
            <img height={180} src='/img/tree.jpeg'></img>
          </div>
          <div className={styles.buttons}>
            {
              step > 0 &&
              <div onClick={() => {setStep(step - 1); window.scrollTo(0,0);}}>이전</div>
            }
            <div onClick={() => {
              if(step + 1 == endPoint) {
                router.push('/write/complete');
              }
              setStep(step + 1);
              window.scrollTo(0,0);
            }}>다음</div>
          </div>
        </div>
      </div>
    </div>
  );
}
