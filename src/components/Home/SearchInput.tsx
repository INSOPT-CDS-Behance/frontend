import { useState } from 'react';
import styled, { css } from 'styled-components';

import { ICSearch, ICSearchBarHover } from '../../asset/icon';

interface SearchInputProps {
  isSpread: boolean;
}
const SearchInput = (props: SearchInputProps) => {
  const { isSpread } = props;

  const [isInputFocus, setIsInputFocus] = useState<boolean>(false);

  return (
    <StInputWrapper>
      <ICSearch width="24" height="24" />
      <StInput placeholder="Behance 추천 프로젝트 둘러보기" onFocus={() => setIsInputFocus((prev) => !prev)}></StInput>
      {!isSpread && <StICSearchBarHover isInputFocus={isInputFocus} />}
    </StInputWrapper>
  );
};

export default SearchInput;

const StInputWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  padding: 0 1rem;

  border: solid 0.0625rem ${({ theme }) => theme.colors.behance_gray400};
  border-radius: 0 0.3125rem 0.3125rem 0;
`;
const StInput = styled.input`
  width: 100%;
  padding: 0 1rem;

  border: none;

  ${({ theme }) => theme.fonts.behance_acumin_pro_medium_17};
`;
const StICSearchBarHover = styled(({ isInputFocus, ...props }) => <ICSearchBarHover {...props} />)`
  display: none;
  position: absolute;
  top: 4.375rem;
  left: 50%;
  transform: translate(-50%, -0%);

  z-index: 10;

  ${({ isInputFocus }) =>
    isInputFocus &&
    css`
      display: inline-block;
    `};
`;
