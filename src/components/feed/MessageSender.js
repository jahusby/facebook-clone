import { Avatar, Input } from "@material-ui/core";
import React, { useState } from "react";
import "./MessageSender.css";

const MessageSender = () => {
  const [input, setInput] = useState("");
  const [image, setImage] = useState(null);

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = () => {
    console.log("Submitting");
  };

  return (
    <div className="messageSender">
      <div className="messageSender__top">
        <Avatar src="" />
        <form>
          <input
            type="text"
            className="messageSender__input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <Input
            type="file"
            className="messageSender__fileSelector"
            onChange={handleChange}
          />
          <button onClick={handleSubmit} type="submit">
            Hidden Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default MessageSender;
