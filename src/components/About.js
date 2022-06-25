import { Link } from 'react-router-dom';

const About = () => {
  return (
      <div>
        <p>Version 1.0.0</p>
        <Link className='btn btn-outline-info' to='/'>Go Back</Link>
      </div>
  );
};

export default About;