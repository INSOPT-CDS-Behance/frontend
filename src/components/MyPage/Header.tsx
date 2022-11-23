import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { ICAlertFill, ICMailFill } from '../../asset/icon';
import { AdobeLogo, BehanceLogo, Profile, ShareButton } from '../../asset/image';
import PageCategory from './PageCategory';

const Header = () => {
  const navigate = useNavigate();
  return (
    <StHeader>
      {/* 헤더 좌측 */}
      <StLeft>
        <BehanceLogo fill="white" />
        <PageCategory />
      </StLeft>

      {/* 헤더 우측 */}
      <StRight>
        <ShareButton />
        <StIcons>
          <ICMailFill fill="white" />
          <ICAlertFill fill="white" />
          <Profile onClick={() => navigate('/MyPage')} />
        </StIcons>
        <AdobeLogo fill="white" />
      </StRight>
    </StHeader>
  );
};

export default Header;

const StHeader = styled.header`
  display: flex;
  justify-content: space-between;

  box-sizing: border-box;
  width: 120rem;
  height: 4.375rem;
  margin: 0 0 2.4375rem;

  color: ${({ theme }) => theme.colors.behance_white};
`;

const StLeft = styled.div`
  display: flex;
  align-items: center;

  margin-left: 1.9rem;
  padding: 0;

  gap: 2rem;

  & > :first-child {
    cursor: pointer;
  }

  & > * {
    color: ${({ theme }) => theme.colors.behance_white};
  }
`;

const StRight = styled.div`
  display: flex;
  align-items: center;

  margin-right: 1.8813rem;
  padding: 0;

  gap: 2rem;

  & > :first-child {
    cursor: pointer;
  }
`;

const StIcons = styled.div`
  display: flex;
  align-items: center;

  gap: 1rem;

  & > * {
    cursor: pointer;
  }
`;
