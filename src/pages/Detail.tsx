import styled from 'styled-components';

import ImgScroll from '../asset/image/img_scroll.png';
import BottomIcon from '../components/Detail/BottomIcon';
// import { ImgScroll } from '../asset/image';
import DetailBlackHeader from '../components/Detail/DetailBlackHeader';
import DetailWhiteHeader from '../components/Detail/DetailWhiteHeader';
import RightIcon from '../components/Detail/RightIcon';

const Detail = () => {
  return (
    <>
      <DetailBlackHeader />
      <DetailWhiteHeader />
      <RightIcon />
      <BottomIcon />

      <StImgWrapper>
        <StImg src={ImgScroll} alt="#" />
      </StImgWrapper>
    </>
  );
};

export default Detail;

const StImg = styled.img`
  width: 82.6875rem;
`;

const StImgWrapper = styled.section`
  display: flex;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.behance_black};
`;
