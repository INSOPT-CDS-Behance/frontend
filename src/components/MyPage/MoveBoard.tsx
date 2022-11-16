import styled from 'styled-components';

import { ICLockOn } from '../../asset/icon';
import { ImgMoveBoardShadow } from '../../asset/image';
import ImgMoveBoard from '../../asset/image/./사진.svg';

interface ImoveBoard {
  title: string;
  category: string;
  lock: boolean;
}

const MoveBoard = () => {
  const moveBoardList: ImoveBoard[] = [
    { title: 'Feature design', category: '산업 디자인', lock: true },
    { title: 'Animation reference', category: '그래픽 디자인', lock: false },
    { title: 'Financial reference', category: 'UI/UX', lock: false },
    { title: 'AR glasses', category: '산업 디자인', lock: true },
  ];

  const moveBoard: JSX.Element[] = moveBoardList.map((obj, index) => (
    <StMoveBoard key={index}>
      <img src={ImgMoveBoard} alt="ImgMoveBoard" />
      <ImgMoveBoardShadow />
      <StHeader>
        <StTitleMoveBoard key={index}>{obj.title}</StTitleMoveBoard>
        {obj.lock === true ? <ICLockOn /> : null}
      </StHeader>
      <StCategoryMoveBoard key={index}>{obj.category}</StCategoryMoveBoard>
    </StMoveBoard>
  ));

  return <StContainer>{moveBoard}</StContainer>;
};

export default MoveBoard;

const StContainer = styled.section`
  display: flex;
  flex-wrap: wrap;

  gap: 1.375rem;

  width: 88.0625rem;

  padding: 0.375rem 0.875rem;
  margin-left: 31.9375rem;
`;

const StHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4375rem;

  position: absolute;
  top: 1.375rem;
  left: 1.0625rem;
`;

const StMoveBoard = styled.article`
  position: relative;

  & > img {
    position: absolute;
    z-index: -1;
  }
`;

const StTitleMoveBoard = styled.h1`
  color: ${({ theme }) => theme.colors.behance_white};
  ${({ theme }) => theme.fonts.behance_acumin_pro_semibold_18}
`;

const StCategoryMoveBoard = styled.h2`
  position: absolute;
  top: 3.0625rem;
  left: 1.0625rem;

  color: ${({ theme }) => theme.colors.behance_white};
  ${({ theme }) => theme.fonts.behance_acumin_pro_regular_14}
`;
