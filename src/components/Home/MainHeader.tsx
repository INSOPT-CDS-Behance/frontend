import styled from 'styled-components';

import { ICAdobe, ICAlertFill, ICBehance, ICBtnShare, ICMailFill } from '../../asset/icon';
import ImgProfile from '../../asset/image/profileImg.png';
import PageCategory from './PageCategory';
const MainHeader = () => {
  return (
    <StHeader>
      <StLeft>
        <ICBehance />
        <PageCategory />
      </StLeft>

      <StRight>
        <ICBtnShare />
        <StIcons>
          <ICMailFill />
          <ICAlertFill />
          <img src={ImgProfile} alt="profile" />
        </StIcons>
        <ICAdobe />
      </StRight>
    </StHeader>
  );
};

export default MainHeader;

const StHeader = styled.header`
  display: flex;
  justify-content: space-between;

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
