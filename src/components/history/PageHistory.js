import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { Container } from "../common";
import { SearchBar, ContentsHistory, ContentsFilter } from ".";

const PageHistory = ({}) => {
  const [filterData, setFilterData] = useState({
    start_date: "",
    end_date: "",
    category: { value: 1, label: "직장" },
    record_type: { value: 1, label: "음성" },
  });

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
  return (
    <>
      <Container style={{ padding: 0, marginTop: 0 }}>
        <ContentsFilter
          filterData={filterData}
          setFilterData={setFilterData}
          options={options}
          record_options={record_options}
          handleFetch={handleFetch}
        />
        <ContentsHistory />
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
