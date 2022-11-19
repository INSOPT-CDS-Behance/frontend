import styled from 'styled-components';

import { Feedback, ProfileFollow, Save, Share, Test } from '../../asset/icon';

const RightIcon = () => {
  return (
    <StIconWrapper>
      <div>
        <ProfileFollow />
        <p>팔로우</p>
        <Feedback />
        <p>피드백</p>
        <Save />
        <p>저장</p>
        <Share />
        <p>공유</p>
        <Test />
        <p>평가</p>
      </div>
    </StIconWrapper>
  );
};

export default RightIcon;

const StIconWrapper = styled.section`
  display: flex;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.behance_black};

  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    position: fixed;
    z-index: 2;

    margin-top: 3.5625rem;
    margin-left: 97rem;

    color: ${({ theme }) => theme.colors.behance_white};
    ${({ theme }) => theme.fonts.behance_acumin_pro_regular_14};

    & > p {
      margin-bottom: 1.6875rem;
      margin-top: 0.8125rem;
      color: ${({ theme }) => theme.colors.behance_white};
      ${({ theme }) => theme.fonts.behance_acumin_pro_regular_14};
    }
  }
`;
