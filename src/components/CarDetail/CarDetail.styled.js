import styled from 'styled-components';

export const StyledCarDetail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 541px;
  height: 752px;
  padding: 40px;

  .container {
  }
  .image {
    width: 461px;
    height: 248px;
  }
  .rentBtn {
    color: white;
    background-color: rgb(52, 112, 255);
    border-radius: 12px;
    border: none;
    width: 168px;
    height: 44px;
    transition: all 0.6s;
  }
  .rentBtn:hover {
    background-color: rgb(11, 68, 205);
  }
`;
