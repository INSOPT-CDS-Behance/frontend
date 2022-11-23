import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { ICAlertFill, ICMailFill, ICSearchWhite } from '../../asset/icon';
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

      <StSearchBar>
        <ICSearchWhite />
        <StInput placeholder="검색..." disabled />
      </StSearchBar>

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
  align-items: center;

  box-sizing: border-box;
  width: 120rem;
  height: 4.375rem;
  margin: 0 0 2.4375rem;
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

const StSearchBar = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  & > :first-child {
    position: absolute;
    left: 9.5px;

    color: ${({ theme }) => theme.colors.behance_white};
  }
`;

const StInput = styled.input`
  width: 463px;
  height: 42px;

  background: none;

  border: ${({ theme }) => `solid 1px ${theme.colors.behance_gray400}`};
  border-radius: 21px;

  ${({ theme }) => theme.fonts.behance_acumin_pro_regular_16};
  padding-left: 43px;
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
