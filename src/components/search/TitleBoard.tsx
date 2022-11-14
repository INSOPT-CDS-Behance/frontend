import styled from 'styled-components';

const TitleBoard = () => {
  return (
    <>
      <Title>
        <h1>최고의 Behance</h1>
        <p>오늘의 큐레이터 추천 프로젝트</p>
      </Title>
    </>
  );
};

export default TitleBoard;

const Title = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.behance_white};
  & > h1 {
    ${({ theme }) => theme.fonts.behance_acumin_pro_black_80};
    margin: 4.3125rem 0 0.5rem 0;
  }
  & > p {
    ${({ theme }) => theme.fonts.behance_acumin_pro_medium_32};
    margin-bottom: 4rem;
  }
`;
