import styled from 'styled-components';
import YouTubeIcon from '@material-ui/icons/YouTube';
import MicNoneOutlinedIcon from '@material-ui/icons/MicNoneOutlined';
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
import AirplayIcon from '@material-ui/icons/Airplay';
import Checkbox from '@material-ui/core/Checkbox';

const Div = styled.div`
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.grayDarker};
  display: flex;
  margin: 0.5rem 0;
  min-height: ${({ theme }) => theme.spacers.md};
  border-radius: ${({ theme }) => theme.styles.borderRadius};
`;

const P = styled.p`
  flex-grow: 1;
  word-wrap: break-word;
  overflow-wrap: break-word;
  max-width: 70%;
`;

const icon = {
  Video: <YouTubeIcon fontSize="large" />,
  Audio: <MicNoneOutlinedIcon fontSize="large" />,
  Article: <DescriptionOutlinedIcon fontSize="large" />,
  Other: <AirplayIcon fontSize="large" />,
};

const PlaylistItem = ({ category, isComplete, title, url }) => (
  <Div>
    <Checkbox
      checked={isComplete}
      onChange={console.log('test')}
      name="checkbox"
      color="primary"
    />
    <P>{title}</P>
    {icon[category]}
  </Div>
);

export default PlaylistItem;
