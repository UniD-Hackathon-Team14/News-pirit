import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { Container, Modal } from "../common";
import { SearchBar, ContentsHistory, ContentsFilter } from ".";
import { Template } from "../newsLetter/Template";
import Navigator from "../common/navigator";

import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { style } from "@mui/system";
import getApi from "../../api/get";

const PageHistory = ({}) => {
  const [nickname, setNicName] = useState("");
  const [checkList, setCheckList] = useState([]);
  const [filterData, setFilterData] = useState({
    start_date: "",
    end_date: "",
    record_type: { label: "이미지", value: "image" },
    category: { label: "학업", value: "학업" },
  });
  const [datas, setDatas] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const nick_name = localStorage.getItem("nickname");
    handleFetch(filterData);
    setNicName(nick_name);
  }, []);

  const handleFetch = async (filter_data) => {
    const query = {
      category: filter_data.category.value,
      type: filter_data.record_type.value,
    };
    const userId = localStorage.getItem("userID");
    console.log(userId);
    const res = await getApi.getHistory(
      {
        type: filter_data.record_type.value,
        category: filter_data.category.value,
      },
      userId
    );
    setDatas(filter_data.record_type.value == "audio" ? res.audio_list : res);
  };

  const options = [
    { label: "이미지", value: "image" },
    { label: "음성", value: "audio" },
  ];

  const record_options = [
    { label: "학업", value: "학업" },
    { label: "직장", value: "직장" },
    { label: "취미", value: "취미" },
    { label: "부캐", value: "부캐" },
  ];

  console.log(filterData);
  const printData = async () => {
    const convert_data = await datas.filter((el) => checkList.includes(el.id));
    return convert_data;
  };

  const printDocument = async () => {
    //1.html을 들고와서 canvas화
    var elem = document.getElementById("divToPrint");
    if (elem) {
      var rect = elem.getBoundingClientRect();
      console.log("height: " + rect.height);

      const canvas = await html2canvas(document.getElementById("divToPrint"));
      //2.이미지화
      const imageFile = canvas.toDataURL("image/png");
      //3.pdf준비
      const doc = new jsPDF("p", "mm", "a4");
      //pdf 가로 세로 사이즈
      const pageWidth = doc.internal.pageSize.getWidth();
      const pageHeight = doc.internal.pageSize.getHeight();

      //이미지의 길이와 pdf의 가로길이가 다르므로 이미지 길이를 기준으로 비율을 구함
      const widthRatio = rect.width / canvas.width;
      //비율에 따른 이미지 높이
      const customHeight = rect.height * widthRatio;
      //pdf에 1장에 대한 이미지 추가
      console.log(imageFile);
      doc.addImage(imageFile, "png", 0, 0, pageWidth, customHeight);
      //doc.addImage(imgData, 'PNG', margin, position, imgWidth, imgHeight);
      //감소하면서 남은 길이 변수
      let heightLeft = customHeight;
      //증가하면서 이미지 자를 위치 변수
      let heightAdd = -pageHeight;

      // 한 페이지 이상일 경우
      while (heightLeft >= pageHeight) {
        //pdf페이지 추가
        doc.addPage();
        //남은 이미지를 추가
        doc.addImage(imageFile, "png", 0, heightAdd, pageWidth, customHeight);
        //남은길이
        heightLeft -= pageHeight;
        //남은높이
        heightAdd -= pageHeight;
      }
      //문서저장
      doc.save("filename" + new Date().getTime() + ".pdf");
    }
  };

  return (
    <>
      <Container style={{}}>
        <Title style={{fontWeight: "bold",}}>&nbsp;&nbsp;<span>&#x1F3A4;</span>&nbsp;&nbsp;{nickname}님의 취재파일</Title>
        <ContentsFilter
          filterData={filterData}
          setFilterData={setFilterData}
          options={options}
          record_options={record_options}
          handleFetch={handleFetch}
        />

        {filterData.record_type.value == "image" && (
          <div style={{ width: "100%", justifyContent: "flex-end" }}>
            <button
              style={{
                width: "95%",
                alignItems: "center",
                backgroundColor: "#ffffff",
                margin: "5% 0 3% 2.5%",
                padding: "13px 15px",
                fontSize: '18px',
                fontWeight: "bold",
              }}
              onClick={() => setIsModalOpen(true)}
            >
              뉴스레터 만들기
            </button>
          </div>
        )}

        <ContentsHistory
          checkList={checkList}
          setCheckList={setCheckList}
          datas={datas}
          filterData={filterData}
          type={filterData?.record_type?.value}
        />
        {isModalOpen && (
          <Modal
            onClick={printDocument}
            setIsOpen={setIsModalOpen}
            printData={datas.filter((el, idx) => checkList.includes(idx))}
          />
        )}
      </Container>
    </>
  );
};

export default PageHistory;

const Title = styled.div`
  z-index: 3;
  @media screen and (min-width: 480px) {
    width: 480px;
  }
  @media screen and (max-width: 480px) {
    width: 100%;
    left: 0;
  }
  position: fixed;
  height: 8.5rem;
  top: 0;
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 28px;
  line-height: 38px;
  display: flex;
  align-items: center;

  color: #000000;
  background-color: #eaeaea;
`;
const ContentCntnr = styled.div`
  position: fixed;
  z-index: 4;

  top: 18.8rem;
  @media screen and (min-width: 480px) {
    width: 480px;
  }
  @media screen and (max-width: 480px) {
    width: 100%;
    left: 0;
  }
  padding: 1.1rem 2rem;

  height: 6.4rem;
  background-color: ${({ theme }) => theme.colors.white};
  /* box-shadow: 0 1rem 1rem rgba(255, 255, 255, 1); */

  display: flex;
  flex-direction: row;
`;

const ContentsBtnCntr = styled.div`
  width: 100%;
  display: flex;
  background: #f4f4f4;
  border-radius: 4px;
  padding: 0.2rem;
`;

const ContentBtn = styled.div`
  ${(props) =>
    props.isClicked
      ? css`
          background-color: white;
          color: ${({ theme }) => theme.colors.black};
        `
      : css`
          color: ${({ theme }) => theme.colors.gray_2};
        `};

  width: 50%;
  height: 3.8rem;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 1.4rem;
  font-weight: 700;
`;
