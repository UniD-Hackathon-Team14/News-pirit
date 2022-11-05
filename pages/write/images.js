import React, { useEffect, useState, useCallback } from "react";
import styles from '../../styles/Images.module.css';
import { useRouter } from 'next/router';
import getApi from '../../src/api/get';

export default function Images() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const endPoint = 4;

  useEffect(() => {
    if(router.query.category){
        const data = getApi.getImages(router.query.category);
        console.log(data);
    }
  }, [router.query.category]);

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
              <div className={styles.last} onClick={() => {setStep(step - 1)}}>이전</div>
            }
            <div
              className={styles.next}
              style={step > 0 ? {'width' : '100px'} : {'width': '140px'}}
              onClick={() => {
                if(step + 1 == endPoint) {
                  router.push('/write/complete');
                }
              setStep(step + 1);
            }}>다음</div>
          </div>
        </div>
      </div>
    </div>
  );
}
