import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { Container, Modal } from "../common";
import { SearchBar, ContentsHistory, ContentsFilter } from ".";
import { Template } from "../newsLetter/Template";

import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const PageHistory = ({}) => {
  const [checkList, setCheckList] = useState([]);
  const [filterData, setFilterData] = useState({
    start_date: "",
    end_date: "",
    category: { value: 1, label: "직장" },
    record_type: { value: 1, label: "음성" },
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const datas = [
    {
      id: 1,
      date: "2019-02-01",
      category: "직장",
      image: [
        {
          id: 1,
          image_main:
            "https://image.msscdn.net/images/goods_img/20220808/2703957/2703957_1_big.jpg?t=20221021141538",
        },
        {
          id: 2,
          image_main:
            "https://image.msscdn.net/images/goods_img/20220808/2703957/2703957_1_big.jpg?t=20221021141538",
        },
      ],
    },
    {
      id: 2,
      date: "2019-02-01",
      category: "학업",

      image: [
        {
          id: 3,
          image_main:
            "https://image.msscdn.net/images/goods_img/20220808/2703957/2703957_1_big.jpg?t=20221021141538",
        },
        {
          id: 4,
          image_main:
            "https://image.msscdn.net/images/goods_img/20220808/2703957/2703957_1_big.jpg?t=20221021141538",
        },
      ],
    },
    {
      id: 3,
      date: "2019-02-01",
      category: "학교",

      image: [
        {
          id: 5,
          image_main:
            "https://image.msscdn.net/images/goods_img/20220808/2703957/2703957_1_big.jpg?t=20221021141538",
        },
        {
          id: 6,
          image_main:
            "https://image.msscdn.net/images/goods_img/20220808/2703957/2703957_1_big.jpg?t=20221021141538",
        },
      ],
    },
    {
      id: 4,
      date: "2019-02-01",
      category: "직장",
      image: [
        {
          id: 7,
          image_main:
            "https://image.msscdn.net/images/goods_img/20220808/2703957/2703957_1_big.jpg?t=20221021141538",
        },
        {
          id: 8,
          image_main:
            "https://image.msscdn.net/images/goods_img/20220808/2703957/2703957_1_big.jpg?t=20221021141538",
        },
      ],
    },
  ];

  const handleFetch = () => {
    return 1;
  };

  const options = [
    { label: "전체", value: -1 },
    { label: "직장", value: 1 },
  ];
  const record_options = [
    { label: "음성", value: 1 },
    { label: "이미지", value: 2 },
  ];

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

  console.log(printData);
  return (
    <>
      <button onClick={() => setIsModalOpen(true)}>뉴스 레터만들기</button>

      <Container style={{ padding: 0, marginTop: 0 }}>
        <ContentsFilter
          filterData={filterData}
          setFilterData={setFilterData}
          options={options}
          record_options={record_options}
          handleFetch={handleFetch}
        />
        <ContentsHistory
          checkList={checkList}
          setCheckList={setCheckList}
          datas={datas}
        />
        {isModalOpen && (
          <Modal
            onClick={printDocument}
            setIsOpen={setIsModalOpen}
            printData={datas.filter((el) => checkList.includes(el.id))}
          />
        )}
      </Container>
    </>
  );
};

export default PageHistory;

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
