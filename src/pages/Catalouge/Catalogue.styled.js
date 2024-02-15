import styled from 'styled-components';

export const StyledCatalogue = styled.section`
  display: flex;
  flex-direction: column;
  width: 1184px;
  margin-left: auto;
  margin-right: auto;
  .carsWrapper {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-row-gap: 50px;
    margin-bottom: 88px;
  }
  .loadBtn {
    text-decoration: underline;
    color: rgb(52, 112, 255);
    border: none;
    background-color: transparent;
    margin-bottom: 138px;
    font-weight: 500;
    font-size: 16px;
    line-height: 1.5;
    padding: 12px 24px;
  }
`;
