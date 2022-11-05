import React, { useEffect, useState } from "react";
import MicRecorder from "mic-recorder-to-mp3";
import styles from "../../styles/Record.module.css";
import postApi from "../../src/api/post";
import getApi from "../../src/api/get";
import { useRouter } from "next/router";
const Mp3Recorder = new MicRecorder({ bitRate: 128 });

export default function Records() {
  const router = useRouter();

  const [blobURL, setBlobURL] = useState("");
  const [isRecording, setIsRecording] = useState(false);
  const [isBlocked, setIsBlocked] = useState(false);
  const [question, setQuestion] = useState([]);
  const [pageNum, setPageNum] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(async () => {
    router.replace("/write/record?page=1");
    const res = await getApi.getAudioQuestion();
    setQuestion(res);

    setIsLoading(false);
  }, []);
  const start = () => {
    if (!isRecording) {
      if (isBlocked) {
        alert("Permission Denied");
      } else {
        Mp3Recorder.start()
          .then(() => {
            setIsRecording(true);
          })
          .catch((e) => console.error(e));
      }
    }
  };
  const answer = [];

  console.log(Mp3Recorder);

  const stop = () => {
    if (isRecording) {
      Mp3Recorder.stop()
        .getMp3()
        .then(async ([buffer, blob]) => {
          console.log(blob);
          const res = await postApi.postAudio({
            question: question?.[pageNum]?.question,
            audio_dirs: blob,
          });
          console.log(res);

          const blobURL = URL.createObjectURL(blob);
          setBlobURL(blobURL);
          setIsRecording(false);
        })
        .catch((e) => {
          console.log(e);
        });
    } else {
      alert("음성 파일을 녹음해주세요");
    }
  };

  useEffect(() => {
    navigator.getUserMedia(
      { audio: true },
      () => {
        console.log("Permission Granted");
        setIsBlocked(false);
      },
      () => {
        console.log("Permission Denied");
        setIsBlocked(true);
      }
    );
  }, []);

  if (isLoading) return <div>Loading...</div>;
  else
    return (
      <div className={styles.container}>
        <div className="title"></div>
        <div className={styles.title}>감정의 셀프 기자회견</div>
        <div className={styles.divider} />
        <div className={styles.sub_title}>
          Q{pageNum}. {question?.[pageNum]?.contents}
        </div>
        <div className={styles.img_container} onClick={start}>
          <img src={"/img/ic_mike.png"} className={styles.img} />
        </div>{" "}
        <div className={styles.text_container}>
          <div className={styles.text}>
            {isRecording
              ? "녹음 중입니다.."
              : "마이크를 누르시면\n취재가 시작됩니다!"}
          </div>
        </div>
        <div className={styles.button_container}>
          <div className={styles.button} onClick={stop}>
            <span className={styles.button_text}>녹음완료</span>
          </div>
        </div>
      </div>
    );
}
