import styled from 'styled-components';

import { ImgTolltipContainer } from '../../asset/image';
import ImgCamera from '../../asset/image/camera.svg';
import ImgProfile from '../../asset/image/Group 107.svg';

const Tolltip = () => {
  return (
    <StContainer>
      <ImgTolltipContainer className="tolltip" />
      <StBackContainer>
        {[1, 2, 3, 4, 5, 6].map((data) => (
          <img src={ImgCamera} className="backImg" key={data} alt="미리보기 툴팁 배경 이미지 : 카메라" />
        ))}
      </StBackContainer>
      <img src={ImgProfile} className="profile" alt="프로필" />
      <StName>Seo yeon Yoon</StName>
      <StContent className="moveBoardProvided">무드보드 제공</StContent>
      <StInfoContainer>
        <StInfo>
          <StNumber>24</StNumber>
          <StContent className="numberInfo">프로젝트 수</StContent>
        </StInfo>

        <StContour />

        <StInfo>
          <StNumber>12</StNumber>
          <StContent className="numberInfo">팔로워 수</StContent>
        </StInfo>
      </StInfoContainer>
    </StContainer>
  );
};

export default Tolltip;

const StContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > .tolltip {
    position: absolute;
    z-index: 2;

    left: 0;
    top: 5.1875rem;
  }
  & > .profile {
    position: absolute;
    z-index: 2;

    top: 15.5625rem;
  }
`;

const StBackContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  position: absolute;

  z-index: 2;
  top: 6.5625rem;

  padding: 0 1rem;
`;

const StName = styled.h1`
  position: absolute;
  z-index: 2;
  top: 22.9375rem;

  color: ${({ theme }) => theme.colors.behance_black};
  ${({ theme }) => theme.fonts.behance_acumin_pro_semibold_20};
`;

const StContent = styled.h2`
  ${({ theme }) => theme.fonts.behance_acumin_pro_regular_16};

  &.moveBoardProvided {
    position: absolute;
    top: 25.1875rem;
    z-index: 2;
    color: #707070;
  }
  &.numberInfo {
    color: #969696;
  }
`;

const StInfoContainer = styled.div`
  display: flex;
  align-items: center;

  gap: 1.8438rem;

  position: absolute;
  top: 27.6875rem;
  left: 6.25rem;
`;

const StInfo = styled.div`
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;

  z-index: 2;

  display: flex;
  flex-direction: column;
`;

const StNumber = styled.p`
  color: ${({ theme }) => theme.colors.behance_black};

  ${({ theme }) => theme.fonts.behance_acumin_pro_bold_18};
  font-size: 1.5rem;
`;

const StContour = styled.span`
  width: 0.0625rem;
  height: 2.3438rem;

  z-index: 2;

  background-color: ${({ theme }) => theme.colors.behance_gray300};
`;
