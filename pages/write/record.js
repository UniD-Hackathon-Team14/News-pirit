import React, { useEffect, useState, useCallback } from "react";
import {Recorder} from 'react-voice-recorder';
import 'react-voice-recorder/dist/index.css';

export default function Records() {
  const [record, setRecord] = useState({
    url: null,
    blob: null,
    chunks: null,
    duration: {
      h: 0,
      m: 0,
      s: 0
    }
  });
  function handleAudioStop(data) {
    console.log(data)
    setRecord( data );
  }

  function handleAudioUpload(file) {
    console.log(file);
  }

  function handleCountDown(data) {
    console.log(data);
  }

  function handleReset() {
    const reset = {
      url: null,
      blob: null,
      chunks: null,
      duration: {
        h: 0,
        m: 0,
        s: 0
      }
  };
  setRecord( reset );
}

  return (
    <Recorder
      record={true}
      title={"마이크를 누르시면 취재가 시작됩니다."}
      audioURL={record.url}
      showUIAudio
      handleAudioStop={data => handleAudioStop(data)}
      handleAudioUpload={data => handleAudioUpload(data)}
      handleCountDown={data => handleCountDown(data)}
      handleReset={() => handleReset()}
      mimeTypeToUseWhenRecording={`audio/webm`} // For specific mimetype.
    />
  );
}
