import styled from 'styled-components';

import { ContentPreview } from '../components/common';
import { Header, MainHeader } from '../components/Home';
const Home = () => {
  return (
    <div>
      <MainHeader />
      <Header />
      <StContentSection>
        {[1, 2, 3, 4, 5, 6, 6, 7, 7, 7, 7, 7, 7, 7, 2, 2, 2, , 2, , 2, 2, , 2].map((_, idx) => (
          <ContentPreview key={idx} profileImg="" name="Wedge Studio" recommandCount={129} visibleCount={129} />
        ))}
      </StContentSection>
    </div>
  );
};

export default Home;

const StContentSection = styled.section`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  margin: 0 1.875rem;
`;
