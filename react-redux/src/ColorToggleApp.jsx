import { useDispatch } from 'react-redux';
import { changeTheme } from './redux/switch';

const ColorToggle = () => {
  const dispatch = useDispatch();

  const handleBgChange = () => {
    dispatch(changeTheme('black'));
  };

  return (
    <div>
      <button onClick={handleBgChange}>dark Theme</button>
    </div>
  );
};

export default ColorToggle;
