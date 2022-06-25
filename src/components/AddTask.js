import { useState } from "react";
import Button from "./Button";

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState('');
  const [day, setDay] = useState('');
  const [reminder, setReminder] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!text) {
      return alert('Please enter a task!');
    }
    const task = { text, day, reminder }
    onAdd(task);
    setText('');
    setDay('');
    setReminder(false);
  };

  return (
    <form onSubmit={onSubmit}>
        <div className='mb-1'>
            <label className='form-label' htmlFor='text'>Task</label>
            <input 
              type='text' 
              className='form-control' 
              id='text'
              value={text} 
              onChange={(e) => setText(e.target.value)} 
            />
        </div>
        <div className='mb-1'>
            <label className='form-label' htmlFor='day'>Day</label>
            <input 
              type='text' 
              className='form-control' 
              id='day'
              value={day}
              onChange={(e) => setDay(e.target.value)}
            />
        </div>
        <div className='mb-3 form-check'>
            <input 
              type='checkbox' 
              className='form-check-input'
              id='reminder' 
              checked={reminder}
              value={reminder}
              onChange={(e) => setReminder(e.target.checked)}
            />
            <label className='form-check-label' htmlFor='reminder'>Set Reminder</label>
        </div>
        <div className='d-grid mb-3'>
          <Button color='dark' text='Save Task'/>
        </div>
    </form>
  );
};

export default AddTask;