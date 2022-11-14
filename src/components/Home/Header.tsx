import styled from 'styled-components';

import { ICDropDown, ICSearch } from '../../asset/icon';
const Header = () => {
  return (
    <StHeaderWrapper>
      <form>
        <StButton>
          <span>프로젝트</span>
          <ICDropDown fill="white" />
        </StButton>
        <StInputWrapper>
          <ICSearch width="24" height="24" />
          <input placeholder="Behance 추천 프로젝트 둘러보기" />
        </StInputWrapper>
      </form>
    </StHeaderWrapper>
  );
};

export default Header;
const StHeaderWrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: rem;
  padding: 0 1.875rem;

  & > form {
    display: flex;

    width: 100%;
  }
`;
const StInputWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  padding: 0 1rem;

  border: solid 0.0625rem ${({ theme }) => theme.colors.behance_gray400};
  border-radius: 0 0.3125rem 0.3125rem 0;
  & > input {
    width: 100%;
    padding: 0 1rem;

    border: none;

    ${({ theme }) => theme.fonts.behance_acumin_pro_medium_17};
  }
`;
const StButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 8rem;

  border: none;
  border-radius: 0.3125rem 0 0 0.3125rem;
  background-color: ${({ theme }) => theme.colors.behance_blue};
  color: ${({ theme }) => theme.colors.behance_white};
  ${({ theme }) => theme.fonts.behance_acumin_pro_medium_17};

  text-align: center;

  & > span {
    margin: 0.5rem 0rem;
  }
`;
