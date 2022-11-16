import { useState } from 'react';
import styled from 'styled-components';

import { GlassIcon, ICDropdown } from '../../asset/icon';
// import icColor from '../../asset/icon.icColor.svg';
import icCreative from '../../asset/icon/icCreative.svg';
import icLink from '../../asset/icon/icLink.svg';
import icLocation from '../../asset/icon/icLocation.svg';
import icPersonFill24 from '../../asset/icon/icPersonFill24.svg';
import icSchool from '../../asset/icon/icShool.svg';
import icTool from '../../asset/icon/icTool.svg';
import theme from '../../styles/theme';

interface Props {
  isClicked: boolean;
}
const Searchbar = () => {
  const [clicked, setClicked] = useState<boolean[]>([true, false, false, false, false, false]);
  const categorys: string[] = ['프로젝트', '이미지', '프로토타입', '스트림', '인물', '무드보드'];
  const index: boolean[] = [true, false, false, false, false, false];

  interface Arr {
    id: number;
    text: string;
    src: string;
  }

  const dropboxs: Arr[] = [
    { id: 1, text: '크리에이티브 분야', src: icCreative },
    { id: 2, text: '도구', src: icTool },
    // { id: 3, text: '색상', src: icColor },
    { id: 4, text: '위치', src: icLocation },
    // { id: 5, text: '학교', src: icSchool },
    { id: 6, text: '소스파일', src: icLink },
    { id: 7, text: '구독', src: icPersonFill24 },
  ];

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
            <CategoryButton key={index} isClicked={clicked[index]}>
              {category}
            </CategoryButton>
          ))}
        </div>
      </InputContainer>
      <DropBoxContainer>
        {dropboxs.map((dropbox) => (
          <button key={dropbox.id}>
            <img src={dropbox.src} alt="드롭박스 아이콘" />
            {dropbox.text}
            <ICDropdown />
          </button>
        ))}
      </DropBoxContainer>
    </>
  );
};

export default Searchbar;

const DropBoxContainer = styled.section`
  margin-top: 2.5rem;
  margin-left: 1.875rem;
  & > button {
    margin-right: 1.25rem;
    background-color: transparent;
    border: 1px solid ${({ theme }) => theme.colors.behance_gray400};
    border-radius: 0.3125rem;
    ${({ theme }) => theme.fonts.behance_acumin_pro_regular_16};
  }
`;

const Glass = styled(GlassIcon)`
  margin: 1rem 1.25rem 0 2.125rem;
`;

const InputContainer = styled.section`
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
const CategoryButton = styled.button<Props>`
  padding: 0.625rem 0.75rem;
  border: 0.0625rem solid transparent;
  background-color: transparent;
  ${({ theme }) => theme.fonts.behance_acumin_pro_medium_17};
  margin-right: 1rem;
  border-radius: 6.25rem;
  height: 2.5rem;

  background-color: ${(props) => props.isClicked && props.theme.colors.behance_black};
  color: ${(props) => props.isClicked && props.theme.colors.behance_white};
`;
