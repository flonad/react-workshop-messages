import { useState } from "react";
import { MessageList, MessageForm } from "..";
import './MessageBox.css';
import { MESSAGE_LIST } from "../../constants/messages";

const MessageBox = () => {
  const [messages, setMessages] = useState(MESSAGE_LIST);

  const handleMessageSubmit = (message) => {
    // Ici, c'est l'endroit où l'on ferait un appel au server
    // pour enregistrer le nouveau message puis on récupérerait la liste mise à jour
    setMessages([...messages, message]);
  };

  return (
    <div className="container">
      <div className="title">Messages</div>
      <MessageList messages={messages} />
      <MessageForm onMessageSubmit={handleMessageSubmit} />
    </div>
  );
}

export default MessageBox;
