import { Outlet } from 'react-router-dom';
import './messageRight.css';

function MessageRight() {
  return (
    <div className="w-full third">
      <Outlet />
    </div>
  );
}

export default MessageRight;
