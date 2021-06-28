import styled from 'styled-components';
import BGImg from '../../assets/background.png';
import BGImgMobile from '../../assets/background_mobile.png';
import { media } from '../../styles/media';

export const Container = styled.div`
  background-color: var(--background);
  background-image: url(${BGImg});
  background-size: cover;
  margin: 0 auto;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  ${media.mobile} {
    background-image: none;
    border: solid red 1px;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex: 2;
  .form-container {
    background: var(--background);
    width: 50%;
    height: 60%;
    border-radius: 50px;
    margin: 0 auto;
    ${media.mobile} {
      width: 90%;
      height: 50%;
      h1 {
        text-align: center;
        margin-top: 1rem;
      }
    }

    h1 {
      text-align: center;
      margin-top: 3rem;
    }
    form {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      margin: 80px auto;
      width: 70%;
      ${media.mobile} {
        margin-top: 30px;
      }
    }
  }
`;

export const InputContainer = styled.div`
  height: 100px;
  border: var(--white) solid 2px;
  width: 100%;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  ${media.mobile} {
    height: 40px;
    align-items: flex-start;
    margin-top: 20px;
  }
  input {
    height: 50%;
    background: transparent;
    border: 0;
    color: var(--white);
    font-size: 2rem;
    text-align: center;
    padding: 1rem 0;
    &::placeholder {
      color: inherit;
      text-align: center;
    }
    &:focus {
      outline: 0;
      box-shadow: inherit;
    }
  }
`;

export const ButtonLogin = styled.button`
  background: var(--green);
  width: 100%;
  height: 50px;
  border-radius: 1rem;
  margin-top: 20%;
  font-size: 2rem;
  font-weight: 700;
  border: 0;
  transition: 0.2s;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    filter: brightness(0.9);
  }
`;

export const Empty = styled.div`
  flex: 1;
  border: solid red 1px;
  ${media.mobile} {
    display: none;
  }
`;
