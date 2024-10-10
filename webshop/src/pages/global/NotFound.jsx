import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';



function NotFound() {

  useEffect(() => {
    // Add class to body when NotFound page is loaded
    document.body.classList.add('NotFound-body');

    // Remove class when component is unmounted or user navigates away
    return () => {
      document.body.classList.remove('NotFound-body');
    };
  }, []);


  return (
    <div className='NotFound'>
      <br />
      <img className='fourofour' src="404.png" alt="" />
      <br />
      <h4>Page Not Found</h4>
      <br />
      <h4>Go back to <Link to="/">Homepage</Link></h4>
    </div>
  );
}

export default NotFound;