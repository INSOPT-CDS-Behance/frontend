import styled from 'styled-components';

import { ICAdobe, ICAlertFill, ICBtnShare, ICMailFill } from '../../asset/icon';
import ImgProfile from '../../asset/image/profileImg.png';

const PersonalInfo = () => {
  return (
    <>
      <ICBtnShare />
      <StIcons>
        <ICMailFill />
        <ICAlertFill />
        <img src={ImgProfile} alt="profile" />
      </StIcons>
      <ICAdobe />
    </>
  );
};

export default PersonalInfo;

const StIcons = styled.div`
  display: flex;
  align-items: center;

  gap: 1rem;

  & > * {
    cursor: pointer;
  }
`;
