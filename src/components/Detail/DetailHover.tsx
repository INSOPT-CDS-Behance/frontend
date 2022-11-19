import styled from 'styled-components';

import { ICInformation, ICLink, ICPicture, ICSave } from '../../asset/icon';

const DetailHover = () => {
  return (
    <StDetailHoverWrapper>
      <section>
        <div>
          <ICPicture />
          <p>기타유사항목</p>
        </div>
        <div>
          <ICSave />
          <p>저장</p>
        </div>
        <div>
          <ICInformation />
          <p>정보</p>
        </div>
        <div>
          <ICLink />
          <p>퍼머링크</p>
        </div>
      </section>
      <section></section>
    </StDetailHoverWrapper>
  );
};

export default DetailHover;

const StDetailHoverWrapper = styled.nav`
  position: fixed;
  z-index: 3;

  & > section {
    display: flex;
    justify-content: space-around;

    width: 36rem;
  }
  & > section > div {
    border: 1px solid transparent;
    border-radius: 5rem;
    background-color: black;
    padding: 1rem;
  }
`;
