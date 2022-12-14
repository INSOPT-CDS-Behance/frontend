import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { ICAdobe, ICAlertFill, ICBtnShare, ICMailFill } from '../../asset/icon';
import ImgProfile from '../../asset/image/profileImg.png';

const PersonalInfo = () => {
  const navigate = useNavigate();
  return (
    <>
      <ICBtnShare />
      <StIcons>
        <ICMailFill />
        <ICAlertFill />
        <img role="presentation" src={ImgProfile} alt="profile" onClick={() => navigate('/mypage')} />
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
