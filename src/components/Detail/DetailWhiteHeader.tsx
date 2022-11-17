import styled from 'styled-components';

import { Logo } from '../../asset/icon';

const DetailWhiteHeader = () => {
  return (
    <StHeaderWrapper>
      <StLogo />
      <p>Musinsa Virtual Room</p>
    </StHeaderWrapper>
  );
};

export default DetailWhiteHeader;

const StHeaderWrapper = styled.header`
  display: flex;

  width: 120rem;
  height: 4.1875rem;

  padding-top: 1.5625rem;

  border: 1px solid black;
  background-color: ${({ theme }) => theme.colors.behance_white};

  & > p {
    margin-left: 5rem;
    color: ${({ theme }) => theme.colors.behance_black};
    ${({ theme }) => theme.fonts.behance_acumin_pro_semibold_20};
  }
`;

const StLogo = styled(Logo)`
  margin-left: 1.875rem;
`;
