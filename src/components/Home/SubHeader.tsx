import styled from 'styled-components';

import {
  ICArrow,
  ICBtnAdd,
  ICBtnLiveContent,
  ICBtnNext,
  ICDropDown,
  ICFavorite,
  ICLineCol,
  ICPerson,
  ICStar,
} from '../../asset/icon';
import SearchInput from './SearchInput';
const Header = () => {
  return (
    <StHeaderWrapper>
      <form>
        <StButton>
          <span>프로젝트</span>
          <ICDropDown fill="white" />
        </StButton>
        <SearchInput />
      </form>
      <StSection>
        <article className="add_btn_wrapper">
          <ICBtnAdd />
          <p>추가하기</p>
        </article>
        <article className="liveContent_btn_wrapper">
          {[1, 2, 3, 4, 5, 6].map((data) => (
            <ICBtnLiveContent key={data} />
          ))}
        </article>
        <ICBtnNext className="next_btn" />
      </StSection>
      <StNavWrapper>
        <ul>
          <li>
            <ICFavorite />
            <span>투데이</span>
          </li>
          <ICLineCol />

          <li>
            <ICPerson />
            <span>팔로잉</span>
          </li>
          <ICLineCol />

          <li>
            <ICStar />
            <span>내 구독</span>
          </li>
          <ICLineCol />
        </ul>
        <button>
          추천순
          <ICArrow />
        </button>
      </StNavWrapper>
    </StHeaderWrapper>
  );
};

export default Header;

const StHeaderWrapper = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  padding: 0 1.875rem;

  & > form {
    display: flex;

    width: 100%;
    margin-top: 2.4375rem;
  }
`;
const StButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 8rem;

  border: none;
  border-radius: 0.3125rem 0 0 0.3125rem;
  background-color: ${({ theme }) => theme.colors.behance_blue};
  color: ${({ theme }) => theme.colors.behance_white};
  ${({ theme }) => theme.fonts.behance_acumin_pro_medium_17};

  text-align: center;

  & > span {
    margin: 0.5rem 0rem;
  }
`;
const StSection = styled.section`
  display: flex;
  justify-content: flex-start;
  align-items: top;

  width: 100%;
  padding-top: 3.375rem;
  margin-left: 4.3125rem;

  & > article.add_btn_wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    & > p {
      margin-top: 0.75rem;

      color: ${({ theme }) => theme.colors.behance_black};
      ${({ theme }) => theme.fonts.behance_acumin_pro_semibold_18}
    }
  }

  & > article.liveContent_btn_wrapper {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    gap: 2.25rem;

    margin-left: 3.75rem;
  }
  & > .next_btn {
    position: absolute;
    right: 7rem;
    margin-top: 0.65rem;
  }
`;
const StNavWrapper = styled.nav`
  display: flex;
  justify-content: space-between;

  width: 100%;
  margin-top: 7.5625rem;
  padding-bottom: 0.1rem;

  border-bottom: solid 0.0625rem ${({ theme }) => theme.colors.behance_gray300};
  & > ul {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    gap: 2rem;

    & > li {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 0rem;
      gap: 0.625rem;

      padding-bottom: 1.1563rem;
    }
    & > li:nth-child(1) {
      border-bottom: solid 0.1563rem ${({ theme }) => theme.colors.behance_black};
    }
  }
  & > button {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.75rem;

    width: 7.1875rem;
    height: 2.6875rem;

    border: solid 0.0625rem ${({ theme }) => theme.colors.behance_blue};
    border-radius: 0.3125rem;
    background-color: ${({ theme }) => theme.colors.behance_white};
    color: ${({ theme }) => theme.colors.behance_blue};
    ${({ theme }) => theme.fonts.behance_acumin_pro_regular_16};
  }
`;
