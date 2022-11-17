import styled from 'styled-components';

import { ICLockOn } from '../../asset/icon';
import { ImgMoveBoardShadow } from '../../asset/image';
import ImgMoveBoard from '../../asset/image/./사진.svg';
import ImgProfile from '../../asset/image/Profile.svg';

interface ImoveBoard {
  title: string;
  category: string;
  lock: boolean;
  profileNum: number;
}

const MoveBoard = () => {
  const moveBoardList: ImoveBoard[] = [
    { title: 'Feature design', category: '산업 디자인', lock: true, profileNum: 3 },
    { title: 'Animation reference', category: '그래픽 디자인', lock: false, profileNum: 1 },
    { title: 'Financial reference', category: 'UI/UX', lock: false, profileNum: 1 },
    { title: 'AR glasses', category: '산업 디자인', lock: true, profileNum: 2 },
  ];

  //profile 렌더링 배열 생성
  const profile = (profileNum: number) => {
    const array = [];
    for (let i = 0; i < profileNum; i++) {
      array.push(<StImg src={ImgProfile} className={`img${i}`} alt="유저 프로필" />);
    }
    return array;
  };

  const moveBoard: JSX.Element[] = moveBoardList.map((obj, index) => (
    <StMoveBoard key={index}>
      <img src={ImgMoveBoard} className="moveBoard" alt="무브 보드 썸네일" />
      <ImgMoveBoardShadow />
      <StHeader>
        <StTitleMoveBoard key={index}>{obj.title}</StTitleMoveBoard>
        {obj.lock === true ? <ICLockOn /> : null}
      </StHeader>
      <StCategoryMoveBoard key={index}>{obj.category}</StCategoryMoveBoard>
      <StProfile>{profile(obj.profileNum)}</StProfile>
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

  & > img.moveBoard {
    position: absolute;
    z-index: -1;
  }
`;

const StProfile = styled.div``;

const StImg = styled.img`
  position: absolute;
  bottom: 22px;
  &.img0 {
    left: 16px;
    z-index: 1;
  }
  &.img1 {
    left: 42px;
  }
  &.img2 {
    left: 67px;
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
