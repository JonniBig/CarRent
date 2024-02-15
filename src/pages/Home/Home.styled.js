import styled from 'styled-components';
import imageSrc from '../../assets/Ford-Mustang-Blue.png';

export const StyledHome = styled.section`
  background-image: linear-gradient(
      rgba(255, 255, 255, 0.7),
      rgba(255, 255, 255, 0.7)
    ),
    url(${imageSrc});
  background-position: center bottom;
  background-repeat: no-repeat;
  background-size: cover;
  width: 1184px;
  height: 750px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  .title {
    font-weight: 900;
    font-size: 46px;
    text-align: center;
    margin-top: 100px;
  }
  .descr {
    text-align: center;
    margin-top: 100px;
    width: auto;
    font-weight: 600;
    font-size: 20px;
    line-height: 2.5;
  }
  .image {
    width: 550px;
    height: auto;
  }
`;
