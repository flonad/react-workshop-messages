import { MessageList, MessageForm } from "..";
import './MessageBox.css';

const MessageBox = () => (
  <div className="container">
    <div className="title">Messages</div>
    <MessageList />
    <MessageForm />
  </div>
);

export default MessageBox;
