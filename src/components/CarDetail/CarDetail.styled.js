import styled from 'styled-components';

export const StyledCarDetail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 541px;
  height: 752px;
  padding: 40px;
  .model {
    color: rgb(52, 112, 255);
  }
  .options {
    font-size: 12px;
    line-height: 1.5;
    color: rgba(18, 20, 23, 0.5);
  }
  .description {
    font-size: 14px;
    line-height: 1.4;
  }
  .h3Title {
    font-weight: 500;
    font-size: 14px;
    line-height: 1.4;
    margin-bottom: 8px;
  }
  .accessories {
    font-size: 12px;
    line-height: 1.5;
    color: rgba(18, 20, 23, 0.5);
  }
  .conditions {
    border-radius: 35px;
    background-color: rgb(249, 249, 249);
    border: none;
    padding: 7px 14px;
  }
  .conditionsContainer {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
  }
  .image {
    width: 461px;
    height: 248px;
    border-radius: 14px;
  }
  .value {
    font-weight: 600;
    font-size: 12px;
    line-height: 1.5;
    color: rgb(52, 112, 255);
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
