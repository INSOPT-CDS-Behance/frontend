import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

import { ImgDropDown } from '../asset/image';
import UserInfo from '../asset/image/UserInfo.svg';
import { Header, MoveBoard, Nav } from '../components/MyPage';

const MyPage = () => {
  return (
    <StContainer>
      <Header />
      <img src={UserInfo} alt="유저 정보" /> {/* svg로 불러왔을 때 다른 이미지로 대체되는 문제 생겨서 img로 해결 */}
      <Nav />
      <StDropDown type="button">
        저장일 순<ImgDropDown id="dropDown" />
      </StDropDown>
      <MoveBoard />
      <Outlet />
    </StContainer>
  );
};

export default MyPage;

const StContainer = styled.div`
  width: 120rem;

  & > img {
    position: absolute;
    top: 9.375rem;
    left: 3.125rem;
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
