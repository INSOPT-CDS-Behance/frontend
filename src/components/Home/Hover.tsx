import styled from 'styled-components';

import { ICEyeOff, ICFolder, ICThumbsUp } from '../../asset/icon';

const Hover = () => {
  return (
    <StContainer>
      <header>
        <StButton type="button" className="category">
          산업 디자인
        </StButton>
        <StButton type="button" className="eyeOffButton">
          <ICEyeOff />
        </StButton>
      </header>
      <footer>
        <p>KID CAM</p>
        <div className="button_wrapper">
          <StButton className="folder">
            <ICFolder />
            <p>저장</p>
          </StButton>
          <StButton type="button" className="thumbsup">
            <ICThumbsUp />
            <p>추천</p>
          </StButton>
        </div>
      </footer>
    </StContainer>
  );
};

export default Hover;
const StContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 21.25rem;
  height: 17.1875rem;

  border-radius: 0.3063rem;
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.31) 0%, rgba(0, 0, 0, 0.8) 100%);

  position: absolute;
  top: 0;
  z-index: 2;

  & > header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin: 0.8125rem 1.1688rem 0.9938rem;
  }
  & > footer {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin: 0 1.1688rem 0.9938rem;
    & > p {
      ${({ theme }) => theme.fonts.behance_acumin_pro_bold_18};
      color: ${({ theme }) => theme.colors.behance_white};
    }

    & > div.button_wrapper {
      display: flex;
    }
  }
`;
const StButton = styled.button`
  padding: 0.5rem 0.8125rem 0.25rem 0.75rem;

  border: 1px solid transparent;
  border-radius: 1.25rem;
  background-color: rgba(255, 255, 255, 0.1);
  color: ${({ theme }) => theme.colors.behance_white};
  ${({ theme }) => theme.fonts.behance_acumin_pro_regular_12};

  &.category {
    ${({ theme }) => theme.fonts.behance_acumin_pro_regular_14};
  }

  &.icGlass {
    margin-left: 0.75rem;
    display: flex;
    text-align: center;

    & > p {
      margin-left: 0.25rem;
      margin-top: -0.1rem;
    }
    & :hover {
      cursor: pointer;
    }
  }
  &.folder {
    /* margin-left: 5rem; */
    display: flex;

    & > p {
      margin-left: 0.25rem;
      margin-top: -0.1rem;
    }
  }
  &.thumbsup {
    margin-left: 0.5rem;
    display: flex;

    & > p {
      margin-left: 0.25rem;
      margin-top: -0.1rem;
    }
  }
`;
