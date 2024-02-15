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
  .title {
    text-align: center;
    font-size: 20px;
    line-height: 2;
    margin: 50px 0;
  }
`;
