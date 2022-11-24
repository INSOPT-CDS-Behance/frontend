import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { css } from 'styled-components';

import { ICDropDown } from '../../asset/icon';

interface PageCategoryProps {
  isSpread: boolean;
  currentCategory: string;
}

const PageCategory = (props: PageCategoryProps) => {
  const { isSpread, currentCategory } = props;

  const navigate = useNavigate();
  const [clicked, setClicked] = useState<boolean[]>([false, false, false, false, false]);

  const categoryList: string[] = ['당신을 위한', '탐색', '라이브스트림', '채용', '직업'];
  const categoryLinkList: string[] = ['/', '/search', '', '', '']; //이동 Url

  useEffect(() => {
    const newClicked = [...clicked];
    newClicked[categoryList.indexOf(currentCategory)] = true;
    setClicked(newClicked);
  }, []);

  const handleCategory = (e: React.MouseEvent<HTMLButtonElement>) => {
    const id = Number(e.currentTarget.id);
    const newArr = [...clicked];
    newArr.forEach((item) => {
      item === true ? (newArr[newArr.indexOf(item)] = false) : null;
    });
    newArr[id] = true;
    setClicked(newArr);
    navigate(categoryLinkList[id]);
  };

  return (
    <StContainer>
      <StSelectCategory
        isSpread={!isSpread}
        isClicked={clicked[categoryList.indexOf(currentCategory)]}
        onClick={(e) => {
          handleCategory(e);
        }}>
        {currentCategory}
      </StSelectCategory>
      <StCategoryBtnWrapper isSpread={isSpread}>
        {categoryList.map((category, index) => (
          <StCategory
            key={index}
            id={index + ''}
            isSpread={isSpread}
            isClicked={clicked[index]}
            onClick={(e) => {
              handleCategory(e);
            }}>
            {category}
          </StCategory>
        ))}
      </StCategoryBtnWrapper>

      {!isSpread && <ICDropDown fill="#2456f7" />}
    </StContainer>
  );
};

export default PageCategory;

const StContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  height: 100%;

  gap: 0.2rem;
`;
const StCategoryBtnWrapper = styled.section<{ isSpread: boolean }>`
  display: flex;
  flex-direction: row;

  height: 100%;

  gap: 1.5rem;
  ${({ isSpread }) =>
    !isSpread &&
    css`
      flex-direction: column;
    `}
`;
const StCategory = styled.button<{ isSpread: boolean; isClicked: boolean }>`
  height: 100%;
  border: none;
  border-bottom: 0.125rem solid ${({ theme }) => theme.colors.behance_white};
  padding: 0;
  background: none;
  color: ${({ theme }) => theme.colors.behance_gray500};
  ${({ theme }) => theme.fonts.behance_acumin_pro_semibold_20}
  cursor: pointer;

  border-color: ${({ isClicked, theme }) => isClicked && theme.colors.behance_black};
  color: ${({ isClicked, theme }) => isClicked && theme.colors.behance_black};

  ${({ isSpread }) =>
    !isSpread &&
    css`
      display: none;
    `}
`;
const StSelectCategory = styled(StCategory)`
  border-color: ${({ theme }) => theme.colors.behance_white};
`;
