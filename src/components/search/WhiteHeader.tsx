import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { ICAlertFill, ICDropdown, ICMailFill } from '../../asset/icon';
import { AdobeLogo, BehanceLogo, Profile, ShareButton } from '../../asset/image';

const WhiteHeader = () => {
  const navigate = useNavigate();
  return (
    <StHeader>
      {/* 헤더 좌측 */}
      <StLeft>
        <BehanceLogo fill="black" />
        <div>
          <p>탐색</p>
          <ICDropdown fill="blue" />
        </div>
      </StLeft>

      <StMiddle>
        <p>최고의 Behance</p>
        <ICDropdown fill="white" />
      </StMiddle>

      {/* 헤더 우측 */}
      <StRight>
        <ShareButton />
        <StIcons>
          <ICMailFill fill="black" />
          <ICAlertFill fill="black" />
          <Profile onClick={() => navigate('/MyPage')} />
        </StIcons>
        <AdobeLogo fill="black" />
      </StRight>
    </StHeader>
  );
};

export default WhiteHeader;

const StHeader = styled.header`
  display: flex;
  justify-content: space-between;

  box-sizing: border-box;
  width: 120rem;
  height: 4.375rem;
  background-color: ${({ theme }) => theme.colors.behance_white};
  border-bottom: 0.125rem solid rgba(217, 217, 217, 0.1);

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
  & > div {
    display: flex;
    justify-content: space-between;

    width: 4.0625rem;
  }
  & > div > p {
    ${({ theme }) => theme.fonts.behance_acumin_pro_semibold_20};
    color: ${({ theme }) => theme.colors.behance_black};
  }
`;

const StMiddle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 17rem;
  height: 2.625rem;
  margin-top: 0.875rem;

  border: 1px solid transparent;
  border-radius: 1.25rem;

  background-color: ${({ theme }) => theme.colors.behance_black};
  ${({ theme }) => theme.fonts.behance_acumin_pro_black_24};
  color: ${({ theme }) => theme.colors.behance_white};

  & > p {
    margin-right: 0.5rem;
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
