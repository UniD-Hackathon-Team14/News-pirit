import React, { useCallback, useState, useRef, useEffect } from "react";
import styled, { css } from "styled-components";
import { SmallPicker } from ".";
import { useRouter } from "next/router";

const ContentsFilter = ({
  filterData,
  setFilterData,
  options,
  record_options,
  handleFetch,
}) => {
  const router = useRouter();

  return (
    <>
      <FilterContainer>
        <SmallPicker
          isMulti={false}
          options={options}
          isSearchable={false}
          inputData={filterData.category}
          setInputData={(e) => {
            setFilterData({ ...filterData, category: e });
          }}
        />
        <CategoryList>
          {record_options.map((item, idx) => (
            <ProductTypeSelect>
              <ProductTypeOption
                style={{
                  width: item.label.length * 11.5 + 40,
                  height: "3.8rem",
                }}
                isClicked={filterData.record_type === item.value}
                onClick={() => {
                  if (filterData.record_type !== item.value) {
                    setFilterData({ ...filterData, record_type: item.value });
                    handleFetch(filterData);
                  }
                }}
              >
                <div
                  style={{
                    width: item.label.length * 12,
                    textAlign: "center",
                  }}
                >
                  {item.label}
                </div>
              </ProductTypeOption>
            </ProductTypeSelect>
          ))}
        </CategoryList>
      </FilterContainer>
      <div style={{ height: "12.6rem" }} />
    </>
  );
};
export default ContentsFilter;

const FilterContainer = styled.div`
  position: fixed;
  z-index: 5;

  top: 6rem;
  @media screen and (min-width: 480px) {
    width: 480px;
  }
  @media screen and (max-width: 480px) {
    width: 100%;
    left: 0;
  }
  padding: 1.1rem;
  font-size: 1.2rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: white;
  border-bottom: 1px solid #dddddd;
  border-top: 1px solid #dddddd;
`;

const CategoryList = styled.div`
  display: flex;
  margin-left: 2rem;
  background: #f4f4f4;
  overflow-x: scroll;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  ::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;

const ProductTypeSelect = styled.div`
  border-radius: 4px;
  padding: 0.2rem;
  border-radius: 4px;
`;

const ProductTypeOption = styled.div`
  background: ${(props) => (props.isClicked ? "#ffffff" : "")};
  border-radius: 4px;
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 17px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SubFilterContainer = styled.div`
  z-index: 2;

  display: flex;
  padding: 1.5rem 2rem;
  background-color: #f4f4f4;
  overflow-x: auto;
  @media screen and (min-width: 480px) {
    width: 480px;
  }
  @media screen and (max-width: 480px) {
    width: 100%;
    left: 0;
  }
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  ::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;
