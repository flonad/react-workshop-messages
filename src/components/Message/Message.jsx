import { shape, string } from "prop-types";
import './Message.css';

const Message = ({ message }) => (
  <div className="message">
    {message.author} : {message.text}
  </div>
);

Message.propTypes = {
  message: shape({
    author: string.isRequired,
    text: string.isRequired
  }).isRequired
};

export default Message;
