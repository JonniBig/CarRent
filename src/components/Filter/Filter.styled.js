import styled from 'styled-components';

export const StyledFilter = styled.div`
  display: flex;
  justify-content: space-between;
  width: 859px;
  height: 74px;
  margin: 150px auto 50px auto;
  .saerchBtn {
    color: white;

    background-color: rgb(52, 112, 255);
    border-radius: 12px;
    border: none;
    width: 136px;
    height: 48px;
    transition: all 0.6s;
  }
  .saerchBtn:hover {
    background-color: rgb(11, 68, 205);
  }
`;
