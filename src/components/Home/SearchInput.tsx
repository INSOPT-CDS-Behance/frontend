import styled from 'styled-components';

import { ICSearch } from '../../asset/icon';

const SearchInput = () => {
  return (
    <StInputWrapper>
      <ICSearch width="24" height="24" />
      <input placeholder="Behance 추천 프로젝트 둘러보기" />
    </StInputWrapper>
  );
};

export default SearchInput;

const StInputWrapper = styled.form`
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
