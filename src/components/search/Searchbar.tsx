import { useRef, useState } from 'react';
import styled from 'styled-components';

import { ArrowRight, GlassIcon, ICDropdown } from '../../asset/icon';
import icColor from '../../asset/icon/icColor.svg';
import icCreative from '../../asset/icon/icCreative.svg';
import icLink from '../../asset/icon/icLink.svg';
import icLocation from '../../asset/icon/icLocation.svg';
import icPersonFill24 from '../../asset/icon/icPersonFill24.svg';
import icSchool from '../../asset/icon/icSchool.svg';
import icTool from '../../asset/icon/icTool.svg';
import theme from '../../styles/theme';
import { DropboxList } from '../../types/common';

interface Props {
  isClicked: boolean;
}
interface CategoryProps {
  categoryIsClicked: boolean;
}
const Searchbar = () => {
  const [clicked, setClicked] = useState<boolean[]>([true, false, false, false, false, false]);
  const categorys: string[] = ['프로젝트', '이미지', '프로토타입', '스트림', '인물', '무드보드'];
  // const searchRef = useRef('ddd');
  const [placeholder, setplaceholder] = useState('Behance 추천 프로젝트 검색하기');

  const dropboxList: DropboxList[] = [
    { id: 1, text: '크리에이티브 분야', src: icCreative },
    { id: 2, text: '도구', src: icTool },
    { id: 3, text: '색상', src: icColor },
    { id: 4, text: '위치', src: icLocation },
    { id: 5, text: '학교', src: icSchool },
    { id: 6, text: '소스파일', src: icLink },
    { id: 7, text: '구독', src: icPersonFill24 },
  ];

  const [categoryclicked, setcategoryClicked] = useState<boolean[]>([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const Categorys: string[] = [
    'digital art',
    'digital art',
    'digital art',
    'digital art',
    'digital art',
    'digital art',
    'digital art',
    'digital art',
    'digital art',
    'digital art',
    'digital art',
    'digital art',
    'digital art',
  ];

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const id = Number(e.currentTarget.id);
    // 클릭된 카테고리만 true, 나머지는 false로 바꾸기
    const newArr = [...clicked];
    newArr.forEach((item) => {
      item === true ? (newArr[newArr.indexOf(item)] = false) : null;
    });
    newArr[id] = true;
    setcategoryClicked(newArr);
    setplaceholder(Categorys[id]);
  };

  return (
    <>
      <Search>
        <InputContainer>
          <div>
            <Glass />
            <Input type="text" placeholder={placeholder} categoryIsClicked={true} />
          </div>
          <div>
            {categorys.map((category, index) => (
              <Button key={index} isClicked={clicked[index]}>
                {category}
              </Button>
            ))}
          </div>
        </InputContainer>
        <DropBoxContainer>
          <section>
            {dropboxList.map((dropbox) => (
              <button key={dropbox.id}>
                <img src={dropbox.src} alt="드롭박스 아이콘" />
                <p>{dropbox.text}</p>
                <ICDropdown />
              </button>
            ))}
          </section>
          <section>
            <p>추천순</p>
            <ICDropdown />
          </section>
        </DropBoxContainer>
      </Search>
      <Body>
        <section>
          <Arrow />
          <Gradient />
        </section>
        <Container>
          {Categorys.map((category, i) => (
            <CategoryButton key={i} onClick={handleClick} categoryIsClicked={categoryclicked[i]}>
              {category}
            </CategoryButton>
          ))}
        </Container>
      </Body>
    </>
  );
};

export default Searchbar;

const Search = styled.section`
  height: 14.625rem;
  padding-top: 2.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.behance_gray300};
`;

const DropBoxContainer = styled.section`
  margin-top: 2.5rem;
  margin-left: 1.875rem;
  display: flex;
  width: 116.25rem;
  justify-content: space-between;
  ${({ theme }) => theme.fonts.behance_acumin_pro_regular_16};

  & > section {
    display: flex;
  }
  & > section > button {
    margin-right: 1.25rem;
    background-color: transparent;
    border: 1px solid ${({ theme }) => theme.colors.behance_gray400};
    border-radius: 0.3125rem;
    display: flex;
    align-items: center;
    padding: 0.75rem 1rem;
    & > p {
      margin: 0 0.25rem;
    }
  }
  & > section:nth-child(2) {
    display: flex;
    align-items: center;
    margin-right: 0.75rem;
  }
`;

const Glass = styled(GlassIcon)`
  margin: 1rem 1.25rem 0 2.125rem;
`;

const InputContainer = styled.section`
  display: flex;
  justify-content: center;
  height: 4rem;

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
`;

const Input = styled.input<CategoryProps>`
  ${({ theme }) => theme.fonts.behance_acumin_pro_medium_24};
  color: ${({ theme }) => theme.colors.behance_gray400};
  color: ${(props) => props.categoryIsClicked && props.theme.colors.behance_black};
  ${(props) => props.categoryIsClicked && props.theme.fonts.behance_acumin_pro_medium_24};
  border: 0.0625rem solid transparent;
  width: 19.375rem;
  background-color: transparent;
  & :focus {
    outline: none;
  }
`;
const Button = styled.button<Props>`
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
const Body = styled.section`
  position: relative;
  & > section {
    display: flex;
    justify-content: flex-end;
  }
`;

const Container = styled.section`
  margin-left: 2.0625rem;
  margin-right: 4.375rem;
  position: relative;
`;

const CategoryButton = styled.button<CategoryProps>`
  ${({ theme }) => theme.fonts.behance_acumin_pro_bold_17};
  color: ${({ theme }) => theme.colors.behance_white};
  width: 7.8125rem;
  height: 3rem;
  padding: 1rem 1.5rem 0.75rem 1.5rem;
  border-radius: 6.25rem;
  border: 1px solid transparent;
  margin-right: 1rem;
  background-color: ${({ theme }) => theme.colors.behance_black};
  background-color: ${(props) => props.categoryIsClicked && props.theme.colors.behance_blue};

  margin-top: 2.5625rem;

  cursor: pointer;
`;

const Gradient = styled.section`
  position: absolute;
  z-index: 2;
  width: 13.125rem;
  background-image: linear-gradient(to left, white, transparent);
  height: 5.625rem;
  margin-top: 1.25rem;
`;

const Arrow = styled(ArrowRight)`
  position: absolute;
  z-index: 3;
  margin-top: 2.35rem;
  margin-right: 2.5rem;
`;
