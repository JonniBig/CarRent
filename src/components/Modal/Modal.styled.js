import styled from 'styled-components';

export const StyledModal = styled.div`
  position: fixed;
  z-index: 10;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);

  .modal-content {
    position: absolute;
    top: 50%;
    left: 50%;
    translate: -50% -50%;
    border-radius: 24px;
    background-color: white;
    max-width: 541px;
    width: 100vw;

    overflow: auto;
  }

  .close {
    background-color: transparent;
    border: none;
    position: absolute;
    top: 16px;
    right: 16px;
    color: black;
    font-size: 32px;
    z-index: 5;
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
