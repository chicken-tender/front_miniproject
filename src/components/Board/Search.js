import { useState } from "react";
import SearchIcon from '@material-ui/icons/Search';
import styled from "styled-components";
import boardAxiosApi from "../../api/BoardAxiosApi";

const SearchContainer = styled.div`
  width: 50%;
  display: flex;
    align-items: center;
    margin-left : 300px;
    padding-left :220px;
    padding-bottom: 20px;
    padding-top : 30px;
    justify-content: flex-end;
    gap: 5px;

    @media (max-width: 768px) {
   justify-content :center;
    margin : 0 auto;
    text-align: center;
    padding-left : 0;
    width : 80%; 
  }
  `;
  
  const SearchBar = styled.input`
  width : 50%;
  height: 40px;
  border-radius: 25px;
  font-size : 0.9rem;
  border: 1px solid #e5e5e5;
  box-sizing: border-box;
  padding-left : 10px;
  
  @media (max-width: 768px) {
    text-align: center;
    width: 100%;
    height : 45px;
  }
`;

const StyledSearchIcon = styled(SearchIcon)`
  top: 50%;
  cursor: pointer;
`;


const SearchInput = ({ boardName, pageNum, setResultData,setKeyword }) => {
  const [keyword, setSearchKeyword] = useState("");

  const handleSearchIconClick = async () => {
    try {
      setKeyword(keyword);
      const response = await boardAxiosApi.searchPosts(boardName, pageNum, keyword);
      setResultData(response);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (event) => {
    setSearchKeyword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleSearchIconClick();
  };

  return (
    <>
       <SearchContainer>
        <SearchBar type="search" placeholder="검색어를 입력하세요" onChange={handleChange} />
        <StyledSearchIcon onClick={handleSubmit} />
      </SearchContainer>
      
     </>
  );
}

export default SearchInput;