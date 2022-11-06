import React, { useEffect, useState, useCallback } from "react";
import styles from "../../styles/Complete.module.css";
import Router, { useRouter } from "next/router";

export default function Complete() {
  const router = useRouter();
  const [nickname, setNicName] = useState("");
  useEffect(() => {
    const nick_name = localStorage.getItem("nickname");
    setNicName(nick_name);
  }, []);
  
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.subtitle}>인터뷰에 응해주셔서 감사합니다.</h2>
      <h1 className={styles.title}>
        <span>{nickname}님의 오늘 하루에 대한</span>
        <span>취재가 완료되었습니다.</span>
      </h1>
      <div className={styles.buttons}>
        <div
          onClick={() => {
            router.push("/category");
          }}
        >
          <img src="/img/dark_pencil.svg"></img>
          추가 인터뷰 하기
        </div>
        <div
          onClick={() => {
            router.push("/history");
          }}
        >
          <img src="/img/dark_history.svg"></img>
          취재파일 확인하기
        </div>
        <div
          onClick={() => {
            router.push("/newsletter");
          }}
        >
          <img src="/img/dark_grid.svg"></img>
          뉴스레터 보러가기
        </div>
      </div>
      <img className={styles.completeman} src="/img/completeman.svg"></img>
    </div>
  );
}
