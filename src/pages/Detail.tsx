import styled from 'styled-components';

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
      </StDetailWrapper>
    </>
  );
};

export default Detail;

const StDetailWrapper = styled.section`
  display: flex;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.behance_black};
`;
