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
        <StImgScroll />
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
    </>
  );
};

export default Detail;

const StDetailWrapper = styled.section`
  display: flex;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.behance_black};

  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;

    position: fixed;

    margin-top: 3.5625rem;
    margin-left: 97rem;

    & > p {
      margin-bottom: 1.6875rem;
      margin-top: 0.8125rem;
      color: ${({ theme }) => theme.colors.behance_white};
    }
  }
`;

const StImgScroll = styled(ImgScroll)`
  width: 300rem;
`;
