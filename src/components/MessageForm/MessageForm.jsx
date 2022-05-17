import { useState } from "react";
import { func } from "prop-types";
import './MessageForm.css';

const MessageForm = ({ onMessageSubmit }) => {
  const [author, setAuthor] = useState("");
  const [text, setText] = useState("");

  const handleAuthorChange = e => {
    setAuthor(e.target.value);
  };

  const handleTextChange = e => {
    setText(e.target.value);
  };

  const handleSubmit = e => {
    // Éviter que le formulaire soit envoyé par le navigateur
    e.preventDefault();
    if(author !== "" && text !== "") {
      // Le composant MessageBox va pouvoir récupérer les informations
      onMessageSubmit({ author, text });
      setText("");
    }
  };

  return (
    <form className="messageForm" onSubmit={handleSubmit}>
      <input type="text" placeholder="Votre nom" value={author} onChange={handleAuthorChange} />
      <input type="text" placeholder="Votre message" value={text} onChange={handleTextChange} />
      <input type="submit" value="Valider" />
    </form>
  );
};

MessageForm.propTypes = {
  onMessageSubmit: func.isRequired
};

export default MessageForm;
