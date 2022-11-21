import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { ICAlertFill, ICMailFill } from '../../asset/icon';
import { AdobeLogo, BehanceLogo, Profile, ShareButton } from '../../asset/image';
import TransparentCategory from './TransparentCategory';

const TransparentHeader = () => {
  const navigate = useNavigate();
  return (
    <StHeader>
      {/* 헤더 좌측 */}
      <StLeft>
        <BehanceLogo fill="white" />
        <TransparentCategory />
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

export default TransparentHeader;

const StHeader = styled.header`
  display: flex;
  justify-content: space-between;

  width: 120rem;
  height: 4.375rem;

  box-sizing: border-box;

  color: ${({ theme }) => theme.colors.behance_white};
  border-bottom: 0.125rem solid rgba(217, 217, 217, 0.1);
`;

const StLeft = styled.section`
  display: flex;
  align-items: center;

  margin-left: 1.9rem;
  padding: 0;
  gap: 2rem;

  & > :first-child {
    cursor: pointer;
  }
`;

const StRight = styled.section`
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
