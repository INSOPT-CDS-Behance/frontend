import styled from 'styled-components';

import { BtnNext, BtnPrev } from '../../asset/icon';

const BottomIcon = () => {
  return (
    <StButtonWrapper>
      <div>
        <BtnPrev />
        <p>이전</p>
      </div>
      <div>
        <BtnNext />
        <p>다음</p>
      </div>
    </StButtonWrapper>
  );
};

export default BottomIcon;

const StButtonWrapper = styled.section`
  display: flex;
  justify-content: space-between;

  position: fixed;
  z-index: 3;

  width: 120rem;
  padding: 0 1.875rem;

  margin-top: 55.3125rem;

  color: ${({ theme }) => theme.colors.behance_white};
  ${({ theme }) => theme.fonts.behance_acumin_pro_regular_14};

  & > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & > p {
      margin-top: 0.9375rem;
    }
  }
`;
