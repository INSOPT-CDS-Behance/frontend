import { useEffect, useState } from 'react';
import styled from 'styled-components';

import { getMoodBoard } from '../../utils/lib/moveboard';
import MoodBoard from './MoodBoard';

interface MoodBoardServerData {
  id: number;
  is_public: boolean;
  name: string;
  project?: object[];
  user_id?: number;
}

const MoveBoard = () => {
  const [hovered, setHovered] = useState<boolean>(false);
  const [hoveredLong, setHoveredLong] = useState<boolean>(false);

  const [moodBoardList, setMoodBoardList] = useState<MoodBoardServerData[]>([]);

  useEffect(() => {
    const getContentList = async () => {
      const data = await getMoodBoard();
      const getMoodBoardData = data.data.data as MoodBoardServerData[];
      setMoodBoardList(getMoodBoardData);
      console.log(getMoodBoardData);
    };

    getContentList();
  }, []);

  const handleTolltip = () => {
    setHoveredLong(true);
  };

  useEffect(() => {
    if (hovered) {
      const timer: NodeJS.Timeout = setTimeout(handleTolltip, 3000);
      return () => {
        setHoveredLong(false);
        clearTimeout(timer);
      };
    }
  }, [hovered]);

  const moveBoard: JSX.Element[] = moodBoardList.map(({ id, is_public, name }) => (
    <MoodBoard
      key={id}
      MoodBoardData={{ id: id, title: name, category: '미정', lock: is_public, profileNum: 3 }}
      setHovered={setHovered}
      hoveredLong={hoveredLong}
    />
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
