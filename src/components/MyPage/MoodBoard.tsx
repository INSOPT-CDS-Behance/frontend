import { useEffect, useState } from 'react';
import styled from 'styled-components';

import { MoodBoardServerData } from '../../types/mypage';
import { getMoodBoard } from '../../utils/lib/moodboard';
import MoodBoardContent from './MoodBoardContent';

const MoodBoard = () => {
  const [hovered, setHovered] = useState<boolean>(false);
  const [hoveredLong, setHoveredLong] = useState<boolean>(false);

  const [moodBoardList, setMoodBoardList] = useState<MoodBoardServerData[]>([]);

  useEffect(() => {
    const getContentList = async () => {
      const data = await getMoodBoard();
      const getMoodBoardData = data.data.data as MoodBoardServerData[];
      setMoodBoardList(getMoodBoardData);
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

  moodBoardList.sort((a: MoodBoardServerData, b: MoodBoardServerData): number => {
    return a.id - b.id;
  });

  const moveBoard: JSX.Element[] = moodBoardList.map(({ id, is_public, name, project, profile_count, subtitle }) => (
    <MoodBoardContent
      key={id}
      MoodBoardData={{
        id: id,
        title: name,
        category: subtitle,
        lock: is_public,
        profileNum: profile_count,
        project: project,
      }}
      setHovered={setHovered}
      hoveredLong={hoveredLong}
    />
  ));

  return <StContainer>{moveBoard}</StContainer>;
};

export default MoodBoard;

const StContainer = styled.section`
  display: flex;
  flex-wrap: wrap;

  gap: 1.375rem;

  width: 88.0625rem;

  padding: 0.375rem 0.875rem;
  margin-left: 31.9375rem;
`;
