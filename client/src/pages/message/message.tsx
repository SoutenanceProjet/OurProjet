import MessageRight from './messageRight/messageRight';
import MessageLeft from './messageLeft/messageLeft';

const message = () => {
  return (
    <>
      <div className="main">
        <div className="aside-message">
          <MessageLeft />
          <MessageRight />
        </div>
      </div>
    </>
  );
};

export default message;
