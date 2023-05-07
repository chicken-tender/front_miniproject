import React,{useState} from "react";
import BoardList from "../components/Board/BoardList";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/Header";
import SearchInput from "../components/Board/Search";
import Pages from "../components/Board/Paginations";
import Footer from "../components/Footer";
import WriteButton from "../components/Board/WriteButton";

const BoardName = styled.div`
  font-size: 1.5rem;
  margin: 30px 0px 10px 130px;
  padding : 10px 0px 0px 100px;
  width: 100%;

  @media (max-width: 768px) {
    text-align: center;
    margin: 30px 0 10px 0;
    padding: 10px 0;
  }

`;
const WriteButtonWrapper = styled.div`

text-align: right;
padding-top : 30px;
  margin-right: 220px;
`;

const WorkerPage = () => {
  const { pageNum } = useParams();
  const [resultData, setResultData] = useState(null);
  const [totalPosts, setTotalPosts] = useState(0);
  
  const handleSetResultData = (data) => {
    setResultData(data);
    setTotalPosts(data ? data.totalPosts : 0);
  };
  return (
    <>
      <Header />
      <BoardName>
      직장인 게시판
    </BoardName>
    <SearchInput boardName="worker" pageNum={pageNum} setResultData={handleSetResultData} />
      <BoardList boardName="worker" pageNum={pageNum} resultData={resultData}/>
      <WriteButtonWrapper>
        <WriteButton />
      </WriteButtonWrapper>
      {resultData && <Pages boardNum={3} path="/worker" totalPosts={totalPosts} />}
      {!resultData && <Pages boardNum={3} path="/worker" />}
    <Footer />
    </>
  );
}

export default WorkerPage;