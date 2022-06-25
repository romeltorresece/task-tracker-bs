import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import Button from './Button';

const Header = ({ title, onShowAddTask, showAdd }) => {
  const { pathname } = useLocation();

  return (
    <header className='card-title d-flex align-items-center justify-content-between mb-3'>
        <h1>{title}</h1>
        {pathname === '/' && 
          <Button 
          color={showAdd ? 'danger' : 'success'} 
          text={showAdd ? 'Close' : 'Add'} 
          onClick={onShowAddTask} 
        />}
    </header>
  );
};

Header.defaultProps = {
    title: 'Task Tracker',
};

Header.propTypes = {
    title: PropTypes.string.isRequired,
};

export default Header;