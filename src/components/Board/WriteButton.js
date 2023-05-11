import React from 'react';
import styled from 'styled-components';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";

const StyledButton = styled(Button)`
  && {
    background-color: rgb(83,131,236);
    color: white;
    width: 100px;
    font-weight: bold;
    font-size : 1rem;

  }
  @media (max-width: 400px) {
    min-width: 400px;
    display: block;
    margin : 0 auto;
  }
  
`;

const WriteButton = () => {
  return (
    <Link to="/write">
      <StyledButton variant="contained">글쓰기</StyledButton>
    </Link>
  );
}

export default WriteButton;
