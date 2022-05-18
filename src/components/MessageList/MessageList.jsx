import { useSelector } from "react-redux";
import { Message } from "..";
import { getMessages } from "../../selectors";
import './MessageList.css';

const MessageList = () => {
  const messages = useSelector(state => state.messages);

  return (
    <div className="messageList">
      {messages.map((message, index) => <Message key={index} message={message} />)}
    </div>
  );
};

export default MessageList;
