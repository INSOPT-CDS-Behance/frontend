import styled from 'styled-components';

const PageCategory = () => {
  const Categorys: string[] = ['당신을 위한', '탐색', '라이브스트림', '채용', '직업'];

  const CategoryList: JSX.Element[] = Categorys.map((category, index) => (
    <StCategory key={index}>{category}</StCategory>
  ));
  return <StContainer>{CategoryList}</StContainer>;
};

export default PageCategory;

const StContainer = styled.div`
  display: flex;
  flex-direction: row;

  gap: 1.5rem;
  & > :nth-child(1) {
    color: ${({ theme }) => theme.colors.behance_black};
  }
`;

const StCategory = styled.button`
  border: none;
  background: none;
  color: ${({ theme }) => theme.colors.behance_gray500};
  ${({ theme }) => theme.fonts.behance_acumin_pro_semibold_20};

  cursor: pointer;
`;
