import styled from 'styled-components';

export const StyledCard = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 274px;
  height: 426px;
  .titleMake {
    font-weight: 500;
    font-size: 16px;
    line-height: 1.5;
  }
  .title {
    display: flex;
    justify-content: space-between;
    align-items: start;
    min-height: 24px;
    margin-bottom: 8px;
  }
  .rentalPrice {
    line-height: 1.5;
  }
  .options {
    display: flex;
    flex-wrap: wrap;
    column-gap: 12px;
    row-gap: 4px;
    font-size: 12px;
    line-height: 1.5;
    color: rgba(18, 20, 23, 0.5);
  }
  .model {
    color: rgb(52, 112, 255);
  }
  .option {
    position: relative;
  }
  .option:not(:last-child)::after {
    position: absolute;
    content: '';
    height: 16px;
    width: 1px;
    background-color: rgba(18, 20, 23, 0.1);
    right: -6px;
    top: 0;
  }
  .image {
    border-radius: 12px;
    margin-bottom: 14px;
    width: 274px;
    height: 268px;
    object-fit: cover;
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
  .imgWrapper {
    position: relative;
  }
  .heart {
    position: absolute;
    top: 14px;
    right: 14px;
    border: none;
    background-color: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
