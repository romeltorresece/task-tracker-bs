import { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import Button from './Button';

const TaskDetails = () => {
    const [ loading, setLoading ] = useState(true);
    const [ task, setTask ] = useState({});
    // const [ error, setError ] = useState(null);
    
    const { id } = useParams();
    const navigate = useNavigate();
    const { pathname } = useLocation();

    useEffect(() => {
        const fetchTask = async () => {
            const res = await fetch(`http://localhost:5000/tasks/${id}`);
            const data = await res.json();

            if (res.status === 404) {
                navigate('/');
                // setError('Task Not Found');
            }

            setTask(data);
            setLoading(false);
        };
        fetchTask();
    }, [navigate, id]);

    // import { Navigate } from 'react-router-dom'
    // if (error) {
    //     return <Navigate to='/' />
    // }

    return loading ? (
        <p>Loading...</p>
    ) : (
    <div>
        <p>{pathname}</p>
        <h4>{task.text}</h4>
        <p>{task.day}</p>
        <Button 
            text='Go Back'
            onClick={() => navigate(-1)}
        />
    </div>
  );
};

export default TaskDetails;