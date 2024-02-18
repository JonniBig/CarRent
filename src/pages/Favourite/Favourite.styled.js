import styled from 'styled-components';

export const StyledFavourite = styled.section`
  width: 1184px;
  margin-left: auto;
  margin-right: auto;
  .carsWrapper {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-row-gap: 50px;
  }
  .fav-title {
    text-align: center;
    font-size: 20px;
    line-height: 2;
    margin: 50px 0;
  }
  .learnBtn {
    color: white;
    background-color: rgb(52, 112, 255);
    border-radius: 12px;
    border: none;
    width: 100%;
    height: 44px;
    transition: all 0.6s;
  }
  .learnBtn:hover {
    background-color: rgb(11, 68, 205);
  }
`;
