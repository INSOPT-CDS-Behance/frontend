import { useState } from 'react';
import styled from 'styled-components';

const Nav = () => {
  const [clicked, setClicked] = useState<boolean[]>([false, false, false, true, false]);

  const categoryListBlack: string[] = ['작업', 'NFT', '라이브스트림', '무드보드', '평가']; //좌측 검정색 카테고리
  const categoryListGray: string[] = ['인사이트', '초안']; //우측 회색 카테고리

  const categoryBlack: JSX.Element[] = categoryListBlack.map((category, index) => (
    <StCategory isClicked={clicked[index]} id="categoryBlack" key={index}>
      {category}
    </StCategory>
  ));
  const categoryGray: JSX.Element[] = categoryListGray.map((category, index) => (
    <StCategory isClicked={false} id="categoryGray" key={index}>
      {category}
    </StCategory>
  ));

  return (
    <StContainer>
      {categoryBlack}
      <StContour />
      {categoryGray}
    </StContainer>
  );
};

export default Nav;

const StContainer = styled.nav`
  display: flex;
  align-items: center;

  gap: 2.1875rem;

  padding: 0;
  margin: 1.875rem 0 1.375rem 34.125rem;
`;

const StCategory = styled.button<{ isClicked: boolean }>`
  display: flex;
  align-items: center;

  padding: ${({ isClicked }) => (isClicked ? '0.4375rem 1.125rem' : 0)};

  border: none;
  border-radius: 1.1563rem;

  // 선택 되었을 때 배경 검정색
  background: ${({ isClicked, theme }) => (isClicked ? theme.colors.behance_black : 'none')};

  ${({ theme }) => theme.fonts.behance_acumin_pro_bold_16};

  cursor: pointer;

  &#categoryBlack {
    color: ${({ isClicked, theme }) => (isClicked ? theme.colors.behance_white : theme.colors.behance_black)};
  }
  &#categoryGray {
    color: ${({ isClicked, theme }) => (isClicked ? theme.colors.behance_white : theme.colors.behance_gray500)};
  }
`;

const StContour = styled.span`
  width: 0.0625rem;
  height: 1.375rem;

  background-color: ${({ theme }) => theme.colors.behance_gray300};
`;
