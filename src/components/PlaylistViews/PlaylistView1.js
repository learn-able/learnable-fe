import Input from '../Input/Input';

const PlaylistView1 = ({ nextStep, onChangeHandler, value }) => (
  <Input
    id="title"
    hasButton
    label="Title"
    onButtonClick={() => nextStep()}
    onChangeHandler={(e) => onChangeHandler(e.target.value)}
    placeholder="first, name your list:"
    type="text"
    value={value}
  />
);

export default PlaylistView1;
