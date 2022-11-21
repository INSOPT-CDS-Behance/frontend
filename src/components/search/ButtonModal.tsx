import styled from 'styled-components';

import categoryImg from '../../asset/image/categoryImg.png';
import { CategoryList } from '../../types/common';

const Modal = () => {
  const categorylist: CategoryList[] = [
    { id: 1, text: '최고의 Behance', color: '#2456f7', imgSrc: '#' },
    { id: 2, text: '그래픽 디자인', color: 'transparent', imgSrc: categoryImg },
    { id: 3, text: '포토그래피', color: 'transparent', imgSrc: categoryImg },
    { id: 4, text: '일러스트레이션', color: 'transparent', imgSrc: categoryImg },
    { id: 5, text: '3D Art', color: 'transparent', imgSrc: categoryImg },
    { id: 6, text: 'UI/UX', color: 'transparent', imgSrc: categoryImg },
    { id: 7, text: '모션', color: 'transparent', imgSrc: categoryImg },
    { id: 8, text: '건축', color: 'transparent', imgSrc: categoryImg },
    { id: 9, text: '제품 디자인', color: 'transparent', imgSrc: categoryImg },
    { id: 10, text: '패션', color: 'transparent', imgSrc: categoryImg },
    { id: 11, text: '광고', color: 'transparent', imgSrc: categoryImg },
    { id: 12, text: '미술', color: 'transparent', imgSrc: categoryImg },
    { id: 13, text: '공예', color: 'transparent', imgSrc: categoryImg },
    { id: 14, text: '게임 디자인', color: 'transparent', imgSrc: categoryImg },
    { id: 15, text: '사운드', color: 'transparent', imgSrc: categoryImg },
    { id: 16, text: 'Creative Challenges', color: 'transparent', imgSrc: categoryImg },
    { id: 17, text: '모든 프로젝트', color: 'transparent', imgSrc: categoryImg },
  ];

  return (
    <StModalWrapper>
      <StModal>
        <p>최고의 크리에이티브 분야로 이루어진 갤러리</p>
        <div>
{categorylist.map(({id,text,color, imgSrc}) => (
            <button
              key={id}
              style={{ backgroundColor: color, backgroundImage: `url(${imgSrc})` }}>
              {text}
            </button>
          ))}
        </div>
      </StModal>
    </StModalWrapper>
  );
};

export default Modal;

const StModalWrapper = styled.section`
  display: flex;
  justify-content: center;

  position: absolute;
  z-index: 4;

  top: 0;
  left: 0;

  width: 120rem;
  height: 500rem;

  padding: 5.0625rem;

  background-color: rgba(0, 0, 0, 0.5);
`;

const StModal = styled.article`
  width: 80.375rem;
  height: 34.1875rem;
  padding: 3.5rem 2.75rem;

  border-radius: 0.25rem;

  background-color: ${({ theme }) => theme.colors.behance_white};
  box-shadow: 0 1rem 1rem 0 rgba(0, 0, 0, 0.25);

  & > p {
    margin-bottom: 1.25rem;
    ${({ theme }) => theme.fonts.behance_acumin_pro_bold_16};
  }

  & > div {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    justify-content: center;
    list-style: none;

    width: 74.875rem;
  }

  & > div > button {
    width: 14.375rem;
    height: 5.625rem;
    list-style-type: none;

    margin: 0 0.75rem 0.75rem 0;

    border: 1px solid transparent;
    border-radius: 0.25rem;

    ${({ theme }) => theme.fonts.behance_acumin_pro_black_24};
    color: ${({ theme }) => theme.colors.behance_white};
  }
`;
