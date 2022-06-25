import { VscChromeClose } from 'react-icons/vsc';
import { Link } from 'react-router-dom';

const Task = ({ task, onDelete, onToggle }) => {
  return (
      <div 
        className={`card-text alert alert-secondary ${task.reminder ? 'reminder' : ''}`}
        onDoubleClick={() => onToggle(task.id)}
        >
        <h4 
            className='d-flex justify-content-between'>
            {task.text}
            <VscChromeClose 
                style={{ color: 'red', cursor: 'pointer' }}
                onClick={() => onDelete(task.id)}
            />
        </h4>
        <p>{task.day}</p> 
        <Link to={`/tasks/${task.id}`}>View Details</Link>
      </div>
  );
};

export default Task;