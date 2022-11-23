import { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';

import { ICClose } from '../../asset/icon';
import MyPage from '../../pages/MyPage';

const Edit = () => {
  const params = useParams();
  const project_id = params.id;

  const { state } = useLocation();
  console.log(state);

  const navigate = useNavigate();
  const [isLocked, setIsLocked] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);

  // input 요소들 렌더링
  const moveBoardEdit: JSX.Element[] = [
    { title: '무드보드 이름', value: state.title },
    { title: '공동 소유자 추가', value: '사용자 이름으로 검색' },
    { title: '크리에이티브 분야', value: state.subtitle },
  ].map((item, index) => (
    <StInputContainer key={index} className={`input${index}`}>
      <StInputTitle>{item.title}</StInputTitle>
      <StInput value={item.value} />
    </StInputContainer>
  ));

  const handleClickToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDisabled(!isDisabled);
    setIsLocked(!isLocked);
  };

  return (
    <>
      <MyPage />
      <StShadow />

      <StEditContainer>
        <StEditBoard>
          <StCloseBt>
            <ICClose className="closeBt" fill="black" onClick={() => navigate('/MyPage')} />
          </StCloseBt>

          <StEditHeader>이 무드보드 편집</StEditHeader>

          <StEditContent>
            {moveBoardEdit}

            <StToggleContainer>
              <StInputTitle>비공개 여부</StInputTitle>
              <StToggleBt className={isLocked ? 'lock' : ''} onClick={(e) => handleClickToggle(e)}>
                <StToggleBtCircle />
              </StToggleBt>
            </StToggleContainer>
          </StEditContent>

          <StBottom>
            <StDeleteBt>무드보드 삭제</StDeleteBt>
            <StSaveBt disabled={isDisabled} className={isDisabled ? 'disabled' : ''}>
              저장
            </StSaveBt>
          </StBottom>
        </StEditBoard>
      </StEditContainer>
    </>
  );
};

export default Edit;

/* 배경 어둡게 */
const StShadow = styled.div`
  position: absolute;
  top: 0;
  z-index: 3;

  width: 120rem;
  height: 67.5rem;

  background-color: ${({ theme }) => theme.colors.behance_black};
  opacity: 0.7;
`;

const StEditContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: 0;
  z-index: 3;

  width: 120rem;
  height: 67.5rem;
`;

/* 무드보드 편집 */
const StEditBoard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;

  width: 56.75rem;
  height: 43.0625rem;

  border-radius: 0.9375rem;
  background-color: ${({ theme }) => theme.colors.behance_white};
`;

/* 닫기 버튼 */

const StCloseBt = styled.button`
  border: none;
  background: none;

  & > .closeBt {
    position: absolute;
    right: 1.5375rem;
    top: 1.375rem;
  }

  cursor: pointer;
`;

/* Header */
const StEditHeader = styled.h1`
  margin-top: 3.3125rem;
  margin-bottom: 1.875rem;

  color: ${({ theme }) => theme.colors.behance_black};
  ${({ theme }) => theme.fonts.behance_acumin_pro_bold_18};
`;

/* Content */
const StEditContent = styled.form`
  display: flex;
  flex-direction: column;

  width: 50.4375rem;
  height: 30.125rem;
  padding: 2.8125rem 2.875rem 3.8125rem 2.5625rem;
  margin-bottom: 0.8125rem;

  border: solid 0.0625rem #e8e8e8;
  background-color: #f9f9f9;
`;

/* Input */
const StInputContainer = styled.div`
  display: flex;
  flex-direction: column;

  gap: 1.3125rem;

  &.input0 {
    margin-bottom: 2.125rem;
  }
  &.input1 {
    margin-bottom: 2.875rem;
  }
  &.input2 {
    margin-bottom: 3.375rem;
  }
`;

const StInputTitle = styled.h2`
  color: ${({ theme }) => theme.colors.behance_black};
  ${({ theme }) => theme.fonts.behance_acumin_pro_bold_18};
`;

const StInput = styled.input`
  display: flex;
  align-items: center;

  width: 27.375rem;
  height: 2rem;
  padding-left: 0.6875rem;

  border: solid 0.0625rem #ccc;
  border-radius: 0.25rem;

  color: #191919;
  background-color: ${({ theme }) => theme.colors.behance_white};
  ${({ theme }) => theme.fonts.behance_acumin_pro_regular_14};

  &:focus {
    outline: none;
  }
`;

/* 토글 */

const StToggleBt = styled.button`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  width: 5.125rem;
  height: 2.4375rem;

  border: none;
  border-radius: 1.2188rem;
  background-color: ${({ theme }) => theme.colors.behance_blue};
  &.lock {
    justify-content: flex-start;
    background-color: #e8e8e8;
  }
  cursor: pointer;
`;

const StToggleContainer = styled.div`
  display: flex;
  justify-content: space-between;

  width: 45rem;
  height: 2.4375rem;
`;

const StToggleBtCircle = styled.span`
  width: 2rem;
  height: 2rem;

  border-radius: 1.2188rem;
  box-shadow: 0 0 0.625rem 0 rgba(0, 0, 0, 0.2);
  background-color: ${({ theme }) => theme.colors.behance_white};
`;

/* 하단 */
const StBottom = styled.footer`
  display: flex;
  justify-content: space-between;

  width: 50.4375rem;
`;

const StDeleteBt = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 9.8125rem;
  height: 2.625rem;

  border: solid 0.0625rem #e8e8e8;
  border-radius: 1.625rem;
  background-color: ${({ theme }) => theme.colors.behance_gray700};

  ${({ theme }) => theme.fonts.behance_acumin_pro_semibold_18};

  cursor: pointer;
`;

const StSaveBt = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 5.625rem;
  height: 2.625rem;

  border: none;
  border-radius: 1.625rem;

  background-color: ${({ theme }) => theme.colors.behance_blue};
  color: ${({ theme }) => theme.colors.behance_white};
  ${({ theme }) => theme.fonts.behance_acumin_pro_semibold_18};

  cursor: pointer;

  &.disabled {
    background-color: ${({ theme }) => theme.colors.behance_gray300};
    cursor: auto;
  }
`;
