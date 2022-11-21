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

const Searchbar = () => {
  const [clicked, setClicked] = useState<boolean[]>([true, false, false, false, false, false]);
  const categorys: string[] = ['프로젝트', '이미지', '프로토타입', '스트림', '인물', '무드보드'];
  const [placeholder, setplaceholder] = useState('Behance 추천 프로젝트 검색하기');

  const dropboxList: DropboxList[] = [
    { id: 1, title: '크리에이티브 분야', src: icCreative },
    { id: 2, title: '도구', src: icTool },
    { id: 3, title: '색상', src: icColor },
    { id: 4, title: '위치', src: icLocation },
    { id: 5, title: '학교', src: icSchool },
    { id: 6, title: '소스파일', src: icLink },
    { id: 7, title: '구독', src: icPersonFill24 },
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
      <StSearchWrapper>
        <StInputContainer>
          <form>
            <StGlass />
            <StInput type="text" placeholder={placeholder} categoryIsClicked={true} />
          </form>
          <div>
            {categorys.map((category, index) => (
              <StButton type="button" key={index} isClicked={clicked[index]}>
                {category}
              </StButton>
            ))}
          </div>
        </StInputContainer>
        <StDropBoxContainer>
          <section>
            {dropboxList.map((dropbox) => (
              <button type="button" key={dropbox.id}>
                <img src={dropbox.src} alt="드롭박스 아이콘" />
                <p>{dropbox.title}</p>
                <ICDropdown />
              </button>
            ))}
          </section>
          <section>
            <p>추천순</p>
            <ICDropdown />
          </section>
        </StDropBoxContainer>
      </StSearchWrapper>
      <StCategoryWrapper>
        <section>
          <StArrow />
          <StGradient />
        </section>
        <StCategory>
          {Categorys.map((category, i) => (
            <StCategoryButton type="button" key={i} onClick={handleClick} categoryIsClicked={categoryclicked[i]}>
              {category}
            </StCategoryButton>
          ))}
        </StCategory>
      </StCategoryWrapper>
    </>
  );
};

export default Searchbar;

const StSearchWrapper = styled.section`
  height: 14.625rem;
  padding-top: 2.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.behance_gray300};
`;

const StDropBoxContainer = styled.article`
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

const StGlass = styled(GlassIcon)`
  margin: 1rem 1.25rem 0 2.125rem;
`;

const StInputContainer = styled.article`
  display: flex;
  justify-content: center;
  height: 4rem;

  & > form {
    display: flex;

    width: 78.8125rem;
    border: 0.0625rem solid black;

    background-color: ${({ theme }) => theme.colors.behance_gray100};
    border-radius: 6.25rem 0 0 6.25rem;
  }

  & > div {
    align-items: center;
    padding-left: 1.4375rem;

    width: 37.4375rem;

    border: 0.0625rem solid black;
    border-radius: 0 6.25rem 6.25rem 0;
  }
`;

const StInput = styled.input<{ categoryIsClicked: boolean }>`
  width: 19.375rem;

  border: 0.0625rem solid transparent;
  background-color: transparent;

  ${({ theme }) => theme.fonts.behance_acumin_pro_medium_24};
  color: ${({ categoryIsClicked, theme }) =>
    categoryIsClicked ? theme.colors.behance_black : theme.colors.behance_gray400};
  ${({ categoryIsClicked, theme }) => categoryIsClicked && theme.fonts.behance_acumin_pro_medium_24};

  & :focus {
    outline: none;
  }
`;
const StButton = styled.button<{ isClicked: boolean }>`
  padding: 0.625rem 0.75rem;
  border: 0.0625rem solid transparent;
  background-color: transparent;
  ${({ theme }) => theme.fonts.behance_acumin_pro_medium_17};
  margin-right: 1rem;
  border-radius: 6.25rem;
  height: 2.5rem;

  background-color: ${({ isClicked, theme }) => isClicked && theme.colors.behance_black};
  color: ${({ isClicked, theme }) => isClicked && theme.colors.behance_white};
`;

const StCategoryWrapper = styled.section`
  position: relative;

  & > section {
    display: flex;
    justify-content: flex-end;
  }
`;

const StCategory = styled.article`
  position: relative;

  margin-left: 2.0625rem;
  margin-right: 4.375rem;
`;

const StCategoryButton = styled.button<{ categoryIsClicked: boolean }>`
  width: 7.8125rem;
  height: 3rem;
  padding: 1rem 1.5rem 0.75rem 1.5rem;

  border: 1px solid transparent;
  border-radius: 6.25rem;
  margin-right: 1rem;
  margin-top: 2.5625rem;

  ${({ theme }) => theme.fonts.behance_acumin_pro_bold_17};
  color: ${({ theme }) => theme.colors.behance_white};

  background-color: ${({ categoryIsClicked, theme }) =>
    categoryIsClicked ? theme.colors.behance_blue : theme.colors.behance_black};

  cursor: pointer;
`;

const StGradient = styled.article`
  position: absolute;
  z-index: 2;

  width: 13.125rem;
  height: 5.625rem;
  margin-top: 1.25rem;

  background-image: linear-gradient(to left, white, transparent);
`;

const StArrow = styled(ArrowRight)`
  position: absolute;
  z-index: 3;

  margin-top: 2.35rem;
  margin-right: 2.5rem;
`;
