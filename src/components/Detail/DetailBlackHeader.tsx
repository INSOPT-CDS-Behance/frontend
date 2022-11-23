import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { BadgeBehance, BtnClose, ICDropdown, Profile } from '../../asset/icon';

const DetailBlackHeader = () => {
  const navigate = useNavigate();
  return (
    <StHeaderWrapper>
      <section>
        <Profile />
        <div>
          <p>Musinsa Virtual Room</p>
          <div>
            <p>여러 소유자</p>
            <StDropdown fill="white" />
            <p>모두 팔로우</p>
          </div>
        </div>
        <StBadgeBehance />
        <StBtnClose
          onClick={() => {
            navigate(-1);
          }}
        />
      </section>
    </StHeaderWrapper>
  );
};

export default DetailBlackHeader;

const StHeaderWrapper = styled.header`
  width: 120rem;
  height: 6.5rem;

  padding-top: 1.4375rem;

  background-color: ${({ theme }) => theme.colors.behance_black};

  & > section {
    display: flex;
    align-items: center;

    margin-left: 14.25rem;

    color: ${({ theme }) => theme.colors.behance_white};
    & > div {
      margin-left: 0.8125rem;

      ${({ theme }) => theme.fonts.behance_acumin_pro_semibold_20};

      & > div {
        display: flex;
        align-items: center;

        ${({ theme }) => theme.fonts.behance_acumin_pro_regular_16};
      }
    }
  }
`;

const StDropdown = styled(ICDropdown)`
  margin-left: 0.125rem;
  margin-right: 0.375rem;
`;

const StBadgeBehance = styled(BadgeBehance)`
  margin-left: 71.375rem;
  margin-top: -2.5rem;
`;

const StBtnClose = styled(BtnClose)`
  margin-left: 10.25rem;
`;
