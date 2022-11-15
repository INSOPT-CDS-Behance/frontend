import { useState } from 'react';
import styled from 'styled-components';

import { GlassIcon } from '../../asset/icon';

const Searchbar = () => {
  const [clicked, setClicked] = useState<boolean[]>([true, false, false, false, false, false]);
  const categorys: string[] = ['프로젝트', '이미지', '프로토타입', '스트림', '인물', '무드보드'];
  const indexs: boolean[] = [true, false, false, false, false, false];
  interface Props {
    isClicked: boolean;
  }

  return (
    <>
      <InputContainer>
        <div>
          <Glass />
          <input type="text" placeholder="Behance 추천 프로젝트 검색하기" />
        </div>
        <div>
          {categorys.map((category, index) => (
            // eslint-disable-next-line react/jsx-key, react/no-unknown-property
            <button key={index} isClicked={clicked[index]}>
              {category}
            </button>
          ))}
        </div>
      </InputContainer>
    </>
  );
};

export default Searchbar;

const Glass = styled(GlassIcon)`
  margin: 1rem 1.25rem 0 2.125rem;
`;

const InputContainer = styled.section<Props>`
  display: flex;
  justify-content: center;
  height: 4rem;
  margin-top: 2.5rem;

  & > div {
    display: flex;
  }

  & > div:nth-child(1) {
    border: 0.0625rem solid black;
    width: 78.8125rem;
    background-color: ${({ theme }) => theme.colors.behance_gray100};
    border-radius: 6.25rem 0 0 6.25rem;
  }
  & > div:nth-child(2) {
    border: 0.0625rem solid black;
    width: 37.4375rem;
    border-radius: 0 6.25rem 6.25rem 0;
    align-items: center;
    padding-left: 1.4375rem;
    & > button {
      padding: 0.625rem 0.75rem;
      border: 0.0625rem solid transparent;
      background-color: transparent;
      ${({ theme }) => theme.fonts.behance_acumin_pro_medium_17};
      margin-right: 1rem;
      border-radius: 6.25rem;
      height: 2.5rem;

      background-color: ${(props) => props.isClicked && props.theme.colors.behance_black};
      color: ${(props) => props.isClicked && props.theme.colors.behance_white};
    }
  }
  & > div > input {
    ${({ theme }) => theme.fonts.behance_acumin_pro_medium_24};
    color: ${({ theme }) => theme.colors.behance_gray400};
    border: 0.0625rem solid transparent;
    width: 19.375rem;
    background-color: transparent;
  }
  & > div > input:focus {
    outline: none;
  }
`;
