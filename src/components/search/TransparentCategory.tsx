import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

interface Props {
  isClicked: boolean;
}

const TransparentCategory = () => {
  const navigate = useNavigate();
  const [clicked, setClicked] = useState<boolean[]>([false, true, false, false, false]);

  const Categorys: string[] = ['당신을 위한', '탐색', '라이브스트림', '채용', '직업'];
  const CategoryLinks: string[] = ['/', '/Search', '', '', '']; //이동 Url

  const handleCategory = (e: React.MouseEvent<HTMLButtonElement>) => {
    const id = Number(e.currentTarget.id);
    // 클릭된 카테고리만 true, 나머지는 false로 바꾸기
    const newArr = [...clicked];
    newArr.forEach((item) => {
      item === true ? (newArr[newArr.indexOf(item)] = false) : null;
    });
    newArr[id] = true;
    setClicked(newArr);
    // 클릭된 카테고리 페이지로 이동
    navigate(CategoryLinks[id]);
  };

  // 카테고리 버튼 렌더링 함수
  const CategoryList: JSX.Element[] = Categorys.map((category, index) => (
    <StCategory
      key={index}
      id={index + ''}
      isClicked={clicked[index]}
      onClick={(e) => {
        handleCategory(e);
      }}>
      {category}
    </StCategory>
  ));

  return <StContainer>{CategoryList}</StContainer>;
};

export default TransparentCategory;

const StContainer = styled.div`
  height: 4.375rem;
  display: flex;
  flex-direction: row;
  gap: 1.5rem;
`;

//Category 버튼
const StCategory = styled.button<Props>`
  height: 4.375rem;

  border: none;
  border-bottom: 0.125rem solid transparent;
  padding: 0;
  background: none;
  color: ${({ theme }) => theme.colors.behance_gray500}; // 기본 글자색
  ${({ theme }) => theme.fonts.behance_acumin_pro_semibold_20}
  cursor: pointer;
  // 클릭되었을 때 border, 글자색 검정색으로 변환
  border-color: ${(props) => props.isClicked && props.theme.colors.behance_white};
  color: ${(props) => props.isClicked && props.theme.colors.behance_white};
`;
