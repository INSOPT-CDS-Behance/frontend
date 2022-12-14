import styled from 'styled-components';

import { ImgTolltipContainer } from '../../asset/image';
import ImgCamera from '../../asset/image/camera.svg';
import ImgProfile from '../../asset/image/Group 107.svg';

interface TolltipProps {
  moveBoardId: number;
}

const Tolltip = ({ moveBoardId }: TolltipProps) => {
  return (
    <StContainer id={`tolltip+${moveBoardId}`}>
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
    left: 0;
    top: 5.1875rem;

    z-index: 4;
  }
  & > .profile {
    position: absolute;
    top: 15.5625rem;

    z-index: 4;
  }
`;

const StBackContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  position: absolute;
  top: 6.5625rem;

  z-index: 4;

  padding: 0 1rem;
`;

const StName = styled.h1`
  position: absolute;
  top: 22.9375rem;
  z-index: 4;

  color: ${({ theme }) => theme.colors.behance_black};
  ${({ theme }) => theme.fonts.behance_acumin_pro_semibold_20};
`;

const StContent = styled.h2`
  ${({ theme }) => theme.fonts.behance_acumin_pro_regular_16};

  &.moveBoardProvided {
    position: absolute;
    top: 25.1875rem;
    z-index: 4;

    color: #707070;
  }

  &.numberInfo {
    color: #969696;
  }
`;

const StInfoContainer = styled.section`
  display: flex;
  align-items: center;

  gap: 1.8438rem;

  position: absolute;
  top: 27.6875rem;
  left: 6.25rem;
`;

const StInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 0.25rem;

  z-index: 4;
`;

const StNumber = styled.p`
  color: ${({ theme }) => theme.colors.behance_black};

  ${({ theme }) => theme.fonts.behance_acumin_pro_bold_18};
  font-size: 1.5rem;
`;

const StContour = styled.span`
  z-index: 4;

  width: 0.0625rem;
  height: 2.3438rem;

  background-color: ${({ theme }) => theme.colors.behance_gray300};
`;
