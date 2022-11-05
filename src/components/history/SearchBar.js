import { useRouter } from "next/router";
import styled from "styled-components";
import btn_search from "../../assets/icons/btn-search.svg";

const SearchBar = () => {
  const router = useRouter();
  return (
    <>
      <SearchCntr>
        <SearchArea onClick={() => router.push("/contents/explore")}>
          <Placeholder>어떤 콘텐츠를 찾으시나요?</Placeholder>
          <img src={btn_search} />
        </SearchArea>
      </SearchCntr>
      <div style={{ height: "7.6rem" }} />
    </>
  );
};

export default SearchBar;

const SearchCntr = styled.div`
  position: fixed;
  z-index: 2;
  background-color: white;
  top: 11.2rem;
  padding: 1.6rem 2rem;
  @media screen and (min-width: 480px) {
    width: 480px;
    margin: 0 auto;
  }
  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;
const SearchArea = styled.div`
  width: 100%;
  background: #f4f4f4;
  border-radius: 4px;
  height: 4.4rem;
  display: flex;
  align-items: center;
  padding: 0 1.2rem;
  justify-content: space-between;
`;

const Placeholder = styled.div`
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;

  color: ${({ theme }) => theme.colors.gray_700};
`;
