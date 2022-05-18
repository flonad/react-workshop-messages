import { useState } from "react";
// import { addMessage } from "../../actions";
import { addMessage } from "../../reducers/messages";
import './MessageForm.css';
import { useDispatch } from "react-redux";

const MessageForm = () => {
  const [author, setAuthor] = useState("");
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleAuthorChange = e => {
    setAuthor(e.target.value);
  };

  const handleTextChange = e => {
    setText(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if(author !== "" && text !== "") {
      dispatch(addMessage({ author, text }));
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

export default MessageForm;
