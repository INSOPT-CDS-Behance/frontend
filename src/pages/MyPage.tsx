import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

import * as image from '../asset/image';
import ImgHeaderBackground from '../asset/image/Rectangle 342.svg';
import UserInfo from '../asset/image/UserInfo.svg';
import { Header, MoodBoard, Nav } from '../components/MyPage';

const MyPage = () => {
  return (
    <StContainer>
      <Header />
      <img src={ImgHeaderBackground} alt="헤더 배경 이미지" />
      <img className="userInfo" src={UserInfo} alt="유저 정보" />
      <Nav />
      <StDropDown type="button">
        저장일 순<image.ImgDropDown id="dropDown" />
      </StDropDown>
      <MoodBoard />
      <Outlet />
    </StContainer>
  );
};

export default MyPage;

const StContainer = styled.div`
  width: 120rem;

  & > .userInfo {
    position: absolute;
    top: 9.375rem;
    left: 3.125rem;
  }

  & > Header {
    position: absolute;
    z-index: 1;

    color: ${({ theme }) => theme.colors.behance_white};
  }
`;

const StDropDown = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.375rem;

  position: absolute;
  top: 19.625rem;
  left: 109.25rem;

  width: 7.1875rem;
  height: 2.6875rem;

  border: solid 0.0625rem ${({ theme }) => theme.colors.behance_blue};
  border-radius: 0.3125rem;

  background: none;
  color: ${({ theme }) => theme.colors.behance_blue};
  ${({ theme }) => theme.fonts.behance_acumin_pro_regular_16}

  cursor: pointer;

  & > #dropDown {
    margin-top: 0.25rem;
  }
`;
