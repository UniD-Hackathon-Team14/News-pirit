import React, { useEffect, useState, useCallback } from "react";
import styles from "../../styles/Images.module.css";
import { useRouter } from "next/router";
import getApi from "../../src/api/get";
import postApi from "../../src/api/post";
import Image from "next/image";
import { Loading } from "../../src/components/common";

export default function Images() {
  const router = useRouter();
  const [data, setData] = useState([
    {
      question: 0,
      contents: "",
      answer_list: [],
    },
  ]);
  const [step, setStep] = useState(0);
  const [imgList, setImgList] = useState([]);
  const [select, setSelect] = useState([]);
  const [pathList, setPathList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!router.query.category) return;
    getApi.getImages(router.query.category).then((res) => {
      console.log(res);
      if (res == "All question answered") {
        alert("더 이상 풀 수 있는 문제가 없슨니다.");
        router.push("/");
      } else {
        setData(res);

        let tmp = [];
        for (let i = 0; i < res.length; i++) tmp.push(-1);
        setSelect(tmp);
        setPathList(tmp);
      }
    });
  }, [router.query.category]);

  useEffect(() => {
    setIsLoading(true);
    if (data[step].answer_list.length === 0) return;
    let tmp = [];
    for (let i = 0; i < data[step].answer_list.length; i++) {
      tmp.push(
        <div className={styles.blackcontainer}>
          <div
            className={styles.black}
            style={i === select[step] ? { opacity: "0.5" } : { opacity: "0" }}
            onClick={() => {
              let tmp = [...select];
              tmp[step] = i;
              setSelect(tmp);
              tmp = [...pathList];
              tmp[step] = data[step].answer_list[i].pk;
              setPathList(tmp);
            }}
          ></div>
          <Image
            quality={75}
            priority
            key={i}
            width={240}
            height={180}
            src={data[step]?.answer_list[i]?.url}
            style={{ position: "absolute" }}
          />
        </div>
      );
    }
    setImgList(tmp);
    setIsLoading(false);
  }, [step, data, select]);

  return (
    <div>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>
          감정의
          <br />
          셀프 기자회견
        </h1>

        <div className={styles.container}>
          <div className={styles.question}>
            Q{step + 1}. {data[step]?.contents}
          </div>
          {isLoading ? (
            <Loading />
          ) : (
            <div className={styles.images}>{imgList}</div>
          )}
          <div className={styles.buttons}>
            {step > 0 && (
              <div
                className={styles.last}
                onClick={() => {
                  setStep(step - 1);
                }}
              >
                이전
              </div>
            )}
            <div
              className={styles.next}
              style={step > 0 ? { width: "100px" } : { width: "140px" }}
              onClick={() => {
                if (step + 1 === data.length) {
                  const userID = localStorage.getItem("userID");

                  postApi.imageAnswer({ answers: pathList, user: userID });
                  router.push("/write/complete");
                } else {
                  if (select[step] != -1) {
                    setStep(step + 1);
                  } else {
                    alert("사진을 선택해주세요.");
                  }
                }
              }}
            >
              다음
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
