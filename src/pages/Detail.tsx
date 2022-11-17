import styled from 'styled-components';

import { BtnNext, BtnPrev, Feedback, ProfileFollow, Save, Share, Test } from '../asset/icon';
import { ImgScroll } from '../asset/image';
import DetailBlackHeader from '../components/Detail/DetailBlackHeader';
import DetailWhiteHeader from '../components/Detail/DetailWhiteHeader';

const Detail = () => {
  return (
    <>
      <DetailBlackHeader />
      <DetailWhiteHeader />
      <StDetailWrapper>
        <ImgScroll />
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
      </StDetailWrapper>
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
    </>
  );
};

export default Detail;

const StButtonWrapper = styled.section`
  position: fixed;
  z-index: 3;
  color: ${({ theme }) => theme.colors.behance_white};
  ${({ theme }) => theme.fonts.behance_acumin_pro_regular_14};
`;

const StDetailWrapper = styled.section`
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
