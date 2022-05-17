import { array } from "prop-types";
import { Message } from "..";
import './MessageList.css';

const MessageList = ({ messages }) => (
    <div className="messageList">
      {messages.map((message, index) => <Message key={index} message={message} />)}
    </div>
);

MessageList.propTypes = {
  messages: array.isRequired
};

export default MessageList;
