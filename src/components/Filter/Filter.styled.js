import styled from 'styled-components';

export const StyledFilter = styled.form`
  display: flex;
  align-items: flex-end;
  width: 859px;
  height: 74px;
  margin: 150px auto 50px auto;
  gap: 18px;

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
  .filterTitle {
    font-weight: 500;
    font-size: 14px;
    line-height: 1.3;
    color: rgb(138, 138, 137);
    margin-bottom: 8px;
  }
  .inputBrand {
    width: 224px;
    height: 48px;
  }
  .inputRent {
    width: 125px;
    height: 48px;
  }
  .inputContainer {
    display: flex;
  }
  .inputMileageL {
    border-top-left-radius: 14px;
    border-bottom-left-radius: 14px;
    border: none;
    border-right: 1px solid rgba(226, 226, 228, 1);

    background-color: rgb(247, 247, 251);
    width: 122px;
    height: 20px;
    padding: 14px 24px;
  }
  .inputMileageR {
    border-top-right-radius: 14px;
    border-bottom-right-radius: 14px;
    border: none;
    background-color: rgb(247, 247, 251);
    width: 122px;
    height: 20px;
    padding: 14px 24px;
  }
  ::placeholder {
    color: black;
    font-weight: 500;
    font-size: 18px;
  }
`;
