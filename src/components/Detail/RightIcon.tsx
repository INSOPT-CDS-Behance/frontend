import styled from 'styled-components';

import { Feedback, ProfileFollow, Save, Share, Test } from '../../asset/icon';

const RightIcon = () => {
  return (
    <StIconWrapper>
      <nav>
        <ProfileFollow />
        <h1>팔로우</h1>
        <Feedback />
        <h1>피드백</h1>
        <Save />
        <h1>저장</h1>
        <Share />
        <h1>공유</h1>
        <Test />
        <h1>평가</h1>
      </nav>
    </StIconWrapper>
  );
};

export default RightIcon;

const StIconWrapper = styled.section`
  display: flex;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.behance_black};

  & > nav {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    position: fixed;
    z-index: 2;

    margin-top: 3.5625rem;
    margin-left: 99.5625rem;

    color: ${({ theme }) => theme.colors.behance_white};
    ${({ theme }) => theme.fonts.behance_acumin_pro_regular_14};

    & > h1 {
      margin-bottom: 1.6875rem;
      margin-top: 0.8125rem;
      color: ${({ theme }) => theme.colors.behance_white};
      ${({ theme }) => theme.fonts.behance_acumin_pro_regular_14};
    }
  }
`;
